import Image from "next/image";
import { Typography } from ".";
import { Call, Message } from "../svgs";

function Union() {
  return (
    <svg className="app_footer__union" preserveAspectRatio="none" width="1440" height="189" viewBox="0 0 1440 189" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 16.971C155.341 -0.80553 279.709 134.835 724.993 12.5634C927.049 -42.9197 1348.63 108.452 1440 23.382V189H0L0 16.971Z" fill="#333333" />
    </svg>
  );
}

const footerBtm = (
  <>
    <div className="app_footer__btm__socials">
      <FB />
      <Twitter />
      <Linkedin />
      <IG />
    </div>

    <Typography variant="span">Copyright © 2023 Alterbin</Typography>
  </>
);

function FooterC() {
  return (
    <footer className="app_footer">
      <div className="app_footer__contact_us app_landing_page__px">
        <div className="app_footer__contact_us__con">
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

          <div className="app_footer__content__item__subscribe">
            <input
              type="text"
              className="app_footer__content__item__subscribe__input"
              placeholder="Enter your email address.."
            />

            <button
              type="button"
              className="app_footer__content__item__subscribe__button"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="app_landing_page__px d-none d-lg-block">
        <div className="app_footer__btm">
          {footerBtm}
        </div>
      </div>

      <div className="app_footer__btm app_landing_page__px d-flex d-lg-none">
        {footerBtm}
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <div className="position-relative">
      <Union />

      <FooterC />
    </div>
  );
}

