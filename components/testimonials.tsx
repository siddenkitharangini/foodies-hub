import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Food Critic, The Daily Gazette',
    content: "An extraordinary dining experience that transcends expectations. The attention to detail in every dish is remarkable, and the ambiance is simply unmatched in the city.",
    rating: 5,
    initials: 'SM',
  },
  {
    name: 'James Chen',
    role: 'Regular Guest',
    content: "My wife and I have been coming here for our anniversaries for the past five years. The consistency in quality and service is what keeps us coming back.",
    rating: 5,
    initials: 'JC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Travel Blogger',
    content: "I've dined at restaurants around the world, and Foodie's Hub stands among the best. The truffle risotto alone is worth the trip.",
    rating: 5,
    initials: 'ER',
  },
  {
    name: 'Michael Thompson',
    role: 'Business Executive',
    content: "Perfect for business dinners. The private dining room is elegant, the service is impeccable, and the wine selection is outstanding.",
    rating: 5,
    initials: 'MT',
  },
  {
    name: 'Victoria Laurent',
    role: 'Michelin Guide Inspector',
    content: "A masterclass in culinary excellence. Every course demonstrates remarkable technical skill and creative vision. The sommelier team is world-class.",
    rating: 5,
    initials: 'VL',
  },
  {
    name: 'David Westbrook',
    role: 'Celebrity Chef',
    content: "I rarely give praise publicly, but this kitchen deserves recognition. The execution is flawless, and the flavors are transcendent. Bravo to the entire team.",
    rating: 5,
    initials: 'DW',
  },
  {
    name: 'Priya Kapoor',
    role: 'Luxury Travel Editor',
    content: "For those seeking the pinnacle of fine dining, look no further. Every detail from ambiance to service to cuisine is perfection. A destination dining experience.",
    rating: 5,
    initials: 'PK',
  },
  {
    name: 'Alexander Pierce',
    role: 'Culinary Arts Professor',
    content: "A rare gem where tradition meets innovation. The menu shows deep respect for classical techniques while embracing contemporary creativity. Truly special.",
    rating: 5,
    initials: 'AP',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Guest Experiences
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            What Our Guests Say
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            {"Don't just take our word for it. Hear from our valued guests about their memorable experiences at Foodie's Hub."}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: `fade-in-up 0.6s ease-out forwards`,
              }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic line-clamp-4">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-xs">
                    {testimonial.initials}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-foreground text-sm truncate">{testimonial.name}</h4>
                  <p className="text-foreground/60 text-xs truncate">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
