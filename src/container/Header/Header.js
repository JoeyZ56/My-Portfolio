import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋🏻 </span>
            <div style={{ marginLeft: 20 }}>
              <h3 className="p-text">Hello, I am</h3>
              <h1 className="head-text">Joey</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <h3 className="p-text">Fullstack Developer</h3>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        {/* your image here make it dynamic images.____ */}
        <img src={images.Profileme2} alt="profilepic" />
        {/* //For motion of an object behind profile pic */}
        <motion.img
        // whileInView={{ scale: [0, 1] }}
        // transition={{ duration: 1, ease: "easeInOut" }}
        // src={images.circle}
        // alt="profile_circle"
        // className="overlay_circle"
        />
      </motion.div>

      {/* // motion img style for behind the background image */}
      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles"
      >
        {/* //add your own images */}
        {[images.react, images.javascript, images.node].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
