export default function SovereignMix() {
    return (
        <div className="bg-[#1e2b1a] border border-[#2c3928] rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-white font-bold text-lg">RWA Allocation</h3>
                    <p className="text-[#a3b99d] text-xs mt-1">Portfolio Split</p>
                </div>
                <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline cursor-pointer">
                    <span className="material-symbols-outlined text-[14px]">link</span>
                    Verify On-Chain
                </button>
            </div>
            <div className="flex items-center gap-6 mt-2">
                {/* CSS Only Donut Chart Representation */}
                <div
                    className="relative size-32 rounded-full border-[12px] border-[#2c3928] flex items-center justify-center shrink-0"
                    style={{ background: "conic-gradient(#46ec13 0% 60%, #a3b99d 60% 90%, #ffffff 90% 100%)", borderRadius: "50%" }}
                >
                    <div className="absolute inset-0 m-auto size-20 bg-[#1e2b1a] rounded-full flex items-center justify-center flex-col z-10">
                        <span className="material-symbols-outlined text-primary text-2xl">token</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="size-2.5 rounded-full bg-primary"></div>
                            <span className="text-sm text-white">Govt Tokens</span>
                        </div>
                        <span className="text-sm font-bold text-white">60%</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="size-2.5 rounded-full bg-[#a3b99d]"></div>
                            <span className="text-sm text-white">State Tokens</span>
                        </div>
                        <span className="text-sm font-bold text-white">30%</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="size-2.5 rounded-full bg-white"></div>
                            <span className="text-sm text-white">Stablecoins</span>
                        </div>
                        <span className="text-sm font-bold text-white">10%</span>
                    </div>
                </div>
            </div>
            <div className="mt-2 bg-[#2c3928]/50 p-3 rounded-xl flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <p className="text-xs text-[#a3b99d]">100% Backed. Your tokens represent direct ownership of Govt Bonds.</p>
            </div>
        </div>
    );
}
