import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ImpactSection = () => {
    const stats = [
        { label: '250,000+', description: 'Meals Served' },
        { label: '15,000+', description: 'Children Fed' },
        { label: '48', description: 'States Reached' },
        { label: '5,000+', description: 'Active Donors' },
    ];
    return (_jsx("section", { id: "impact", className: "section bg-background", children: _jsxs("div", { className: "container-max px-4", children: [_jsx("h2", { className: "heading-md text-center mb-12 animate-fade-up", children: "Our Impact" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-12", children: stats.map((stat, index) => (_jsxs("div", { className: "text-center animate-fade-up", style: { animationDelay: `${index * 0.1}s` }, children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-primary mb-2", children: stat.label }), _jsx("p", { className: "text-foreground/70 text-sm md:text-base", children: stat.description })] }, index))) }), _jsxs("div", { className: "bg-muted rounded-xl p-8 max-w-2xl mx-auto animate-fade-up", style: { animationDelay: '0.4s' }, children: [_jsx("h3", { className: "heading-sm mb-4", children: "2024 Fundraising Goal" }), _jsx("div", { className: "w-full bg-background rounded-full h-4 overflow-hidden", children: _jsx("div", { className: "h-full bg-gradient-to-r from-primary to-secondary w-3/4 rounded-full transition-all duration-1000" }) }), _jsx("p", { className: "text-foreground/70 mt-4 text-sm", children: "We've reached 75% of our $500,000 goal. Your donation brings us closer to feeding every hungry child in America." })] })] }) }));
};
export default ImpactSection;
