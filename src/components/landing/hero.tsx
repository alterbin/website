import Image from 'next/image'
import { Typography } from "../shared";
import { Arrow } from "../svgs";
import routes from '@/utils/routes';

export default function Hero() {
  return (
    <div className="app_hero_section">
      <div className="app_hero_section__content app_landing_page__px">
        <div className="app_hero_section__content__txt">
          <Typography className="app_hero_section__content__txt__h1" fontFamily="TrenchSlab" fontWeight="md" variant="h1">
            Waste is not just a problem—it&lsquo;s an <br className="d-none d-lg-flex" />
            <span>opportunity</span> for change
          </Typography>

          <Typography className="app_hero_section__content__txt__p">
            Creating value for waste.
          </Typography>

          <a className="app_hero_section__content__txt__action" href="/">
            <Arrow />

            <Typography variant="span" id={routes.home.hash.aboutUs}>
              Learn more
            </Typography>
          </a>
        </div>

        <Image className="app_hero_section__img_ct" src="/media/landing/trash.png" width={610} height={565} alt="" priority />
      </div>
    </div>
  );
}
