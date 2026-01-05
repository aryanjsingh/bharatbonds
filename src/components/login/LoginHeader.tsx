import Link from "next/link";

export default function LoginHeader() {
    return (
        <header className="relative z-50 px-6 lg:px-10 py-6">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 text-white cursor-pointer group">
                    <div className="size-8 text-primary group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined !text-[32px] font-bold">savings</span>
                    </div>
                    <h2 className="text-white text-xl font-bold tracking-tight">BharatBonds</h2>
                </Link>
                <div className="hidden md:block">
                    <p className="text-sm text-[#a3b99d]">
                        Need help? <a className="text-white hover:text-primary transition-colors font-medium" href="#">Contact Support</a>
                    </p>
                </div>
            </div>
        </header>
    );
}
