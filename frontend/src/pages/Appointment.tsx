// src/pages/Appointment.tsx
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import api from '../api/axios';
import type { Appointment } from '../types';

// تابع ارسال دیتا به بک‌اند
const createAppointment = async (data: Appointment) => {
    const response = await api.post('/appointments', data);
    return response.data;
};

function  AppointmentPage() {
    // مدیریت استیت‌های فرم
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    // استفاده از useMutation برای POST کردن دیتا
    const mutation = useMutation({
        mutationFn: createAppointment,
        onSuccess: () => {
            alert('نوبت شما با موفقیت ثبت شد!');
            // پاک کردن فرم بعد از موفقیت
            setFullName('');
            setPhoneNumber('');
            setMessage('');
        },
        onError: (error) => {
            alert('خطایی رخ داده است. لطفاً دوباره تلاش کنید.');
            console.error(error);
        }
    });

    // تابع هندل کردن سابمیت فرم
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ full_name: fullName, phone_number: phoneNumber, message });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center" dir="rtl">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">فرم رزرو نوبت</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">نام و نام خانوادگی</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">شماره تماس</label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">توضیحات (اختیاری)</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                            rows={3}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        {mutation.isPending ? 'در حال ارسال...' : 'ثبت نوبت'}
                    </button>

                    {mutation.isError && (
                        <p className="text-red-500 text-sm text-center">متاسفانه خطایی رخ داد.</p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default  AppointmentPage;