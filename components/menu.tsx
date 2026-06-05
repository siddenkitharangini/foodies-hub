"use client"

import { useState } from 'react'

const menuCategories = [
  {
    name: 'Starters',
    items: [
      { name: 'Truffle Mushroom Soup', description: 'Wild mushroom soup with truffle oil and croutons', price: '$16' },
      { name: 'Tuna Tartare', description: 'Fresh ahi tuna with avocado, sesame, and citrus ponzu', price: '$22' },
      { name: 'Burrata Caprese', description: 'Creamy burrata with heirloom tomatoes and basil pesto', price: '$18' },
      { name: 'Seared Scallops', description: 'Pan-seared scallops with cauliflower purée and bacon', price: '$26' },
    ],
  },
  {
    name: 'Main Course',
    items: [
      { name: 'Wagyu Beef Tenderloin', description: 'A5 Wagyu with truffle jus and potato gratin', price: '$125' },
      { name: 'Chilean Sea Bass', description: 'Miso-glazed sea bass with bok choy and ginger', price: '$58' },
      { name: 'Duck Confit', description: 'Slow-cooked duck leg with cherry reduction and wild rice', price: '$48' },
      { name: 'Grilled Filet Mignon', description: '8oz center-cut filet with peppercorn sauce', price: '$62' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Crème Brûlée', description: 'Classic vanilla bean custard with caramelized sugar', price: '$14' },
      { name: 'Tiramisu', description: 'Espresso-soaked ladyfingers with mascarpone cream', price: '$14' },
      { name: 'Chocolate Soufflé', description: 'Warm chocolate soufflé with raspberry coulis', price: '$16' },
      { name: 'Seasonal Fruit Tart', description: 'Buttery pastry with pastry cream and fresh fruits', price: '$12' },
    ],
  },
  {
    name: 'Beverages',
    items: [
      { name: 'Signature Cocktails', description: 'House-crafted cocktails by our mixologist', price: '$18' },
      { name: 'Premium Wine Selection', description: 'Curated wines from renowned vineyards', price: '$15+' },
      { name: 'Artisan Coffee', description: 'Single-origin espresso drinks', price: '$6' },
      { name: 'Fresh Pressed Juices', description: 'Seasonal fruits and vegetables', price: '$8' },
    ],
  },
]

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('Starters')

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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground/70 hover:text-primary border border-border hover:border-primary/50'
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
              <div key={category.name} className="space-y-6">
                {category.items.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-foreground/60 mt-1 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-primary font-bold text-lg">
                      {item.price}
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
