import Navbar from './components/Navbar'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import ImpactSection from './components/sections/ImpactSection'
import DonateSection from './components/sections/DonateSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import FooterSection from './components/sections/FooterSection'

function App() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <ImpactSection />
      <DonateSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  )
}

export default App