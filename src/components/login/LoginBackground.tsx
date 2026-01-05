export default function LoginBackground() {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]"></div>
        </div>
    );
}
