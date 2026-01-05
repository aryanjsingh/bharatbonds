"use client";

import { useState } from "react";

export default function CalculatorTeaser() {
    const [amount, setAmount] = useState(10000);

    // Yield rates
    const bondYield = 0.076; // 7.6% (Updated to match MAH-24 SDL)
    const bankYield = 0.030; // 3.0%

    // Calculate 1-year returns
    const bondReturn = Math.round(amount * (1 + bondYield));
    const bankReturn = Math.round(amount * (1 + bankYield));

    // Calculate progress bar widths
    const maxPossible = amount * (1 + 0.10); // Scale relative to 10% max for visual impact
    const bondWidth = Math.min(((bondReturn - amount) / (maxPossible - amount)) * 100, 100);
    const bankWidth = Math.min(((bankReturn - amount) / (maxPossible - amount)) * 100, 100);

    const formatCurrency = (val: number) => {
        return "₹" + val.toLocaleString('en-IN');
    };

    return (
        <div className="lg:col-span-7 bg-[#1e2b1a] border border-[#2c3928] rounded-3xl p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                        <span className="material-symbols-outlined">calculate</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">"What If" Calculator</h3>
                </div>
                <p className="text-[#a3b99d] mb-8">See exactly how much more yield you earn with Tokenized Bonds compared to standard bank accounts.</p>
                <div className="bg-[#142210] p-6 rounded-2xl border border-[#2c3928]">
                    <div className="flex justify-between items-end mb-4">
                        <label className="text-xs text-[#a3b99d] font-medium uppercase">Investment Amount</label>
                        <span className="text-2xl font-bold text-white transition-all duration-200">{formatCurrency(amount)}</span>
                    </div>
                    <input
                        className="w-full h-2 bg-[#2c3928] rounded-lg appearance-none cursor-pointer mb-8 accent-primary"
                        max="100000"
                        min="1000"
                        step="1000"
                        type="range"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-24 text-sm font-bold text-white">Bonds</div>
                            <div className="flex-1 bg-[#2c3928] rounded-full h-10 relative overflow-hidden">
                                <div
                                    className="bg-primary h-full rounded-full flex items-center px-4 text-[12px] font-bold text-black transition-all duration-500 ease-out shadow-[0_0_15px_rgba(70,236,19,0.3)]"
                                    style={{ width: `${Math.max(bondWidth, 20)}%` }}
                                >
                                    {formatCurrency(bondReturn)}
                                </div>
                            </div>
                            <div className="text-primary font-bold text-sm">+{bondYield * 100}%</div>
                        </div>
                        <div className="flex items-center gap-4 opacity-60">
                            <div className="w-24 text-sm font-medium text-[#a3b99d]">Bank</div>
                            <div className="flex-1 bg-[#2c3928] rounded-full h-10 relative overflow-hidden">
                                <div
                                    className="bg-[#a3b99d] h-full rounded-full flex items-center px-4 text-[12px] font-bold text-[#142210] transition-all duration-500 ease-out"
                                    style={{ width: `${Math.max(bankWidth, 20)}%` }}
                                >
                                    {formatCurrency(bankReturn)}
                                </div>
                            </div>
                            <div className="text-[#a3b99d] font-bold text-sm">+3.0%</div>
                        </div>
                    </div>
                </div>
                <p className="text-[10px] text-[#5c6b57] mt-6 text-center italic">*Returns calculated for 1 year holding period.</p>
            </div>
        </div>
    );
}

