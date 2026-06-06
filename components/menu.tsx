"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingCart, Plus } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useToast } from '@/components/toast'

const menuCategories = [
  {
    name: 'Starters',
    items: [
      { id: 'starter-1', name: 'Truffle Mushroom Soup', description: 'Wild mushroom soup with truffle oil and croutons', price: 16, image: '/images/starter-1.png' },
      { id: 'starter-2', name: 'Tuna Tartare', description: 'Fresh ahi tuna with avocado, sesame, and citrus ponzu', price: 22, image: '/images/starter-2.png' },
      { id: 'starter-3', name: 'Burrata Caprese', description: 'Creamy burrata with heirloom tomatoes and basil pesto', price: 18, image: '/images/starter-3.png' },
      { id: 'starter-4', name: 'Seared Scallops', description: 'Pan-seared scallops with cauliflower purée and bacon', price: 26, image: '/images/starter-4.png' },
    ],
  },
  {
    name: 'Main Course',
    items: [
      { id: 'main-1', name: 'Wagyu Beef Tenderloin', description: 'A5 Wagyu with truffle jus and potato gratin', price: 125, image: '/images/main-1.png' },
      { id: 'main-2', name: 'Chilean Sea Bass', description: 'Miso-glazed sea bass with bok choy and ginger', price: 58, image: '/images/main-2.png' },
      { id: 'main-3', name: 'Duck Confit', description: 'Slow-cooked duck leg with cherry reduction and wild rice', price: 48, image: '/images/main-3.png' },
      { id: 'main-4', name: 'Grilled Filet Mignon', description: '8oz center-cut filet with peppercorn sauce', price: 62, image: '/images/main-4.png' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { id: 'dessert-1', name: 'Crème Brûlée', description: 'Classic vanilla bean custard with caramelized sugar', price: 14, image: '/images/dessert-1.png' },
      { id: 'dessert-2', name: 'Tiramisu', description: 'Espresso-soaked ladyfingers with mascarpone cream', price: 14, image: '/images/dessert-2.png' },
      { id: 'dessert-3', name: 'Chocolate Soufflé', description: 'Warm chocolate soufflé with raspberry coulis', price: 16, image: '/images/dessert-3.png' },
      { id: 'dessert-4', name: 'Seasonal Fruit Tart', description: 'Buttery pastry with pastry cream and fresh fruits', price: 12, image: '/images/dessert-4.png' },
    ],
  },
  {
    name: 'Beverages',
    items: [
      { id: 'beverage-1', name: 'Signature Cocktails', description: 'House-crafted cocktails by our mixologist', price: 18, image: '/images/beverage-1.png' },
      { id: 'beverage-2', name: 'Premium Wine Selection', description: 'Curated wines from renowned vineyards', price: 15, image: '/images/beverage-2.png' },
      { id: 'beverage-3', name: 'Artisan Coffee', description: 'Single-origin espresso drinks', price: 6, image: '/images/beverage-3.png' },
      { id: 'beverage-4', name: 'Fresh Pressed Juices', description: 'Seasonal fruits and vegetables', price: 8, image: '/images/beverage-4.png' },
    ],
  },
]

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('Starters')
  const { addItem } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = (item: { id: string; name: string; price: number; image: string }) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
    showToast(`${item.name} added to cart`)
  }

  return (
    <section id="menu" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Our Offerings
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            The Menu
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            A carefully curated selection of dishes that celebrate the finest ingredients 
            and culinary traditions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                activeCategory === category.name
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'bg-card text-foreground/70 hover:text-primary border border-border hover:border-primary/50 hover:shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {menuCategories
            .filter((category) => category.name === activeCategory)
            .map((category) =>
              category.items.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-foreground/5">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-full shadow-lg shadow-primary/50 group-hover:shadow-xl group-hover:shadow-primary/80 transition-all duration-300">
                      ${item.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-base font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-foreground/70 text-xs leading-relaxed mb-4 line-clamp-2 font-light">
                      {item.description}
                    </p>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary/10 text-primary text-sm font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg group/btn"
                    >
                      <Plus className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            )}
        </div>
      </div>
    </section>
  )
}
