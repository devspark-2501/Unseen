import Link from 'next/link'
import { Eye, ChevronRight } from 'lucide-react'

export default function FAQ() {
  const faqs = [
    {
      question: 'What makes Unseen different from traditional assessment tools?',
      answer: 'Traditional assessments measure what you know or can do in a controlled environment. Unseen measures what you\'ve actually learned through real experience. Our AI identifies skills you may not recognize in yourself—leadership shown through mentoring, resilience demonstrated through overcoming challenges, or strategic thinking revealed in how you solve problems.'
    },
    {
      question: 'How accurate is the AI analysis?',
      answer: 'Our AI is trained on thousands of talent profiles and uses natural language processing to identify patterns humans often miss. The accuracy depends on the quality and honesty of your responses. The more detailed and authentic your answers, the more accurate and valuable your results will be.'
    },
    {
      question: 'Can I share my Unseen profile with employers?',
      answer: 'Absolutely. Your report includes specific evidence for each skill identified, making it credible and shareable. Many users share their Unseen profile in LinkedIn, resumes, or during interviews to highlight talents that traditional credentials don\'t capture.'
    },
    {
      question: 'How long does the interview take?',
      answer: 'The interview typically takes 15-20 minutes. There\'s no time pressure—answer thoughtfully at your own pace. The depth of your responses matters more than speed, so take your time to really reflect on each question.'
    },
    {
      question: 'What happens to my data after I complete the interview?',
      answer: 'Your data is stored securely and encrypted. We use it only to generate your analysis and improve our AI. We never sell your data to third parties, and you can request deletion of your information at any time.'
    },
    {
      question: 'Can I retake the interview?',
      answer: 'Yes! You can retake the interview as many times as you like. Each analysis will reflect your current thinking and growth. Many users retake it after gaining new experience or tackling new challenges.'
    },
    {
      question: 'What is the Potential Gap Score?',
      answer: 'The Potential Gap Score measures the difference between your recognized achievements and your actual potential based on the talents we discovered. A higher gap score indicates significant untapped potential that could be developed through targeted growth.'
    },
    {
      question: 'How can Unseen help in my job search?',
      answer: 'Unseen helps you articulate skills you might have overlooked on your resume or in interviews. Understanding your hidden talents allows you to pursue roles that truly match your capabilities and present yourself more authentically to employers.'
    }
  ]

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
            <a href="/how-it-works" className="text-xs font-semibold tracking-wide text-neutral-400 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="/faq" className="text-xs font-semibold tracking-wide text-white">
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
      <main className="max-w-3xl w-full mx-auto flex-1">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">
          FAQ
        </h1>
        <p className="text-base text-neutral-400 mb-16">
          Common questions about Unseen, how it works, and what you can do with your results.
        </p>

        {/* FAQ Grid - Static */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="mt-20 w-full max-w-3xl mx-auto">
        <div className="border-t border-neutral-800 pt-8 flex flex-col items-center gap-4">
          <p className="text-sm text-neutral-400">Ready to discover your hidden talents?</p>
          <Link href="/interview">
            <button className="bg-[#1A56FF] text-white font-bold text-sm px-7 py-4 rounded-xl hover:bg-[#1A56FF]/90 transition-all shadow-lg inline-flex items-center gap-2">
              Start Interview
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </footer>
    </div>
  )
}
