const ImpactSection = () => {
  const stats = [
    { label: '250,000+', description: 'Meals Served' },
    { label: '15,000+', description: 'Children Fed' },
    { label: '48', description: 'States Reached' },
    { label: '5,000+', description: 'Active Donors' },
  ]

  return (
    <section id="impact" className="section bg-background">
      <div className="container-max px-4">
        <h2 className="heading-md text-center mb-12 animate-fade-up">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.label}
              </div>
              <p className="text-foreground/70 text-sm md:text-base">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="bg-muted rounded-xl p-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="heading-sm mb-4">2024 Fundraising Goal</h3>
          <div className="w-full bg-background rounded-full h-4 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-secondary w-3/4 rounded-full transition-all duration-1000"></div>
          </div>
          <p className="text-foreground/70 mt-4 text-sm">
            We've reached 75% of our $500,000 goal. Your donation brings us closer to feeding every hungry child in America.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection