export default function PayoutTimeline() {
    return (
        <div className="bg-[#1e2b1a] border border-[#2c3928] rounded-2xl p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-bold text-lg">Next Payout</h3>
                <label className="inline-flex items-center cursor-pointer gap-2">
                    <span className="text-xs font-medium text-[#a3b99d]">Auto-Reinvest</span>
                    <div className="relative">
                        <input defaultChecked className="sr-only peer" type="checkbox" value="" />
                        <div className="w-9 h-5 bg-[#2c3928] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                    </div>
                </label>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-6 relative pl-4 border-l-2 border-[#2c3928]">
                {/* Timeline Item 1 (Active/Next) */}
                <div className="relative">
                    <div className="absolute -left-[23px] top-1 size-4 rounded-full bg-primary border-4 border-[#1e2b1a]"></div>
                    <div className="bg-[#2c3928] p-3 rounded-lg flex justify-between items-center group cursor-pointer hover:bg-[#364632] transition-colors">
                        <div>
                            <p className="text-xs text-[#a3b99d]">Oct 15, 2023</p>
                            <p className="text-sm font-bold text-white">₹840 Coupon Payment</p>
                        </div>
                        <span className="material-symbols-outlined text-primary">arrow_forward</span>
                    </div>
                </div>
                {/* Timeline Item 2 */}
                <div className="relative opacity-60">
                    <div className="absolute -left-[23px] top-1 size-4 rounded-full bg-[#2c3928] border-4 border-[#1e2b1a]"></div>
                    <div className="pl-2">
                        <p className="text-xs text-[#a3b99d]">Apr 15, 2024</p>
                        <p className="text-sm font-medium text-white">₹840 Coupon Payment</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[#2c3928]">
                <p className="text-xs text-[#a3b99d] text-center">Next payout in <span className="text-white font-bold">14 days</span></p>
            </div>
        </div>
    );
}
