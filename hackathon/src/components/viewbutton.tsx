import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CampaignButtonProps {
  href: string
  txt: string
}

export default function CampaignButton({ href, txt }: CampaignButtonProps) {
  return (
    <Link
      href={href}
      className="inline-block px-4 py-2 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-xl border-2 border-black shadow-lg hover:from-purple-900 hover:to-black transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl group relative overflow-hidden"
    >
      {/* Animated background sparkles */}
      <span className="absolute inset-0 pointer-events-none">
        <span className="animate-pulse opacity-20 absolute top-2 left-2 w-3 h-3 bg-white rounded-full blur-sm" />
        <span className="animate-pulse opacity-20 absolute bottom-2 right-4 w-2 h-2 bg-purple-400 rounded-full blur-sm" />
      </span>
      <span className="flex items-center space-x-2 font-bold text-xl relative z-10">
        <span className="tracking-wide">{txt}</span>
        <ArrowRight
          size={24}
          className="transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:scale-110"
        />
      </span>
    </Link>
  )
}
