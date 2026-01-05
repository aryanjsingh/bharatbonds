"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { registerUser } from "@/data/users";

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!name || !email || !password) {
            setError("Please fill in all required fields");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        const newUser = {
            uid: `user_${Date.now()}`,
            name,
            email,
            phoneNumber: "", // Optional in this form
            password,
            accountBalance: 0, // Fresh account
            tokenBalanceValue: 0,
        };

        const success = registerUser(newUser);

        if (success) {
            // Auto login
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("loggedInUserEmail", newUser.email);
            router.push("/dashboard");
        } else {
            setError("User with this email already exists");
        }
    };

    return (
        <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 bg-card-dark">
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
                <p className="text-text-dim text-sm mb-8">Invest in safe, high-yield government bonds.</p>

                {error && (
                    <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#2c3928] hover:bg-[#2c3928] hover:border-text-dim/30 transition-all text-white text-sm font-medium cursor-pointer">
                        <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATmwwGVRl7YgT6C7txqHY7KdHenONxcT3JEvIyfz4Csmz5oJrAizIFrn7HGYjFqsk5FPu43Xps70F6-PvekIgMFKPttC2X1VsVzzWL-xVYU490B1rvZN74HePE2NcBXz8tHLluo9WlVpT2QLsnf1PzgiXN8B1yAQnSYqqv_S9jI2M2_aqdHkVd9vGeBuSkZgJob-3D9Qk13c2RnIzaJQ86dwcc0c21yXVPI6IBlYDyIrUhhr4s_ryDdWLvlplemG37_2-ezBAkzFRW" />
                        Google
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#2c3928] hover:bg-[#2c3928] hover:border-text-dim/30 transition-all text-white text-sm font-medium cursor-pointer">
                        <span className="material-symbols-outlined text-[20px]">ios</span>
                        Apple
                    </button>
                </div>
                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-[#2c3928]"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card-dark px-2 text-text-dim">Or continue with email</span>
                    </div>
                </div>
                <form className="space-y-5" onSubmit={handleSignup}>
                    <div>
                        <label className="block text-xs font-medium text-text-dim mb-1.5 ml-1" htmlFor="name">Full Name</label>
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-dim group-focus-within:text-primary transition-colors text-[20px]">person</span>
                            <input
                                className="w-full bg-[#142210] border border-[#2c3928] text-white text-sm rounded-xl focus:ring-1 focus:ring-primary focus:border-primary block pl-10 p-2.5 placeholder:text-gray-600 transition-all shadow-sm"
                                id="name"
                                placeholder="Rahul Kumar"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-text-dim mb-1.5 ml-1" htmlFor="email">Email Address</label>
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-dim group-focus-within:text-primary transition-colors text-[20px]">mail</span>
                            <input
                                className="w-full bg-[#142210] border border-[#2c3928] text-white text-sm rounded-xl focus:ring-1 focus:ring-primary focus:border-primary block pl-10 p-2.5 placeholder:text-gray-600 transition-all shadow-sm"
                                id="email"
                                placeholder="rahul@university.edu.in"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-text-dim mb-1.5 ml-1" htmlFor="password">Password</label>
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-dim group-focus-within:text-primary transition-colors text-[20px]">lock</span>
                            <input
                                className="w-full bg-[#142210] border border-[#2c3928] text-white text-sm rounded-xl focus:ring-1 focus:ring-primary focus:border-primary block pl-10 pr-10 p-2.5 placeholder:text-gray-600 transition-all shadow-sm"
                                id="password"
                                placeholder="••••••••"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className="absolute right-3 top-2.5 text-text-dim hover:text-white transition-colors cursor-pointer"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <span className="material-symbols-outlined text-[20px]">
                                    {showPassword ? "visibility" : "visibility_off"}
                                </span>
                            </button>
                        </div>
                        <div className="mt-2 flex gap-1">
                            <div className="h-1 flex-1 bg-[#2c3928] rounded-full overflow-hidden">
                                <div className={`h-full ${password.length > 0 ? 'bg-red-500' : 'bg-transparent'} w-1/3`}></div>
                            </div>
                            <div className="h-1 flex-1 bg-[#2c3928] rounded-full"></div>
                            <div className="h-1 flex-1 bg-[#2c3928] rounded-full"></div>
                        </div>
                        <p className="text-[10px] text-text-dim mt-1 ml-1">Must be at least 8 characters</p>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-text-dim mb-1.5 ml-1" htmlFor="referral">Referral Code <span className="text-gray-600">(Optional)</span></label>
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-text-dim group-focus-within:text-primary transition-colors text-[20px]">confirmation_number</span>
                            <input className="w-full bg-[#142210] border border-[#2c3928] text-white text-sm rounded-xl focus:ring-1 focus:ring-primary focus:border-primary block pl-10 p-2.5 placeholder:text-gray-600 transition-all shadow-sm uppercase tracking-wider" id="referral" placeholder="FRIEND20" type="text" />
                        </div>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input className="w-4 h-4 border border-[#2c3928] rounded bg-[#142210] focus:ring-3 focus:ring-primary/20 focus:ring-offset-0 text-primary checked:bg-primary checked:border-primary" id="terms" type="checkbox" required />
                        </div>
                        <label className="ml-2 text-xs font-medium text-text-dim" htmlFor="terms">I agree to the <a className="text-white hover:text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-white hover:text-primary hover:underline" href="#">Privacy Policy</a>.</label>
                    </div>
                    <button className="w-full text-black bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary/30 font-bold rounded-xl text-sm px-5 py-3 text-center transition-all shadow-[0_0_15px_rgba(70,236,19,0.2)] hover:shadow-[0_0_25px_rgba(70,236,19,0.4)] flex items-center justify-center gap-2 group cursor-pointer" type="submit">
                        Sign Up
                        <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                </form>
                <p className="text-sm font-medium text-text-dim text-center mt-8">
                    Already have an account? <Link className="text-white hover:text-primary font-bold hover:underline transition-colors" href="/login">Log In</Link>
                </p>
            </div>
        </div>
    );
}
