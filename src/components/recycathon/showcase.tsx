import React from 'react';
import { Typography } from '..';
import BigSkew from '../svgs/showcase/big-skew';
import LeftSkew from '../svgs/showcase/left-skew';
import RightSkew from '../svgs/showcase/right-skew';

function Showcase() {
  return (
    <div className="app_showcase_section">
      <div className="app_showcase_section__content app_recycathon_page__px">
        <div className="app_showcase_section__content__txt">
          <Typography fontFamily="TrenchSlab" variant="h1" fontWeight="sb">
            {' '}
            Ready to ShowCase
            {' '}
            <br />
            {' '}
            Your Creativity?
          </Typography>
          <Typography variant="p" fontWeight="rg">
            Let the world see the value you can give to waste. Register to
            participate in
            {' '}
            <br />
            {' '}
            the recycathon
          </Typography>
        </div>

        <button type="button" className="app_showcase_section__content__btn">Register</button>
      </div>
      <div className="app_showcase_section__content__svg_bg">
        <BigSkew />
      </div>
      <div className="app_showcase_section__content__svg_lt">
        <LeftSkew />
      </div>
      <div className="app_showcase_section__content__svg_rt">
        <RightSkew />
      </div>
    </div>
  );
}

export default Showcase;
