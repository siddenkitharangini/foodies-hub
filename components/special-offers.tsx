import { Percent, Gift, Clock } from 'lucide-react'

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
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            Special Offers
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Take advantage of our limited-time offers and make your dining experience 
            even more memorable.
          </p>
        </div>

        {/* Banner */}
        <div className="relative mb-16 p-8 sm:p-12 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-lg border border-primary/30 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 text-center">
            <p className="text-primary text-sm font-medium mb-2">LIMITED TIME</p>
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
              {"Chef's Tasting Menu"}
            </h3>
            <p className="text-foreground/70 max-w-lg mx-auto mb-6">
              Experience a 7-course culinary journey with wine pairings selected by our sommelier. 
              Originally $250, now just $195 per person.
            </p>
            <span className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium">
              Save $55 Per Person
            </span>
          </div>
        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <offer.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {offer.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                {offer.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
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
