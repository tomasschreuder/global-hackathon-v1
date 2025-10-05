"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Heart, MessageCircle, Share2, Eye, CheckCircle2 } from "lucide-react"

interface TikTokCreator {
  user: {
    nickname: string
    unique_id: string
    signature: string
    avatar_thumb: {
      url_list: string[]
    }
    custom_verify?: string
  }
  aweme: {
    desc: string
    statistics: {
      play_count: number
      digg_count: number
      comment_count: number
      share_count: number
    }
    create_time: number
    video: {
      cover: {
        url_list: string[]
      }
    }
    cha_list?: Array<{
      cha_name: string
    }>
  }
}

interface CreatorsDashboardProps {
  data: Array<{ user_list: TikTokCreator[] }>
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

function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000)
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

export function CreatorsDashboard({ data }: CreatorsDashboardProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"views" | "likes" | "comments" | "recent">("views")

  const creators = data[0]?.user_list || []

  const filteredAndSortedCreators = useMemo(() => {
    const filtered = creators.filter((creator) => {
      const searchLower = searchQuery.toLowerCase()
      return (
        creator.user.nickname.toLowerCase().includes(searchLower) ||
        creator.user.unique_id.toLowerCase().includes(searchLower) ||
        creator.aweme.desc.toLowerCase().includes(searchLower)
      )
    })

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "views":
          return b.aweme.statistics.play_count - a.aweme.statistics.play_count
        case "likes":
          return b.aweme.statistics.digg_count - a.aweme.statistics.digg_count
        case "comments":
          return b.aweme.statistics.comment_count - a.aweme.statistics.comment_count
        case "recent":
          return b.aweme.create_time - a.aweme.create_time
        default:
          return 0
      }
    })
  }, [creators, searchQuery, sortBy])

  const totalStats = useMemo(() => {
    return creators.reduce(
      (acc, creator) => ({
        views: acc.views + creator.aweme.statistics.play_count,
        likes: acc.likes + creator.aweme.statistics.digg_count,
        comments: acc.comments + creator.aweme.statistics.comment_count,
        shares: acc.shares + creator.aweme.statistics.share_count,
      }),
      { views: 0, likes: 0, comments: 0, shares: 0 },
    )
  }, [creators])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">TikTok Creators</h1>
                <p className="text-sm text-muted-foreground mt-0.5">Discover trending creators and their performance</p>
              </div>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                {creators.length} Creators
              </Badge>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Card className="bg-accent/50 border-accent">
                <CardContent className="p-3">
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                    <Eye className="h-3.5 w-3.5" />
                    <span className="text-xs font-medium">Total Views</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">{formatNumber(totalStats.views)}</p>
                </CardContent>
              </Card>
              <Card className="bg-accent/50 border-accent">
                <CardContent className="p-3">
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                    <Heart className="h-3.5 w-3.5" />
                    <span className="text-xs font-medium">Total Likes</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">{formatNumber(totalStats.likes)}</p>
                </CardContent>
              </Card>
              <Card className="bg-accent/50 border-accent">
                <CardContent className="p-3">
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span className="text-xs font-medium">Total Comments</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">{formatNumber(totalStats.comments)}</p>
                </CardContent>
              </Card>
              <Card className="bg-accent/50 border-accent">
                <CardContent className="p-3">
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-0.5">
                    <Share2 className="h-3.5 w-3.5" />
                    <span className="text-xs font-medium">Total Shares</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">{formatNumber(totalStats.shares)}</p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search creators, usernames, or descriptions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="views">Most Views</SelectItem>
                  <SelectItem value="likes">Most Likes</SelectItem>
                  <SelectItem value="comments">Most Comments</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      {/* Creators Grid */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredAndSortedCreators.map((creator, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <CardContent className="p-0">
                {/* Video Cover */}
                <div className="relative aspect-[4/5] bg-muted overflow-hidden">
                  <img
                    src={creator.aweme.video.cover.url_list[0] || "/placeholder.svg"}
                    alt={creator.aweme.desc}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center gap-0.5">
                        <Eye className="h-3 w-3" />
                        <span className="font-semibold">{formatNumber(creator.aweme.statistics.play_count)}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <Heart className="h-3 w-3" />
                        <span className="font-semibold">{formatNumber(creator.aweme.statistics.digg_count)}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <MessageCircle className="h-3 w-3" />
                        <span className="font-semibold">{formatNumber(creator.aweme.statistics.comment_count)}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        <Share2 className="h-3 w-3" />
                        <span className="font-semibold">{formatNumber(creator.aweme.statistics.share_count)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Creator Info */}
                <div className="p-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <Avatar className="h-8 w-8 border-2 border-primary">
                      <AvatarImage
                        src={creator.user.avatar_thumb.url_list[0] || "/placeholder.svg"}
                        alt={creator.user.nickname}
                      />
                      <AvatarFallback>{creator.user.nickname[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <h3 className="text-sm font-semibold text-foreground truncate">{creator.user.nickname}</h3>
                        {creator.user.custom_verify && <CheckCircle2 className="h-3 w-3 text-primary flex-shrink-0" />}
                      </div>
                      <p className="text-xs text-muted-foreground">@{creator.user.unique_id}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-foreground line-clamp-2 leading-relaxed">{creator.aweme.desc}</p>

                  {/* Hashtags */}
                  {creator.aweme.cha_list && creator.aweme.cha_list.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {creator.aweme.cha_list.slice(0, 2).map((hashtag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-[10px] px-1.5 py-0">
                          #{hashtag.cha_name}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Date */}
                  <p className="text-[10px] text-muted-foreground">{formatDate(creator.aweme.create_time)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAndSortedCreators.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No creators found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  )
}

