"use client"

import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useToast } from '@/components/toast'

const featuredDishes = [
  {
    id: 'dish-1',
    name: 'Prime Ribeye Steak',
    description: 'Perfectly grilled USDA Prime ribeye with herb butter and roasted garlic',
    price: 58,
    image: '/images/dish-1.png',
  },
  {
    id: 'dish-2',
    name: 'Butter Poached Lobster',
    description: 'Maine lobster tail with lemon butter sauce and microgreens',
    price: 72,
    image: '/images/dish-2.png',
  },
  {
    id: 'dish-3',
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with black truffle and aged Parmesan',
    price: 42,
    image: '/images/dish-3.png',
  },
  {
    id: 'dish-4',
    name: 'Pan-Seared Salmon',
    description: 'Wild-caught salmon with quinoa and seasonal vegetables',
    price: 46,
    image: '/images/dish-4.png',
  },
  {
    id: 'dish-5',
    name: 'Chocolate Lava Cake',
    description: 'Warm molten chocolate with vanilla bean ice cream',
    price: 18,
    image: '/images/dish-5.png',
  },
  {
    id: 'dish-6',
    name: 'Herb-Crusted Lamb',
    description: 'Mediterranean lamb chops with rosemary and mint sauce',
    price: 54,
    image: '/images/dish-6.png',
  },
]

export function FeaturedDishes() {
  const { addItem } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = (dish: typeof featuredDishes[0]) => {
    addItem({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      image: dish.image,
    })
    showToast(`${dish.name} added to cart`)
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Chef's Selection
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
              key={dish.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden bg-foreground/5">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-125"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 text-sm font-bold rounded-full shadow-lg shadow-primary/50 group-hover:shadow-xl group-hover:shadow-primary/80 transition-all duration-300">
                  ${dish.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {dish.name}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                  {dish.description}
                </p>
                <button
                  onClick={() => handleAddToCart(dish)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg group/btn"
                >
                  <ShoppingCart className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
