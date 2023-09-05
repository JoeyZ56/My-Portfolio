import { FaFacebook, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.facebook.com/joey.zazzi.12"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
      <div>
        <a
          href="http://www.linkedin.com/in/joseph-zazzi-8bab68a1"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
