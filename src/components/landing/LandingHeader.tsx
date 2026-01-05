"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingHeader() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // specific check to ensure code runs on client side only 
        if (typeof window !== "undefined") {
            const loggedIn = localStorage.getItem("isLoggedIn");
            setIsLoggedIn(!!loggedIn);
        }
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-[#131811]/90 backdrop-blur-xl border-b border-[#2c3928] px-6 lg:px-10 py-4">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 text-white cursor-pointer group">
                    <div className="size-8 text-primary group-hover:scale-110 transition-transform duration-300">
                        <span className="material-symbols-outlined !text-[32px] font-bold">savings</span>
                    </div>
                    <h2 className="text-white text-xl font-bold tracking-tight">BharatBonds</h2>
                </Link>
                <div className="flex items-center">
                    {isLoggedIn ? (
                        <Link href="/dashboard" className="px-6 py-2 rounded-full border border-primary/50 text-black font-bold text-sm transition-all flex items-center gap-2 bg-primary hover:bg-primary-dark shadow-[0_0_15px_rgba(70,236,19,0.3)] hover:shadow-[0_0_25px_rgba(70,236,19,0.5)]">
                            <span className="material-symbols-outlined text-[18px]">dashboard</span>
                            Dashboard
                        </Link>
                    ) : (
                        <Link href="/login" className="px-6 py-2 rounded-full border border-[#2c3928] hover:border-primary/50 text-white hover:text-primary font-bold text-sm transition-all flex items-center gap-2 bg-[#1e2b1a] hover:bg-[#253421]">
                            <span className="material-symbols-outlined text-[18px]">login</span>
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
