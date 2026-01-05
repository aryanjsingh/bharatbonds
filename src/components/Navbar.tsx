"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/data/users";

export default function Navbar() {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const user = getCurrentUser();
    const router = useRouter();

    const notificationRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        router.push("/login");
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
                setIsNotificationOpen(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        // precise check for auth
        const loggedIn = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(!!loggedIn);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-[#131811]/95 backdrop-blur-md border-b border-[#2c3928] px-6 lg:px-10 py-4">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href={isLoggedIn ? "/dashboard" : "/"} className="flex items-center gap-3 text-white cursor-pointer group">
                        <div className="size-8 text-primary group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined !text-[32px] font-bold">savings</span>
                        </div>
                        <h2 className="text-white text-xl font-bold tracking-tight">BharatBonds</h2>
                    </Link>
                    <div className="hidden md:flex items-center relative group">
                        <span className="material-symbols-outlined absolute left-3 text-[#a3b99d]">search</span>
                        <input
                            className="bg-[#1e2b1a] border border-transparent focus:border-primary/50 text-white text-sm rounded-full py-2.5 pl-10 pr-4 w-64 focus:outline-none transition-all placeholder:text-[#a3b99d]"
                            placeholder="Search bonds, packs..."
                            type="text"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <nav className="hidden lg:flex items-center gap-8 mr-4">
                        {isLoggedIn && (
                            <Link className="text-white font-medium hover:text-primary transition-colors text-sm" href="/dashboard">Dashboard</Link>
                        )}
                        <Link className="text-[#a3b99d] font-medium hover:text-white transition-colors text-sm" href="/marketplace">Marketplace</Link>
                        <Link className="text-[#a3b99d] font-medium hover:text-white transition-colors text-sm" href="#">Learn</Link>
                    </nav>

                    {isLoggedIn ? (
                        <div className="flex items-center gap-4 relative">
                            {/* Notification Button */}
                            <div className="relative" ref={notificationRef}>
                                <button
                                    onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                                    className="relative p-2 rounded-full hover:bg-[#2c3928] transition-colors text-white group"
                                >
                                    <div className="absolute top-2 right-2 size-2.5 bg-primary rounded-full border-2 border-[#131811] z-10"></div>
                                    <span className="material-symbols-outlined text-[24px] group-hover:text-primary transition-colors">notifications</span>
                                </button>

                                {isNotificationOpen && (
                                    <div className="absolute right-0 mt-3 w-80 bg-[#1e2b1a] border border-[#2c3928] rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                        <div className="p-4 border-b border-[#2c3928] flex justify-between items-center bg-[#142210]">
                                            <h3 className="text-white font-bold text-sm">Notifications</h3>
                                            <button className="text-[10px] text-primary hover:underline">Mark all read</button>
                                        </div>
                                        <div className="max-h-64 overflow-y-auto custom-scrollbar">
                                            <div className="p-4 border-b border-[#2c3928]/50 hover:bg-[#2c3928]/30 transition-colors cursor-pointer">
                                                <div className="flex gap-3">
                                                    <div className="mt-1 size-2 rounded-full bg-primary shrink-0"></div>
                                                    <div>
                                                        <p className="text-sm text-white font-medium">Interest Credited</p>
                                                        <p className="text-xs text-[#a3b99d] mt-0.5">₹12.40 added to your wallet from T-Bill #883</p>
                                                        <p className="text-[10px] text-[#5c6b57] mt-1.5">2 hours ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 hover:bg-[#2c3928]/30 transition-colors cursor-pointer">
                                                <div className="flex gap-3">
                                                    <div className="mt-1 size-2 rounded-full bg-blue-400 shrink-0"></div>
                                                    <div>
                                                        <p className="text-sm text-white font-medium">New Bond Drop</p>
                                                        <p className="text-xs text-[#a3b99d] mt-0.5">Maharashtra SDLs are now available. 7.6% Yield!</p>
                                                        <p className="text-[10px] text-[#5c6b57] mt-1.5">1 day ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 text-center bg-[#142210] border-t border-[#2c3928]">
                                            <button className="text-xs text-white hover:text-primary transition-colors py-1">View All Activity</button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Profile Button */}
                            <div className="relative" ref={profileRef}>
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="size-10 rounded-full border-2 border-[#2c3928] p-0.5 hover:border-primary transition-colors overflow-hidden"
                                >
                                    <img
                                        alt="User"
                                        className="w-full h-full rounded-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3NnUm93N6V79aHsCSCA1I9hVsnj59jElM9B7gSyg2DCIev_vXJrXUDQ57nJeVJ2ENWR_mJhyTVtmQdCy6tJee0TCUDhdZzgz0eMT1qD5TLuB0EsKAfGSTy8uaxpVznkpHpysOtofnPu5sPjZrSFH9reaPK-QZg1K-dbz4xGDz8JB2k6_S9dBnnK7DnALcG8WURZ9mSBUwTaNG_S2Dr_R8wBcxHCIYN0fqW9Fd7mdzzGzpWDR9XCrFVqzZt2h7BZJHVzbgJ2VSotDA"
                                    />
                                </button>

                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-3 w-64 bg-[#1e2b1a] border border-[#2c3928] rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                        <div className="p-5 border-b border-[#2c3928] bg-[#142210]">
                                            <p className="text-white font-bold text-base">{user.name}</p>
                                            <p className="text-xs text-[#a3b99d] truncate">{user.email}</p>
                                            <div className="mt-3 inline-flex items-center gap-2 px-2 py-1 rounded-full bg-[#2c3928] border border-primary/20">
                                                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                                                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Active</span>
                                            </div>
                                        </div>
                                        <div className="p-2 space-y-1">
                                            <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#a3b99d] hover:text-white hover:bg-[#2c3928] transition-colors flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[18px]">account_circle</span>
                                                My Account
                                            </button>
                                            <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#a3b99d] hover:text-white hover:bg-[#2c3928] transition-colors flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
                                                Wallet (₹{user.accountBalance.toLocaleString('en-IN')})
                                            </button>
                                            <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-[#a3b99d] hover:text-white hover:bg-[#2c3928] transition-colors flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[18px]">settings</span>
                                                Settings
                                            </button>
                                            <div className="h-px bg-[#2c3928] mx-2 my-1"></div>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left px-3 py-2 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-colors flex items-center gap-3"
                                            >
                                                <span className="material-symbols-outlined text-[18px]">logout</span>
                                                Log Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <Link href="/login" className="px-6 py-2 rounded-full border border-[#2c3928] hover:border-primary/50 text-white hover:text-primary font-bold text-sm transition-all flex items-center gap-2 bg-[#1e2b1a] hover:bg-[#253421]">
                                <span className="material-symbols-outlined text-[18px]">login</span>
                                Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
