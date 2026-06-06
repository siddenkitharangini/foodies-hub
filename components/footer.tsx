"use client"

import { Mail, MapPin, Phone, Clock } from 'lucide-react'

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
    <footer className="bg-card border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              {"Foodie's Hub"}
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-light">
              Experience the art of fine dining where every dish tells a story. 
              Award-winning cuisine crafted with passion and premium ingredients.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 text-primary hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 text-primary hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 text-primary hover:scale-110 hover:shadow-lg"
                aria-label="Twitter"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm font-light hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6 font-serif flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Opening Hours
            </h4>
            <ul className="space-y-4">
              {openingHours.map((item) => (
                <li key={item.day} className="flex justify-between text-sm gap-4">
                  <span className="text-foreground/70 font-light">{item.day}</span>
                  <span className="text-foreground font-medium">{item.hours}</span>
                </li>
              ))}
              <li className="pt-4 border-t border-border/30 mt-4">
                <span className="text-primary text-sm font-medium">Brunch: Sat-Sun 10AM - 2PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6 font-serif">Contact</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-3 group">
                <MapPin className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                <div className="text-foreground/70 group-hover:text-foreground transition-colors font-light leading-relaxed">
                  123 Gourmet Avenue<br />
                  Manhattan, NY 10001
                </div>
              </li>
              <li className="flex gap-3 group">
                <Phone className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                <a href="tel:+12125550123" className="text-foreground/70 group-hover:text-primary transition-all duration-300 font-light">
                  +1 (212) 555-0123
                </a>
              </li>
              <li className="flex gap-3 group">
                <Mail className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                <a href="mailto:reservations@foodieshub.com" className="text-foreground/70 group-hover:text-primary transition-all duration-300 font-light">
                  reservations@foodieshub.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/30 bg-foreground/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-foreground/50 font-light">
              © {new Date().getFullYear()} {"Foodie's Hub"}. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
