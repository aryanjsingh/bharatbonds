export default function FeatureSection() {
    return (
        <section className="border-y border-[#2c3928] bg-[#1a2517]/30 backdrop-blur-sm">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-3 p-6 rounded-2xl hover:bg-[#2c3928]/30 transition-colors">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-2xl">security</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">Sovereign Guarantee</h3>
                        <p className="text-[#a3b99d] text-sm leading-relaxed">Your investment is backed by the Government of India. Zero default risk, 100% peace of mind.</p>
                    </div>
                    <div className="flex flex-col gap-3 p-6 rounded-2xl hover:bg-[#2c3928]/30 transition-colors">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-2xl">currency_rupee</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">Start Small</h3>
                        <p className="text-[#a3b99d] text-sm leading-relaxed">You don't need lakhs. Start your investment journey with just ₹100. Perfect for student budgets.</p>
                    </div>
                    <div className="flex flex-col gap-3 p-6 rounded-2xl hover:bg-[#2c3928]/30 transition-colors">
                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">Beat the Bank</h3>
                        <p className="text-[#a3b99d] text-sm leading-relaxed">Earn up to 7.5% returns, significantly higher than your standard savings account interest rates.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
