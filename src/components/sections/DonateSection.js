import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
const DonateSection = () => {
    const [activeTab, setActiveTab] = useState('gifts');
    const [amount, setAmount] = useState('50');
    const [copied, setCopied] = useState(false);
    const presetAmounts = [10, 25, 50, 100];
    const cryptoWallets = {
        bitcoin: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
        ethereum: '0x1234567890123456789012345678901234567890',
        usdc: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    };
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const handleDonate = () => {
        alert(`Thank you for your donation of $${amount}! This is a demo - no actual payment was processed.`);
    };
    return (_jsx("section", { id: "donate", className: "section bg-gradient-warm", children: _jsxs("div", { className: "container-max px-4", children: [_jsx("h2", { className: "heading-md text-center mb-12 animate-fade-up", children: "Make a Donation" }), _jsxs("div", { className: "max-w-2xl mx-auto bg-white rounded-xl shadow-glow p-8 animate-fade-up", children: [_jsxs("div", { className: "mb-8", children: [_jsx("label", { className: "block text-sm font-semibold mb-4", children: "Select Amount" }), _jsx("div", { className: "grid grid-cols-4 gap-3 mb-4", children: presetAmounts.map((preset) => (_jsxs("button", { onClick: () => setAmount(preset.toString()), className: `py-3 rounded-lg font-semibold transition-all ${amount === preset.toString()
                                            ? 'bg-primary text-primary-foreground shadow-warm'
                                            : 'bg-muted text-foreground hover:bg-accent'}`, children: ["$", preset] }, preset))) }), _jsxs("div", { className: "flex gap-2", children: [_jsx("span", { className: "text-lg font-semibold", children: "$" }), _jsx("input", { type: "number", value: amount, onChange: (e) => setAmount(e.target.value), placeholder: "Custom amount", className: "flex-1 px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" })] })] }), _jsxs("div", { className: "mb-8", children: [_jsx("div", { className: "flex gap-4 border-b border-muted mb-6", children: ['gifts', 'apple', 'crypto'].map((tab) => (_jsxs("button", { onClick: () => setActiveTab(tab), className: `pb-4 font-semibold transition-colors ${activeTab === tab
                                            ? 'text-primary border-b-2 border-primary'
                                            : 'text-foreground/50 hover:text-foreground'}`, children: [tab === 'gifts' && 'Gift Cards', tab === 'apple' && 'Apple Pay', tab === 'crypto' && 'Cryptocurrency'] }, tab))) }), activeTab === 'gifts' && (_jsxs("div", { className: "space-y-4", children: [_jsx("input", { type: "text", placeholder: "Enter gift card code", className: "w-full px-4 py-2 border border-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" }), _jsx("p", { className: "text-sm text-foreground/60", children: "Accepted: Apple, Amazon, Google Play" })] })), activeTab === 'apple' && (_jsxs("div", { className: "text-center py-6", children: [_jsx("button", { className: "btn-primary mx-auto", children: "Pay with Apple Pay" }), _jsx("p", { className: "text-sm text-foreground/60 mt-4", children: "Click to open Apple Pay on your device" })] })), activeTab === 'crypto' && (_jsx("div", { className: "space-y-4", children: Object.entries(cryptoWallets).map(([coin, address]) => (_jsxs("div", { className: "bg-muted rounded-lg p-4", children: [_jsx("label", { className: "block text-sm font-semibold mb-2 capitalize", children: coin }), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "text", value: address, readOnly: true, className: "flex-1 px-3 py-2 bg-background rounded border border-background text-xs overflow-hidden" }), _jsx("button", { onClick: () => handleCopy(address), className: "btn-primary flex items-center gap-2 text-sm px-4", children: copied ? _jsx(Check, { size: 16 }) : _jsx(Copy, { size: 16 }) })] })] }, coin))) }))] }), _jsxs("button", { onClick: handleDonate, className: "btn-primary w-full text-lg py-4", children: ["Donate $", amount] }), _jsx("p", { className: "text-center text-sm text-foreground/50 mt-4", children: "This is a demo. No actual payment will be processed." })] })] }) }));
};
export default DonateSection;
