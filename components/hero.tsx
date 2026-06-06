"use client"

import Image from 'next/image'

export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Elegant restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium animate-fade-in-down" style={{ animationDelay: '100ms' }}>
          Welcome to
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 text-balance animate-fade-in-down" style={{ animationDelay: '200ms' }}>
          {"Foodie's Hub"}
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty animate-fade-in" style={{ animationDelay: '300ms', animation: 'fade-in 0.6s ease-out forwards' }}>
          Experience the art of fine dining where every dish tells a story. 
          Crafted with passion, served with elegance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in" style={{ animationDelay: '400ms' }}>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="px-8 py-4 bg-primary text-primary-foreground text-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Book a Table
          </a>
          <a
            href="#menu"
            onClick={(e) => handleScroll(e, '#menu')}
            className="px-8 py-4 border border-primary text-primary text-lg font-medium hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Menu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
