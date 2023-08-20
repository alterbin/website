import Image from "next/image";
import { Typography } from "../shared";
import { Arrow } from "../svgs";

import assets from "@/utils/assets";

const objs = [
  { label: 'To minimize waste generation' },
  { label: 'To prolong usage of items by transferring ownership' },
  { label: 'To recycle waste into reusable items' },
  { label: 'To sensitize and educate people about the effect of poor waste management and the importance of good waste management.' },
];

export default function Objectives() {
  return (
    <div className="app_objectives">
      <div className="app_landing_page__px">
        <div className="app_objectives__top">
          <Typography className="app_mission__top__h2" fontFamily="TrenchSlab" fontWeight="md" variant="h2">
            Objectives
          </Typography>

          <a className="app_hero_section__content__txt__action" href="/">
            <Arrow />

            <Typography variant="span">
              Become a sponsor
            </Typography>
          </a>
        </div>

        <div className="app_objectives__main">
          <div className="app_objectives__main__stack">
            <div className="app_objectives__main__stack__lft">
              <Image
                className={`app_objectives__main__stack__img app_objectives__main__stack__img--1`}
                src={assets.objectives.obj1}
                alt=""
              />

              <Image
                className={`app_objectives__main__stack__img app_objectives__main__stack__img--2`}
                src={assets.objectives.obj2}
                alt=""
              />
            </div>

            <Image
              className={`app_objectives__main__stack__img app_objectives__main__stack__img--3`}
              src={assets.objectives.obj3}
              alt=""
            />
          </div>

          <div className="app_objectives__main__txt">
            {objs.map((item, index) => (
              <div key={item.label}>
                <Typography className={`app_objectives__main__txt__h3 ${index === 1 ? 'active' : ''}`} variant="h3">
                  {item.label}
                </Typography>

                <div className="app_objectives__main__txt__dvdr" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
