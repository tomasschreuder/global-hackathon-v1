"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Play,
  Music,
  MapPin,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
} from "lucide-react"
import { fetchTranscript } from "@/app/actions"

interface TikTokVideo {
  id: string
  description: string
  descriptionLanguage: string
  createTime: string
  isAd: boolean
  author: {
    id: number
    username: string
    avatar: string
    signature: string
    region: string
  }
  music: {
    title: string
    id: number
    author: string
    playUrl: string
  }
  videoUrl: string
  thumbnail: string
  playCount: number
  commentCount: number
  shareCount: number
  collectCount: number
  likeCount: number
  url: string
  transcriptUrl?: string
  region: string
  durationMS: number
  isPinned: boolean
  hashtags: Array<{
    id: string
    name: string
  }>
  transcript: string | null
}

interface TikTokCardProps {
  video: TikTokVideo
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}

function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

function parseWebVTT(vtt: string): string {
  const lines = vtt.split("\n")
  const textLines: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    // Skip WEBVTT header, timestamps, and empty lines
    if (line && !line.startsWith("WEBVTT") && !line.includes("-->") && !line.match(/^\d+$/)) {
      textLines.push(line)
    }
  }

  return textLines.join(" ")
}

export function TikTokCard({ video }: TikTokCardProps) {
  const [showTranscript, setShowTranscript] = useState(false)
  const [fetchedTranscript, setFetchedTranscript] = useState<string | null>(null)
  const [isLoadingTranscript, setIsLoadingTranscript] = useState(false)

  const hasTranscript = video.transcript || video.transcriptUrl

  const handleToggleTranscript = async () => {
    if (!showTranscript && video.transcriptUrl && !fetchedTranscript) {
      setIsLoadingTranscript(true)
      try {
        const transcript = await fetchTranscript(video.transcriptUrl)
        setFetchedTranscript(transcript)
      } catch (error) {
        console.error("[v0] Failed to fetch transcript:", error)
        setFetchedTranscript("Failed to load transcript")
      } finally {
        setIsLoadingTranscript(false)
      }
    }
    setShowTranscript(!showTranscript)
  }

  const displayTranscript = fetchedTranscript || video.transcript

  return (
    <Card className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50">
      {/* Thumbnail */}
      <div className="relative aspect-[9/16] overflow-hidden bg-muted">
        <Image
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.description}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
          <Play className="h-3 w-3" />
          {formatDuration(video.durationMS)}
        </div>

        {/* Play Count */}
        <div className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {formatNumber(video.playCount)} views
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-4">
        {/* Author */}
        <div className="flex items-start gap-3">
          <Image
            src={video.author.avatar || "/placeholder.svg"}
            alt={video.author.username}
            width={40}
            height={40}
            className="rounded-full"
            crossOrigin="anonymous"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="truncate font-semibold text-foreground">@{video.author.username}</p>
              <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                <MapPin className="h-3 w-3" />
                {video.region}
              </Badge>
            </div>
            <p className="truncate text-sm text-muted-foreground">{video.author.signature}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-pretty text-sm leading-relaxed text-foreground">{video.description}</p>

        {/* Hashtags */}
        {video.hashtags && video.hashtags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {video.hashtags.map((tag) => (
              <Badge key={tag.id} variant="outline" className="border-primary/30 text-primary">
                #{tag.name}
              </Badge>
            ))}
          </div>
        )}

        {/* Music */}
        <div className="flex items-center gap-2 rounded-lg bg-muted p-2">
          <Music className="h-4 w-4 text-muted-foreground" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-medium text-foreground">{video.music.title}</p>
            <p className="truncate text-xs text-muted-foreground">{video.music.author}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 border-t border-border pt-4">
          <div className="flex flex-col items-center gap-1">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-xs font-medium text-foreground">{formatNumber(video.likeCount)}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <MessageCircle className="h-5 w-5 text-accent" />
            <span className="text-xs font-medium text-foreground">{formatNumber(video.commentCount)}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Share2 className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs font-medium text-foreground">{formatNumber(video.shareCount)}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bookmark className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs font-medium text-foreground">{formatNumber(video.collectCount)}</span>
          </div>
        </div>

        {/* Transcript Section */}
        {hasTranscript && (
          <div className="space-y-2 border-t border-border pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleToggleTranscript}
              disabled={isLoadingTranscript}
              className="w-full bg-transparent"
            >
              <FileText className="mr-2 h-4 w-4" />
              {isLoadingTranscript ? "Loading Transcript..." : showTranscript ? "Hide Transcript" : "Show Transcript"}
              {!isLoadingTranscript &&
                (showTranscript ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />)}
            </Button>

            {showTranscript && displayTranscript && (
              <div className="rounded-lg bg-muted p-3">
                <p className="text-pretty text-sm leading-relaxed text-foreground">{parseWebVTT(displayTranscript)}</p>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 border-t border-border pt-4">
          <Button asChild variant="default" className="flex-1">
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              View on TikTok
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
          <span>ID: {video.id}</span>
          <span>{new Date(video.createTime).toLocaleDateString()}</span>
        </div>
      </div>
    </Card>
  )
}
