import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    کلینیک ارتوپدی فنی
                </Link>

                <nav className="space-x-6 text-gray-600 font-medium">
                    <Link to="/" className="hover:text-blue-600 transition">خانه</Link>
                    <Link to="/doctors" className="hover:text-blue-600 transition">پزشکان</Link>
                    <Link to="/articles" className="hover:text-blue-600 transition">مقالات</Link>
                    <Link to="/appointment" className="hover:text-blue-600 transition">رزرو نوبت</Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;