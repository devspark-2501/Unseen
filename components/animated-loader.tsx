'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const loadingMessages = [
  'Analyzing experiences...',
  'Discovering hidden skills...',
  'Calculating Potential Gap Score...',
  'Generating talent profile...',
]

export default function AnimatedLoader() {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Animated loader circle */}
      <motion.div
        className="relative w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-accent"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-primary/50"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1, rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Animated text */}
      <motion.div
        key={messageIndex}
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg font-semibold text-primary">
          {loadingMessages[messageIndex]}
        </p>
      </motion.div>

      {/* Dots animation */}
      <div className="flex gap-2">
        {[0, 1, 2].map((idx) => (
          <motion.div
            key={idx}
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: idx * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
