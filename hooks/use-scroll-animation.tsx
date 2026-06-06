'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isVisible }
}

export function ScrollAnimationWrapper({
  children,
  animation = 'slide-up',
  delay = 0,
}: {
  children: React.ReactNode
  animation?: 'slide-up' | 'fade-in' | 'slide-down'
  delay?: number
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={{
        animationDelay: `${delay}ms`,
        transition: isVisible ? 'none' : 'opacity 0.6s ease-out',
      }}
    >
      {children}
    </div>
  )
}
