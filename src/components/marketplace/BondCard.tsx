import { Bond } from "@/data/bonds";

interface BondCardProps {
    bond: Bond;
}

export default function BondCard({ bond }: BondCardProps) {
    return (
        <div className="group relative flex flex-col rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark p-6 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(70,236,19,0.2)] hover:-translate-y-1">
            <div className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-[#2c3928] text-text-secondary group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined">bookmark_border</span>
            </div>

            {/* Visual Header */}
            <div
                className="mb-6 h-40 w-full rounded-xl bg-gradient-to-br flex items-center justify-center relative overflow-hidden"
                style={{
                    background: `linear-gradient(to bottom right, ${bond.gradientFrom}, ${bond.gradientTo})`,
                    ...(bond.backgroundImage && { backgroundImage: `${bond.backgroundImage}, linear-gradient(to bottom right, ${bond.gradientFrom}, ${bond.gradientTo})` }),
                    backgroundBlendMode: 'overlay, normal',
                    backgroundSize: bond.type === 'T-Bills' ? '16px 16px' : 'cover'
                }}
            >
                {/* Special effects for specific cards */}
                {bond.type === 'G-Secs' && (
                    <div className="absolute -right-4 -bottom-4 size-32 bg-primary/10 rounded-full blur-xl"></div>
                )}

                {bond.type === 'SDLs' && (
                    <div className="absolute inset-0 bg-black/40"></div>
                )}

                {/* Icon */}
                <div className={`relative z-10 size-20 rounded-full bg-[#46ec13]/10 flex items-center justify-center ${bond.accentColor}`}>
                    <span className="material-symbols-outlined text-5xl">{bond.icon}</span>
                </div>

                {/* State Tag for SDLs */}
                {bond.stateName && (
                    <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-black/60 text-[10px] font-bold text-white backdrop-blur-sm border border-white/10">
                        {bond.stateName}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2">
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold">{bond.title}</h3>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${bond.tagColor}`}>
                        {bond.type}
                    </span>
                </div>
                <p className="text-text-secondary text-sm line-clamp-2">{bond.description}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-slate-100 dark:border-border-dark border-dashed">
                <div>
                    <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">Yield (Ann.)</p>
                    <p className="text-primary text-xl font-bold flex items-center gap-1">
                        {bond.yield} <span className="material-symbols-outlined text-sm">trending_up</span>
                    </p>
                </div>
                <div>
                    <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">Maturity</p>
                    <p className="text-slate-900 dark:text-white text-lg font-bold">{bond.maturity}</p>
                </div>
            </div>

            {/* Footer Action */}
            <div className="mt-auto flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-[10px] text-text-secondary uppercase font-bold">Minimum Invest</span>
                    <span className="text-sm font-bold text-white">{bond.minInvestment}</span>
                </div>
                <button className={`${bond.type === 'T-Bills' ? 'bg-primary text-[#131811] hover:bg-white' : 'bg-slate-800 dark:bg-[#2c3928] text-white hover:bg-primary hover:text-[#131811]'} h-10 px-6 rounded-full text-sm font-bold transition-colors`}>
                    Invest
                </button>
            </div>
        </div>
    );
}
