import missionPhoto from '../../assets/mission-photo.jpg'

const AboutSection = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-max px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="animate-fade-up">
            <div className="rounded-xl overflow-hidden shadow-glow">
              <img
                src={missionPhoto}
                alt="Children supported by FEED the CHILDREN TODAY programs"
                className="w-full h-96 object-cover"
              />
            </div>
            <p className="text-center text-sm text-foreground/50 mt-3">
              Children supported through our feeding programs
            </p>
          </div>

          {/* Text side */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="heading-md mb-6">Our Founder's Mission</h2>
            <p className="text-lg text-foreground/80 mb-4">
              Founded by Jordan Daniel, FEED the CHILDREN TODAY is dedicated to eliminating child hunger across the United States. What began as a simple belief that no child should go hungry has grown into a nationwide movement.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Through a fast, secure checkout that accepts cards, Apple Pay, and Google Pay, we've made it easier than ever for compassionate people like you to make a real difference in children's lives.
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