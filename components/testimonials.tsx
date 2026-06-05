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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 text-lg leading-relaxed mb-8 italic">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
