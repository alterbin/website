'use client'

import { Footer, Typography } from '@/components'
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


export function Arrow() {
  return (
    <svg width="47" height="15" viewBox="0 0 47 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.7071 8.20711C47.0976 7.81659 47.0976 7.18342 46.7071 6.7929L40.3431 0.428936C39.9526 0.0384113 39.3195 0.0384112 38.9289 0.428936C38.5384 0.81946 38.5384 1.45262 38.9289 1.84315L44.5858 7.5L38.9289 13.1569C38.5384 13.5474 38.5384 14.1805 38.9289 14.5711C39.3195 14.9616 39.9526 14.9616 40.3431 14.5711L46.7071 8.20711ZM-8.74228e-08 8.5L46 8.5L46 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z" fill="#DD9940" />
    </svg>
  );
}
