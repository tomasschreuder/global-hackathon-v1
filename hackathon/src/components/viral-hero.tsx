"use client"
import { CyclingText } from "./cycling-text"
import { CyclingIcons } from "./cycling-icons"
import { TypingText } from "./typing-text"

export function ViralHero() {
  const locations = ["United States", "Germany", "UK"]
  const purposes = ["My song", "My restaurant", "My brand"]

  return (
    <div className="max-w-5xl w-full space-y-6">
      {/* Main headline */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground">I want to go viral.</h1>

      {/* Location line */}
      <div className="flex items-center gap-4 ml-8 md:ml-16">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">In</span>
        <div className="relative inline-flex items-center">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground border-b-4 border-muted-foreground pb-2 min-w-[300px] md:min-w-[400px]">
            <CyclingText items={locations} />
          </span>
        </div>
      </div>

      {/* Platform line with icons */}
      <div className="flex items-center gap-4 ml-16 md:ml-32">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">On</span>
        <div className="relative inline-flex items-center border-b-4 border-foreground pb-2 min-w-[120px]">
          <CyclingIcons />
        </div>
      </div>

      {/* Purpose line with typing animation */}
      <div className="flex items-center gap-4 ml-24 md:ml-48">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">For</span>
        <div className="relative inline-flex items-center">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground border-b-4 border-foreground pb-2 min-w-[300px] md:min-w-[450px]">
            <TypingText items={purposes} />
          </span>
        </div>
      </div>
    </div>
  )
}
