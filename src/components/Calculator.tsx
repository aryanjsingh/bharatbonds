"use client";

import { useState } from "react";

export default function Calculator() {
    const [amount, setAmount] = useState(10000);

    // Calculate returns
    const bondYield = 0.074; // 7.4%
    const bankYield = 0.03;  // 3.0%

    const bondReturn = Math.round(amount * (1 + bondYield));
    const bankReturn = Math.round(amount * (1 + bankYield));

    // Calculate progress bar widths (relative to max possible return)
    const maxReturn = Math.max(bondReturn, bankReturn);
    const bondWidth = (bondReturn / maxReturn) * 100;
    const bankWidth = (bankReturn / maxReturn) * 100;

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-IN');
    };

    return (
        <div className="bg-[#1e2b1a] border border-[#2c3928] rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">calculate</span>
                <h3 className="text-lg font-bold text-white">"What If" Calculator</h3>
            </div>
            <div className="mb-6">
                <div className="flex justify-between items-end mb-2">
                    <label className="text-xs text-[#a3b99d] font-medium">Investment Amount</label>
                    <span className="text-lg font-bold text-white transition-all duration-300 ease-out">
                        ₹{formatCurrency(amount)}
                    </span>
                </div>
                <input
                    className="w-full h-2 bg-[#2c3928] rounded-lg appearance-none cursor-pointer"
                    max="100000"
                    min="1000"
                    step="1000"
                    type="range"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <div className="flex justify-between mt-1">
                    <span className="text-[10px] text-[#a3b99d]">₹1k</span>
                    <span className="text-[10px] text-[#a3b99d]">₹1L</span>
                </div>
            </div>
            <div className="space-y-4">
                {/* Bond Result */}
                <div className="bg-[#2c3928]/30 p-4 rounded-xl border border-primary/20 relative overflow-hidden">
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary"></div>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-white font-medium">Bonds (7.4%)</span>
                        <span className="text-primary font-bold transition-all duration-300 ease-out">
                            ₹{formatCurrency(bondReturn)}
                        </span>
                    </div>
                    <div className="w-full bg-[#2c3928] rounded-full h-1.5 mt-2">
                        <div
                            className="bg-primary h-1.5 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${bondWidth}%` }}
                        ></div>
                    </div>
                </div>
                {/* Bank Result */}
                <div className="bg-[#2c3928]/30 p-4 rounded-xl border border-transparent">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-[#a3b99d]">Bank FD (3.0%)</span>
                        <span className="text-[#a3b99d] font-bold transition-all duration-300 ease-out">
                            ₹{formatCurrency(bankReturn)}
                        </span>
                    </div>
                    <div className="w-full bg-[#2c3928] rounded-full h-1.5 mt-2">
                        <div
                            className="bg-[#a3b99d] h-1.5 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${bankWidth}%` }}
                        ></div>
                    </div>
                </div>
            </div>
            <p className="text-xs text-[#a3b99d] mt-4 text-center italic">
                *Returns calculated for 1 year duration.
            </p>
        </div>
    );
}
