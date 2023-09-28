import Image from "next/image";
import { Typography } from ".";
import { wipAlert } from "@/utils";
import { Socials } from "./footer";
import { Arrow } from "../svgs/arrows";

const routes = [
  { label: 'About Us', href: '' },
  { label: 'Initiatives', href: '' },
  { label: 'Events', href: '' },
  { label: 'Contact', href: '' },
];

function Menu({ className = '' }) {
  return (
    <svg onClick={wipAlert} className={'cursor-pointer ' + className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 5.25C12.5858 5.25 12.25 5.58579 12.25 6C12.25 6.41421 12.5858 6.75 13 6.75H19C19.4142 6.75 19.75 6.41421 19.75 6C19.75 5.58579 19.4142 5.25 19 5.25H13Z" fill="#06382E" />
      <path d="M5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H5Z" fill="#06382E" />
      <path d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H19C19.4142 18.75 19.75 18.4142 19.75 18C19.75 17.5858 19.4142 17.25 19 17.25H9Z" fill="#06382E" />
    </svg>
  );
}

function Routes({ mobile = false }) {
  return (
    <ul className={`app__header__ul ${mobile ? '' : 'd-none d-lg-flex'}`}>
      {routes.map((item) => (
        <li className="app__header__ul__li" key={item.label}>
          <a className="app__header__ul__li__a" href="http://">
            <Typography fontWeight="md">
              {item.label}
            </Typography>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Main() {
  return (
    <div className="w-100 d-flex justify-content-between align-items-center">
      <Image className="app__header__logo" src="/media/logos/h-logo2.svg" width={147} height={35} alt="" priority />

      <Routes />

      <Image style={{ visibility: 'hidden' }} className="app__header__logo d-none d-lg-flex" src="/media/logos/h-logo2.svg" width={147} height={35} alt="" priority />

      <Menu className="d-block d-lg-none" />
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="app__header__mobile_menu_content">
      <div className="d-flex flex-column align-items-center">
        <Routes mobile />

        <a className="app_hero_section__content__txt__action" href="/">
          <Arrow />

          <Typography variant="span">
            Become a sponsor
          </Typography>
        </a>
      </div>

      <div className="app__header__mobile_menu_content__footer">
        <Socials dark />
      </div>
    </div>
  );
}

const showMobileMenu = false;

export default function Navbar() {
  return (
    <header className={`app__header ${showMobileMenu ? 'app__header--show_mobile_menu' : ''} app_landing_page__px`}>
      <Main />

      {showMobileMenu && <MobileMenu />}
    </header>
  );
}
