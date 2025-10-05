import Link from "next/link"

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="font-mono text-xl font-bold text-primary-foreground">Vii</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/goviral" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            I want to go viral
          </Link>
          <Link href="/resources" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Resources
          </Link>
          <Link href="/example" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Example
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
