"use client"

import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Food Critic, The Daily Gazette',
    content: "An extraordinary dining experience that transcends expectations. The attention to detail in every dish is remarkable, and the ambiance is simply unmatched in the city.",
    rating: 5,
    initials: 'SM',
    avatar: '👩‍🍳',
  },
  {
    name: 'James Chen',
    role: 'Regular Guest',
    content: "My wife and I have been coming here for our anniversaries for the past five years. The consistency in quality and service is what keeps us coming back.",
    rating: 5,
    initials: 'JC',
    avatar: '👨‍💼',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Travel Blogger',
    content: "I've dined at restaurants around the world, and Foodie's Hub stands among the best. The truffle risotto alone is worth the trip.",
    rating: 5,
    initials: 'ER',
    avatar: '👩‍🦰',
  },
  {
    name: 'Michael Thompson',
    role: 'Business Executive',
    content: "Perfect for business dinners. The private dining room is elegant, the service is impeccable, and the wine selection is outstanding.",
    rating: 5,
    initials: 'MT',
    avatar: '👨‍💼',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Guest Experiences
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            What Our Guests Say
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            {`Don't just take our word for it. Hear from our valued guests about their memorable experiences at Foodie's Hub.`}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonials Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4 sm:px-8">
                  <div className="p-8 sm:p-12 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 shadow-lg">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground/90 text-lg sm:text-xl leading-relaxed mb-8 italic font-light">
                      {`"${testimonial.content}"`}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/40 to-primary/20 rounded-full flex items-center justify-center text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                        <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-16 w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-16 w-12 h-12 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlay(false)
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-primary'
                    : 'w-2 h-2 bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Resume Autoplay Text */}
          {!isAutoPlay && (
            <div className="text-center mt-6">
              <button
                onClick={() => setIsAutoPlay(true)}
                className="text-sm text-primary/70 hover:text-primary transition-colors"
              >
                Resume carousel
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
