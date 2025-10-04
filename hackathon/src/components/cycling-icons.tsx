"use client"

import { useState, useEffect } from "react"
import { Instagram, Youtube, Twitter } from "lucide-react"

export function CyclingIcons() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Placeholder icons - user will provide their own
  const icons = [
    <Instagram key="instagram" className="w-12 h-12 md:w-16 md:h-16" />,
    <Youtube key="youtube" className="w-12 h-12 md:w-16 md:h-16" />,
    <Twitter key="twitter" className="w-12 h-12 md:w-16 md:h-16" />,
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
      {icons[currentIndex]}
    </span>
  )
}
