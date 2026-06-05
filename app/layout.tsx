import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { CartProvider } from '@/lib/cart-context'
import { ToastProvider } from '@/components/toast'
import { CartSidebar } from '@/components/cart-sidebar'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Foodie's Hub | Premium Fine Dining Restaurant",
  description: 'Experience exquisite cuisine crafted with passion. Award-winning chefs, premium ingredients, and an unforgettable dining experience await you at Foodie\'s Hub.',
  keywords: ['restaurant', 'fine dining', 'gourmet food', 'luxury dining', 'chef', 'cuisine'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <CartProvider>
          <ToastProvider>
            {children}
            <CartSidebar />
          </ToastProvider>
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
