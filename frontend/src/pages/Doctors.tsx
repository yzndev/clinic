// src/pages/Doctors.tsx
import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';
import type { Doctor } from '../types';

const fetchDoctors = async (): Promise<Doctor[]> => {
    const response = await api.get('/doctors');
    return response.data;
};

function Doctors() {
    const { data: doctors, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: fetchDoctors,
    });

    if (isLoading) return <div className="text-center mt-10 text-xl">در حال بارگذاری پزشکان...</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">متخصصین کلینیک</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {doctors?.map((doctor) => (
                    <div key={doctor.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                        {/* عکس پزشک را بعداً اضافه می‌کنیم، فعلاً یک دایره نمایش می‌دهیم */}
                        <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600 text-3xl font-bold">
                            {doctor.name.charAt(0)}
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">{doctor.name}</h2>
                        <p className="text-blue-600 font-medium mt-1">{doctor.specialty}</p>
                        <p className="text-gray-500 text-sm mt-3">{doctor.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Doctors;