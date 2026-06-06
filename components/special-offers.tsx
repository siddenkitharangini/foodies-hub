import { Percent, Gift, Clock, Heart } from 'lucide-react'

const offers = [
  {
    icon: Percent,
    title: 'Weekend Brunch Special',
    description: 'Enjoy 20% off our signature brunch menu every Saturday and Sunday from 10 AM to 2 PM.',
    code: 'BRUNCH20',
    validUntil: 'Valid until June 30',
  },
  {
    icon: Gift,
    title: 'Birthday Celebration',
    description: 'Celebrate your special day with a complimentary dessert and a glass of champagne.',
    code: 'BIRTHDAY',
    validUntil: 'Show valid ID',
  },
  {
    icon: Clock,
    title: 'Early Bird Dinner',
    description: 'Book before 6 PM and receive 15% off your entire bill. Perfect for a relaxed evening.',
    code: 'EARLYBIRD',
    validUntil: 'Mon-Thu only',
  },
  {
    icon: Heart,
    title: 'Anniversary Celebration Package',
    description: 'Create unforgettable memories with our exclusive romantic dinner for two. Includes champagne toast and complimentary dessert.',
    code: 'ANNIVERSARY',
    validUntil: 'Advance booking required',
  },
]

export function SpecialOffers() {
  return (
    <section id="offers" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Exclusive Deals
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Special Offers
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Take advantage of our limited-time offers and make your dining experience 
            even more memorable.
          </p>
        </div>

        {/* Banner */}
        <div className="relative mb-16 p-6 sm:p-8 lg:p-12 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl border border-primary/30 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 text-center">
            <p className="text-primary text-xs sm:text-sm font-medium mb-2">LIMITED TIME</p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3 sm:mb-4">
              {"Chef's Tasting Menu"}
            </h3>
            <p className="text-foreground/70 max-w-lg mx-auto mb-4 sm:mb-6 text-sm sm:text-base">
              Experience a 7-course culinary journey with wine pairings selected by our sommelier. 
              Originally $250, now just $195 per person.
            </p>
            <span className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              Save $55 Per Person
            </span>
          </div>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className="group h-full p-8 bg-card rounded-xl border border-border hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                <offer.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {offer.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-6 font-light flex-grow">
                {offer.description}
              </p>
              <div className="flex flex-col gap-3 pt-4 border-t border-border/30">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full w-fit">
                  Code: {offer.code}
                </span>
                <span className="text-foreground/50 text-xs">
                  {offer.validUntil}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
