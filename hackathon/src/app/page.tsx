import { CreatorsDashboard } from "@/components/creator-component"
import MusicBrowser from "@/components/music-browser"
import { ViralHero } from "@/components/viral-hero"
import { TikTokViewer } from "@/components/tiktok-viewer"
import HashtagDashboard from "@/components/hashtag-dashboard"
import { Button } from "@/components/ui/button"
import { LaunchButton } from "@/components/launch-button"
// import { Campaig}
/////// gotta move

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="w-full mb-24 flex items-center justify-center">
        <ViralHero />
      </div>
      <div className="flex space-x-4 mt-6">
        <LaunchButton href={"/example"} text={"See Example"} />
        <LaunchButton href={"/example"} text={"Get Analysis"} />
      </div>

    </main>
  )    
}