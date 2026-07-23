import { Gift, CreditCard, Heart } from 'lucide-react'

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
  ]

  return (
    <section id="how-it-works" className="section bg-gradient-warm">
      <div className="container-max px-4">
        <h2 className="heading-md text-center mb-12 animate-fade-up">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="card animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-lg mb-4 mx-auto">
                  <Icon className="text-primary-foreground" size={32} />
                </div>
                <div className="text-center">
                  <h3 className="heading-sm mb-3 flex items-center justify-center">
                    <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm font-bold">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection