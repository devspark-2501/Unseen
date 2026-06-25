'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import AnimatedLoader from '@/components/animated-loader'

const questions = [
  'Tell me about yourself',
  'What responsibilities do you have?',
  'What challenge have you overcome?',
  'What skills have you taught yourself?',
  'What are you proud of?',
]

export default function InterviewPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(''))
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = e.target.value
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = async () => {
    setIsAnalyzing(true)
    setError(null)
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers: answers.map((ans, idx) => ({
            question: questions[idx],
            answer: ans,
          })),
        }),
      })

      const data = await response.json()

      console.log('STATUS:', response.status)
      console.log('DATA:', data)

      if (!response.ok) {
        throw new Error(data.error ?? JSON.stringify(data))
      }

      sessionStorage.setItem('results', JSON.stringify(data))

      setTimeout(() => {
        window.location.href = '/results'
      }, 50)
    } catch (err) {
      console.error('Error:', err)
      setError(err instanceof Error ? err.message : 'Analysis failed. Please try again.')
      setIsAnalyzing(false)
    }
  }

  const isAnswered = answers[currentQuestion].trim().length > 0
  const allAnswered = answers.every((ans) => ans.trim().length > 0)
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const slideVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 },
    },
  }

  if (isAnalyzing) {
    return (
      <main className="relative min-h-screen bg-gradient-to-br from-background via-background to-background overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <div className="relative z-10">
          <AnimatedLoader />
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-background via-background to-background overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="w-full max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div className="mb-8 flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                ← Back
              </Button>
            </Link>
            <div className="text-sm font-medium text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </motion.div>

          {error && (
            <motion.div className="mb-6 rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </motion.div>
          )}

          {/* Progress bar */}
          <motion.div className="mb-8 h-1 bg-card rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Card container */}
          <motion.div
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 sm:p-12 shadow-xl"
            variants={slideVariants}
            key={currentQuestion}
          >
            {/* Question */}
            <motion.h2 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground text-balance">
              {questions[currentQuestion]}
            </motion.h2>

            {/* Quest Log Input */}
            <motion.div
              className="ow-search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <label className="ow-search__label" htmlFor="quest-input">QUEST LOG</label>
              <div className="ow-search__field">
                <svg className="ow-search__icon" viewBox="0 0 256 256" aria-hidden="true">
                  <path
                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                  ></path>
                </svg>
                <textarea
                  id="quest-input"
                  value={answers[currentQuestion]}
                  onChange={handleAnswerChange}
                  placeholder="Share your quest..."
                  className="ow-search__input resize-none h-40"
                />
              </div>
            </motion.div>

            {/* Character count */}
            <motion.div className="mt-4 text-sm text-muted-foreground text-right">
              {answers[currentQuestion].length} characters
            </motion.div>

            {/* Navigation buttons */}
            <motion.div className="mt-8 flex gap-4 justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="ow-press-btn disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="ow-press-btn__hud">◀</span>
                <span className="ow-press-btn__label">Previous</span>
              </button>

              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!allAnswered || isAnalyzing}
                  className="ow-press-btn disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="ow-press-btn__hud">✓</span>
                  <span className="ow-press-btn__label">Get Results</span>
                  <span className="ow-press-btn__caret">▸</span>
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className="ow-press-btn disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="ow-press-btn__hud">→</span>
                  <span className="ow-press-btn__label">Next</span>
                  <span className="ow-press-btn__caret">▸</span>
                </button>
              )}
            </motion.div>
          </motion.div>

          {/* Question indicators */}
          <motion.div className="mt-8 flex gap-2 justify-center flex-wrap">
            {questions.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentQuestion(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentQuestion
                    ? 'bg-primary w-8'
                    : answers[idx]
                      ? 'bg-accent'
                      : 'bg-muted'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
