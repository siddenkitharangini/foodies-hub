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
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-[70] flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-serif font-bold text-foreground">Your Order</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-foreground/20 mb-4" />
              <p className="text-foreground/60 text-lg mb-2">Your cart is empty</p>
              <p className="text-foreground/40 text-sm">Add some delicious dishes to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-secondary rounded-lg border border-border"
                >
                  {item.image && (
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm truncate">{item.name}</h3>
                    <p className="text-primary font-bold mt-1">${item.price.toFixed(2)}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
                      >
                        <Minus className="w-4 h-4 text-foreground" />
                      </button>
                      <span className="text-foreground font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
                      >
                        <Plus className="w-4 h-4 text-foreground" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center hover:bg-red-500/20 transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-400" />
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
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-foreground/70">Subtotal</span>
              <span className="text-foreground font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-foreground/70">Tax (10%)</span>
              <span className="text-foreground font-semibold">${(totalPrice * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-lg font-semibold text-foreground">Total</span>
              <span className="text-xl font-bold text-primary">${(totalPrice * 1.1).toFixed(2)}</span>
            </div>
            
            <button
              onClick={() => {
                alert('Proceeding to checkout...')
                clearCart()
                setIsCartOpen(false)
              }}
              className="w-full py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors rounded-lg"
            >
              Proceed to Checkout
            </button>
            
            <button
              onClick={clearCart}
              className="w-full py-3 bg-transparent border border-border text-foreground/70 font-medium hover:border-red-500/50 hover:text-red-400 transition-colors rounded-lg"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}
