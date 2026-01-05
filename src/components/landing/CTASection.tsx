import Link from "next/link";

export default function CTASection() {
    return (
        <section className="border-t border-[#2c3928] bg-[#1a2517] py-24 text-center px-6">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to secure your future?</h2>
                <p className="text-[#a3b99d] mb-10 text-lg">Join thousands of students building real wealth with India's most secure assets.</p>
                <Link href="/signup" className="h-14 px-10 bg-white hover:bg-gray-100 text-black rounded-full font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2 mx-auto w-fit">
                    Open Free Account
                    <span className="material-symbols-outlined">login</span>
                </Link>
                <p className="text-xs text-[#a3b99d] mt-6">No hidden fees. KYC verified in 2 minutes.</p>
            </div>
        </section>
    );
}
