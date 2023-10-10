import {
  FB, IG, Linkedin, Twitter,
} from './svgs/socials';

export default function Socials({ dark = false }) {
  const color = 'var(--main-color)';

  const props = dark ? { fill: color, stroke: color } : {};

  return (
    <div className="app_footer__btm__socials">
      <FB {...props} />
      <Twitter {...props} />
      <Linkedin {...props} />
      <IG {...props} />
    </div>
  );
}
