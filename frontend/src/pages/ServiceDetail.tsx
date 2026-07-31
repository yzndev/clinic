// src/pages/ServiceDetail.tsx
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';
import type { Service } from '../types';

const fetchService = async (slug: string): Promise<Service> => {
    const response = await api.get(`/services/${slug}`);
    return response.data;
};

function ServiceDetail() {
    // گرفتن slug از روی URL (مثلا: /services/custom-medical-shoes)
    const { slug } = useParams<{ slug: string }>();

    const { data: service, isLoading } = useQuery({
        queryKey: ['service', slug],
        queryFn: () => fetchService(slug as string),
        enabled: !!slug, // فقط وقتی slug وجود داشت درخواست بفرست
    });

    if (isLoading) return <div className="text-center mt-10 text-xl">در حال بارگذاری...</div>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <Link to="/" className="text-blue-600 mb-6 inline-block">&larr; بازگشت به خانه</Link>

            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-extrabold text-blue-600 mb-4">{service?.title}</h1>
                <p className="text-gray-600 text-lg leading-relaxed">{service?.description}</p>

                <div className="mt-8 p-4 bg-blue-50 rounded-md border border-blue-100">
                    <p className="text-blue-800">برای دریافت این خدمت، همین الان نوبت خود را رزرو کنید!</p>
                    <Link to="/appointment" className="mt-3 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                        رزرو نوبت
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetail;