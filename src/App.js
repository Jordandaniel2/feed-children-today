import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import HowItWorksSection from './components/sections/HowItWorksSection';
import ImpactSection from './components/sections/ImpactSection';
import DonateSection from './components/sections/DonateSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FooterSection from './components/sections/FooterSection';
function App() {
    return (_jsxs("div", { className: "bg-background text-foreground", children: [_jsx(Navbar, {}), _jsx(HeroSection, {}), _jsx(AboutSection, {}), _jsx(HowItWorksSection, {}), _jsx(ImpactSection, {}), _jsx(DonateSection, {}), _jsx(TestimonialsSection, {}), _jsx(FooterSection, {})] }));
}
export default App;
