import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
const HeroSection = () => {
    const [meals, setMeals] = useState(0);
    const [children, setChildren] = useState(0);
    const [donors, setDonors] = useState(0);
    useEffect(() => {
        // Animated counters
        const mealTarget = 250000;
        const childrenTarget = 15000;
        const donorsTarget = 5000;
        const interval = setInterval(() => {
            setMeals((prev) => (prev < mealTarget ? prev + 2500 : mealTarget));
            setChildren((prev) => (prev < childrenTarget ? prev + 150 : childrenTarget));
            setDonors((prev) => (prev < donorsTarget ? prev + 50 : donorsTarget));
        }, 50);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("section", { className: "relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20", children: [_jsx("div", { className: "absolute inset-0 bg-black/20" }), _jsxs("div", { className: "relative container-max px-4 py-16 text-center z-10", children: [_jsxs("div", { className: "animate-fade-up", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 mb-6", children: [_jsx(Heart, { className: "text-primary", size: 32 }), _jsx("span", { className: "text-primary font-semibold", children: "Join Our Mission" })] }), _jsx("h1", { className: "heading-lg mb-4 text-white drop-shadow-lg", children: "Every Child Deserves a Full Plate" }), _jsx("p", { className: "text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md max-w-3xl mx-auto", children: "Join Jordan Daniel's mission to end child hunger in the USA" })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up", style: { animationDelay: '0.2s' }, children: [_jsxs("a", { href: "#donate", className: "btn-primary flex items-center justify-center gap-2", children: ["Donate Now ", _jsx(ArrowRight, { size: 20 })] }), _jsx("a", { href: "#about", className: "btn-outline", children: "Learn More" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up", style: { animationDelay: '0.4s' }, children: [_jsxs("div", { className: "bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20", children: [_jsx("div", { className: "text-4xl font-bold text-secondary mb-2", children: meals.toLocaleString() }), _jsx("p", { className: "text-white/80", children: "Meals Served" })] }), _jsxs("div", { className: "bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20", children: [_jsx("div", { className: "text-4xl font-bold text-secondary mb-2", children: children.toLocaleString() }), _jsx("p", { className: "text-white/80", children: "Children Fed" })] }), _jsxs("div", { className: "bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20", children: [_jsx("div", { className: "text-4xl font-bold text-secondary mb-2", children: donors.toLocaleString() }), _jsx("p", { className: "text-white/80", children: "Donors Worldwide" })] })] })] })] }));
};
export default HeroSection;
