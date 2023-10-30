'use client';

import { recycathonMetaData } from '@/utils/static';
import { Footer, Metas, Navbar } from '../../components';
import {
  AboutEvent,
  EventAgenda,
  Competition,
  Showcase,
  Hero,
} from '../../components/recycathon';
import { Provider } from '../../contexts/global';

export default function Page() {
  return (
    <Provider>
      <Metas data={recycathonMetaData} />

      <main className="app_landing_page app_recycathon_page">
        <Navbar variant="light" />

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
