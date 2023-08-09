'use client'

import { Footer, Navbar } from '@/components'
import { Events, Hero, Initiatives, Mission } from '@/components/landing';

export default function Page() {
  return (
    <main className="app_landing_page">
      <Navbar />

      <Hero />

      <Mission />

      <div className="app_objectives">
        <div className="app_landing_page__px">
          {/* Objectives */}
        </div>
      </div>

      <Initiatives />

      <Events />

      <Footer />
    </main>
  )
}
