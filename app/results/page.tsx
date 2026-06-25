'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface AnalysisResult {
  gapScore: number
  hiddenSkills: string[]
  evidence: string[]
  recommendations: string[]
  summary: string
}

export default function ResultsPage() {
  const [results, setResults] = useState<AnalysisResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('results')
      if (stored) {
        setResults(JSON.parse(stored))
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return (
      <main className="relative min-h-screen bg-gradient-to-br from-background via-background to-background flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 rounded-full border-2 border-primary border-t-accent"
        />
      </main>
    )
  }

  if (error || !results) {
    return (
      <main className="relative min-h-screen bg-gradient-to-br from-background via-background to-background flex items-center justify-center px-4">
        <motion.div
          className="max-w-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-2xl font-bold mb-4 text-foreground">No Results Found</h1>
          <p className="text-muted-foreground mb-8">
            Start a new interview to get your talent analysis.
          </p>
          <Link href="/interview">
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-background">
              Start Interview
            </Button>
          </Link>
        </motion.div>
      </main>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const scoreVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-background via-background to-background overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Your Results</h1>
            <p className="text-lg text-muted-foreground">Insights from your interview analysis</p>
          </motion.div>

          {/* Gap Score Card */}
          <motion.div
            className="mb-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 overflow-hidden"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-foreground">Potential Gap Score</h2>
                <p className="text-muted-foreground">
                  Areas where hidden potential can be unlocked
                </p>
              </div>
              <motion.div
                className="relative w-48 h-48 flex-shrink-0"
                variants={scoreVariants}
              >
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-muted/30"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray={`${(results.gapScore / 100) * 282.7} 282.7`}
                    initial={{ strokeDashoffset: 282.7 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-primary)" />
                      <stop offset="100%" stopColor="var(--color-accent)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {results.gapScore}%
                  </motion.div>
                  <div className="text-xs text-muted-foreground">Growth Potential</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Hidden Skills */}
          <motion.div
            className="mb-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground">Hidden Skills Discovered</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.hiddenSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                    <p className="text-foreground font-medium">{skill}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Evidence */}
          <motion.div
            className="mb-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground">Evidence & Insights</h2>
            <div className="space-y-4">
              {results.evidence.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 rounded-lg bg-background/50 border-l-2 border-l-primary"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <p className="text-foreground text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            className="mb-12 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-foreground">Growth Recommendations</h2>
            <div className="space-y-4">
              {results.recommendations.map((rec, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 p-4 rounded-lg bg-background/50 border border-border/50 hover:border-accent/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-background font-bold text-xs">
                    {idx + 1}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed flex-1">{rec}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Summary */}
          {results.summary && (
            <motion.div
              className="mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4 text-foreground">Summary</h3>
              <p className="text-foreground leading-relaxed">{results.summary}</p>
            </motion.div>
          )}

          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link href="/interview">
              <Button variant="outline" className="border-border hover:border-primary/50 w-full">
                Take Another Interview
              </Button>
            </Link>
            <Link href="/">
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-background w-full">
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
