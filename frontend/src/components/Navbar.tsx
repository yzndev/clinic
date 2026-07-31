// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';

function Navbar() {
    return (
        <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* لوگو و نام کلینیک */}
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
                    <Activity size={28} className="text-blue-600" />
                    <span>کلینیک ارتوپدی فنی</span>
                </Link>

                {/* منوی سایت */}
                <nav className="flex items-center gap-8 text-gray-600 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition">خانه</Link>
                    <Link to="/doctors" className="hover:text-blue-600 transition">پزشکان</Link>
                    <Link to="/articles" className="hover:text-blue-600 transition">مقالات</Link>
                    <Link to="/appointment" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm hover:shadow-md">
                        رزرو نوبت
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;