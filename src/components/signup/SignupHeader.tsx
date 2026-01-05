import Link from "next/link";

export default function SignupHeader() {
    return (
        <header className="absolute top-0 z-50 w-full px-6 lg:px-10 py-6">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 text-white cursor-pointer group">
                    <div className="size-8 text-primary group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined !text-[32px] font-bold">savings</span>
                    </div>
                    <h2 className="text-white text-xl font-bold tracking-tight">BharatBonds</h2>
                </Link>
                <a className="hidden sm:flex text-sm font-medium text-[#a3b99d] hover:text-white transition-colors gap-1 items-center" href="#">
                    Need help?
                </a>
            </div>
        </header>
    );
}
