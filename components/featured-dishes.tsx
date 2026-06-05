import Image from 'next/image'

const featuredDishes = [
  {
    name: 'Prime Ribeye Steak',
    description: 'Perfectly grilled USDA Prime ribeye with herb butter and roasted garlic',
    price: '$58',
    image: '/images/dish-1.png',
  },
  {
    name: 'Butter Poached Lobster',
    description: 'Maine lobster tail with lemon butter sauce and microgreens',
    price: '$72',
    image: '/images/dish-2.png',
  },
  {
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with black truffle and aged Parmesan',
    price: '$42',
    image: '/images/dish-3.png',
  },
  {
    name: 'Pan-Seared Salmon',
    description: 'Wild-caught salmon with quinoa and seasonal vegetables',
    price: '$46',
    image: '/images/dish-4.png',
  },
  {
    name: 'Chocolate Lava Cake',
    description: 'Warm molten chocolate with vanilla bean ice cream',
    price: '$18',
    image: '/images/dish-5.png',
  },
  {
    name: 'Herb-Crusted Lamb',
    description: 'Mediterranean lamb chops with rosemary and mint sauce',
    price: '$54',
    image: '/images/dish-6.png',
  },
]

export function FeaturedDishes() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Chef&apos;s Selection
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            Featured Dishes
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Discover our most celebrated creations, each crafted with premium ingredients 
            and culinary expertise.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <div
              key={dish.name}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold">
                  {dish.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
