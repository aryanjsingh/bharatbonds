"use client";

import Link from "next/link";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { getAllUsers } from "@/data/users";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Find user matching credentials from all sources
        const allUsers = getAllUsers();
        const user = allUsers.find(u =>
            (u.email === email || u.uid === email) && u.password === password
        );

        if (user) {
            // Set simple auth flag AND the specific user identifier
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("loggedInUserEmail", user.email);
            router.push("/dashboard");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="w-full max-w-[440px]">
            <div className="bg-[#1e2b1a] border border-[#2c3928] rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/15 transition-all duration-700"></div>
                <div className="relative z-10">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome Back</h1>
                        <p className="text-[#a3b99d] text-sm">Securely login to your bond portfolio</p>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form className="space-y-5" onSubmit={handleLogin}>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white uppercase tracking-wider ml-1" htmlFor="email">
                                Email or Username
                            </label>
                            <div className="relative group/input">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-[#a3b99d] group-focus-within/input:text-primary transition-colors text-[20px]">person</span>
                                </div>
                                <input
                                    className="block w-full pl-10 pr-3 py-3 bg-[#131811] border border-[#2c3928] rounded-xl text-white placeholder-[#5c6b57] focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all sm:text-sm"
                                    id="email"
                                    placeholder="student@university.edu"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white uppercase tracking-wider ml-1" htmlFor="password">
                                Password
                            </label>
                            <div className="relative group/input">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-[#a3b99d] group-focus-within/input:text-primary transition-colors text-[20px]">lock</span>
                                </div>
                                <input
                                    className="block w-full pl-10 pr-10 py-3 bg-[#131811] border border-[#2c3928] rounded-xl text-white placeholder-[#5c6b57] focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all sm:text-sm"
                                    id="password"
                                    placeholder="••••••••"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined text-[#a3b99d] hover:text-white transition-colors text-[20px]">
                                        {showPassword ? "visibility" : "visibility_off"}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-end pt-1">
                                <a className="text-xs text-primary hover:text-primary-dark font-medium transition-colors" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button className="w-full bg-primary hover:bg-[#36bf0f] text-black font-bold py-3.5 rounded-full transition-all shadow-[0_0_15px_rgba(70,236,19,0.2)] hover:shadow-[0_0_25px_rgba(70,236,19,0.4)] hover:translate-y-[-1px] flex items-center justify-center gap-2 mt-2 cursor-pointer">
                            <span>Login securely</span>
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                    </form>
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#2c3928]"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-[#1e2b1a] text-[#a3b99d] text-xs">Or continue with</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 py-2.5 border border-[#2c3928] rounded-xl hover:bg-[#2c3928] transition-colors group cursor-pointer">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                            </svg>
                            <span className="text-white text-sm font-medium">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 py-2.5 border border-[#2c3928] rounded-xl hover:bg-[#2c3928] transition-colors group cursor-pointer">
                            <span className="material-symbols-outlined text-[20px] text-white">fingerprint</span>
                            <span className="text-white text-sm font-medium">Biometric</span>
                        </button>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-[#a3b99d] text-sm">
                            Do not have an account?
                            <Link className="text-primary hover:text-white font-bold ml-1 transition-colors hover:underline decoration-primary underline-offset-4" href="/signup">Sign up now</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-center items-center gap-2 text-[#5c6b57]">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <span className="text-xs font-medium uppercase tracking-widest">Bank Grade Security</span>
            </div>
        </div>
    );
}
