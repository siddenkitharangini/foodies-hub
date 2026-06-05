"use client"

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const galleryImages = [
  { src: '/images/gallery-1.png', alt: 'Elegant table setting' },
  { src: '/images/gallery-2.png', alt: 'Beautifully plated appetizer' },
  { src: '/images/gallery-3.png', alt: 'Chef preparing dish' },
  { src: '/images/gallery-4.png', alt: 'Restaurant bar area' },
  { src: '/images/gallery-5.png', alt: 'Wine being poured' },
  { src: '/images/gallery-6.png', alt: 'Seafood platter' },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Visual Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
            Our Gallery
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            A glimpse into the artistry and ambiance that defines the Foodie&apos;s Hub experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2 h-64 md:h-auto' : 'h-48 md:h-64'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-5xl max-h-[80vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
