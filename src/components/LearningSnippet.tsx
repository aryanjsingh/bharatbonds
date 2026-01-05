export default function LearningSnippet() {
    return (
        <div className="relative rounded-2xl overflow-hidden h-40 group cursor-pointer">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                data-alt="Student learning finance on laptop with abstract green overlay"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCdsF8PhIJz3fZ81KUyTLwiLt3QS-IdFwQavSarXO4IK2D6-O3ET4YzKnKmayuZiBLY-xkeAcbAhCz8GAY2dUPC0oqGxSasDb7KBLN3goXGJaEbP5FG4aGVAGJwA0Hn5BaVDPlHOvvBJWGMXoB23IISByn2GCGwmNC1CLMwoBExoYHTb0zVPbRH_c3UV-eLjIDqiPSvZZHMc8wGcRC6VeAxj1WmySowsEzmxjiLZRJSLG1drdY_1rlG5SRvH300N1XasE3ocWlbpaE')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-5 w-full">
                <div className="bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded w-fit mb-2">LEARN</div>
                <h4 className="text-white font-bold text-sm leading-tight">Understanding Bond Yields: A Student's Guide</h4>
                <div className="flex items-center gap-1 mt-2 text-[#a3b99d] text-xs">
                    <span className="material-symbols-outlined text-[14px]">play_circle</span>
                    <span>3 min read</span>
                </div>
            </div>
        </div>
    );
}
