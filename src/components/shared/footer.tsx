import Image from "next/image";
import { Typography } from ".";
import { Call, Message } from "../svgs";
import { FB, Twitter, Linkedin, IG } from "./svgs";
import routes from "@/utils/routes";
import config from "@/utils/config";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const WEB_APP_URL = config.services.google.sheets.WEB_APP_URL;

export function Socials({ dark = false }) {
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

function Union() {
  return (
    <svg className="app_footer__union" preserveAspectRatio="none" width="1440" height="189" viewBox="0 0 1440 189" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 16.971C155.341 -0.80553 279.709 134.835 724.993 12.5634C927.049 -42.9197 1348.63 108.452 1440 23.382V189H0L0 16.971Z" fill="#333333" />
    </svg>
  );
}

const FooterBtm = () => (
  <>
    <Socials />

    <Typography variant="span">Copyright © 2023 Alterbin</Typography>
  </>
);

function FooterC() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailInput = document.querySelector('form input[name="Email"]') || {} as any;

    const formData = new FormData();
    formData.append('Email', emailInput.value);

    try {
      setLoading(true);

      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: formData,
      });

      if (typeof response === 'object') {
        toast.success('Successful', { position: 'bottom-right' });
        emailInput.value = '';
      } else {
        throw new Error('Failed')
      }
    } catch (error: any) {
      toast.error('Failed', { position: 'bottom-right' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="app_footer">
      <div className="app_footer__contact_us app_landing_page__px">
        <div className="app_footer__contact_us__con" id={routes.home.hash.contactUs}>
          <Typography className="app_mission__top__h3" color="main-color" fontFamily="TrenchSlab" fontWeight="md" variant="h2">
            Contact Us
          </Typography>

          <div className="app_footer__contact_us__con__info">
            <div className="app_footer__contact_us__con__info__item">
              <Message />

              <Typography color="sub-text-color" variant="span">support@alterbin.com</Typography>
            </div>

            <div className="app_footer__contact_us__con__info__item">
              <Call />

              <Typography color="sub-text-color" variant="span">+234 903 988 7841</Typography>
            </div>
          </div>
        </div>
      </div>

      <div className="app_footer__content app_landing_page__px">
        <div className="app_footer__content__item">
          <Image
            className="app__header__logo"
            src="/media/logos/h-logo-light.svg"
            width={147}
            height={35}
            alt=""
            priority
          />

          <Typography variant="span">
            Revolutionizing waste management and paving the way towards a more
            sustainable future
          </Typography>

          <Typography variant="span">info@alterbin.com</Typography>
        </div>

        <div className="app_footer__content__item">
          <Typography fontWeight="bd" variant="h5">
            Our Initiatives
          </Typography>

          <div className="app_footer__content__item__text">
            <Typography variant="p">Recycathon</Typography>
            <Typography variant="p">Philan Mobile App</Typography>
            <Typography variant="p">Marketplace</Typography>
          </div>
        </div>

        <div className="app_footer__content__item">
          <Typography fontWeight="bd" variant="h5">
            Alterbin
          </Typography>

          <div className="app_footer__content__item__text">
            <Typography variant="p"> About Us</Typography>
            <Typography variant="p">Press</Typography>
            <Typography variant="p">Contact Us</Typography>
            <Typography variant="p">Help Center</Typography>
            <Typography variant="p">Support</Typography>
            <Typography variant="p">Join Our Community</Typography>
          </div>
        </div>

        <div className="app_footer__content__item">
          <Typography fontWeight="bd" variant="h5">
            Stay in the loop
          </Typography>

          <div>
            <Typography variant="span" fontWeight="lt">
              Join our mailing list to stay in the loop on how we a creating a
              sustainable environment
            </Typography>
          </div>

          <form onSubmit={handleSubmit} method="POST" action={WEB_APP_URL} className="app_footer__content__item__subscribe">
            <input
              type="text"
              className="app_footer__content__item__subscribe__input"
              placeholder="Enter your email address.."
              name="Email"
              required
            />

            <button
              type="submit"
              className="app_footer__content__item__subscribe__button"
            >
              {loading ? 'Submitting...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      <div className="app_landing_page__px d-none d-lg-block">
        <div className="app_footer__btm">
          <FooterBtm />
        </div>
      </div>

      <div className="app_footer__btm app_landing_page__px d-flex d-lg-none">
        <FooterBtm />
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <div className="position-relative">
      <Union />

      <FooterC />

      <Toaster />
    </div>
  );
}
