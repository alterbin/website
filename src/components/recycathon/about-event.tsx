/* eslint-disable max-len */
import Image from 'next/image';
import React from 'react';
import recycathon from '@/utils/assets/recycathon';
import { Typography } from '../shared';
import Line from './line';

function AboutEvent() {
  return (
    <div className="app_aboutevent_section">
      <div className="app_aboutevent_section__content app_recycathon_page__px">
        {/* <div></div> */}
        <div className="app_aboutevent_section__content__wrapper ">
          <Image
            src={recycathon.aboutEvent}
            alt="about event"
            className="app_aboutevent_section__img_ct"
            priority
          />
          <div className="app_aboutevent_section__content__txt">
            <Typography
              variant="h3"
              className="app_aboutevent_section__content__txt__h3"
            >
              {' '}
              <Line />
              {' '}
              ABOUT
            </Typography>
            <Typography
              fontFamily="TrenchSlab"
              fontWeight="md"
              variant="h1"
              className="app_aboutevent_section__content__txt__title"
            >
              Recycathon 2023
            </Typography>
            <Typography className="app_aboutevent_section__content__txt__p">
              The Recycathon is aimed at transforming collectible waste into valuable finished products.
              We seek the support of schools for sensitizing students on creative waste management.
              We do this by catching their attention through the engagement of their curious creative minds.
            </Typography>
            <Typography className="app_aboutevent_section__content__txt__p">
              The features creative displays, judging panels, and a prize-giving ceremony to recognize and
              reward the outstanding contributions of our students. &quot;Recycathon&quot; will provide a platform for students
              to apply their problem-solving skills, foster creativity, and learn about the importance of waste management
              practically and engagingly.
            </Typography>
            <button type="button" className="app_aboutevent_section__content__txt__button">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEvent;
