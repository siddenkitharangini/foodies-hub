"use client"

import { useState } from 'react'
import { ShoppingCart, Plus } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useToast } from '@/components/toast'

const menuCategories = [
  {
    name: 'Starters',
    items: [
      { id: 'starter-1', name: 'Truffle Mushroom Soup', description: 'Wild mushroom soup with truffle oil and croutons', price: 16 },
      { id: 'starter-2', name: 'Tuna Tartare', description: 'Fresh ahi tuna with avocado, sesame, and citrus ponzu', price: 22 },
      { id: 'starter-3', name: 'Burrata Caprese', description: 'Creamy burrata with heirloom tomatoes and basil pesto', price: 18 },
      { id: 'starter-4', name: 'Seared Scallops', description: 'Pan-seared scallops with cauliflower purée and bacon', price: 26 },
    ],
  },
  {
    name: 'Main Course',
    items: [
      { id: 'main-1', name: 'Wagyu Beef Tenderloin', description: 'A5 Wagyu with truffle jus and potato gratin', price: 125 },
      { id: 'main-2', name: 'Chilean Sea Bass', description: 'Miso-glazed sea bass with bok choy and ginger', price: 58 },
      { id: 'main-3', name: 'Duck Confit', description: 'Slow-cooked duck leg with cherry reduction and wild rice', price: 48 },
      { id: 'main-4', name: 'Grilled Filet Mignon', description: '8oz center-cut filet with peppercorn sauce', price: 62 },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { id: 'dessert-1', name: 'Crème Brûlée', description: 'Classic vanilla bean custard with caramelized sugar', price: 14 },
      { id: 'dessert-2', name: 'Tiramisu', description: 'Espresso-soaked ladyfingers with mascarpone cream', price: 14 },
      { id: 'dessert-3', name: 'Chocolate Soufflé', description: 'Warm chocolate soufflé with raspberry coulis', price: 16 },
      { id: 'dessert-4', name: 'Seasonal Fruit Tart', description: 'Buttery pastry with pastry cream and fresh fruits', price: 12 },
    ],
  },
  {
    name: 'Beverages',
    items: [
      { id: 'beverage-1', name: 'Signature Cocktails', description: 'House-crafted cocktails by our mixologist', price: 18 },
      { id: 'beverage-2', name: 'Premium Wine Selection', description: 'Curated wines from renowned vineyards', price: 15 },
      { id: 'beverage-3', name: 'Artisan Coffee', description: 'Single-origin espresso drinks', price: 6 },
      { id: 'beverage-4', name: 'Fresh Pressed Juices', description: 'Seasonal fruits and vegetables', price: 8 },
    ],
  },
]

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('Starters')
  const { addItem } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = (item: { id: string; name: string; price: number }) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
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
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
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
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105'
                  : 'bg-card text-foreground/70 hover:text-primary border border-border hover:border-primary/50 hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          {menuCategories
            .filter((category) => category.name === activeCategory)
            .map((category) => (
              <div key={category.name} className="space-y-4">
                {category.items.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-fade-in-up"
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      opacity: 0,
                      animation: `fade-in-up 0.6s ease-out forwards`,
                    }}
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-foreground/60 mt-1 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="text-primary font-bold text-lg">
                        ${item.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
