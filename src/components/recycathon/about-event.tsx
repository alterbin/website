import Image from 'next/image';
import React from 'react';
import recycathon from '@/utils/assets/recycathon';
import { Typography } from '../shared';

const AboutEvent = () => {
  return (
    <div className='app_aboutevent_section'>
      <div className='app_aboutevent_section__content app_recycathon_page__px'>
        <div></div>
        <div className='app_aboutevent_section__content__wrapper '>
          <Image src={recycathon.about_event} alt="about event" className="app_aboutevent_section__img_ct" priority />
          <div className='app_aboutevent_section__content__txt'>
            <Typography variant='h3' className='app_aboutevent_section__content__txt__p__about'> <span className='app_aboutevent_section__content__txt__p__line'></span> ABOUT EVENT</Typography>
            <Typography fontFamily="TrenchSlab" fontWeight='md' variant='h1' className='app_aboutevent_section__content__txt__title' >Loyola College Recycathon</Typography>
            <Typography fontFamily="TrenchSlab" fontWeight='md' variant='h1' className='app_aboutevent_section__content__txt__title' >First Edition 2023</Typography>
            <Typography className='app_aboutevent_section__content__txt__p'>
              Gorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              veniam eveniet est repudiandae cumque. Repudiandae at dignissimos
              possimus quas laboriosam, veniam consectetur enim exercitationem
              repellat omnis deleniti quidem distinctio nisi recusandae laborum,
              voluptatibus nobis sint libero dolor. Sed, aliquid dolore. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
              molestiae.
            </Typography>
            <button className='app_aboutevent_section__content__txt__button'>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
