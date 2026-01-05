import { BondType } from "@/data/bonds";

interface MarketplaceFiltersProps {
    selectedFilter: BondType | 'All Packs';
    onFilterChange: (filter: BondType | 'All Packs') => void;
}

export default function MarketplaceFilters({ selectedFilter, onFilterChange }: MarketplaceFiltersProps) {
    const getButtonClass = (filter: BondType | 'All Packs') => {
        const baseClass = "flex h-10 items-center justify-center gap-x-2 rounded-full px-6 transition-all";
        if (selectedFilter === filter) {
            return `${baseClass} bg-primary text-[#131811] hover:scale-105 active:scale-95`;
        }
        return `${baseClass} bg-slate-200 dark:bg-card-dark border border-transparent hover:border-border-dark dark:hover:bg-[#253023]`;
    };

    const getIconClass = (filter: BondType | 'All Packs') => {
        if (selectedFilter === filter) {
            return "material-symbols-outlined text-[#131811] text-[18px]";
        }
        return "material-symbols-outlined text-text-secondary text-[18px]";
    };

    const getTextClass = (filter: BondType | 'All Packs') => {
        if (selectedFilter === filter) {
            return "text-sm font-bold";
        }
        return "text-slate-700 dark:text-white text-sm font-medium";
    };

    return (
        <div className="mt-12 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-3 min-w-max">
                <button
                    onClick={() => onFilterChange('All Packs')}
                    className={getButtonClass('All Packs')}
                >
                    <span className={getTextClass('All Packs')}>All Packs</span>
                </button>

                <button
                    onClick={() => onFilterChange('T-Bills')}
                    className={getButtonClass('T-Bills')}
                >
                    <span className={getIconClass('T-Bills')}>timer</span>
                    <span className={getTextClass('T-Bills')}>Short Term (T-Bills)</span>
                </button>

                <button
                    onClick={() => onFilterChange('G-Secs')}
                    className={getButtonClass('G-Secs')}
                >
                    <span className={getIconClass('G-Secs')}>trending_up</span>
                    <span className={getTextClass('G-Secs')}>Long Term (G-Secs)</span>
                </button>

                <button
                    onClick={() => onFilterChange('SDLs')}
                    className={getButtonClass('SDLs')}
                >
                    <span className={getIconClass('SDLs')}>location_on</span>
                    <span className={getTextClass('SDLs')}>State Development (SDLs)</span>
                </button>
            </div>
        </div>
    );
}
