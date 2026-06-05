"use client"

import Image from 'next/image'
import { ShoppingCart, Award, Flame, Sparkles } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useToast } from '@/components/toast'
import { useInView } from '@/lib/use-in-view'

type Badge = 'chef-special' | 'best-seller' | 'new'

const featuredDishes = [
  {
    id: 'dish-1',
    name: 'Prime Ribeye Steak',
    description: 'Perfectly grilled USDA Prime ribeye with herb butter and roasted garlic',
    price: 58,
    image: '/images/dish-1.png',
    badge: 'chef-special' as Badge,
  },
  {
    id: 'dish-2',
    name: 'Butter Poached Lobster',
    description: 'Maine lobster tail with lemon butter sauce and microgreens',
    price: 72,
    image: '/images/dish-2.png',
    badge: 'best-seller' as Badge,
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
    badge: 'new' as Badge,
  },
  {
    id: 'dish-5',
    name: 'Chocolate Lava Cake',
    description: 'Warm molten chocolate with vanilla bean ice cream',
    price: 18,
    image: '/images/dish-5.png',
    badge: 'best-seller' as Badge,
  },
  {
    id: 'dish-6',
    name: 'Herb-Crusted Lamb',
    description: 'Mediterranean lamb chops with rosemary and mint sauce',
    price: 54,
    image: '/images/dish-6.png',
  },
]

const badgeConfig = {
  'chef-special': { label: "Chef's Special", icon: Award, className: 'bg-primary/90 text-primary-foreground' },
  'best-seller': { label: 'Best Seller', icon: Flame, className: 'bg-orange-500 text-white' },
  'new': { label: 'New', icon: Sparkles, className: 'bg-green-500 text-white' },
}

export function FeaturedDishes() {
  const { addItem } = useCart()
  const { showToast } = useToast()
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

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
    <section ref={ref} className="py-24 bg-background">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            {"Chef's Selection"}
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
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold rounded">
                  ${dish.price}
                </div>
                {dish.badge && (
                  <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded flex items-center gap-1.5 ${badgeConfig[dish.badge].className}`}>
                    {(() => {
                      const Icon = badgeConfig[dish.badge].icon
                      return <Icon className="w-3 h-3" />
                    })()}
                    {badgeConfig[dish.badge].label}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
                <button
                  onClick={() => handleAddToCart(dish)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <ShoppingCart className="w-4 h-4" />
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
