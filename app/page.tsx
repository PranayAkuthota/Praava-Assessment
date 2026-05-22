import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] transition-colors duration-300">
      <Navbar />
      <HeroSection />
    </main>
  )
}
