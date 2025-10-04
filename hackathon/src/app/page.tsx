import { CreatorsDashboard } from "@/components/creator-component"
import MusicBrowser from "@/components/music-browser"
import { ViralHero } from "@/components/viral-hero"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="w-full h-screen flex items-center justify-center">
      <ViralHero />
      </div>
      <div className="w-full max-w-3xl mt-8 space-y-6">
      <details className="bg-white rounded-lg shadow p-6">
        <summary className="cursor-pointer font-semibold text-lg">Creators Dashboard</summary>
        <div className="mt-4">
        <CreatorsDashboard />
        </div>
      </details>
      <details className="bg-white rounded-lg shadow p-6">
        <summary className="cursor-pointer font-semibold text-lg">Music Browser</summary>
        <div className="mt-4">
        <MusicBrowser />
        </div>
      </details>
      </div>
    </main>
  )    
}