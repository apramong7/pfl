import { styles } from "../styles";
import { TypeAnimation } from "react-type-animation";

const Hero = () => (
  <section className="text-right">
    <div>
      <h1 className={`${styles.heroHeadText} leading-tight`}>
        Hi, I&#39;m Ana Ramon
      </h1>
      <TypeAnimation
        className={`${styles.heroSubText} mt-1 leading-1`}
        style={{ whiteSpace: "normal", display: "block" }}
        sequence={[
          `Full-stack developer\ncrafting captivating web experiences.`,
          3000, // Pause for 3 second
          "", // Clear the text
        ]}
        speed={30}
        repeat={Infinity}
        cursor={false}
      />
    </div>
  </section>
);

export default Hero;
