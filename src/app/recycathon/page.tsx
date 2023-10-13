'use client';

import { Footer } from '@/components';
import {  RecycathonNavbar, AboutEvent } from '@/components/recycathon';
import {
  Events, Hero,
} from '@/components/landing';
import { Provider } from '@/contexts/global';

export default function Page() {
  return (
    <Provider>
      <main className="app_landing_page">
        <RecycathonNavbar />

        <Hero />

        <AboutEvent />

        <Footer />
      </main>
    </Provider>
  );
}
