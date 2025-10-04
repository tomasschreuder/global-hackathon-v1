export function ViralHero() {
  return (
    <div className="max-w-5xl w-full space-y-6">
      {/* Main headline */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground">I want to go viral.</h1>

      {/* Location line */}
      <div className="flex items-center gap-4 ml-8 md:ml-16">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">In</span>
        <div className="relative inline-flex items-center">
          <span className="text-4xl md:text-5xl text-center lg:text-6xl font-bold text-muted-foreground border-b-4 border-foreground pb-2 min-w-[300px] md:min-w-[400px]">
            The United States
          </span>
        </div>
      </div>

      {/* Platform line with TikTok icon */}
      <div className="flex items-center gap-4 ml-16 md:ml-32">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">On</span>
        <div className="relative inline-flex items-center justify-center border-b-4 border-foreground pb-2 min-w-[120px]">
          {/* <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mr-3">TikTok</span> */}
          <img src="/tiktok.svg" alt="TikTok" className="w-20 h-20 inline-block align-middle" />
        </div>
      </div>

      {/* Purpose line */}
      <div className="flex items-center gap-4 ml-24 md:ml-48">
        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">With</span>
        <div className="relative inline-flex items-center">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground border-b-4 border-foreground pb-2 min-w-[300px] md:min-w-[450px]">
            Promote my startup
          </span>
        </div>
      </div>
    </div>
  )
}
