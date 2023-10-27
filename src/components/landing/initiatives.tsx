import Image from 'next/image';
import Link from 'next/link';
import routes from '../../utils/routes';
import { Arrow } from '../svgs';
import { Typography } from '../shared';

const BASE_URL = '/media/landing/initiatives';

const initiatives = [
  {
    title: 'Recycathon',
    subTitle: 'Competition',
    src: `${BASE_URL}/recycathon.jpg`,
    description: 'A competitive solution to waste management problem where participants showcase creativity in converting waste into valuables.',
    linkText: 'Learn more',
    href: routes.recycathon.path,
  },
  {
    title: 'Philan',
    subTitle: 'Mobile Application',
    src: `${BASE_URL}/philan.jpg`,
    description: 'A digital platform that promotes supervised and controlled transfer of ownership of personal belongings deemed as waste by giver but valuable by receiver.',
    linkText: 'Coming soon',
  },
  {
    title: 'Marketplace',
    subTitle: 'Marketplace',
    src: `${BASE_URL}/marketplace.jpg`,
    description: 'An ecommerce platform where users exchange collectible waste for money.',
    linkText: 'Coming soon',
  },
  {
    title: 'Recyschool',
    subTitle: 'Education',
    src: `${BASE_URL}/recycathon.jpg`,
    description: 'Providing education in waste affected rural areas where students pay fee using waste collected from their immediate environment.',
    linkText: 'Coming soon',
  },
];

export default function Initiatives() {
  return (
    <div className="app_initiatives" id={routes.home.hash.initiatives}>
      <div className="app_mission__top">
        <Typography className="app_mission__top__h2 mb-2" fontFamily="TrenchSlab" fontWeight="md" variant="h2">
          Initiatives
        </Typography>

        <Typography className="app_mission__top__p">
          With our innovative solutions and cutting-edge technologies,
          {' '}
          <br />
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
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <Image className="app_initiatives__card__img" src={item.src} width={147} height={35} alt="" priority />

                  <Typography className="app_initiatives__card__h5" fontFamily="TrenchSlab" fontWeight="md" variant="h5">
                    {item.subTitle}
                  </Typography>

                  <Typography className="app_initiatives__card__p">
                    {item.description}
                  </Typography>
                </div>

                <div className="d-flex justify-content-end">
                  {item.href ? (
                    <Link className="app_hero_section__content__txt__action" href={item.href || ''}>
                      <Typography variant="span">
                        {item.linkText}
                      </Typography>

                      <Arrow />
                    </Link>
                  ) : (
                    <Typography color="sec-color" variant="span">
                      {item.linkText}
                    </Typography>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
