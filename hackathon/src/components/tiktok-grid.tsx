import { TikTokCard } from "./tiktok-card"

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

interface TikTokGridProps {
  videos: TikTokVideo[]
}

export function TikTokGrid({ videos }: TikTokGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <TikTokCard key={video.id} video={video} />
      ))}
    </div>
  )
}
