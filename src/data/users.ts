export interface User {
    uid: string;
    name: string;
    email: string;
    phoneNumber: string;
    password: string; // Storing plain text for prototype only
    accountBalance: number; // Cash balance not yet invested
    investedBalance: number; // Value of bonds held (Total Wealth)
}

// Simulated User Database
export const users: User[] = [
    {
        uid: "user_12345",
        name: "Aryan",
        email: "aryan@example.com",
        phoneNumber: "+91 98765 43210",
        password: "password123",
        accountBalance: 5000,
        investedBalance: 24500, // Matches the "Total Wealth" from your screenshot
    }
];

// Helper to get the current mock user (simulating a logged-in session)
export const getCurrentUser = (): User => {
    return users[0];
};
