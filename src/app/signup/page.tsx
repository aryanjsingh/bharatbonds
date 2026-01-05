import SignupHeader from "@/components/signup/SignupHeader";
import SignupHero from "@/components/signup/SignupHero";
import SignupForm from "@/components/signup/SignupForm";
import SignupFooter from "@/components/signup/SignupFooter";

export default function SignupPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden transition-colors duration-300 min-h-screen flex flex-col">
            <SignupHeader />
            <main className="flex-1 flex items-center justify-center p-4 lg:p-8 relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="w-full max-w-5xl bg-card-dark border border-card-border rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row relative z-10">
                    <SignupHero />
                    <SignupForm />
                </div>

                <SignupFooter />
            </main>
        </div>
    );
}
