import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Pixelify_Sans, VT323 } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const pixelifySans = Pixelify_Sans({ variable: '--font-pixelify-sans', subsets: ['latin'] })
const vt323 = VT323({ variable: '--font-vt323', weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unseen - Discover Your Hidden Talents',
  description: 'Talent is universal. Recognition isn\'t. Uncover your hidden skills with AI-powered analysis.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} ${vt323.variable} dark bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
