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
      quote: 'Checking out with Apple Pay took seconds. I trust Jordan\'s mission completely.',
    },
    {
      name: 'Emma Chen',
      city: 'Chicago, IL',
      initials: 'EC',
      quote: 'The impact report showed my $25 donation fed 5 children for a week. That changed my perspective on giving.',
    },
  ]

  return (
    <section className="section bg-background">
      <div className="container-max px-4">
        <h2 className="heading-md text-center mb-12 animate-fade-up">What Donors Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.city}</p>
                </div>
              </div>
              <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection