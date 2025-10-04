"use client"

import { useState, useEffect } from "react"

interface CyclingTextProps {
  items: string[]
  interval?: number
}

export function CyclingText({ items, interval = 2000 }: CyclingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length)
        setIsVisible(true)
      }, 300)
    }, interval)

    return () => clearInterval(timer)
  }, [items.length, interval])

  return (
    <span className={`inline-block transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {items[currentIndex]}
    </span>
  )
}
