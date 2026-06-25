'use client'

import Link from 'next/link'
import { Eye, Target, Lightbulb, Ghost, Search, Rocket, ChevronRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-between items-center p-6 md:p-12">
      {/* Header with Floating Pill Navigation */}
      <header className="w-full">
        <nav className="flex items-center justify-center gap-6 bg-[#121212] px-5 py-2.5 rounded-full border border-neutral-800 w-fit mx-auto">
          {/* Logo Icon */}
          <Link href="/" className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9D8CFF] flex items-center justify-center hover:scale-105 transition-transform" aria-label="Go to home">
            <Eye className="w-5 h-5 text-black" strokeWidth={3} />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6 md:gap-8">
            <a href="/story" className="text-xs font-semibold tracking-wide text-neutral-400 hover:text-white transition-colors">
              Our Story
            </a>
            <a href="/how-it-works" className="text-xs font-semibold tracking-wide text-neutral-400 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="/faq" className="text-xs font-semibold tracking-wide text-neutral-400 hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <Link href="/interview">
            <button className="bg-[#CCFF00] text-black text-xs font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform flex-shrink-0">
              Start
            </button>
          </Link>
        </nav>
      </header>

      {/* Main Content - Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1">
        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white text-center mb-2">
          Unseen
        </h1>

        {/* Tagline */}
        <p className="text-sm md:text-base font-bold tracking-[0.25em] text-neutral-400 text-center mb-6 uppercase">
          Talent is universal. Recognition isn&apos;t.
        </p>

        {/* Body Paragraph */}
        <p className="max-w-xl text-center text-xs md:text-sm text-neutral-400 tracking-normal leading-relaxed mb-8">
          Discover your hidden skills, untapped potential, and genuine strengths. Unseen uses AI to analyze your experiences and uncover talents you didn&apos;t know you had.
        </p>

        {/* Action Button */}
        <Link href="/interview">
          <button className="bg-[#1A56FF] text-white font-bold text-sm px-7 py-4 rounded-xl inline-flex items-center gap-2 hover:bg-[#1A56FF]/90 transition-all shadow-lg">
            Analyze My Potential
            <ChevronRight className="w-4 h-4" />
          </button>
        </Link>


      </main>

      {/* Feature Dock - Bottom */}
      <footer className="w-full mt-auto pt-12">
        <div className="grid grid-cols-5 gap-2 md:gap-3 w-full max-w-5xl mx-auto">
          {/* Tile 1 - Hidden Skills (Lilac) */}
          <div className="aspect-square bg-[#9D8CFF] rounded-2xl flex flex-col items-center justify-center p-4 cursor-pointer hover:scale-105 transition-transform">
            <Target className="w-8 h-8 md:w-10 md:h-10 text-black mb-2" strokeWidth={2.5} />
            <span className="text-xs md:text-sm font-black text-black text-center tracking-tight">HIDDEN SKILLS</span>
          </div>

          {/* Tile 2 - Potential Gap (Green) */}
          <div className="aspect-square bg-[#10B981] rounded-2xl flex flex-col items-center justify-center p-4 cursor-pointer hover:scale-105 transition-transform">
            <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-black mb-2" strokeWidth={2.5} />
            <span className="text-xs md:text-sm font-black text-black text-center tracking-tight">POTENTIAL GAP</span>
          </div>

          {/* Tile 3 - Evidence Insights (Orange) - Active */}
          <div className="aspect-square bg-[#FF5A26] rounded-2xl flex flex-col items-center justify-center p-4 cursor-pointer hover:scale-105 transition-transform shadow-lg">
            <Ghost className="w-8 h-8 md:w-10 md:h-10 text-white mb-2" strokeWidth={2.5} />
            <span className="text-xs md:text-sm font-black text-white text-center tracking-tight">EVIDENCE INSIGHTS</span>
          </div>

          {/* Tile 4 - Career Matches (Yellow) */}
          <div className="aspect-square bg-[#FBBF24] rounded-2xl flex flex-col items-center justify-center p-4 cursor-pointer hover:scale-105 transition-transform">
            <Search className="w-8 h-8 md:w-10 md:h-10 text-black mb-2" strokeWidth={2.5} />
            <span className="text-xs md:text-sm font-black text-black text-center tracking-tight">CAREER MATCHES</span>
          </div>

          {/* Tile 5 - Growth Roadmap (Blue) */}
          <div className="aspect-square bg-[#2563EB] rounded-2xl flex flex-col items-center justify-center p-4 cursor-pointer hover:scale-105 transition-transform">
            <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white mb-2" strokeWidth={2.5} />
            <span className="text-xs md:text-sm font-black text-white text-center tracking-tight">GROWTH ROADMAP</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
