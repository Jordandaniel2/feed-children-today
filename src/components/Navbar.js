import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Impact', href: '#impact' },
        { label: 'Donate', href: '#donate' },
        { label: 'Contact', href: '#contact' },
    ];
    return (_jsxs("nav", { className: "sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted shadow-warm", children: [_jsxs("div", { className: "container-max px-4 py-4 flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-10 h-10 bg-primary rounded-lg flex items-center justify-center", children: _jsx("span", { className: "text-primary-foreground font-bold", children: "F" }) }), _jsx("h1", { className: "font-bold text-lg hidden sm:block", children: "FEED the CHILDREN TODAY" })] }), _jsxs("div", { className: "hidden md:flex items-center gap-8", children: [navLinks.map((link) => (_jsx("a", { href: link.href, className: "text-sm font-medium hover:text-primary transition-colors", children: link.label }, link.label))), _jsx("button", { className: "btn-primary text-sm", children: "Donate" })] }), _jsx("button", { className: "md:hidden", onClick: () => setIsOpen(!isOpen), "aria-label": "Toggle menu", children: isOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), isOpen && (_jsxs("div", { className: "md:hidden bg-background border-t border-muted p-4 flex flex-col gap-4", children: [navLinks.map((link) => (_jsx("a", { href: link.href, className: "text-sm font-medium hover:text-primary transition-colors", onClick: () => setIsOpen(false), children: link.label }, link.label))), _jsx("button", { className: "btn-primary w-full", children: "Donate" })] }))] }));
};
export default Navbar;
