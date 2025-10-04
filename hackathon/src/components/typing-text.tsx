"use client"

import { useState, useEffect } from "react"

interface TypingTextProps {
  items: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypingText({ items, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }: TypingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = items[currentIndex]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1))
          } else {
            // Finished typing, pause then start deleting
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1))
          } else {
            // Finished deleting, move to next word
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % items.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, items, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
