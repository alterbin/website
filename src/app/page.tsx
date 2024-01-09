'use client';

import { Footer, Navbar } from '../components';
import {
  Events, Hero, Initiatives, Mission, Objectives, Stats,
} from '../components/landing';
import { Provider } from '../contexts/global';

export default function Page() {
  return (
    <Provider>
      <main className="app_landing_page">
        <Navbar />

        <Hero />

        <Mission />

        <Objectives />

        <Initiatives />

        <Stats />

        <Events />

        <Footer />
      </main>
    </Provider>
  );
}
