export default function MarketplaceHero() {
    return (
        <div className="@container mt-8">
            <div
                className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl md:rounded-[3rem] items-start justify-center px-6 py-10 md:px-16 md:py-16 relative overflow-hidden group"
                style={{ backgroundImage: "linear-gradient(135deg, rgba(19, 24, 17, 0.85) 0%, rgba(19, 24, 17, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrHAqvOTl8OFao_I8CledXLIX6ObR0LXIOt7Qf_nUqh9RMJ6byAiP435EUEN9Nim8toM4O5-AmnPI6SZlLnno4H8-VNsiMpePx77e2HS7S0HD0pqGKSI_T2t4BB4BUyWd6gZ0gymNGoO9gxH5tdoSHh72Tp4brXwMOMVqznc1p7rd08q5B42CYKprpYBZ5bnZmm-Np1ErRIqQJveD_lpU3Qd2ywil7oOR9jYbbrBMYG7SRmdNgv18B1T2Gq9E7F05RHLh923jQdkFt')" }}
            >
                {/* Decorative Circle */}
                <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10 flex flex-col gap-4 max-w-2xl text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 w-fit">
                        <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Govt of India Backed</span>
                    </div>
                    <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                        Grow your pocket money with <span className="text-primary">Government Bonds</span>
                    </h1>
                    <p className="text-slate-200 text-lg md:text-xl font-medium max-w-lg mt-2">
                        Safe, secure, and government-backed investing starting at just <span className="text-white font-bold">₹100</span>. Perfect for your semester goals.
                    </p>
                </div>
                <div className="relative z-10 w-full max-w-md mt-4">
                    <div className="flex w-full items-center rounded-full bg-white dark:bg-card-dark p-2 pl-6 shadow-xl focus-within:border-primary transition-colors">
                        <span className="material-symbols-outlined text-text-secondary">search</span>
                        <input
                            className="w-full bg-transparent px-4 py-2 text-slate-900 dark:text-white focus:outline-none "
                            placeholder="Try 'Karnataka SDL' or '91 Day T-Bill'"
                        />
                        <button className="bg-primary hover:bg-primary/90 text-[#131811] px-6 py-3 rounded-full font-bold transition-transform active:scale-95">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
