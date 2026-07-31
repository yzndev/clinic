// src/pages/ArticleDetail.tsx
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';
import type { Article } from '../types';

const fetchArticle = async (slug: string): Promise<Article> => {
    const response = await api.get(`/articles/${slug}`);
    return response.data;
};

function ArticleDetail() {
    const { slug } = useParams<{ slug: string }>();

    const { data: article, isLoading } = useQuery({
        queryKey: ['article', slug],
        queryFn: () => fetchArticle(slug as string),
        enabled: !!slug,
    });

    if (isLoading) return <div className="text-center mt-10 text-xl">در حال بارگذاری...</div>;

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <Link to="/articles" className="text-blue-600 mb-6 inline-block">&larr; بازگشت به لیست مقالات</Link>

            <article className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{article?.title}</h1>

                <div className="text-gray-700 leading-loose text-lg whitespace-pre-line">
                    {article?.body}
                </div>
            </article>
        </div>
    );
}

export default ArticleDetail;