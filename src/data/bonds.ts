export type BondType = 'T-Bills' | 'G-Secs' | 'SDLs';

export interface Bond {
    id: string;
    title: string;
    type: BondType;
    description: string;
    yield: string;
    maturity: string;
    minInvestment: string;
    icon: string; // Material symbol name
    accentColor: string; // Tailwind color class for icon background/text
    tagColor: string; // Tailwind classes for the tag
    gradientFrom: string; // Hex color for gradient start
    gradientTo: string; // Hex color for gradient end
    backgroundImage?: string; // Optional background image
    stateName?: string; // Optional state name for SDLs
}

export const bondData: Bond[] = [
    {
        id: 'starter-pack',
        title: 'The Starter Pack',
        type: 'T-Bills',
        description: 'Perfect for beginners. Short duration treasury bills that mature in just 3 months.',
        yield: '6.8%',
        maturity: '91 Days',
        minInvestment: '₹100',
        icon: 'rocket_launch',
        accentColor: 'text-[#46ec13]',
        tagColor: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
        gradientFrom: '#1e271c',
        gradientTo: '#2c3928',
        backgroundImage: 'radial-gradient(#46ec13 1px, transparent 1px)'
    },
    {
        id: 'long-term-giant',
        title: 'The Long-Term Giant',
        type: 'G-Secs',
        description: 'Lock in high interest rates for a decade. Ideal for long-term goal planning.',
        yield: '7.2%',
        maturity: '10 Years',
        minInvestment: '₹100',
        icon: 'savings',
        accentColor: 'text-[#46ec13]',
        tagColor: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
        gradientFrom: '#1e271c',
        gradientTo: '#2c3928'
    },
    {
        id: 'state-growth',
        title: 'State Growth',
        type: 'SDLs',
        description: 'Support state development projects and earn higher yields than central bonds.',
        yield: '7.6%',
        maturity: '7 Years',
        minInvestment: '₹100',
        icon: 'apartment',
        accentColor: 'text-[#46ec13]',
        tagColor: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
        gradientFrom: '#1e271c',
        gradientTo: '#2c3928',
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M50 0 L100 50 L50 100 L0 50 Z\\' fill=\\'rgba(70, 236, 19, 0.05)\\' /%3E%3C/svg%3E')",
        stateName: 'Maharashtra'
    }
];
