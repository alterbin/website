import { Typography } from '@/components';
import Image from 'next/image'

const routes = [
  { label: 'About Us', href: '' },
  { label: 'Initiatives', href: '' },
  { label: 'Events', href: '' },
  { label: 'Contact', href: '' },
];

const missions = [
  { text: 'Reducing/minimizing <br /> food wastage ', icon: <Food /> },
  { text: 'Promoting creative <br /> recycling', icon: <Food /> },
  { text: 'Reducing pollution <br /> (land, water, and air)', icon: <Food /> },
  { text: 'Encouraging responsible <br /> consumption and <br /> production', icon: <Food /> },
];

export default function Page() {
  return (
    <main className="app_landing_page">
      <header className="app__header app_landing_page__px">
        <Image className="app__header__logo" src="/media/logos/h-logo2.svg" width={147} height={35} alt="" priority />

        <ul className="app__header__ul">
          {routes.map((item) => (
            <li className="app__header__ul__li" key={item.label}>
              <a className="app__header__ul__li__a" href="http://">
                <Typography>
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
            <h1 className="app_hero_section__content__txt__h1">
              Waste is not just a problem—it&lsquo;s an <br />
              <span>opportunity</span> for change
            </h1>

            <p className="app_hero_section__content__txt__p">
            Creating value for waste.
            </p>

            <a className="app_hero_section__content__txt__action" href="/">
              <Arrow />

              Learn more
            </a>
          </div>

          <Image className="app_hero_section__img_ct" src="/media/landing/trash.png" width={610} height={565} alt="" priority />
        </div>
      </div>

      <div className="app_mission">
        <div className="app_mission__top">
          <h2 className="app_mission__top__h2">Mission</h2>

          <p className="app_mission__top__p">
            Our mission at Alterbin is to revolutionize waste management and pave the way towards <br />
            <span>
              more sustainable future by:
              <Blob />
            </span>
          </p>
        </div>

        <br />
        <br />

        <div className="app_mission__mlist app_landing_page__px">
          {missions.map((item) => (
            <div className="app_mission__mlist__item" key={item.text}>
              <h6 dangerouslySetInnerHTML={{ __html: item.text }} />

              {item.icon}
            </div>
          ))}
        </div>

        <br />
      </div>
    </main>
  )
}

function Arrow() {
  return (
    <svg width="47" height="15" viewBox="0 0 47 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.7071 8.20711C47.0976 7.81659 47.0976 7.18342 46.7071 6.7929L40.3431 0.428936C39.9526 0.0384113 39.3195 0.0384112 38.9289 0.428936C38.5384 0.81946 38.5384 1.45262 38.9289 1.84315L44.5858 7.5L38.9289 13.1569C38.5384 13.5474 38.5384 14.1805 38.9289 14.5711C39.3195 14.9616 39.9526 14.9616 40.3431 14.5711L46.7071 8.20711ZM-8.74228e-08 8.5L46 8.5L46 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z" fill="#DD9940" />
    </svg>
  );
}

function Blob() {
  return (
    <svg className="app_mission__top__blob" width="58" height="88" viewBox="0 0 58 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.4978 3.44417C16.2286 3.44417 27.0969 -3.27738 36.6265 11.6127C42.1444 20.2345 43.847 30.4948 42.7249 40.5941C41.9809 47.2905 33.4779 38.7656 32.9339 35.4468C31.3964 26.0682 39.8788 24.4214 47.5924 24.5928C55.8354 24.7759 55.8728 37.0361 55.8728 42.832C55.8728 53.194 56.8551 62.3438 51.9005 71.7575C48.3755 78.4549 44.6033 77.9678 37.7455 77.9678" stroke="#DD9940" strokeWidth="3" strokeLinecap="round" />
      <path d="M40.7668 68.9041C40.7668 73.7606 37.2206 76.5215 35.7314 80.989" stroke="#DD9940" strokeWidth="3" strokeLinecap="round" />
      <path d="M35.7314 80.989C36.4563 86.7875 46.8747 86.0244 50.8376 86.0244" stroke="#DD9940" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function Food() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M78.2304 24.2465L71.9344 73.6001H50.6688L44.3984 24.0001H70.36L75.4912 6.27686L78.4 7.15366L73.4768 24.2097L78.2304 24.2465ZM41.392 52.8001C41.392 52.8001 42.1872 46.4001 31.16 46.4001H13.5984C2.58718 46.4001 3.36638 52.8001 3.36638 52.8001H41.392ZM3.36638 67.2001C3.36638 67.2001 2.58718 73.6001 13.5984 73.6001H31.1616C42.1888 73.6001 41.3936 67.2001 41.3936 67.2001H3.36638ZM39.7424 64C41.5472 64 43.0048 62.2177 43.0048 60.0017C43.0048 57.7729 41.5472 56.0001 39.7424 56.0001H4.86398C3.06718 56.0001 1.59998 57.7729 1.59998 60.0017C1.59998 62.2177 3.06718 64 4.86398 64H39.7424Z" fill="#DD9940" />
    </svg>
  );
}
