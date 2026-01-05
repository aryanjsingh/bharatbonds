import LoginHeader from "@/components/login/LoginHeader";
import LoginBackground from "@/components/login/LoginBackground";
import LoginForm from "@/components/login/LoginForm";
import LoginFooter from "@/components/login/LoginFooter";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-background-light dark:bg-[#142210] text-slate-900 dark:text-white font-display overflow-x-hidden transition-colors duration-300">
            <LoginBackground />
            <LoginHeader />
            <main className="flex-1 flex items-center justify-center px-4 relative z-10 py-8">
                <LoginForm />
            </main>
            <LoginFooter />
        </div>
    );
}
