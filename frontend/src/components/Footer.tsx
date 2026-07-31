function Footer() {
    return (
        <footer className="bg-gray-800 text-white mt-10">
            <div className="max-w-6xl mx-auto px-4 py-8 text-center">
                <p className="text-lg font-semibold">کلینیک ارتوپدی فنی</p>
                <p className="text-gray-400 mt-2 text-sm">
                    ارائه دهنده خدمات تخصصی ارتوپدی، ساخت کفش طبی و پروتز
                </p>
                <p className="text-gray-500 mt-4 text-xs">
                    © {new Date().getFullYear()} تمامی حقوق محفوظ است.
                </p>
            </div>
        </footer>
    );
}

export default Footer;