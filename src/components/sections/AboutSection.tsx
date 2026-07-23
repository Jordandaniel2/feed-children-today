const AboutSection = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-max px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="animate-fade-up">
            <div className="bg-gradient-warm rounded-xl overflow-hidden shadow-glow h-96 flex items-center justify-center">
              <div className="text-center text-foreground/30">
                <p className="text-xl font-semibold">Jordan Daniel</p>
                <p className="text-sm mt-2">Founder, FEED the CHILDREN TODAY</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="heading-md mb-6">Our Founder's Mission</h2>
            <p className="text-lg text-foreground/80 mb-4">
              Founded by Jordan Daniel, FEED the CHILDREN TODAY is dedicated to eliminating child hunger across the United States. What began as a simple belief that no child should go hungry has grown into a nationwide movement.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Through innovative donation methods including gift cards, Apple Pay, and cryptocurrencies, we've made it easier than ever for compassionate people like you to make a real difference in children's lives.
            </p>
            <div className="bg-muted rounded-xl p-6 border-l-4 border-primary">
              <p className="text-foreground font-semibold italic">
                "Every donation, no matter the size, ensures that a child wakes up to a nutritious meal. That's the future we're building."
              </p>
              <p className="text-foreground/60 mt-3">— Jordan Daniel, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection