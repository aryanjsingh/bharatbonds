export type BondType = 'T-Bills' | 'G-Secs' | 'SDLs' | 'Gold';

export interface Bond {
    id: string;
    title: string;
    type: BondType;
    description: string;
    minInvestment: number; // Mint Price per Token
    returns: string;      // Yield / APY
    duration: string;     // Lock-in / Maturity
    riskLevel: "Low" | "Medium" | "High"; // Risk Profile
    tags: string[];

    // Crypto / RWA Specific Fields
    tokenSymbol: string;      // e.g., MAH-SDL-24
    network: "Polygon" | "Solana" | "Ethereum";
    tokenAddress: string;     // Mock contract address
    totalSupply: number;      // Total tokens minted
    soldAmount: number;       // Tokens currently sold
    apy: number;              // Numeric APY for calculations
}

export const bondData: Bond[] = [
    {
        id: "1",
        title: "Maharashtra SDL 2024",
        type: "SDLs",
        tokenSymbol: "MAH-24",
        description: "State Development Loan backed by the Govt of Maharashtra. High safety, fixed yield.",
        minInvestment: 1000,
        returns: "7.6%",
        apy: 7.6,
        duration: "3 Years",
        riskLevel: "Low",
        tags: ["State Govt", "High Yield", "Tax Efficient"],
        network: "Polygon",
        tokenAddress: "0x71C...9A21",
        totalSupply: 50000,
        soldAmount: 42500, // 85% Sold
    },
    {
        id: "2",
        title: "91 Day T-Bill",
        type: "T-Bills",
        tokenSymbol: "TBILL-91D",
        description: "Short term treasury bill issued by RBI. The safest instrument in the country.",
        minInvestment: 500,
        returns: "6.8%",
        apy: 6.8,
        duration: "91 Days",
        riskLevel: "Low",
        tags: ["Central Govt", "Short Term", "Liquid"],
        network: "Solana",
        tokenAddress: "So11...TBill",
        totalSupply: 100000,
        soldAmount: 12000, // 12% Sold
    },
    {
        id: "3",
        title: "NHAI Tax-Free Bond",
        type: "G-Secs", // Using G-Secs as a catch-all for central/psu for now
        tokenSymbol: "NHAI-TF",
        description: "Infrastructure bond by National Highways Authority of India. Interest is tax-free.",
        minInvestment: 5000,
        returns: "5.4%",
        apy: 5.4,
        duration: "10 Years",
        riskLevel: "Low",
        tags: ["PSU Bond", "Tax Free", "Long Term"],
        network: "Ethereum",
        tokenAddress: "0x88B...TaxF",
        totalSupply: 25000,
        soldAmount: 24800, // Almost Sold Out
    },
    {
        id: "4",
        title: "Sovereign Gold Bond",
        type: "Gold",
        tokenSymbol: "SGB-2024-I",
        description: "Tokenized Gold Bond. Returns linked to gold price + 2.5% fixed interest.",
        minInvestment: 100,
        returns: "Gold + 2.5%",
        apy: 12.5, // Assumed historical avg
        duration: "8 Years",
        riskLevel: "Medium",
        tags: ["Gold", "Commodity", "Hedge"],
        network: "Polygon",
        tokenAddress: "0xGLD...2024",
        totalSupply: 10000,
        soldAmount: 6500,
    },
    {
        id: "5",
        title: "Green Energy bond",
        type: "G-Secs",
        tokenSymbol: "GRN-PWR-28",
        description: "Fund renewable energy projects. backed by IREDA.",
        minInvestment: 2000,
        returns: "7.1%",
        apy: 7.1,
        duration: "5 Years",
        riskLevel: "Low",
        tags: ["ESG", "Green", "PSU"],
        network: "Polygon",
        tokenAddress: "0xGRN...ENGY",
        totalSupply: 75000,
        soldAmount: 15000,
    }
];
