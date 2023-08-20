'use client'

import { Footer, Navbar } from '@/components'
import { Events, Hero, Initiatives, Mission, Objectives } from '@/components/landing';

export default function Page() {
  return (
    <main className="app_landing_page">
      <Navbar />

      <Hero />

      <Mission />

      <Objectives />

      <Initiatives />

      <Events />

      <Footer />
    </main>
  )
}
