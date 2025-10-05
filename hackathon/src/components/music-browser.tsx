"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Music, Users, Clock } from "lucide-react"

interface MusicTrack {
  title: string
  author: string
  album: string
  user_count: number
  duration: number
  cover_large: {
    url_list: string[]
  }
  artists: Array<{
    avatar: {
      url_list: string[]
    }
    nick_name: string
    handle: string
    is_verified: boolean
  }>
  create_time: number
  language: string
}

interface MusicBrowserProps {
  data: Array<{ music_list: MusicTrack[] }>
}

export default function MusicBrowser({ data }: MusicBrowserProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const musicList: MusicTrack[] = data[0]?.music_list || []

  const filteredMusic = useMemo(() => {
    if (!searchQuery) return musicList

    const query = searchQuery.toLowerCase()
    return musicList.filter(
      (track) =>
        track.title.toLowerCase().includes(query) ||
        track.author.toLowerCase().includes(query) ||
        track.album.toLowerCase().includes(query),
    )
  }, [searchQuery, musicList])

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-balance">TikTok Music Browser</h1>
        <p className="text-muted-foreground text-pretty">Explore {musicList.length} trending tracks from TikTok</p>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by title, artist, or album..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMusic.map((track, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-square">
              <img
                src={track.cover_large.url_list[0] || "/placeholder.svg"}
                alt={track.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                  <Music className="h-3 w-3 mr-1" />
                  {track.language}
                </Badge>
              </div>
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-1 text-balance">{track.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{track.author}</p>

              {track.album && <p className="text-xs text-muted-foreground mb-3 line-clamp-1">Album: {track.album}</p>}

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{formatNumber(track.user_count)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{formatDuration(track.duration)}</span>
                </div>
              </div>

              {track.artists && track.artists.length > 0 && (
                <div className="mt-3 pt-3 border-t">
                  <div className="flex items-center gap-2">
                    <img
                      src={track.artists[0].avatar.url_list[0] || "/placeholder.svg"}
                      alt={track.artists[0].nick_name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-xs font-medium">{track.artists[0].nick_name}</span>
                    {track.artists[0].is_verified && (
                      <Badge variant="outline" className="text-xs h-5">
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMusic.length === 0 && (
        <div className="text-center py-12">
          <Music className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No tracks found matching your search.</p>
        </div>
      )}
    </div>
  )
}
