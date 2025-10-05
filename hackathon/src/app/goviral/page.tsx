"use client"

import { useState } from "react"
import { CreatorsDashboard } from "@/components/creator-component"
import MusicBrowser from "@/components/music-browser"
import { ViralHeroForm } from "@/components/viral-hero-form"
import { Button } from "@/components/ui/button"
import { fetchMusic, fetchCreators, fetchHashtags } from "../actions/fetchdata"
import { set } from "react-hook-form"
//import HashtagBrowser from "@/components/hashtag-browser"
import HashtagDashboard from "@/components/hashtag-dashboard"

export default function Home() {
  const [formData, setFormData] = useState({ location: "", platform: "", purpose: "" })
  const [creatorData, setCreatorData] = useState<any>(null)
  const [musicData, setMusicData] = useState<any>(null)
  const [hashtagData, setHashtagData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (!formData.location) {
      setError("Please select a location")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      console.log("[v0] Fetching data for location:", formData.location)

      // Call both fetch functions sequentially
      //const creatorsResult = await fetchCreators(formData.location)
      //const musicResult = await fetchMusic(formData.location)
      const hashtagsResult = await fetchHashtags(formData.location)

      //console.log("[v0] Creators result:", creatorsResult)
      //console.log("[v0] Music result:", musicResult)
      console.log("[v0] Hashtags result:", hashtagsResult)

      //setCreatorData(creatorsResult)
      setHashtagData(hashtagsResult)
      //setMusicData(musicResult)
    } catch (err) {
      console.error("[v0] Error fetching data:", err)
      setError("Failed to fetch data. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="w-full mb-24 mt-24 flex items-center justify-center">
        <ViralHeroForm onFormChange={setFormData} />
      </div>
      <div className="flex flex-col items-center space-y-4 mt-6">
        <Button
          onClick={handleSubmit}
          disabled={isLoading || !formData.location}
          variant="outline"
          className="min-w-[120px] bg-transparent"
        >
          {isLoading ? "Loading..." : "Submit"}
        </Button>
        {error && <p className="text-destructive text-sm">{error}</p>}
      </div>
      <div className="w-full max-w-3xl mt-8 space-y-6">
        <details className="bg-white rounded-lg shadow p-6">
          <summary className="cursor-pointer font-semibold text-lg">Top Creators</summary>
          <div className="mt-4">
            {creatorData ? (
              <CreatorsDashboard data={creatorData} />
            ) : (
              <p className="text-muted-foreground">Submit the form to see top creators</p>
            )}
          </div>
        </details>
        <details className="bg-white rounded-lg shadow p-6">
          <summary className="cursor-pointer font-semibold text-lg">Trending Sounds</summary>
          <div className="mt-4">
            {musicData ? (
              <MusicBrowser data={musicData} />
            ) : (
              <p className="text-muted-foreground">Submit the form to see trending sounds</p>
            )}
          </div>
        </details>
                <details className="bg-white rounded-lg shadow p-6">
          <summary className="cursor-pointer font-semibold text-lg">Trending Sounds</summary>
          <div className="mt-4">
            {hashtagData ? (
              <HashtagDashboard data={hashtagData} />
            ) : (
              <p className="text-muted-foreground">Submit the form to see trending hashtags</p>
            )}
          </div>
        </details>
      </div>
    </main>
  )
}
