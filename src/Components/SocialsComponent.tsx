import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faReddit,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function SocialsComponent() {
  return (
    <div>
      <a className="px-2" href="https://github.com/swadhinroutray">
        {" "}
        <FontAwesomeIcon className="socials" icon={faGithub} size='5x' />
      </a>
      <a className="px-2"  href="https://www.facebook.com/swadhin.routray.7">
        <FontAwesomeIcon className="socials" icon={faFacebook}size='5x' />
      </a>
      <a className="px-2" href="https://www.instagram.com/swadhin_routray/">
        <FontAwesomeIcon className="socials" icon={faInstagram}size='5x' />
      </a>
      <a className="px-2" href="https://twitter.com/routrayswadhin">
        {" "}
        <FontAwesomeIcon className="socials" icon={faTwitter} size='5x'/>
      </a>
      <a className="px-2" href="https://www.reddit.com/user/swadhinroutray">
        <FontAwesomeIcon className="socials" icon={faReddit} size='5x' />
      </a>
      <a className="px-2" href="https://www.linkedin.com/in/swadhin-routray-ba20ab125/">
        <FontAwesomeIcon className="socials" icon={faLinkedin}  size='5x'/>
      </a>
    </div>
  );
}
