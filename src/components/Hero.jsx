import { styles } from "../styles";

const Hero = () => (
  <section className="text-right">
    <div>
      <h1 className={`${styles.heroHeadText} leading-tight`}>
        Hi, I&#39;m Ana Ramon
      </h1>
      <p className={`${styles.heroSubText} mt-1`}>
        Full-stack developer <br className="sm:block hidden" />
        crafting captivating web experiences
      </p>
    </div>
  </section>
);

export default Hero;
