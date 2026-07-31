// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';
import type { Service } from '../types';
import { ArrowLeft, ShieldCheck, Stethoscope, Clock, Activity } from 'lucide-react';
const fetchServices = async (): Promise<Service[]> => {
    const response = await api.get('/services');
    return response.data;
};

function Home() {
    const { data: services, isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: fetchServices,
    });

    if (isLoading) return <div className="text-center mt-20 text-xl text-gray-500">در حال بارگذاری...</div>;

    return (
        <div>
            {/* بخش Hero (بنر اصلی) */}
            <section className="bg-gradient-to-l from-blue-50 to-white py-20 border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            سلامتی شما، <br /> تخصص ماست.
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            کلینیک ارتوپدی فنی با بهره‌گیری از جدیدترین تکنولوژی‌های روز دنیا و کادر پزشکی متخصص، خدمات ارتوپدی را در بالاترین سطح کیفیت به شما عزیزان ارائه می‌دهد.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/appointment" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                                رزرو نوبت آنلاین
                            </Link>
                            <Link to="/doctors" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition">
                                مشاهده پزشکان
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        {/* عکسپلیس‌هولدر برای بنر - بعدا میتونید عکس واقعی بذارید */}
                        <div className="bg-blue-100 rounded-2xl h-80 w-full flex items-center justify-center text-blue-300">
                            <Stethoscope size={120} />
                        </div>
                    </div>
                </div>
            </section>

            {/* بخش ویژگی‌ها */}
            <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldCheck />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800">تضمین کیفیت</h3>
                    <p className="text-gray-500 text-sm mt-2">استفاده از بهترین و باکیفیت‌ترین متریال‌های ارتوپدی</p>
                </div>
                <div className="p-6">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Stethoscope />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800">پزشکان متخصص</h3>
                    <p className="text-gray-500 text-sm mt-2">تیم مجرب و باتجربه در زمینه جراحی و فنی ارتوپدی</p>
                </div>
                <div className="p-6">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800">پاسخگویی سریع</h3>
                    <p className="text-gray-500 text-sm mt-2">سیستم نوبت‌دهی آنلاین برای صرفه‌جویی در زمان شما</p>
                </div>
            </section>

            {/* بخش خدمات */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">خدمات تخصصی ما</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services?.map((service) => (
                        <Link
                            to={`/services/${service.slug}`}
                            key={service.id}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 block group"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                {/* یک آیکون ساده برای هر خدمت */}
                                <Activity size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed mb-4">{service.description}</p>
                            <span className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                                ادامه مطلب <ArrowLeft size={16} />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;