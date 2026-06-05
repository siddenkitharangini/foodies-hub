"use client"

import { useState } from 'react'
import { Plus, Search, X, Award, Flame, Sparkles } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { useToast } from '@/components/toast'
import { useInView } from '@/lib/use-in-view'
import Image from 'next/image'

type Badge = 'chef-special' | 'best-seller' | 'new'

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image?: string
  badge?: Badge
  ingredients?: string[]
  calories?: number
  prepTime?: string
}

interface MenuCategory {
  name: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    name: 'Starters',
    items: [
      { id: 'starter-1', name: 'Truffle Mushroom Soup', description: 'Wild mushroom soup with truffle oil and croutons', price: 16, badge: 'chef-special', image: '/images/gallery-2.png', ingredients: ['Wild mushrooms', 'Truffle oil', 'Cream', 'Herbs'], calories: 280, prepTime: '15 min' },
      { id: 'starter-2', name: 'Tuna Tartare', description: 'Fresh ahi tuna with avocado, sesame, and citrus ponzu', price: 22, badge: 'best-seller', image: '/images/gallery-6.png', ingredients: ['Ahi tuna', 'Avocado', 'Sesame', 'Ponzu'], calories: 320, prepTime: '12 min' },
      { id: 'starter-3', name: 'Burrata Caprese', description: 'Creamy burrata with heirloom tomatoes and basil pesto', price: 18, image: '/images/gallery-2.png', ingredients: ['Burrata cheese', 'Heirloom tomatoes', 'Basil', 'Olive oil'], calories: 350, prepTime: '10 min' },
      { id: 'starter-4', name: 'Seared Scallops', description: 'Pan-seared scallops with cauliflower purée and bacon', price: 26, badge: 'new', image: '/images/gallery-6.png', ingredients: ['Sea scallops', 'Cauliflower', 'Bacon', 'Herbs'], calories: 290, prepTime: '18 min' },
    ],
  },
  {
    name: 'Main Course',
    items: [
      { id: 'main-1', name: 'Wagyu Beef Tenderloin', description: 'A5 Wagyu with truffle jus and potato gratin', price: 125, badge: 'chef-special', image: '/images/dish-1.png', ingredients: ['A5 Wagyu beef', 'Truffle', 'Potato', 'Red wine jus'], calories: 680, prepTime: '35 min' },
      { id: 'main-2', name: 'Chilean Sea Bass', description: 'Miso-glazed sea bass with bok choy and ginger', price: 58, badge: 'best-seller', image: '/images/dish-4.png', ingredients: ['Chilean sea bass', 'Miso', 'Bok choy', 'Ginger'], calories: 420, prepTime: '25 min' },
      { id: 'main-3', name: 'Duck Confit', description: 'Slow-cooked duck leg with cherry reduction and wild rice', price: 48, image: '/images/dish-6.png', ingredients: ['Duck leg', 'Cherries', 'Wild rice', 'Herbs'], calories: 550, prepTime: '30 min' },
      { id: 'main-4', name: 'Grilled Filet Mignon', description: '8oz center-cut filet with peppercorn sauce', price: 62, badge: 'new', image: '/images/dish-1.png', ingredients: ['Beef filet', 'Peppercorn', 'Butter', 'Herbs'], calories: 480, prepTime: '28 min' },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { id: 'dessert-1', name: 'Crème Brûlée', description: 'Classic vanilla bean custard with caramelized sugar', price: 14, badge: 'best-seller', image: '/images/dish-5.png', ingredients: ['Vanilla bean', 'Cream', 'Sugar', 'Eggs'], calories: 380, prepTime: '20 min' },
      { id: 'dessert-2', name: 'Tiramisu', description: 'Espresso-soaked ladyfingers with mascarpone cream', price: 14, image: '/images/dish-5.png', ingredients: ['Mascarpone', 'Espresso', 'Ladyfingers', 'Cocoa'], calories: 420, prepTime: '15 min' },
      { id: 'dessert-3', name: 'Chocolate Soufflé', description: 'Warm chocolate soufflé with raspberry coulis', price: 16, badge: 'chef-special', image: '/images/dish-5.png', ingredients: ['Dark chocolate', 'Eggs', 'Raspberry', 'Sugar'], calories: 450, prepTime: '25 min' },
      { id: 'dessert-4', name: 'Seasonal Fruit Tart', description: 'Buttery pastry with pastry cream and fresh fruits', price: 12, badge: 'new', image: '/images/dish-5.png', ingredients: ['Pastry', 'Cream', 'Seasonal fruits', 'Glaze'], calories: 320, prepTime: '18 min' },
    ],
  },
  {
    name: 'Beverages',
    items: [
      { id: 'beverage-1', name: 'Signature Cocktails', description: 'House-crafted cocktails by our mixologist', price: 18, badge: 'chef-special', image: '/images/gallery-5.png', ingredients: ['Premium spirits', 'Fresh juices', 'Bitters', 'Garnish'], calories: 180, prepTime: '5 min' },
      { id: 'beverage-2', name: 'Premium Wine Selection', description: 'Curated wines from renowned vineyards', price: 15, badge: 'best-seller', image: '/images/gallery-5.png', ingredients: ['Selected grape varieties', 'Oak aged'], calories: 125, prepTime: '2 min' },
      { id: 'beverage-3', name: 'Artisan Coffee', description: 'Single-origin espresso drinks', price: 6, image: '/images/gallery-5.png', ingredients: ['Single-origin beans', 'Filtered water'], calories: 5, prepTime: '4 min' },
      { id: 'beverage-4', name: 'Fresh Pressed Juices', description: 'Seasonal fruits and vegetables', price: 8, badge: 'new', image: '/images/gallery-5.png', ingredients: ['Seasonal fruits', 'Vegetables', 'Fresh herbs'], calories: 120, prepTime: '5 min' },
    ],
  },
]

