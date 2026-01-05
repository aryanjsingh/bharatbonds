export default function Marketplace() {
    return (
        <div>
            <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="text-xl font-bold text-white">Bharat Marketplace</h3>
                <a className="text-sm text-primary hover:underline font-medium" href="#">View All Packs</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pack 1 */}
                <div className="bg-[#1e2b1a] hover:bg-[#253421] border border-[#2c3928] hover:border-primary/30 rounded-2xl p-5 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-[80px] text-primary">rocket_launch</span>
                    </div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-[#2c3928] text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>
                        <span className="material-symbols-outlined text-[#a3b99d]">bookmark_border</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">The Starter Pack</h4>
                    <p className="text-sm text-[#a3b99d] mb-4">Perfect for your first investment. Low risk, steady returns.</p>
                    <div className="flex items-end gap-4 mb-5">
                        <div>
                            <p className="text-xs text-[#a3b99d]">Yield</p>
                            <p className="text-2xl font-bold text-primary">7.1%</p>
                        </div>
                        <div className="h-8 w-px bg-[#2c3928]"></div>
                        <div>
                            <p className="text-xs text-[#a3b99d]">Duration</p>
                            <p className="text-lg font-bold text-white">3 Yrs</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-[#2c3928]">
                        <span className="text-xs font-medium text-white bg-white/10 px-2 py-1 rounded">Invest from ₹100</span>
                        <button className="bg-white text-black hover:bg-primary hover:text-black font-bold text-sm px-4 py-2 rounded-full transition-colors">
                            Invest Now
                        </button>
                    </div>
                </div>
                {/* Pack 2 */}
                <div className="bg-[#1e2b1a] hover:bg-[#253421] border border-[#2c3928] hover:border-primary/30 rounded-2xl p-5 transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-[80px] text-[#a3b99d]">account_balance</span>
                    </div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-[#2c3928] text-[#a3b99d] text-xs font-bold px-3 py-1 rounded-full">Long Term</div>
                        <span className="material-symbols-outlined text-[#a3b99d]">bookmark_border</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">The Long-Term Giant</h4>
                    <p className="text-sm text-[#a3b99d] mb-4">Lock in high rates for a decade. Ideal for future goals.</p>
                    <div className="flex items-end gap-4 mb-5">
                        <div>
                            <p className="text-xs text-[#a3b99d]">Yield</p>
                            <p className="text-2xl font-bold text-primary">7.5%</p>
                        </div>
                        <div className="h-8 w-px bg-[#2c3928]"></div>
                        <div>
                            <p className="text-xs text-[#a3b99d]">Duration</p>
                            <p className="text-lg font-bold text-white">10 Yrs</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-[#2c3928]">
                        <span className="text-xs font-medium text-white bg-white/10 px-2 py-1 rounded">Invest from ₹500</span>
                        <button className="bg-[#2c3928] text-white hover:bg-white hover:text-black font-bold text-sm px-4 py-2 rounded-full transition-colors">
                            Invest Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
