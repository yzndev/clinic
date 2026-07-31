import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';
import type { Service } from '../types';
import {Link} from "react-router-dom";
const fetchServices = async (): Promise<Service[]> => {
    const response = await api.get('/services');
    return response.data;
};

function Home() {
    // استفاده از React Query برای گرفتن دیتا
    const { data: services, isLoading, isError } = useQuery({
        queryKey: ['services'],
        queryFn: fetchServices,
    });

    if (isLoading) return <div className="text-center mt-10 text-xl">در حال بارگذاری...</div>;
    if (isError) return <div className="text-center mt-10 text-xl text-red-500">خطا در دریافت اطلاعات</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8" dir="rtl">
            <header className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-blue-600">کلینیک ارتوپدی فنی</h1>
                <p className="text-gray-600 mt-2">ارائه بهترین خدمات ارتوپدی</p>
            </header>

            <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {services?.map((service) => (
                    <Link to={`/services/${service.slug}`} key={service.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition block">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h2>
                        <p className="text-gray-600">{service.description}</p>
                    </Link>
                ))}
            </main>
        </div>
    );
}

export default Home;