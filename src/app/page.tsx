'use client'

import { Footer, Typography } from '@/components'
import { Arrow } from '@/components/svgs'
import { Events, Initiatives, Mission } from '@/components/landing';
import Image from 'next/image'

const routes = [
  { label: 'About Us', href: '' },
  { label: 'Initiatives', href: '' },
  { label: 'Events', href: '' },
  { label: 'Contact', href: '' },
];

export default function Page() {
  return (
    <>
    <main className="app_landing_page">
      <header className="app__header app_landing_page__px">
        <Image className="app__header__logo" src="/media/logos/h-logo2.svg" width={147} height={35} alt="" priority />

        <ul className="app__header__ul">
          {routes.map((item) => (
            <li className="app__header__ul__li" key={item.label}>
              <a className="app__header__ul__li__a" href="http://">
                <Typography fontWeight="md">
                  {item.label}
                </Typography>
              </a>
            </li>
          ))}
        </ul>

        <Image style={{ visibility: 'hidden' }} className="app__header__logo" src="/media/logos/h-logo2.svg" width={147} height={35} alt="" priority />
      </header>

      <div className="app_hero_section">
        <div className="app_hero_section__content app_landing_page__px">
          <div className="app_hero_section__content__txt">
            <Typography className="app_hero_section__content__txt__h1" fontFamily="TrenchSlab" fontWeight="md" variant="h1">
              Waste is not just a problem—it&lsquo;s an <br />
              <span>opportunity</span> for change
            </Typography>

            <Typography className="app_hero_section__content__txt__p">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.
            </Typography>

            <a className="app_hero_section__content__txt__action" href="/">
              <Arrow />

              <Typography variant="span">
                Become a sponsor
              </Typography>
            </a>
          </div>

          <Image className="app_hero_section__img_ct" src="/media/landing/trash.png" width={610} height={565} alt="" priority />
        </div>
      </div>

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
