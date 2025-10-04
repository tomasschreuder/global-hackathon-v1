"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Minus } from "lucide-react"

const hashtagData = [
  {
    hashtag_id: "1662530912377861",
    hashtag_name: "tsitp",
    is_promoted: false,
    publish_cnt: 9172,
    video_views: 190919948,
    rank: 1,
    rank_diff: 5,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "37996",
    hashtag_name: "dexter",
    is_promoted: false,
    publish_cnt: 17724,
    video_views: 179554857,
    rank: 2,
    rank_diff_type: 4,
  },
  {
    hashtag_id: "630",
    hashtag_name: "chrisbrown",
    is_promoted: false,
    publish_cnt: 24567,
    video_views: 103220801,
    rank: 3,
    rank_diff: 3,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "1613789637435397",
    hashtag_name: "thesummeriturnedpretty",
    is_promoted: false,
    publish_cnt: 7332,
    video_views: 218448942,
    rank: 4,
    rank_diff: 3,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "1634011090671621",
    hashtag_name: "juniorh",
    is_promoted: false,
    publish_cnt: 11204,
    video_views: 77926920,
    rank: 5,
    rank_diff: 3,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "7234159617880637486",
    hashtag_name: "breezybowl",
    is_promoted: false,
    publish_cnt: 21713,
    video_views: 76161720,
    rank: 6,
    rank_diff: 6,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "7268302483139952646",
    hashtag_name: "masatour",
    is_promoted: false,
    publish_cnt: 9550,
    video_views: 77747875,
    rank: 7,
    rank_diff: 15,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "38830078",
    hashtag_name: "conradfisher",
    is_promoted: false,
    publish_cnt: 3693,
    video_views: 85050507,
    rank: 8,
    rank_diff: 13,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "36446334",
    hashtag_name: "laufey",
    is_promoted: false,
    publish_cnt: 10131,
    video_views: 64951334,
    rank: 9,
    rank_diff: 10,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "389135",
    hashtag_name: "gilmoregirls",
    is_promoted: false,
    publish_cnt: 7417,
    video_views: 46321040,
    rank: 10,
    rank_diff: 14,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "388978",
    hashtag_name: "cancerawareness",
    is_promoted: false,
    publish_cnt: 3664,
    video_views: 34424587,
    rank: 11,
    rank_diff_type: 4,
  },
  {
    hashtag_id: "27458",
    hashtag_name: "ghostface",
    is_promoted: false,
    publish_cnt: 89279,
    video_views: 123874596,
    rank: 12,
    rank_diff: 22,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "272303",
    hashtag_name: "homeschool",
    is_promoted: false,
    publish_cnt: 8742,
    video_views: 21087176,
    rank: 13,
    rank_diff: 26,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "76954083",
    hashtag_name: "teamconrad",
    is_promoted: false,
    publish_cnt: 2650,
    video_views: 70135589,
    rank: 14,
    rank_diff: 11,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "55958020",
    hashtag_name: "cortis",
    is_promoted: false,
    publish_cnt: 5626,
    video_views: 52446211,
    rank: 15,
    rank_diff: 27,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "1651662930960389",
    hashtag_name: "rfkjr",
    is_promoted: false,
    publish_cnt: 1113,
    video_views: 8611443,
    rank: 16,
    rank_diff: 65,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "56235175",
    hashtag_name: "themarias",
    is_promoted: false,
    publish_cnt: 5122,
    video_views: 27887359,
    rank: 17,
    rank_diff: 13,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "967",
    hashtag_name: "mychemicalromance",
    is_promoted: false,
    publish_cnt: 6372,
    video_views: 24768534,
    rank: 18,
    rank_diff: 15,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "19129",
    hashtag_name: "bigbrother",
    is_promoted: false,
    publish_cnt: 7464,
    video_views: 86283089,
    rank: 19,
    rank_diff: 27,
    rank_diff_type: 1,
  },
  {
    hashtag_id: "14976",
    hashtag_name: "joker",
    is_promoted: false,
    publish_cnt: 5015,
    video_views: 40704415,
    rank: 20,
    rank_diff: 34,
    rank_diff_type: 1,
  },
]

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

export default function HashtagDashboard() {
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
              {formatNumber(hashtagData.reduce((sum, item) => sum + item.video_views, 0))}
            </div>
          </Card>
          <Card className="bg-card border-border p-6">
            <div className="text-sm font-medium text-muted-foreground mb-1">Total Posts</div>
            <div className="text-3xl font-bold text-foreground">
              {formatNumber(hashtagData.reduce((sum, item) => sum + item.publish_cnt, 0))}
            </div>
          </Card>
          <Card className="bg-card border-border p-6">
            <div className="text-sm font-medium text-muted-foreground mb-1">Tracked Hashtags</div>
            <div className="text-3xl font-bold text-foreground">{hashtagData.length}</div>
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
                {hashtagData.map((item, index) => (
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
