import { Facebook, Instagram, Twitter } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Special Offers', href: '#offers' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

const openingHours = [
  { day: 'Mon - Thu', hours: '5:00 PM - 10:00 PM' },
  { day: 'Fri - Sat', hours: '5:00 PM - 11:00 PM' },
  { day: 'Sunday', hours: '4:00 PM - 9:00 PM' },
]

export function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Foodie&apos;s Hub
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
              Experience the art of fine dining where every dish tells a story. 
              Award-winning cuisine crafted with passion.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              {openingHours.map((item) => (
                <li key={item.day} className="flex justify-between text-sm">
                  <span className="text-foreground/60">{item.day}</span>
                  <span className="text-foreground">{item.hours}</span>
                </li>
              ))}
              <li className="pt-2 border-t border-border">
                <span className="text-primary text-sm">Brunch: Sat-Sun 10AM - 2PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-foreground/60">
                123 Gourmet Avenue<br />
                Manhattan, NY 10001
              </li>
              <li>
                <a href="tel:+12125550123" className="text-foreground/60 hover:text-primary transition-colors">
                  +1 (212) 555-0123
                </a>
              </li>
              <li>
                <a href="mailto:reservations@foodieshub.com" className="text-foreground/60 hover:text-primary transition-colors">
                  reservations@foodieshub.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-foreground/50 text-sm">
              © {new Date().getFullYear()} Foodie&apos;s Hub. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
