// src/pages/Doctors.tsx
import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';
import type { Doctor } from '../types';
import { User } from 'lucide-react';

const fetchDoctors = async (): Promise<Doctor[]> => {
    const response = await api.get('/doctors');
    return response.data;
};

function Doctors() {
    const { data: doctors, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: fetchDoctors,
    });

    if (isLoading) return <div className="text-center mt-20 text-xl text-gray-500">در حال بارگذاری پزشکان...</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">تیم متخصصین ما</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">با کادری مجرب و متخصص در حوزه ارتوپدی، بهترین مراقبت‌ها را به شما ارائه می‌دهیم.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {doctors?.map((doctor) => (
                    <div key={doctor.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        {/* آواتار دکتر */}
                        <div className="w-24 h-24 bg-blue-50 rounded-full mx-auto mb-6 flex items-center justify-center text-blue-600">
                            <User size={40} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">{doctor.name}</h2>
                        <p className="text-blue-600 font-medium mt-1 text-sm">{doctor.specialty}</p>
                        <div className="w-12 h-1 bg-blue-100 rounded-full mx-auto my-4"></div>
                        <p className="text-gray-500 text-sm leading-relaxed">{doctor.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Doctors;