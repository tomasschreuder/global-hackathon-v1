"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Minus } from "lucide-react"

interface HashtagData {
  hashtag_id: string
  hashtag_name: string
  is_promoted: boolean
  publish_cnt: number
  video_views: number
  rank: number
  rank_diff?: number
  rank_diff_type: number
}

interface HashtagDashboardProps {
  data: HashtagData[]
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

function getRankIcon(rankDiffType: number, rankDiff?: number) {
  if (rankDiffType === 4 || !rankDiff) {
    return <Minus className="h-3 w-3 text-muted-foreground" />
  }
  return <TrendingUp className="h-3 w-3 text-accent" />
}

export default function HashtagDashboard({ data = [] }: HashtagDashboardProps) {
  if (!data || data.length === 0) {
    return (
      <div className="w-full bg-background p-6 md:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Trending Hashtags</h1>
            <p className="text-muted-foreground">No hashtag data available</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-background p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Trending Hashtags</h1>
          <p className="text-muted-foreground">Top performing hashtags ranked by engagement and reach</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card className="bg-card border-border p-6">
            <div className="text-sm font-medium text-muted-foreground mb-1">Total Views</div>
            <div className="text-3xl font-bold text-foreground">
              {formatNumber(data.reduce((sum, item) => sum + item.video_views, 0))}
            </div>
          </Card>
          <Card className="bg-card border-border p-6">
            <div className="text-sm font-medium text-muted-foreground mb-1">Total Posts</div>
            <div className="text-3xl font-bold text-foreground">
              {formatNumber(data.reduce((sum, item) => sum + item.publish_cnt, 0))}
            </div>
          </Card>
          <Card className="bg-card border-border p-6">
            <div className="text-sm font-medium text-muted-foreground mb-1">Tracked Hashtags</div>
            <div className="text-3xl font-bold text-foreground">{data.length}</div>
          </Card>
        </div>

        {/* Hashtag Table */}
        <Card className="bg-card border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Rank</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Hashtag</th>
                  <th className="text-right p-4 text-sm font-medium text-muted-foreground">Video Views</th>
                  <th className="text-right p-4 text-sm font-medium text-muted-foreground">Posts</th>
                  <th className="text-right p-4 text-sm font-medium text-muted-foreground">Trend</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={item.hashtag_id}
                    className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-foreground w-8">{item.rank}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-accent text-lg">#</span>
                        <span className="font-medium text-foreground">{item.hashtag_name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="font-mono text-sm text-foreground">{formatNumber(item.video_views)}</div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="font-mono text-sm text-muted-foreground">{formatNumber(item.publish_cnt)}</div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        {getRankIcon(item.rank_diff_type, item.rank_diff)}
                        {item.rank_diff && <span className="text-sm font-medium text-accent">{item.rank_diff}</span>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
