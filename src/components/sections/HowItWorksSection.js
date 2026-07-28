import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Gift, CreditCard, Heart } from 'lucide-react';
const HowItWorksSection = () => {
    const steps = [
        {
            icon: Gift,
            title: 'Choose an Amount',
            description: 'Select from preset amounts or create a custom donation that fits your budget.',
        },
        {
            icon: CreditCard,
            title: 'Select Payment Method',
            description: 'Use gift cards, Apple Pay, or cryptocurrency for easy and secure donations.',
        },
        {
            icon: Heart,
            title: 'Change a Life',
            description: 'Your donation directly provides meals to hungry children across the USA.',
        },
    ];
    return (_jsx("section", { id: "how-it-works", className: "section bg-gradient-warm", children: _jsxs("div", { className: "container-max px-4", children: [_jsx("h2", { className: "heading-md text-center mb-12 animate-fade-up", children: "How It Works" }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: steps.map((step, index) => {
                        const Icon = step.icon;
                        return (_jsxs("div", { className: "card animate-fade-up", style: { animationDelay: `${index * 0.2}s` }, children: [_jsx("div", { className: "flex items-center justify-center w-16 h-16 bg-primary rounded-lg mb-4 mx-auto", children: _jsx(Icon, { className: "text-primary-foreground", size: 32 }) }), _jsxs("div", { className: "text-center", children: [_jsxs("h3", { className: "heading-sm mb-3 flex items-center justify-center", children: [_jsx("span", { className: "bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm font-bold", children: index + 1 }), step.title] }), _jsx("p", { className: "text-foreground/70", children: step.description })] })] }, index));
                    }) })] }) }));
};
export default HowItWorksSection;
