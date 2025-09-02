import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-0 text-white text-[17px]
        max-w-6xl leading-[30px]"
      >
        Hey! I&#39;m Ana Ramon, an enthusiastic Mechatronics Engineering
        graduate with a passion for full-stack development. I&#39;ve had the
        opportunity to work as a software developer at Nokia, Tigercat,
        Pepperdata, and ArenaX Labs. During my tenure, I gained hands-on
        experience with technologies such as JavaScript, Node.js, and React.
        I&#39;m currently looking for full-time jobs as a Front-End or
        Full-Stack developer.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
