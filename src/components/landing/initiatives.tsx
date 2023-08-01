import Image from 'next/image'
import { Typography } from "../shared";
import { Arrow } from '@/app/page';

const BASE_URL = '/media/landing/initiatives';

const initiatives = [
  { title: 'Recycathon', subTitle: 'Recycathon Competition', src: BASE_URL + '/recycathon.jpg' },
  { title: 'Philan', subTitle: 'Philan Mobile Application', src: BASE_URL + '/philan.jpg' },
  { title: 'Marketplace', subTitle: 'Recyclable Marketplace', src: BASE_URL + '/marketplace.jpg' },
];

export default function Initiatives() {
  return (
    <div className="app_initiatives">
      <div className="app_mission__top">
        <Typography className="app_mission__top__h2 mb-2" fontFamily="TrenchSlab" fontWeight="md" variant="h2">
          Initiatives
        </Typography>

        <Typography className="app_mission__top__p">
          With our innovative solutions and cutting-edge technologies, <br />
          we&apos;re here to make a lasting difference for our planet.
        </Typography>
      </div>

      <div className="app_initiatives__list app_landing_page__px">
        {initiatives.map((item) => (
          <div className="position-relative" key={item.title}>
            <div className="app_initiatives__item_title">
              <Typography className="app_initiatives__item_title__p" fontFamily="TrenchSlab" fontWeight="md">
                {item.title}
              </Typography>
            </div>

            <div className="app_initiatives__card card">
              <div className="card-body">
                <Image className="app_initiatives__card__img" src={item.src} width={147} height={35} alt="" priority />

                <Typography className="app_initiatives__card__h5" fontFamily="TrenchSlab" fontWeight="md" variant="h5">
                  {item.subTitle}
                </Typography>

                <Typography className="app_initiatives__card__p">
                  Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </Typography>

                <div className="d-flex justify-content-end">
                  <a className="app_hero_section__content__txt__action" href="/">
                    <Typography variant="span">
                      Learn more
                    </Typography>

                    <Arrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
