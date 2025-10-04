import { CreatorsDashboard } from "@/components/creator-component"
import MusicBrowser from "@/components/music-browser"
import { ViralHero } from "@/components/viral-hero-demo"
import { TikTokViewer } from "@/components/tiktok-viewer"
import HashtagDashboard from "@/components/hashtag-dashboard"
import { Button } from "@/components/ui/button"
/////// gotta move

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="w-full mb-24 mt-24 flex items-center justify-center">
      <ViralHero />
      </div>
      <div className="w-full max-w-3xl mt-8 space-y-6">
      <details className="bg-white rounded-lg shadow p-6">
        <summary className="cursor-pointer font-semibold text-lg">Top Creators</summary>
        <div className="mt-4">
        <CreatorsDashboard />
        </div>
      </details>
      <details className="bg-white rounded-lg shadow p-6">
        <summary className="cursor-pointer font-semibold text-lg">Trending Sounds</summary>
        <div className="mt-4">
        <MusicBrowser />
        </div>
      </details>
            <details className="bg-white rounded-lg shadow p-6">
        <summary className="cursor-pointer font-semibold text-lg">Trending Videos</summary>
        <div className="mt-4">
        <TikTokViewer />
        </div>
      </details>
                  <details className="bg-white rounded-lg shadow p-6">
        <summary className="cursor-pointer font-semibold text-lg">Trending Hashtags</summary>
        <div className="mt-4">
        <HashtagDashboard />
        </div>
      </details>
      </div>
    </main>
  )    
}