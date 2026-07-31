// src/pages/Articles.tsx
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';
import type { Article } from '../types';

const fetchArticles = async (): Promise<Article[]> => {
    const response = await api.get('/articles');
    return response.data;
};

function Articles() {
    const { data: articles, isLoading } = useQuery({
        queryKey: ['articles'],
        queryFn: fetchArticles,
    });

    if (isLoading) return <div className="text-center mt-10 text-xl">در حال بارگذاری مقالات...</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">مقالات و اخبار کلینیک</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles?.map((article) => (
                    <Link to={`/articles/${article.slug}`} key={article.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition block">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h2>
                        {/* نمایش بخشی از متن مقاله */}
                        <p className="text-gray-600 text-sm line-clamp-3">{article.body}</p>
                        <span className="text-blue-600 mt-4 inline-block font-medium">ادامه مطلب...</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Articles;