import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TestimonialsSection = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            city: 'New York, NY',
            initials: 'SJ',
            quote: 'Donating through FEED has made it so easy to help. Knowing my contribution directly feeds a hungry child makes me donate monthly.',
        },
        {
            name: 'Marcus Williams',
            city: 'Los Angeles, CA',
            initials: 'MW',
            quote: 'Being able to donate with crypto feels modern and transparent. I trust Jordan\'s mission completely.',
        },
        {
            name: 'Emma Chen',
            city: 'Chicago, IL',
            initials: 'EC',
            quote: 'The impact report showed my $25 donation fed 5 children for a week. That changed my perspective on giving.',
        },
    ];
    return (_jsx("section", { className: "section bg-background", children: _jsxs("div", { className: "container-max px-4", children: [_jsx("h2", { className: "heading-md text-center mb-12 animate-fade-up", children: "What Donors Say" }), _jsx("div", { className: "grid md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => (_jsxs("div", { className: "card animate-fade-up", style: { animationDelay: `${index * 0.2}s` }, children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx("div", { className: "w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold", children: testimonial.initials }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold", children: testimonial.name }), _jsx("p", { className: "text-sm text-foreground/60", children: testimonial.city })] })] }), _jsxs("p", { className: "text-foreground/80 italic", children: ["\\\"$", testimonial.quote, "\\\""] })] }, index))) })] }) }));
};
export default TestimonialsSection;
