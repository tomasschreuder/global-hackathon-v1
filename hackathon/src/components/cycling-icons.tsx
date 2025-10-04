"use client"

import { useState, useEffect } from "react"
import { Instagram, Youtube, Twitter } from "lucide-react"

export function CyclingIcons() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Placeholder icons - user will provide their own
  const icons = [
    { src: '/instagram.svg', alt: 'Instagram' },
    { src: '/tiktok.svg', alt: 'TikTok' },
    { src: '/youtube.svg', alt: 'YouTube' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % icons.length)
        setIsVisible(true)
      }, 300)
    }, 2000)

    return () => clearInterval(timer)
  }, [icons.length])

  return (
    <span
      className={`inline-flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={icons[currentIndex].src} alt={icons[currentIndex].alt} className="h-20 w-20" />
    </span>
  )
}
