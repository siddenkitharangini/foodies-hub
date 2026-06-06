"use client"

import { Mail, MapPin, Phone, Clock, ArrowUp } from 'lucide-react'
import { useState } from 'react'

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
  </svg>
)

const XIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Special Offers', href: '#offers' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const openingHours = [
  { day: 'Monday - Thursday', hours: '5:00 PM - 10:00 PM' },
  { day: 'Friday - Saturday', hours: '5:00 PM - 11:00 PM' },
  { day: 'Sunday', hours: '4:00 PM - 9:00 PM' },
  { day: 'Brunch (Sat & Sun)', hours: '10:00 AM - 2:00 PM' },
]

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', url: 'https://instagram.com' },
  { icon: FacebookIcon, label: 'Facebook', url: 'https://facebook.com' },
  { icon: XIcon, label: 'X', url: 'https://twitter.com' },
  { icon: LinkedInIcon, label: 'LinkedIn', url: 'https://linkedin.com' },
  { icon: YouTubeIcon, label: 'YouTube', url: 'https://youtube.com' },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-card border-t border-primary/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12 lg:mb-16">
          
          {/* Column 1: Brand */}
          <div className="animate-slide-up">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-3">
              {"Foodie's Hub"}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/40 mb-6" />
            <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-light">
              Where culinary artistry meets luxury hospitality. Award-winning fine dining crafted with passion, precision, and the finest ingredients from around the world.
            </p>
            <p className="text-primary text-xs font-semibold tracking-widest mb-6">
              MICHELIN-RECOGNIZED EXCELLENCE
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/30 group"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h4 className="text-lg font-semibold text-foreground mb-6 font-serif">Quick Links</h4>
            <div className="w-8 h-0.5 bg-primary/50 mb-6" />
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm font-light hover:translate-x-2 inline-block hover:font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h4 className="text-lg font-semibold text-foreground mb-6 font-serif">Contact Us</h4>
            <div className="w-8 h-0.5 bg-primary/50 mb-6" />
            <ul className="space-y-5">
              <li className="flex gap-3 group">
                <MapPin className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                <div className="text-foreground/70 group-hover:text-foreground transition-colors font-light text-sm leading-relaxed">
                  123 Gourmet Avenue<br />
                  Manhattan, NY 10001<br />
                  <span className="text-xs text-primary mt-1 block">Reservations Welcome</span>
                </div>
              </li>
              <li className="flex gap-3 group">
                <Phone className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                <a href="tel:+12125550123" className="text-foreground/70 group-hover:text-primary transition-all duration-300 font-light text-sm hover:font-medium">
                  +1 (212) 555-0123
                </a>
              </li>
              <li className="flex gap-3 group">
                <Mail className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                <a href="mailto:reservations@foodieshub.com" className="text-foreground/70 group-hover:text-primary transition-all duration-300 font-light text-sm hover:font-medium break-all">
                  reservations@foodieshub.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Newsletter */}
          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h4 className="text-lg font-semibold text-foreground mb-6 font-serif">Hours & Updates</h4>
            <div className="w-8 h-0.5 bg-primary/50 mb-6" />
            
            {/* Hours */}
            <div className="mb-8 pb-8 border-b border-border/30">
              <ul className="space-y-2 text-xs">
                {openingHours.map((item) => (
                  <li key={item.day} className="flex justify-between gap-3">
                    <span className="text-foreground/70 font-light">{item.day}</span>
                    <span className="text-primary font-medium">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-foreground/70 text-xs mb-3 font-light">Subscribe to our newsletter for exclusive offers and special events.</p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 bg-secondary/50 border border-primary/30 rounded-lg text-xs text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary/60 focus:bg-secondary transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-3 py-2.5 bg-primary text-primary-foreground text-xs font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
                >
                  {subscribed ? '✓ Subscribed' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 mb-8" />
      </div>

      {/* Bottom Bar */}
      <div className="bg-foreground/2 border-t border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-foreground/50 font-light text-xs sm:text-sm">
              © {new Date().getFullYear()} {"Foodie's Hub"}. All rights reserved. Crafted for culinary excellence.
            </p>
            <div className="flex gap-6 sm:gap-8 text-xs sm:text-sm">
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors font-light hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors font-light hover:underline">
                Terms & Conditions
              </a>
              <button
                onClick={handleBackToTop}
                className="text-foreground/50 hover:text-primary transition-all duration-300 font-light flex items-center gap-1.5 hover:translate-y-[-3px] group"
                aria-label="Back to top"
              >
                <span className="group-hover:underline">Back to Top</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