const badgeConfig = {
  'chef-special': { label: "Chef's Special", icon: Award, className: 'bg-primary/20 text-primary' },
  'best-seller': { label: 'Best Seller', icon: Flame, className: 'bg-orange-500/20 text-orange-400' },
  'new': { label: 'New', icon: Sparkles, className: 'bg-green-500/20 text-green-400' },
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('Starters')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const { addItem } = useCart()
  const { showToast } = useToast()
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    })
    showToast(`${item.name} added to cart`)
  }

  // Filter items based on search query
  const getFilteredItems = () => {
    if (!searchQuery.trim()) {
      return menuCategories.find(cat => cat.name === activeCategory)?.items || []
    }
    
    const query = searchQuery.toLowerCase()
    return menuCategories
      .flatMap(cat => cat.items)
      .filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      )
  }

  const filteredItems = getFilteredItems()

  return (
    <>
      {/* Quick View Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-card border border-border rounded-2xl max-w-lg w-full overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={e => e.stopPropagation()}
          >
            {selectedItem.image && (
              <div className="relative h-56 w-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  fill
                  className="object-cover"
                />
                {selectedItem.badge && (
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${badgeConfig[selectedItem.badge].className}`}>
                    {(() => {
                      const Icon = badgeConfig[selectedItem.badge].icon
                      return <Icon className="w-3 h-3" />
                    })()}
                    {badgeConfig[selectedItem.badge].label}
                  </div>
                )}
              </div>
            )}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-foreground">{selectedItem.name}</h3>
                <span className="text-2xl font-bold text-primary">${selectedItem.price}</span>
              </div>
              <p className="text-foreground/70 mb-6">{selectedItem.description}</p>
              
              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedItem.calories && (
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <p className="text-xs text-foreground/50 mb-1">Calories</p>
                    <p className="font-semibold text-foreground">{selectedItem.calories} kcal</p>
                  </div>
                )}
                {selectedItem.prepTime && (
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <p className="text-xs text-foreground/50 mb-1">Prep Time</p>
                    <p className="font-semibold text-foreground">{selectedItem.prepTime}</p>
                  </div>
                )}
              </div>

              {/* Ingredients */}
              {selectedItem.ingredients && (
                <div className="mb-6">
                  <p className="text-sm text-foreground/50 mb-2">Ingredients</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.ingredients.map(ing => (
                      <span key={ing} className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 py-3 border border-border text-foreground/70 font-medium rounded-lg hover:bg-secondary transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleAddToCart(selectedItem)
                    setSelectedItem(null)
                  }}
                  className="flex-1 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section 
        id="menu" 
        ref={ref}
        className="py-24 bg-secondary"
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-12">
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

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          {!searchQuery && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {menuCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeCategory === category.name
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'bg-card text-foreground/70 hover:text-primary border border-border hover:border-primary/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}

          {/* Search Results Label */}
          {searchQuery && (
            <p className="text-center text-foreground/60 mb-8">
              {filteredItems.length} {filteredItems.length === 1 ? 'result' : 'results'} for &quot;{searchQuery}&quot;
            </p>
          )}

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-foreground/60 text-lg">No items found matching your search.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 ${badgeConfig[item.badge].className}`}>
                            {(() => {
                              const Icon = badgeConfig[item.badge].icon
                              return <Icon className="w-3 h-3" />
                            })()}
                            {badgeConfig[item.badge].label}
                          </span>
                        )}
                      </div>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="text-primary font-bold text-lg">
                        ${item.price}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleAddToCart(item)
                        }}
                        className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
