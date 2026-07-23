import { ArrowRight, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [meals, setMeals] = useState(0)
  const [children, setChildren] = useState(0)
  const [donors, setDonors] = useState(0)

  useEffect(() => {
    // Animated counters
    const mealTarget = 250000
    const childrenTarget = 15000
    const donorsTarget = 5000

    const interval = setInterval(() => {
      setMeals((prev) => (prev < mealTarget ? prev + 2500 : mealTarget))
      setChildren((prev) => (prev < childrenTarget ? prev + 150 : childrenTarget))
      setDonors((prev) => (prev < donorsTarget ? prev + 50 : donorsTarget))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative container-max px-4 py-16 text-center z-10">
        <div className="animate-fade-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="text-primary" size={32} />
            <span className="text-primary font-semibold">Join Our Mission</span>
          </div>
          <h1 className="heading-lg mb-4 text-white drop-shadow-lg">
            Every Child Deserves a Full Plate
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md max-w-3xl mx-auto">
            Join Jordan Daniel's mission to end child hunger in the USA
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <a href="#donate" className="btn-primary flex items-center justify-center gap-2">
            Donate Now <ArrowRight size={20} />
          </a>
          <a href="#about" className="btn-outline">
            Learn More
          </a>
        </div>

        {/* Stats Ticker */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-secondary mb-2">
              {meals.toLocaleString()}
            </div>
            <p className="text-white/80">Meals Served</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-secondary mb-2">
              {children.toLocaleString()}
            </div>
            <p className="text-white/80">Children Fed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-secondary mb-2">
              {donors.toLocaleString()}
            </div>
            <p className="text-white/80">Donors Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection