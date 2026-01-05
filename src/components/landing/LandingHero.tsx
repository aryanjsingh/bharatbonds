export default function LandingHero() {
    return (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
                    <span className="material-symbols-outlined text-primary text-sm">token</span>
                    <span className="text-primary text-xs font-bold uppercase tracking-wide">100% On-Chain Assets</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                    The Safest <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">Crypto Yield</span> <br />
                    on the Planet.
                </h1>
                <p className="text-lg text-[#a3b99d] max-w-lg leading-relaxed">
                    Mint <strong>Tokenized Government Bonds (RWAs)</strong> directly on-chain. Earn stable 7-8% APY backed by the Sovereign Guarantee of India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <button className="h-14 px-8 bg-primary hover:bg-primary-dark text-black rounded-full font-bold text-base transition-all shadow-[0_0_20px_rgba(70,236,19,0.3)] hover:shadow-[0_0_30px_rgba(70,236,19,0.5)] flex items-center justify-center gap-2 cursor-pointer">
                        Start Minting
                        <span className="material-symbols-outlined">token</span>
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
            <div className="relative group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/10 rounded-full blur-[120px] opacity-50 animate-pulse"></div>

                {/* Main Animation/Image Container */}
                <div className="relative z-10 transform transition-all duration-700 hover:scale-[1.05] hover:rotate-1">
                    <img
                        src="/hero-animation.png"
                        alt="BharatBonds Animation"
                        className="w-full h-auto drop-shadow-[0_0_50px_rgba(70,236,19,0.2)] rounded-3xl"
                    />

                    {/* Overlaying the Wealth Card as a floating element for depth */}
                    <div className="absolute -bottom-10 -left-10 bg-[#1e2b1a]/90 backdrop-blur-xl border border-[#2c3928] rounded-2xl p-6 shadow-2xl hidden md:block animate-float">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">payments</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#a3b99d] font-bold uppercase">Recent Mint</p>
                                <p className="text-white font-bold">140.5 MAH-24</p>
                            </div>
                        </div>
                        <div className="w-48 h-1 bg-[#2c3928] rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-2/3"></div>
                        </div>
                    </div>

                    <div className="absolute -top-10 -right-10 bg-[#1e2b1a]/90 backdrop-blur-xl border border-[#2c3928] rounded-2xl p-6 shadow-2xl hidden md:block animate-float" style={{ animationDelay: "1s" }}>
                        <div className="flex items-center gap-3">
                            <div className="size-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <span className="material-symbols-outlined">verified</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#a3b99d] font-bold uppercase">On-Chain</p>
                                <p className="text-white font-bold">Sepolia Verified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
