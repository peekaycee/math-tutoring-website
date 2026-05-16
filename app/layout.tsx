import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'MathMentor | Expert IGCSE, GCSE, SAT & A-Level Maths Tutoring',
  description:
    'Personalised online mathematics tutoring for IGCSE, GCSE, SAT and A-Level students. Expert guidance, proven results, and a teaching approach that makes maths click.',
  keywords: [
    'maths tutor',
    'IGCSE maths',
    'GCSE maths',
    'SAT maths',
    'A-Level maths',
    'online tutoring',
    'mathematics',
  ],
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
