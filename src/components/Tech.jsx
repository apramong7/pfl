import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { technologiesMobile } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1300px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </motion.div>
      <div
        className="flex flex-row flex-wrap
    justify-center gap-10"
      >
        {isMobile ? (
          <>
            {technologiesMobile.map((technology) => (
              <div
                className="w-20 h-20 rounded-circle flex justify-center items-center"
                style={{
                  backgroundImage: "url('/src/assets/bg.png')",
                  borderRadius: "50%",
                }}
                key={technology.name}
              >
                <img style={{ width: 70, height: 70 }} src={technology.icon} />
              </div>
            ))}{" "}
          </>
        ) : (
          <>
            {technologies.map((technology) => (
              <div className="w-28 h-20" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
