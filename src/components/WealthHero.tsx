"use client";
import { getCurrentUser, User, users as defaultUsers, updateUserBalance } from "@/data/users";
import { useEffect, useState } from "react";

declare global {
    interface Window {
        ethereum?: any;
    }
}

const SEPOLIA_CHAIN_ID = '0xaa36a7'; // 11155111 decimal

export default function WealthHero() {
    const [user, setUser] = useState<User>(defaultUsers[0]);
    const [isConnecting, setIsConnecting] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [chainId, setChainId] = useState<string | null>(null);

    useEffect(() => {
        const refreshUser = () => setUser(getCurrentUser());
        refreshUser();

        // Check if already connected
        const checkConnection = async () => {
            if (typeof window.ethereum !== 'undefined') {
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                }
                const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
                setChainId(currentChainId);

                // Listen for chain changes
                window.ethereum.on('chainChanged', (newChainId: string) => {
                    setChainId(newChainId);
                });

                // Listen for account changes
                window.ethereum.on('accountsChanged', (accounts: string[]) => {
                    setWalletAddress(accounts.length > 0 ? accounts[0] : null);
                });
            }
        };
        checkConnection();
    }, []);

    const switchNetwork = async () => {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: SEPOLIA_CHAIN_ID }],
            });
        } catch (switchError: any) {
            // If the chain hasn't been added to MetaMask
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            chainId: SEPOLIA_CHAIN_ID,
                            chainName: 'Ethereum Sepolia Testnet',
                            nativeCurrency: { name: 'SepoliaETH', symbol: 'ETH', decimals: 18 },
                            rpcUrls: ['https://rpc.sepolia.org'],
                            blockExplorerUrls: ['https://sepolia.etherscan.io']
                        }],
                    });
                } catch (addError) {
                    console.error("Could not add network", addError);
                }
            }
        }
    };

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                setIsConnecting(true);
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });

                setWalletAddress(accounts[0]);
                setChainId(currentChainId);

                if (currentChainId !== SEPOLIA_CHAIN_ID) {
                    const confirmSwitch = confirm("Please switch to Ethereum Sepolia Testnet for this prototype.");
                    if (confirmSwitch) await switchNetwork();
                }

                alert("Wallet Connected: " + accounts[0]);
            } catch (error) {
                console.error("User denied account access", error);
            } finally {
                setIsConnecting(false);
            }
        } else {
            alert("MetaMask not found. Please install MetaMask to add funds via crypto.");
            window.open('https://metamask.io/download/', '_blank');
        }
    };

    const handleAddFunds = async () => {
        if (!walletAddress) {
            connectWallet();
            return;
        }

        if (chainId !== SEPOLIA_CHAIN_ID) {
            await switchNetwork();
            return;
        }

        const amountStr = prompt("Enter amount to add (Testnet Simulation):", "1000");
        const amount = Number(amountStr);

        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount");
            return;
        }

        // Mock Transaction
        setIsConnecting(true);
        setTimeout(() => {
            const updatedUser = updateUserBalance(amount);
            if (updatedUser) {
                setUser(updatedUser);
                alert(`Success! ₹${amount} added after validating on Ethereum Sepolia.`);
            } else {
                alert("Only registered accounts can add funds. Please log in with a new account.");
            }
            setIsConnecting(false);
        }, 1500);
    };

    const formatAddress = (addr: string) => {
        return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
    };

    return (
        <section className="relative overflow-hidden rounded-2xl bg-[#1e2b1a] border border-[#2c3928] p-8 group">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[#a3b99d] mb-1">
                        <span className="material-symbols-outlined text-[18px]">token</span>
                        <span className="text-sm font-medium uppercase tracking-wider">Token Portfolio Value</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight flex items-baseline gap-1">
                        <span className="text-3xl md:text-4xl font-bold text-[#a3b99d]">₹</span>{user.tokenBalanceValue?.toLocaleString('en-IN') || 0}
                    </h1>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-[#a3b99d] uppercase font-bold tracking-widest">Available Balance</span>
                            <span className="text-white font-bold text-lg">₹{user.accountBalance?.toLocaleString('en-IN') || 0}</span>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-[#2c3928] mx-2"></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-[#a3b99d] uppercase font-bold tracking-widest">Network Status</span>
                            <span className="text-sm font-bold flex items-center gap-1.5 mt-0.5">
                                {chainId === SEPOLIA_CHAIN_ID ? (
                                    <span className="text-primary flex items-center gap-1.5">
                                        <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                                        Sepolia Testnet (Verified)
                                    </span>
                                ) : (
                                    <span className="text-red-400 flex items-center gap-1.5">
                                        <span className="size-2 rounded-full bg-red-400"></span>
                                        {walletAddress ? "Switch to Sepolia" : "Wallet Disconnected"}
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-3 w-full md:w-auto">
                    {walletAddress && (
                        <div className="flex items-center gap-3 bg-[#142210] border border-[#2c3928] px-4 py-2 rounded-full shadow-sm">
                            <div className="flex flex-col items-end">
                                <span className="text-[#a3b99d] text-[10px] font-bold">CONNECTED WALLET</span>
                                <span className="text-white text-xs font-mono">{formatAddress(walletAddress)}</span>
                            </div>
                            <div className="size-8 rounded-full bg-gradient-to-tr from-primary to-emerald-600 flex items-center justify-center text-black">
                                <span className="material-symbols-outlined text-[20px]">verified</span>
                            </div>
                        </div>
                    )}

                    <div className="flex gap-3 w-full md:w-auto">
                        {!walletAddress ? (
                            <button
                                onClick={connectWallet}
                                className="flex-1 md:flex-none h-12 px-8 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                                Connect Wallet
                            </button>
                        ) : (
                            <button className="flex-1 md:flex-none h-12 px-6 bg-[#2c3928] hover:bg-[#3a4b35] text-white rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">history</span>
                                History
                            </button>
                        )}
                        <button
                            onClick={handleAddFunds}
                            disabled={isConnecting}
                            className="flex-1 md:flex-none h-12 px-8 bg-primary hover:bg-primary-dark text-black rounded-full font-bold text-sm transition-all shadow-[0_0_15px_rgba(70,236,19,0.3)] hover:shadow-[0_0_25px_rgba(70,236,19,0.5)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            {isConnecting ? "TX PENDING..." : "ADD FUNDS"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#142210] p-4 rounded-xl border border-[#2c3928]">
                    <p className="text-[#a3b99d] text-[10px] uppercase font-bold mb-1">Total Yield</p>
                    <p className="text-white font-bold text-lg">+12.4%</p>
                </div>
                <div className="bg-[#142210] p-4 rounded-xl border border-[#2c3928]">
                    <p className="text-[#a3b99d] text-[10px] uppercase font-bold mb-1">Avg APY</p>
                    <p className="text-white font-bold text-lg">7.4%</p>
                </div>
            </div>
        </section>
    );
}
