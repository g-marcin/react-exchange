import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <a
        className="wrapper__Footer__Item Inter opaque"
        href="#"
        aria-label="link to contacts"
        title="Contact us"
      >
        Contact us
      </a>
      <a
        className="wrapper__Footer__Item Poppins opaque weight600"
        href="/index.html"
        aria-label="link to homepage"
        title="Homepage"
      >
        Shop-Cart
      </a>
      <div className="wrapper__Footer__Item opaque">
        <a
          className="wrapper__Icon"
          href="https://www.facebook.com"
          title="Facebook"
          aria-label="link to facebook"
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} size={"lg"} />
        </a>
        <a
          className="wrapper__Icon"
          href="https://www.instagram.com"
          title="Instagram"
          aria-label="link to instagram"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} size={"lg"} />
        </a>
        <a
          className="wrapper__Icon"
          href="https://www.twitter.com"
          title="Twitter"
          aria-label="link to twitter"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} size={"lg"} />
        </a>
      </div>
    </footer>
  );
};
