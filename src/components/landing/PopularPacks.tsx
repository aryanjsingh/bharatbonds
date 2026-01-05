export default function PopularPacks() {
    return (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Tokenized Assets</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Trending On-Chain Bonds</h2>
                    <p className="text-[#a3b99d] mt-4 max-w-xl">Limited supply Real World Assets (RWAs) available for minting.</p>
                </div>
                <a className="text-white hover:text-primary font-bold flex items-center gap-2 transition-colors" href="/marketplace">
                    View All Packs <span className="material-symbols-outlined">arrow_forward</span>
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glass-card hover:bg-[#253421] border border-[#2c3928] hover:border-primary/30 rounded-2xl p-6 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-[100px] text-primary">rocket_launch</span>
                    </div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="bg-[#2c3928] text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">The Starter Pack</h4>
                    <p className="text-sm text-[#a3b99d] mb-6 min-h-[40px]">Perfect for your first investment. Low risk, steady returns for short term goals.</p>
                    <div className="flex items-end gap-6 mb-6">
                        <div>
                            <p className="text-xs text-[#a3b99d] mb-1">Yield</p>
                            <p className="text-3xl font-bold text-primary">7.1%</p>
                        </div>
                        <div className="h-10 w-px bg-[#2c3928]"></div>
                        <div>
                            <p className="text-xs text-[#a3b99d] mb-1">Duration</p>
                            <p className="text-xl font-bold text-white">3 Yrs</p>
                        </div>
                    </div>
                    <div className="pt-6 border-t border-[#2c3928]">
                        <button className="w-full bg-white text-black hover:bg-primary hover:text-black font-bold text-sm py-3 rounded-full transition-colors cursor-pointer">
                            View Details
                        </button>
                    </div>
                </div>
                <div className="glass-card hover:bg-[#253421] border border-[#2c3928] hover:border-primary/30 rounded-2xl p-6 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-[100px] text-[#a3b99d]">account_balance</span>
                    </div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="bg-[#2c3928] text-[#a3b99d] text-xs font-bold px-3 py-1 rounded-full">Long Term</div>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Long-Term Giant</h4>
                    <p className="text-sm text-[#a3b99d] mb-6 min-h-[40px]">Lock in high rates for a decade. Ideal for future higher education goals.</p>
                    <div className="flex items-end gap-6 mb-6">
                        <div>
                            <p className="text-xs text-[#a3b99d] mb-1">Yield</p>
                            <p className="text-3xl font-bold text-primary">7.5%</p>
                        </div>
                        <div className="h-10 w-px bg-[#2c3928]"></div>
                        <div>
                            <p className="text-xs text-[#a3b99d] mb-1">Duration</p>
                            <p className="text-xl font-bold text-white">10 Yrs</p>
                        </div>
                    </div>
                    <div className="pt-6 border-t border-[#2c3928]">
                        <button className="w-full bg-[#2c3928] text-white hover:bg-white hover:text-black font-bold text-sm py-3 rounded-full transition-colors cursor-pointer">
                            View Details
                        </button>
                    </div>
                </div>
                <div className="rounded-2xl p-6 border border-dashed border-[#2c3928] flex flex-col items-center justify-center text-center gap-4 bg-transparent hover:bg-[#2c3928]/20 transition-colors cursor-pointer group">
                    <div className="size-16 rounded-full bg-[#1e2b1a] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl text-[#a3b99d]">add</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Create Your Own</h4>
                    <p className="text-sm text-[#a3b99d]">Browse individual G-Secs, SDLs, and T-Bills to build a custom portfolio.</p>
                </div>
            </div>
        </section>
    );
}
