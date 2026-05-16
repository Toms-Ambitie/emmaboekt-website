import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EmmaBoekt · Boekhouden zonder gedoe.',
  description: 'Jouw boekhoudpakket is de motor. Emma is de stuurknop. Stuur haar een factuur, een idee of een vraag.',
  icons: { icon: '/emmaboekt-mark.webp' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
