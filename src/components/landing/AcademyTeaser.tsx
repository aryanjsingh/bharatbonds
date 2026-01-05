export default function AcademyTeaser() {
    return (
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#1e2b1a] border border-[#2c3928] rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-700 mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCdsF8PhIJz3fZ81KUyTLwiLt3QS-IdFwQavSarXO4IK2D6-O3ET4YzKnKmayuZiBLY-xkeAcbAhCz8GAY2dUPC0oqGxSasDb7KBLN3goXGJaEbP5FG4aGVAGJwA0Hn5BaVDPlHOvvBJWGMXoB23IISByn2GCGwmNC1CLMwoBExoYHTb0zVPbRH_c3UV-eLjIDqiPSvZZHMc8wGcRC6VeAxj1WmySowsEzmxjiLZRJSLG1drdY_1rlG5SRvH300N1XasE3ocWlbpaE')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#142210] via-[#142210]/80 to-transparent"></div>
            <div className="relative z-10">
                <div className="inline-block bg-primary text-black text-xs font-bold px-3 py-1 rounded mb-4">ACADEMY</div>
                <h3 className="text-3xl font-bold text-white leading-tight mb-4">Financial Literacy for the New Generation</h3>
                <p className="text-gray-300 text-sm mb-6">Don't know what a 'Coupon Rate' or 'Yield' is? We have simple, 3-minute guides to get you up to speed.</p>
            </div>
            <div className="relative z-10 mt-auto">
                <button className="flex items-center gap-2 text-primary font-bold hover:underline cursor-pointer">
                    Start Learning <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
            </div>
        </div>
    );
}
