'use client';

import { Footer } from '../../components';
import {
  AboutEvent,
  EventAgenda,
  Competition,
  Showcase,
  Navbar,
  Hero,
} from '../../components/recycathon';
import { Provider } from '../../contexts/global';

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

        <Footer />
      </main>
    </Provider>
  );
}
