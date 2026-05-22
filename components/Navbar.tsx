'use client'

import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  return (
    <nav className="
      fixed top-0 left-0 right-0 z-50
      flex items-center justify-between
      px-6 lg:px-12 py-4
      bg-[var(--bg)]/70 backdrop-blur-md
      border-b border-white/30 dark:border-white/10
      transition-colors duration-300
    ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#3B47F0] flex items-center justify-center">
          <span className="text-white font-black text-sm">L</span>
        </div>
        <span className="font-extrabold text-lg text-[var(--text-primary)]">LegalOS</span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {['Features', 'Pricing', 'About', 'Blog'].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a
          href="#"
          className="
            hidden md:inline-flex
            px-5 py-2 rounded-full
            bg-[#3B47F0] text-white text-sm font-bold
            hover:bg-[#2a35d0] hover:scale-105
            transition-all duration-200 shadow-md
          "
        >
          Sign In
        </a>
      </div>
    </nav>
  )
}
