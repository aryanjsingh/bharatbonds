import { Bond } from "@/data/bonds";

interface BondCardProps {
    bond: Bond;
}

export default function BondCard({ bond }: BondCardProps) {
    const percentageSold = bond.soldAmount && bond.totalSupply
        ? Math.round((bond.soldAmount / bond.totalSupply) * 100)
        : 0;

    const networkColors: Record<string, string> = {
        "Polygon": "bg-purple-500/10 text-purple-400 border-purple-500/20",
        "Solana": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        "Ethereum": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    };

    return (
        <div className="bg-[#1e2b1a] border border-[#2c3928] rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(70,236,19,0.1)] transition-all group flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        {bond.network && (
                            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${networkColors[bond.network] || 'bg-[#2c3928] text-white'}`}>
                                {bond.network}
                            </span>
                        )}
                        <span className="text-[#a3b99d] text-xs font-mono">{bond.tokenSymbol || 'TOKEN'}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-1">{bond.title}</h3>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-2xl font-black text-primary">{bond.returns}</span>
                    <span className="text-[#a3b99d] text-xs">APY</span>
                </div>
            </div>

            <p className="text-[#a3b99d] text-sm mb-6 line-clamp-2 flex-grow">{bond.description}</p>

            {/* Token Supply Bar */}
            <div className="mb-6">
                <div className="flex justify-between text-xs text-[#a3b99d] mb-1.5">
                    <span>{percentageSold}% Minted</span>
                    <span>{bond.soldAmount?.toLocaleString()}/{bond.totalSupply?.toLocaleString()}</span>
                </div>
                <div className="h-2 w-full bg-[#131811] rounded-full overflow-hidden border border-[#2c3928]">
                    <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${percentageSold}%` }}
                    ></div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-[#2c3928] mt-auto">
                <div>
                    <span className="text-xs text-[#a3b99d] block mb-1">Mint Price</span>
                    <span className="text-white font-bold">₹{bond.minInvestment}</span>
                </div>
                <div>
                    <span className="text-xs text-[#a3b99d] block mb-1">Lock-in</span>
                    <span className="text-white font-bold">{bond.duration}</span>
                </div>
            </div>

            <div className="flex gap-2 mt-auto">
                <button className="flex-1 bg-primary hover:bg-primary-dark text-black font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(70,236,19,0.1)] hover:shadow-[0_0_20px_rgba(70,236,19,0.3)] cursor-pointer flex items-center justify-center gap-2">
                    Mint
                    <span className="material-symbols-outlined text-sm">token</span>
                </button>
                <button className="size-11 flex items-center justify-center border border-[#2c3928] rounded-xl text-[#a3b99d] hover:text-white hover:bg-[#2c3928] transition-colors cursor-pointer">
                    <span className="material-symbols-outlined">favorite</span>
                </button>
            </div>
        </div>
    );
}
