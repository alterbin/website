'use client';

import { Footer, Navbar } from '@/components';
import {
  AboutEvent,
  EventAgenda,
  Competition,
  Showcase,
} from '@/components/recycathon';
import { Events, Hero } from '@/components/landing';
import { Provider } from '@/contexts/global';

export default function Page() {
  return (
    <Provider>
      <main className="app_landing_page">
        <Navbar />

        <Hero />

        <AboutEvent />

        <EventAgenda />

        <Competition />

        <Showcase />

        <Events />

        <Footer />
      </main>
    </Provider>
  );
}
