'use client'

import { Footer, Navbar, Typography } from '@/components'
import { Events, Hero, Initiatives, Mission } from '@/components/landing';

export default function Page() {
  return (
    <>
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

    <main className="app_landing_page--mobile">
      <Typography color="main-color" variant="h5">
        Mobile view n/a
      </Typography>
    </main>
    </>
  )
}
