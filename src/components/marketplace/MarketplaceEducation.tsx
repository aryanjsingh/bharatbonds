export default function MarketplaceEducation() {
    return (
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-[2rem] bg-[#1e271c] border border-[#2c3928] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-[50px]"></div>
                <h3 className="text-2xl font-bold text-white mb-4 z-10">New to Bonds?</h3>
                <p className="text-text-secondary mb-6 z-10 max-w-sm">Learn how T-Bills are different from Fixed Deposits and why they are safer for students.</p>
                <div className="flex flex-col gap-3 z-10">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        <span className="text-white text-sm font-medium">100% Sovereign Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        <span className="text-white text-sm font-medium">No lock-in period (Sell anytime)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">check_circle</span>
                        <span className="text-white text-sm font-medium">Better returns than Savings A/C</span>
                    </div>
                </div>
                <button className="mt-8 w-fit text-primary font-bold text-sm border-b border-primary pb-0.5 hover:text-white hover:border-white transition-colors">Read the Student Guide</button>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-primary to-[#2db300] p-8 md:p-10 flex flex-col justify-between text-[#131811]">
                <div>
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-black mb-2">Build your<br />Portfolio</h3>
                        <div className="bg-black/20 p-2 rounded-full backdrop-blur-sm">
                            <span className="material-symbols-outlined text-2xl">pie_chart</span>
                        </div>
                    </div>
                    <p className="font-semibold opacity-80 max-w-xs">Start with ₹100 today and watch your dashboard grow green.</p>
                </div>
                <div className="mt-8 bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold uppercase opacity-70">Your Goal</span>
                        <span className="text-xs font-bold">₹10,000</span>
                    </div>
                    <div className="w-full bg-black/10 rounded-full h-2 overflow-hidden">
                        <div className="bg-[#131811] h-full w-[35%] rounded-full"></div>
                    </div>
                    <p className="text-[10px] mt-2 font-medium">You are 35% there! Invest ₹500 more to reach a milestone.</p>
                </div>
            </div>
        </div>
    );
}
