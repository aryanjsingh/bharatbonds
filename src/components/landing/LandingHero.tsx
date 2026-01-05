export default function LandingHero() {
    return (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                    <span className="text-primary text-xs font-bold uppercase tracking-wide">100% Sovereign Backed</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                    Grow your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">Pocket Money</span> <br />
                    into Wealth.
                </h1>
                <p className="text-lg text-[#a3b99d] max-w-lg leading-relaxed">
                    Skip the savings account. Invest in Government Bonds with as little as <span className="text-white font-bold">₹100</span>. Safe, secure, and built for Indian students.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <button className="h-14 px-8 bg-primary hover:bg-primary-dark text-black rounded-full font-bold text-base transition-all shadow-[0_0_20px_rgba(70,236,19,0.3)] hover:shadow-[0_0_30px_rgba(70,236,19,0.5)] flex items-center justify-center gap-2 cursor-pointer">
                        Start Investing
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="h-14 px-8 bg-transparent border border-[#2c3928] hover:border-white text-white rounded-full font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <span className="material-symbols-outlined">play_circle</span>
                        How it works
                    </button>
                </div>
                <div className="flex items-center gap-4 mt-6 text-sm text-[#a3b99d]">
                    <div className="flex -space-x-3">
                        <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#142210]"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#142210]"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#142210]"></div>
                    </div>
                    <p>Trusted by <span className="text-white font-bold">10,000+</span> students across India</p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-30"></div>
                <div className="relative z-10 transform transition-transform duration-500 hover:scale-[1.02]">
                    <div className="bg-[#1e2b1a] border border-[#2c3928] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <p className="text-[#a3b99d] text-sm font-medium uppercase tracking-wider mb-2">Total Wealth</p>
                                <h3 className="text-5xl font-black text-white flex items-baseline gap-1">
                                    <span className="text-3xl text-[#a3b99d]">₹</span>24,500
                                </h3>
                                <div className="inline-flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold mt-3">
                                    <span className="material-symbols-outlined text-[14px]">trending_up</span>
                                    +12.4% Annualized
                                </div>
                            </div>
                            <div className="size-12 rounded-full bg-[#2c3928] flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                            </div>
                        </div>
                        <div className="h-32 flex items-end justify-between gap-2 opacity-80">
                            <div className="w-full bg-[#2c3928] rounded-t-lg h-[40%]"></div>
                            <div className="w-full bg-[#2c3928] rounded-t-lg h-[55%]"></div>
                            <div className="w-full bg-[#2c3928] rounded-t-lg h-[45%]"></div>
                            <div className="w-full bg-[#2c3928] rounded-t-lg h-[70%]"></div>
                            <div className="w-full bg-gradient-to-t from-primary/50 to-primary rounded-t-lg h-[90%] relative group cursor-pointer">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Current
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -right-4 bg-[#142210] border border-[#2c3928] p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: "3s" }}>
                        <div className="size-10 rounded-full bg-green-900/50 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined">payments</span>
                        </div>
                        <div>
                            <p className="text-xs text-[#a3b99d]">Next Payout</p>
                            <p className="text-white font-bold">₹840 Credit</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
