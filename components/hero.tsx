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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-0">
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
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-20">
        <p className="text-primary uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 sm:mb-4 font-medium animate-fade-in">
          Welcome to
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-foreground mb-4 sm:mb-6 text-balance animate-fade-in leading-tight" style={{ animationDelay: '100ms' }}>
          {"Foodie's Hub"}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-pretty animate-fade-in font-light" style={{ animationDelay: '200ms' }}>
          Experience the art of fine dining where every dish tells a story. 
          Crafted with passion, served with elegance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground text-sm sm:text-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            Book a Table
          </a>
          <a
            href="#menu"
            onClick={(e) => handleScroll(e, '#menu')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary text-sm sm:text-lg font-medium hover:bg-primary/10 transition-all duration-300 hover:scale-105"
          >
            Explore Menu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
