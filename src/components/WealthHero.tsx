import { getCurrentUser } from "@/data/users";

export default function WealthHero() {
    const user = getCurrentUser();

    return (
        <section className="relative overflow-hidden rounded-2xl bg-[#1e2b1a] border border-[#2c3928] p-8 group">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[#a3b99d] mb-1">
                        <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                        <span className="text-sm font-medium uppercase tracking-wider">Total Wealth</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight flex items-baseline gap-1">
                        <span className="text-3xl md:text-4xl font-bold text-[#a3b99d]">₹</span>{user.investedBalance.toLocaleString('en-IN')}
                    </h1>
                    <div className="flex items-center gap-3 mt-2">
                        <span className="inline-flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20 animate-pulse">
                            <span className="material-symbols-outlined text-[14px]">trending_up</span>
                            Live: +₹12.40 today
                        </span>
                        <span className="text-[#a3b99d] text-sm">Weighted Avg Yield: <span className="text-white font-bold">7.4%</span></span>
                    </div>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none h-12 px-6 bg-[#2c3928] hover:bg-[#3a4b35] text-white rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">history</span>
                        History
                    </button>
                    <button className="flex-1 md:flex-none h-12 px-6 bg-primary hover:bg-primary-dark text-black rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(70,236,19,0.3)] hover:shadow-[0_0_25px_rgba(70,236,19,0.5)] flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        Add Funds
                    </button>
                </div>
            </div>
        </section>
    );
}
