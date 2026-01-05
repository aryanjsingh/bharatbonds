"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import MarketplaceHero from "@/components/marketplace/MarketplaceHero";
import MarketplaceFilters from "@/components/marketplace/MarketplaceFilters";
import BondCard from "@/components/marketplace/BondCard";
import MarketplaceEducation from "@/components/marketplace/MarketplaceEducation";
import { bondData, BondType } from "@/data/bonds";

export default function MarketplacePage() {
    const [selectedFilter, setSelectedFilter] = useState<BondType | 'All Packs'>('All Packs');

    const filteredBonds = selectedFilter === 'All Packs'
        ? bondData
        : bondData.filter(bond => bond.type === selectedFilter);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center w-full">
                <div className="w-full max-w-[1280px] px-4 md:px-10 pb-20">
                    <MarketplaceHero />
                    <MarketplaceFilters
                        selectedFilter={selectedFilter}
                        onFilterChange={setSelectedFilter}
                    />

                    {/* Content Grid */}
                    <div className="mb-6 flex justify-between items-end">
                        <div>
                            <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold leading-tight">
                                {selectedFilter === 'All Packs' ? 'Popular Packs for Students' : `${selectedFilter} Packs`}
                            </h2>
                            <p className="text-text-secondary mt-2 text-sm">Curated bundles designed for low risk and high learning.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBonds.map((bond) => (
                            <BondCard key={bond.id} bond={bond} />
                        ))}
                        {filteredBonds.length === 0 && (
                            <div className="col-span-full py-20 text-center text-text-secondary">
                                <span className="material-symbols-outlined text-4xl mb-2">search_off</span>
                                <p>No packs found for this category.</p>
                            </div>
                        )}
                    </div>

                    <MarketplaceEducation />
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="w-full border-t border-border-dark bg-[#131811] py-8 px-10">
                <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-white opacity-50">
                        <span className="material-symbols-outlined text-lg">currency_rupee_circle</span>
                        <span className="text-sm">© 2024 Bharat Marketplace</span>
                    </div>
                    <div className="flex gap-6 text-sm text-text-secondary">
                        <a className="hover:text-primary" href="#">Terms</a>
                        <a className="hover:text-primary" href="#">Privacy</a>
                        <a className="hover:text-primary" href="#">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
