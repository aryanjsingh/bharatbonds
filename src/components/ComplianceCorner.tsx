export default function ComplianceCorner() {
    return (
        <div className="bg-[#1e2b1a] border border-[#2c3928] rounded-2xl p-6 flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-[#a3b99d] uppercase tracking-wider mb-4 border-b border-[#2c3928] pb-2">Compliance Corner</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-[18px]">verified</span>
                        </div>
                        <div>
                            <p className="text-sm text-white font-medium">KYC Status</p>
                            <p className="text-xs text-primary">Verified</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-[#2c3928] flex items-center justify-center text-white group-hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[18px]">calculate</span>
                        </div>
                        <div>
                            <p className="text-sm text-white font-medium group-hover:text-primary transition-colors">Tax Estimator</p>
                            <p className="text-xs text-[#a3b99d]">FY 2024-25</p>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-[#a3b99d] text-[18px]">chevron_right</span>
                </div>
                <div className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-[#2c3928] flex items-center justify-center text-white group-hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[18px]">download</span>
                        </div>
                        <div>
                            <p className="text-sm text-white font-medium group-hover:text-primary transition-colors">Certificate</p>
                            <p className="text-xs text-[#a3b99d]">Download PDF</p>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-[#a3b99d] text-[18px]">chevron_right</span>
                </div>
            </div>
            <div className="mt-auto pt-6">
                <button className="w-full py-2.5 rounded-lg border border-[#2c3928] hover:border-white/20 text-[#a3b99d] hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">history</span>
                    View Full Transaction History
                </button>
            </div>
        </div>
    );
}
