export default function SignupHero() {
    return (
        <div className="hidden lg:flex lg:w-5/12 bg-[#0f1a0c] p-12 flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#46ec13 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>
            <div className="relative z-10 mt-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c3928]/50 border border-[#2c3928] text-primary text-xs font-bold mb-6">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>
                    Student Special Offer
                </div>
                <h1 className="text-3xl font-bold text-white leading-tight mb-4">Start your wealth journey today.</h1>
                <p className="text-text-dim text-lg leading-relaxed">Join thousands of students securing their future with government-backed bonds starting at just ₹100.</p>
            </div>
            <div className="relative z-10">
                <div className="bg-[#1e2b1a]/80 backdrop-blur-md border border-[#2c3928] p-5 rounded-xl">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="flex -space-x-3">
                            <div className="w-8 h-8 rounded-full border-2 border-[#1e2b1a] bg-gray-600"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-[#1e2b1a] bg-gray-500"></div>
                            <div className="w-8 h-8 rounded-full border-2 border-[#1e2b1a] bg-gray-400"></div>
                        </div>
                        <div className="text-sm">
                            <span className="block text-white font-bold">10k+ Students</span>
                            <span className="text-text-dim text-xs">Trust BharatBonds</span>
                        </div>
                    </div>
                    <div className="h-1 w-full bg-[#2c3928] rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-3/4 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center mt-2 text-xs">
                        <span className="text-text-dim">Average Yield</span>
                        <span className="text-primary font-bold">7.4%</span>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
        </div>
    );
}
