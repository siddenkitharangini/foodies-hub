"use client"

import Image from 'next/image'

const chefs = [
  {
    name: 'Marcus Laurent',
    role: 'Executive Chef',
    description: 'Over 20 years in Michelin-starred kitchens across Europe, bringing refined French technique with modern innovation.',
    image: '/images/chef-1.png',
    speciality: 'French Cuisine',
  },
  {
    name: 'Isabella Romano',
    role: 'Head Chef',
    description: 'Trained in Italy and Japan, masterfully blending Mediterranean flavors with Asian precision.',
    image: '/images/chef-2.png',
    speciality: 'Fusion Cuisine',
  },
  {
    name: 'David Chen',
    role: 'Pastry Chef',
    description: 'Award-winning pastry chef creating architectural dessert masterpieces with avant-garde presentation.',
    image: '/images/chef-3.png',
    speciality: 'Pastry Arts',
  },
  {
    name: 'Sophie Durand',
    role: 'Head Sommelier',
    description: 'Certified wine expert with 15+ years selecting the world\'s finest wines. Perfect pairings for every dish.',
    image: '/images/chef-4.png',
    speciality: 'Wine Expertise',
  },
]

export function ChefShowcase() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Culinary Masters
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            Meet Our Chefs
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Behind every exceptional dish is a passionate chef. Meet the talented individuals 
            who bring their expertise and creativity to your table.
          </p>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <div
              key={chef.name}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                    {chef.speciality}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-0.5 group-hover:text-primary transition-colors duration-300">
                  {chef.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">{chef.role}</p>
                <p className="text-foreground/60 text-sm leading-relaxed flex-grow">
                  {chef.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
