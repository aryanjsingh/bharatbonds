export interface User {
    uid: string;
    name: string;
    email: string;
    phoneNumber: string;
    password: string; // Storing plain text for prototype only
    accountBalance: number; // Cash (INR/USDT) balance
    tokenBalanceValue: number; // Value of RWA tokens held
    tokensHeld?: { symbol: string, amount: number }[]; // Portfolio details
}

// Simulated Seed Data
const seedUsers: User[] = [
    {
        uid: "user_12345",
        name: "Aryan",
        email: "aryan@example.com",
        phoneNumber: "+91 98765 43210",
        password: "password123",
        accountBalance: 5000,
        tokenBalanceValue: 24500,
        tokensHeld: [
            { symbol: "MAH-24", amount: 15 },
            { symbol: "TBILL-91D", amount: 100 }
        ]
    }
];

// Helper to get all users (Seed + LocalStorage)
export const getAllUsers = (): User[] => {
    if (typeof window === "undefined") return seedUsers;

    const storedUsersJson = localStorage.getItem("bharatbonds_users");
    const storedUsers: User[] = storedUsersJson ? JSON.parse(storedUsersJson) : [];

    // Merge seed users with stored users (avoiding duplicates based on email)
    const allUsers = [...seedUsers];
    storedUsers.forEach(storedUser => {
        if (!allUsers.find(u => u.email === storedUser.email)) {
            allUsers.push(storedUser);
        }
    });

    return allUsers;
};

// Register a new user
export const registerUser = (newUser: User): boolean => {
    if (typeof window === "undefined") return false;

    const currentUsers = getAllUsers();

    // Check if email already exists
    if (currentUsers.find(u => u.email === newUser.email)) {
        return false;
    }

    const storedUsersJson = localStorage.getItem("bharatbonds_users");
    const storedUsers: User[] = storedUsersJson ? JSON.parse(storedUsersJson) : [];

    storedUsers.push(newUser);
    localStorage.setItem("bharatbonds_users", JSON.stringify(storedUsers));

    return true;
};

// Get the currently logged-in user
export const getCurrentUser = (): User => {
    if (typeof window === "undefined") return seedUsers[0];

    const loggedInEmail = localStorage.getItem("loggedInUserEmail");
    if (!loggedInEmail) return seedUsers[0]; // Fallback to default if not found

    const user = getAllUsers().find(u => u.email === loggedInEmail);
    return user || seedUsers[0];
};

// Backward compatibility (deprecated, use getAllUsers instead)
export const users = seedUsers;

