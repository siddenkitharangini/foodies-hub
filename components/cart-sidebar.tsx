"use client"

import { useCart } from '@/lib/cart-context'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import Image from 'next/image'

export function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, totalPrice, clearCart } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md sm:max-w-md bg-card border-l border-border/30 z-[70] flex flex-col animate-in slide-in-from-right duration-300 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border/30">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
            <h2 className="text-lg sm:text-xl font-serif font-bold text-foreground">Your Order</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <X className="w-4 sm:w-5 h-4 sm:h-5 text-foreground" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 sm:w-16 h-12 sm:h-16 text-foreground/20 mb-3 sm:mb-4" />
              <p className="text-foreground/60 text-base sm:text-lg mb-1 sm:mb-2 font-light">Your cart is empty</p>
              <p className="text-foreground/40 text-xs sm:text-sm font-light">Add some delicious dishes to get started</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary/40 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  {item.image && (
                    <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-xs sm:text-sm truncate">{item.name}</h3>
                    <p className="text-primary font-bold text-sm sm:text-base mt-1">${item.price.toFixed(2)}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Minus className="w-3 sm:w-4 h-3 sm:h-4 text-foreground" />
                      </button>
                      <span className="text-foreground font-medium w-5 sm:w-6 text-center text-xs sm:text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Plus className="w-3 sm:w-4 h-3 sm:h-4 text-foreground" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-red-500/10 hover:bg-red-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Trash2 className="w-3 sm:w-4 h-3 sm:h-4 text-red-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border/30 p-4 sm:p-6 space-y-3 sm:space-y-4 bg-secondary/20">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-foreground/70 font-light">Subtotal</span>
              <span className="text-foreground font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-foreground/70 font-light">Tax (10%)</span>
              <span className="text-foreground font-semibold">${(totalPrice * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="text-foreground/70 font-light">Service (15%)</span>
              <span className="text-foreground font-semibold">${(totalPrice * 0.15).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border/30">
              <span className="text-base sm:text-lg font-semibold text-foreground">Total</span>
              <span className="text-lg sm:text-xl font-bold text-primary">${(totalPrice * 1.25).toFixed(2)}</span>
            </div>
            
            <button
              onClick={() => {
                alert('Proceeding to checkout...')
                clearCart()
                setIsCartOpen(false)
              }}
              className="w-full py-3 sm:py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 rounded-lg hover:shadow-lg hover:shadow-primary/30 hover:scale-105 text-sm sm:text-base"
            >
              Proceed to Checkout
            </button>
            
            <button
              onClick={clearCart}
              className="w-full py-2 sm:py-3 bg-transparent border border-border/50 text-foreground/70 font-medium hover:border-red-500/50 hover:text-red-400 transition-all duration-300 rounded-lg text-sm sm:text-base"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}
