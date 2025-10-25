import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thrive & Learn Assistant',
  description: 'K-5 teacher assistant embedded in Thrive & Learn',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