function FB() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <g clipPath="url(#clip0_127_95)">
        <path
          d="M28.0429 14.2714C28.0429 21.8772 21.8772 28.0429 14.2714 28.0429C6.66568 28.0429 0.5 21.8772 0.5 14.2714C0.5 6.66568 6.66568 0.5 14.2714 0.5C21.8772 0.5 28.0429 6.66568 28.0429 14.2714Z"
          stroke="white"
        />
        <path
          d="M17.8592 14.8302H15.3126V24.1596H11.4544V14.8302H9.61938V11.5514H11.4544V9.42973C11.4544 7.91248 12.1751 5.53662 15.347 5.53662L18.2049 5.54858V8.73114H16.1313C15.7912 8.73114 15.3129 8.90108 15.3129 9.62486V11.5545H18.1963L17.8592 14.8302Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_127_95">
          <rect width="28.5429" height="28.5429" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Twitter() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
    >
      <g clipPath="url(#clip0_127_99)">
        <path
          d="M28.5858 14.2713C28.5858 21.877 22.4202 28.0426 14.8145 28.0426C7.20883 28.0426 1.04321 21.877 1.04321 14.2713C1.04321 6.66562 7.20883 0.5 14.8145 0.5C22.4202 0.5 28.5858 6.66562 28.5858 14.2713Z"
          stroke="white"
        />
        <path
          d="M23.556 10.2564C22.9444 10.5276 22.2865 10.711 21.5966 10.7929C22.301 10.3709 22.8416 9.70308 23.0968 8.90605C22.4377 9.29706 21.7073 9.58072 20.9306 9.73361C20.3083 9.0709 19.4217 8.65674 18.44 8.65674C16.5564 8.65674 15.0288 10.1844 15.0288 12.068C15.0288 12.3354 15.0591 12.5956 15.1176 12.8454C12.2825 12.7032 9.76882 11.3452 8.08622 9.28078C7.79264 9.78449 7.62423 10.3709 7.62423 10.9959C7.62423 12.1792 8.2269 13.2237 9.14172 13.8353C8.58281 13.8177 8.05645 13.6643 7.59675 13.4082C7.5965 13.4227 7.5965 13.4372 7.5965 13.4514C7.5965 15.1042 8.77284 16.4828 10.3331 16.796C10.0471 16.8743 9.74516 16.9158 9.43454 16.9158C9.21423 16.9158 9.00078 16.8947 8.79269 16.855C9.22669 18.2099 10.4862 19.1963 11.9793 19.224C10.8116 20.1391 9.34092 20.6842 7.74227 20.6842C7.46752 20.6842 7.19531 20.6682 6.92896 20.6364C8.4378 21.6047 10.2313 22.1692 12.1576 22.1692C18.4321 22.1692 21.8635 16.9713 21.8635 12.4631C21.8635 12.3153 21.8602 12.168 21.8536 12.0219C22.5206 11.5411 23.0988 10.9405 23.556 10.2564Z"
          fill="#F1F2F2"
        />
      </g>
      <defs>
        <clipPath id="clip0_127_99">
          <rect
            width="28.5429"
            height="28.5429"
            fill="white"
            transform="translate(0.542847)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function Linkedin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
    >
      <g clipPath="url(#clip0_127_104)">
        <path
          d="M28.1286 14.2709C28.1286 21.8767 21.9629 28.0424 14.3571 28.0424C6.75137 28.0424 0.585693 21.8767 0.585693 14.2709C0.585693 6.66519 6.75137 0.499512 14.3571 0.499512C21.9629 0.499512 28.1286 6.66519 28.1286 14.2709Z"
          stroke="white"
        />
        <path
          d="M22.8841 15.4199V21.3037H19.4729V15.8143C19.4729 14.4359 18.9803 13.4946 17.7452 13.4946C16.8026 13.4946 16.2427 14.1283 15.9954 14.742C15.9056 14.9612 15.8825 15.2658 15.8825 15.5733V21.3035H12.4709C12.4709 21.3035 12.5167 12.0061 12.4709 11.0437H15.8827V12.4976C15.8759 12.5091 15.8662 12.5203 15.8601 12.5312H15.8827V12.4976C16.3361 11.8001 17.1446 10.8028 18.9572 10.8028C21.2015 10.8028 22.8841 12.2692 22.8841 15.4199ZM8.9022 6.09814C7.73526 6.09814 6.9718 6.86415 6.9718 7.87056C6.9718 8.85561 7.71313 9.64374 8.85743 9.64374H8.87956C10.0694 9.64374 10.8092 8.85561 10.8092 7.87056C10.7866 6.86415 10.0694 6.09814 8.9022 6.09814ZM7.17456 21.3037H10.5848V11.0437H7.17456V21.3037Z"
          fill="#F1F2F2"
        />
      </g>
      <defs>
        <clipPath id="clip0_127_104">
          <rect
            width="28.5429"
            height="28.5429"
            fill="white"
            transform="translate(0.0856934)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function IG() {
  return (
    <svg
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.6714 14.2709C28.6714 21.8767 22.5057 28.0424 14.9 28.0424C7.29422 28.0424 1.12854 21.8767 1.12854 14.2709C1.12854 6.66519 7.29422 0.499512 14.9 0.499512C22.5057 0.499512 28.6714 6.66519 28.6714 14.2709Z"
        stroke="white"
      />
      <path
        d="M18.466 10.4125C18.3177 10.4125 18.1727 10.4565 18.0494 10.5389C17.926 10.6213 17.8299 10.7384 17.7731 10.8755C17.7164 11.0125 17.7015 11.1633 17.7305 11.3088C17.7594 11.4543 17.8308 11.5879 17.9357 11.6928C18.0406 11.7977 18.1742 11.8691 18.3197 11.8981C18.4652 11.927 18.616 11.9122 18.7531 11.8554C18.8901 11.7986 19.0072 11.7025 19.0896 11.5792C19.1721 11.4558 19.216 11.3108 19.216 11.1625C19.216 10.9636 19.137 10.7728 18.9964 10.6322C18.8557 10.4915 18.665 10.4125 18.466 10.4125ZM21.341 11.925C21.3289 11.4064 21.2318 10.8934 21.0535 10.4062C20.8946 9.98946 20.6473 9.61205 20.3285 9.3C20.0191 8.97964 19.6408 8.73386 19.2223 8.58125C18.7365 8.3976 18.2228 8.29826 17.7035 8.2875C17.041 8.25 16.8285 8.25 15.1285 8.25C13.4285 8.25 13.216 8.25 12.5535 8.2875C12.0343 8.29826 11.5206 8.3976 11.0348 8.58125C10.6171 8.73541 10.2391 8.98098 9.92854 9.3C9.60818 9.60949 9.3624 9.98777 9.20979 10.4062C9.02614 10.8921 8.9268 11.4057 8.91604 11.925C8.87854 12.5875 8.87854 12.8 8.87854 14.5C8.87854 16.2 8.87854 16.4125 8.91604 17.075C8.9268 17.5943 9.02614 18.1079 9.20979 18.5938C9.3624 19.0122 9.60818 19.3905 9.92854 19.7C10.2391 20.019 10.6171 20.2646 11.0348 20.4187C11.5206 20.6024 12.0343 20.7017 12.5535 20.7125C13.216 20.75 13.4285 20.75 15.1285 20.75C16.8285 20.75 17.041 20.75 17.7035 20.7125C18.2228 20.7017 18.7365 20.6024 19.2223 20.4187C19.6408 20.2661 20.0191 20.0204 20.3285 19.7C20.6487 19.3891 20.8962 19.0114 21.0535 18.5938C21.2318 18.1066 21.3289 17.5936 21.341 17.075C21.341 16.4125 21.3785 16.2 21.3785 14.5C21.3785 12.8 21.3785 12.5875 21.341 11.925ZM20.216 17C20.2115 17.3967 20.1396 17.7898 20.0035 18.1625C19.9037 18.4345 19.7435 18.6803 19.5348 18.8813C19.3321 19.0878 19.0868 19.2478 18.816 19.35C18.4434 19.4861 18.0503 19.558 17.6535 19.5625C17.0285 19.5938 16.7973 19.6 15.1535 19.6C13.5098 19.6 13.2785 19.6 12.6535 19.5625C12.2416 19.5702 11.8314 19.5068 11.441 19.375C11.1822 19.2675 10.9481 19.108 10.7535 18.9062C10.5461 18.7055 10.3878 18.4595 10.291 18.1875C10.1385 17.8095 10.0538 17.4075 10.041 17C10.041 16.375 10.0035 16.1438 10.0035 14.5C10.0035 12.8562 10.0035 12.625 10.041 12C10.0438 11.5944 10.1179 11.1925 10.2598 10.8125C10.3698 10.5487 10.5387 10.3135 10.7535 10.125C10.9434 9.91011 11.1781 9.73943 11.441 9.625C11.822 9.48753 12.2235 9.41567 12.6285 9.4125C13.2535 9.4125 13.4848 9.375 15.1285 9.375C16.7723 9.375 17.0035 9.375 17.6285 9.4125C18.0253 9.41705 18.4184 9.4889 18.791 9.625C19.0751 9.73041 19.33 9.90178 19.5348 10.125C19.7396 10.317 19.8996 10.5517 20.0035 10.8125C20.1424 11.1931 20.2143 11.5949 20.216 12C20.2473 12.625 20.2535 12.8562 20.2535 14.5C20.2535 16.1438 20.2473 16.375 20.216 17ZM15.1285 11.2937C14.4947 11.295 13.8754 11.4841 13.3489 11.8371C12.8225 12.1902 12.4125 12.6914 12.1708 13.2773C11.9291 13.8633 11.8665 14.5078 11.9909 15.1293C12.1153 15.7509 12.4212 16.3216 12.8698 16.7694C13.3185 17.2171 13.8898 17.5219 14.5116 17.6451C15.1334 17.7683 15.7777 17.7044 16.3632 17.4616C16.9487 17.2187 17.4491 16.8078 17.8011 16.2806C18.1532 15.7535 18.341 15.1339 18.341 14.5C18.3419 14.0782 18.2593 13.6604 18.0981 13.2706C17.9368 12.8808 17.7001 12.5268 17.4016 12.2288C17.103 11.9308 16.7485 11.6948 16.3584 11.5343C15.9683 11.3739 15.5503 11.2921 15.1285 11.2937ZM15.1285 16.5813C14.7169 16.5813 14.3145 16.4592 13.9723 16.2305C13.63 16.0018 13.3632 15.6768 13.2057 15.2965C13.0482 14.9162 13.007 14.4977 13.0873 14.094C13.1676 13.6902 13.3658 13.3194 13.6569 13.0283C13.9479 12.7373 14.3188 12.539 14.7225 12.4587C15.1262 12.3784 15.5447 12.4197 15.925 12.5772C16.3053 12.7347 16.6303 13.0015 16.859 13.3437C17.0877 13.686 17.2098 14.0884 17.2098 14.5C17.2098 14.7733 17.156 15.044 17.0514 15.2965C16.9468 15.549 16.7935 15.7784 16.6002 15.9717C16.4069 16.1649 16.1775 16.3182 15.925 16.4228C15.6725 16.5274 15.4019 16.5813 15.1285 16.5813Z"
        fill="white"
      />
    </svg>
  );
}
