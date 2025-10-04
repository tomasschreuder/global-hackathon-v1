"use client"

import { useEffect, useState } from "react"
import { TikTokGrid } from "@/components/tiktok-grid"

interface TikTokViewerProps {
  title?: string
  description?: string
}

export function TikTokViewer({
  title = "Trending TikToks",
  description = "Explore the latest viral videos with complete data and transcripts",
}: TikTokViewerProps) {
  const [videos, setVideos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("/data/trending.json")
        const data = await response.json()
        setVideos(data)
      } catch (error) {
        console.error("Failed to fetch TikTok data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="text-center">
            <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
            <p className="text-muted-foreground">Loading trending videos...</p>
          </div>
        </div>
      </div>
    )
  }

  const videosWithTranscripts = videos.filter((v) => v.transcript || v.transcriptUrl).length

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="mb-3 text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl">{title}</h1>
        <p className="text-pretty text-lg text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {videos.length} Videos
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {videosWithTranscripts} With Transcripts
          </span>
        </div>
      </header>

      <TikTokGrid videos={videos} />
    </div>
  )
}
