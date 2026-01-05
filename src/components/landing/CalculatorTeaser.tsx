export default function CalculatorTeaser() {
    return (
        <div className="lg:col-span-7 bg-[#1e2b1a] border border-[#2c3928] rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                        <span className="material-symbols-outlined">calculate</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">"What If" Calculator</h3>
                </div>
                <p className="text-[#a3b99d] mb-8">See exactly how much more you earn with Bonds compared to a standard bank savings account.</p>
                <div className="bg-[#142210] p-6 rounded-2xl border border-[#2c3928]">
                    <div className="flex justify-between items-end mb-4">
                        <label className="text-xs text-[#a3b99d] font-medium uppercase">Investment Amount</label>
                        <span className="text-2xl font-bold text-white">₹10,000</span>
                    </div>
                    <input className="w-full h-2 bg-[#2c3928] rounded-lg appearance-none cursor-pointer mb-8" max="100000" min="1000" step="1000" type="range" defaultValue="10000" />
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-24 text-sm font-bold text-white">Bonds</div>
                            <div className="flex-1 bg-[#2c3928] rounded-full h-8 relative overflow-hidden">
                                <div className="bg-primary h-full rounded-full flex items-center px-3 text-[10px] font-bold text-black" style={{ width: "85%" }}>
                                    ₹10,740
                                </div>
                            </div>
                            <div className="text-primary font-bold text-sm">+7.4%</div>
                        </div>
                        <div className="flex items-center gap-4 opacity-60">
                            <div className="w-24 text-sm font-medium text-[#a3b99d]">Bank</div>
                            <div className="flex-1 bg-[#2c3928] rounded-full h-8 relative overflow-hidden">
                                <div className="bg-[#a3b99d] h-full rounded-full flex items-center px-3 text-[10px] font-bold text-[#142210]" style={{ width: "45%" }}>
                                    ₹10,300
                                </div>
                            </div>
                            <div className="text-[#a3b99d] font-bold text-sm">+3.0%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
