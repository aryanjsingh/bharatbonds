export default function LandingFooter() {
    return (
        <footer className="bg-[#131811] border-t border-[#2c3928] py-12 px-6 lg:px-10">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">savings</span>
                    <span className="text-white font-bold text-lg">BharatBonds</span>
                </div>
                <div className="text-[#a3b99d] text-sm text-center md:text-right">
                    <p>© 2024 BharatBonds. All rights reserved.</p>
                    <p className="text-xs mt-1 opacity-60">Made with ❤️ for Indian Students.</p>
                </div>
            </div>
        </footer>
    );
}
