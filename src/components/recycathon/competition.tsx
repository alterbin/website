import React from 'react';
import Line from './line';
import { Typography } from '../shared';
import { Bullet } from '../svgs/bullet';
import Image from 'next/image';
import assets from '@/utils/assets';

function Award() {
  return (
    <div className="app_award_section">
      <div className="app_award_section__content app_recycathon_page__px">
        <div className="app_award_section__content__text">
          <Typography
            variant="p"
            fontWeight="md"
            color="sub-text-color"
            className=""
          >
            <Line />
            AWARDS
          </Typography>
          <Typography fontFamily="TrenchSlab" variant="h1">
            {' '}
            Recycathon Champions Get Rewarded For <br />
            <span className="d-flex justify-content-center">
              Outstanding Innovations
            </span>{' '}
          </Typography>
        </div>
        <div className="app_award_section__content__performance">
          <div className="app_award_section__content__performance__second">
            {/* <div className='app_award_section__content__performance__txt'>
            <Bullet />
              <Typography fontFamily='TrenchSlab' variant='h4'>1st Runner Up</Typography>
            </div> */}
            <Image
              src={assets.recycathon.second}
              alt="winner"
              priority
              className="app_award_section__content__performance__img"
            />
            <div className="app_award_section__content__performance__reward">
              <Typography
                variant="P-SM"
                className="app_award_section__content__performance__reward__text"
              >
                <Bullet />
                <p>Reward 1</p>
              </Typography>
              <Typography
                variant="P-SM"
                className="app_award_section__content__performance__reward__text"
              >
                <Bullet />
                <p>Reward 2</p>
              </Typography>
            </div>
          </div>
          <div className="app_award_section__content__performance__winner">
            {/* <div className='app_award_section__content__performance__txt'>
            <Bullet />
              <Typography fontFamily='TrenchSlab' color='sec-color' variant='h4'>Winner</Typography>
            </div> */}
            <Image
              src={assets.recycathon.winner}
              alt="winner"
              priority
              className="app_award_section__content__performance__img_winner"
            />
            <div className="app_award_section__content__performance__reward">
              <Typography
                variant="P-SM"
                className="app_award_section__content__performance__reward__text"
              >
                <Bullet />
                <p>Reward 1</p>
              </Typography>
              <Typography
                variant="P-SM"
                className="app_award_section__content__performance__reward__text"
              >
                <Bullet />
                <p>Reward 2</p>
              </Typography>
            </div>
          </div>
          <div className="app_award_section__content__performance__third">
            {/* <div className='app_award_section__content__performance__txt'>
            <Bullet />
              <Typography fontFamily='TrenchSlab' variant='h4'>2nd Runner Up</Typography>
            </div> */}
            <Image
              src={assets.recycathon.third}
              alt="winner"
              priority
              className="app_award_section__content__performance__img"
            />
            <div className="app_award_section__content__performance__reward">
              <Typography
                variant="P-SM"
                className="app_award_section__content__performance__reward__text"
              >
                <Bullet />
                <p>Reward 1</p>
              </Typography>
              <Typography
                variant="P-SM"
                className="app_award_section__content__performance__reward__text"
              >
                <Bullet />
                <p>Reward 2</p>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Judges() {
  return (
    <div className="app_judges_section">
      <div className="app_judges_section__content app_recycathon_page__px">
        <div className="app_judges_section__content__text">
          <Typography
            variant="P-XXS"
            fontWeight="md"
            color="sub-text-color"
            className=""
          >
            <Line />
            JUDGES
          </Typography>
          <Typography
            fontFamily="TrenchSlab"
            variant="h1"
            className="app_judges_section__content__text__h1"
          >
            <span className="d-flex justify-content-center">
              Judges With Expert Knowledge In
            </span>
            Sustainable Development And Innovations
          </Typography>
        </div>

        <div className="app_judges_section__content__container">
          <div className="app_judges_section__content__img">
            <Image
              src={assets.recycathon.tony}
              alt=""
              priority
              className="app_judges_section__content__img_ct"
            />
            <div className="app_judges_section__content__img_txt">
              <Typography fontFamily="TrenchSlab" variant="h5" fontWeight="md">
                Tony Danza
              </Typography>
              <Typography>Role</Typography>
            </div>
          </div>
          <div className="app_judges_section__content__img">
            <Image
              src={assets.recycathon.peter}
              alt=""
              priority
              className="app_judges_section__content__img_ct"
            />
            <div className="app_judges_section__content__img_txt">
              <Typography fontFamily="TrenchSlab" variant="h5" fontWeight="md">
                Peter Thornton
              </Typography>
              <Typography>Role</Typography>
            </div>
          </div>
          <div className="app_judges_section__content__img">
            <Image
              src={assets.recycathon.willie}
              alt=""
              priority
              className="app_judges_section__content__img_ct"
            />
            <div className="app_judges_section__content__img_txt">
              <Typography fontFamily="TrenchSlab" variant="h5" fontWeight="md">
                Willie Tanner
              </Typography>
              <Typography variant="P-XXS">Role</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Competition = () => {
  return (
    <>
      <Award />

      <Judges />
    </>
  );
};

export default Competition;
