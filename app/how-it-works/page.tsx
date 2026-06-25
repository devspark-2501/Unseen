import Link from 'next/link'
import { Eye, ChevronRight, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black flex flex-col p-6 md:p-12">
      {/* Header */}
      <header className="w-full mb-16">
        <nav className="flex items-center justify-center gap-6 bg-[#121212] px-5 py-2.5 rounded-full border border-neutral-800 w-fit mx-auto">
          <Link href="/" className="flex-shrink-0 w-8 h-8 rounded-full bg-[#9D8CFF] flex items-center justify-center hover:scale-105 transition-transform" aria-label="Go to home">
            <Eye className="w-5 h-5 text-black" strokeWidth={3} />
          </Link>
          <div className="flex items-center gap-6 md:gap-8">
            <a href="/story" className="text-xs font-semibold tracking-wide text-neutral-400 hover:text-white transition-colors">
              Our Story
            </a>
            <a href="/how-it-works" className="text-xs font-semibold tracking-wide text-white">
              How It Works
            </a>
            <a href="/faq" className="text-xs font-semibold tracking-wide text-neutral-400 hover:text-white transition-colors">
              FAQ
            </a>
          </div>
          <Link href="/interview">
            <button className="bg-[#CCFF00] text-black text-xs font-bold px-4 py-2 rounded-full hover:scale-105 transition-transform flex-shrink-0">
              Start
            </button>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl w-full mx-auto flex-1">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
          How It Works
        </h1>
        <p className="text-base text-neutral-400 mb-16 leading-relaxed max-w-2xl">
          Unseen uses advanced AI to analyze your responses and uncover the hidden talents employers and recruiters miss. Here&apos;s the process.
        </p>

        {/* Step by Step */}
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#9D8CFF] flex items-center justify-center">
                <span className="text-lg font-black text-black">1</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-white mb-3">Answer Our Interview</h2>
              <p className="text-neutral-400 leading-relaxed">
                You respond to 5 thoughtfully designed questions about your experiences, challenges, skills, and accomplishments. These aren&apos;t traditional interview questions—they&apos;re designed to reveal the real skills hidden in your story.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#10B981] flex items-center justify-center">
                <span className="text-lg font-black text-black">2</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-white mb-3">AI Analysis Engine</h2>
              <p className="text-neutral-400 leading-relaxed">
                Our proprietary AI engine analyzes your responses using advanced NLP and behavioral psychology. It looks beyond surface-level information to identify implicit skills, patterns of learning, leadership potential, and problem-solving approaches that you might not recognize in yourself.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#FF5A26] flex items-center justify-center">
                <span className="text-lg font-black text-white">3</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-white mb-3">Discover Hidden Skills</h2>
              <p className="text-neutral-400 leading-relaxed">
                You receive a detailed report showing hidden talents identified in your responses. Each skill comes with specific evidence from your answers, making it clear how we discovered these abilities. No vague generalizations—just concrete insights backed by what you actually said.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#FBBF24] flex items-center justify-center">
                <span className="text-lg font-black text-black">4</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-white mb-3">Potential Gap Score</h2>
              <p className="text-neutral-400 leading-relaxed">
                Your Potential Gap Score reveals the difference between your current achievements and your full potential. This metric shows where you have the greatest opportunity for growth and impact, helping you focus development efforts where they matter most.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-[#2563EB] flex items-center justify-center">
                <span className="text-lg font-black text-white">5</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-white mb-3">Growth Recommendations</h2>
              <p className="text-neutral-400 leading-relaxed">
                Based on your profile, you receive personalized growth recommendations. These aren&apos;t generic suggestions—they&apos;re specifically designed to help you develop the hidden skills we identified and close your potential gap.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-12 border-t border-neutral-800">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Discover Your Hidden Potential?</h2>
          <p className="text-neutral-400 mb-8">
            Start your analysis now and see what talents have been hiding in plain sight.
          </p>
          <Link href="/interview">
            <button className="bg-[#CCFF00] text-black font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform inline-flex items-center gap-2">
              Start Interview
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}
