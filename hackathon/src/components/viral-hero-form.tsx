"use client"

import { useState } from "react"
import { Instagram, Youtube, Facebook } from "lucide-react"

interface ViralHeroFormProps {
  onFormChange?: (data: { location: string; platform: string; purpose: string }) => void
}

export function ViralHeroForm({ onFormChange }: ViralHeroFormProps) {
  const [location, setLocation] = useState("")
  const [platform, setPlatform] = useState("")
  const [purpose, setPurpose] = useState("")

  const locations = [
    { code: "US", label: "The United States" },
    { code: "DE", label: "Germany" },
    { code: "NL", label: "The Netherlands" },
    { code: "UK", label: "United Kingdom" },
    { code: "CA", label: "Canada" },
    { code: "AU", label: "Australia" },
  ]
  const platforms = [
    { value: "instagram", label: "Instagram", icon: Instagram },
    { value: "youtube", label: "YouTube", icon: Youtube },
    { value: "facebook", label: "Facebook", icon: Facebook },
  ]

  const handleChange = (field: string, value: string) => {
    const updatedData = {
      location: field === "location" ? value : location,
      platform: field === "platform" ? value : platform,
      purpose: field === "purpose" ? value : purpose,
    }

    if (field === "location") setLocation(value)
    if (field === "platform") setPlatform(value)
    if (field === "purpose") setPurpose(value)

    onFormChange?.(updatedData)
  }

  return (
    <div className="max-w-5xl w-full space-y-6">
      {/* Main headline */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground">I want to go viral.</h1>

      {/* Location line */}
      <div className="flex items-center gap-4 ml-8 md:ml-16">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">In</span>
        <div className="relative inline-flex items-center">
          <select
            value={location}
            onChange={(e) => handleChange("location", e.target.value)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground bg-transparent border-b-4 border-foreground pb-2 min-w-[300px] md:min-w-[400px] appearance-none cursor-pointer focus:outline-none focus:ring-0"
          >
            <option value="" disabled className="text-base bg-background">
              Select location
            </option>
            {locations.map((loc) => (
              <option key={loc.code} value={loc.code} className="text-base bg-background">
                {loc.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Platform line with icons */}
      <div className="flex items-center gap-4 ml-16 md:ml-32">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">On</span>
        <div className="relative inline-flex items-center">
          <select
            value={platform}
            onChange={(e) => handleChange("platform", e.target.value)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground bg-transparent border-b-4 border-foreground pb-2 min-w-[200px] appearance-none cursor-pointer focus:outline-none focus:ring-0"
          >
            <option value="" disabled className="text-base bg-background">
              Select platform
            </option>
            {platforms.map((plat) => (
              <option key={plat.value} value={plat.value} className="text-base bg-background">
                {plat.label}
              </option>
            ))}
          </select>
          {platform && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              {platforms.find((p) => p.value === platform)?.icon &&
                (() => {
                  const Icon = platforms.find((p) => p.value === platform)!.icon
                  return <Icon className="w-12 h-12 md:w-16 md:h-16" />
                })()}
            </div>
          )}
        </div>
      </div>

      {/* Purpose line with text input */}
      <div className="flex items-center gap-4 ml-24 md:ml-48">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">With</span>
        <div className="relative inline-flex items-center">
          <input
            type="text"
            value={purpose}
            onChange={(e) => handleChange("purpose", e.target.value)}
            placeholder="Type your purpose"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground placeholder:text-muted-foreground bg-transparent border-b-4 border-foreground pb-2 min-w-[300px] md:min-w-[450px] focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </div>
  )
}
