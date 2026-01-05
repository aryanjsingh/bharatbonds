export default function FeatureSection() {
    return (
        <section className="border-y border-[#2c3928] bg-[#1a2517]/30 backdrop-blur-sm">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-3 p-6 rounded-2xl hover:bg-[#2c3928]/30 transition-colors">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-2xl">visibility</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">On-Chain Transparency</h3>
                        <p className="text-[#a3b99d] text-sm leading-relaxed">Every bond is a token on the public ledger. Verify your ownership and yield in real-time, anytime.</p>
                    </div>
                    <div className="flex flex-col gap-3 p-6 rounded-2xl hover:bg-[#2c3928]/30 transition-colors">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-2xl">flash_on</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">Instant Liquidity</h3>
                        <p className="text-[#a3b99d] text-sm leading-relaxed">Sell your bond tokens instantly on our DEX. No more waiting for market hours or T+1 settlement cycles.</p>
                    </div>
                    <div className="flex flex-col gap-3 p-6 rounded-2xl hover:bg-[#2c3928]/30 transition-colors">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-2xl">dataset</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">Fractional RWAs</h3>
                        <p className="text-[#a3b99d] text-sm leading-relaxed">We tokenize large government bonds into micro-units. Start building your portfolio with just ₹100.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
