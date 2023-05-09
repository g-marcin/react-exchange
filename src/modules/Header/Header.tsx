import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header: FC = () => {
  return (
    <header>
      <a className="logo" href="/" title="logo" aria-label="link to homepage">
        react-exchange
      </a>
      <div className="wrapper__Navbar">
        <div className="wrapper__Links">
          <a
            className="separator-3 Inter"
            title="Support"
            aria-label="link to support page"
            href="#"
          >
            Support
          </a>
          <div className="separator-3"></div>
          <a className="Inter" href="#" title="Services" aria-label="link to services page">
            Services
          </a>
        </div>
        <div className="separator-5"></div>
        <button className="dropdown__Account" aria-label="open account menu">
          Account
          <div className="wrapper__Icon"></div>
          <FontAwesomeIcon icon={["fas", "caret-down"]} size={"2xs"} />
        </button>
      </div>
      <button className="button__Hamburger" title="hamburger-menu" aria-label="open mobile menu">
        <FontAwesomeIcon icon={["fas", "bars"]} size={"lg"} />
      </button>
    </header>
  );
};
