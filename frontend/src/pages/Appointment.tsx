// src/pages/Appointment.tsx
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import api from '../api/axios';
import type { Appointment } from '../types';
import { User, Phone, MessageSquare, CalendarCheck } from 'lucide-react';

const createAppointment = async (data: Appointment) => {
    const response = await api.post('/appointments', data);
    return response.data;
};

function AppointmentPage() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const mutation = useMutation({
        mutationFn: createAppointment,
        onSuccess: () => {
            alert('نوبت شما با موفقیت ثبت شد! به زودی با شما تماس خواهیم گرفت.');
            setFullName('');
            setPhoneNumber('');
            setMessage('');
        },
        onError: () => {
            alert('خطایی رخ داده است. لطفاً دوباره تلاش کنید.');
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ full_name: fullName, phone_number: phoneNumber, message });
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-16">
            <div className="text-center mb-10">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                    <CalendarCheck size={32} />
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900">رزرو نوبت آنلاین</h1>
                <p className="text-gray-500 mt-2">فرم زیر را پر کنید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند.</p>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-50">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">نام و نام خانوادگی</label>
                        <div className="relative">
                            <User className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                placeholder="مثلا: علی رضایی"
                                className="w-full pr-10 pl-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">شماره تماس</label>
                        <div className="relative">
                            <Phone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                placeholder="09123456789"
                                className="w-full pr-10 pl-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">توضیحات (اختیاری)</label>
                        <div className="relative">
                            <MessageSquare className="absolute right-3 top-4 text-gray-400" size={20} />
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="مشکل یا خدمت مورد نیاز خود را شرح دهید..."
                                className="w-full pr-10 pl-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition min-h-[100px]"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
                    >
                        {mutation.isPending ? 'در حال ارسال...' : 'ثبت درخواست نوبت'}
                    </button>

                    {mutation.isError && (
                        <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">متاسفانه خطایی رخ داد. لطفاً مجدداً تلاش کنید.</p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default AppointmentPage;