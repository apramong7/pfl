import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", 0, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="sm:w-[360px] w-full">
        {/* stack container */}
        <div className="relative">
          {/* back sheets */}
          <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black border-2 border-black z-10" />

          {/* front sheet */}
          <div className="relative z-20 border-2 border-black bg-white overflow-hidden">
            {/* browser bar */}
            <div className="relative h-10 bg-gray-300 border-b-2 border-black flex items-center justify-center">
              <div className="absolute left-3 flex gap-2">
                <span className="w-3 h-3 rounded-full border-2 border-black bg-white" />
                <span className="w-3 h-3 rounded-full border-2 border-black bg-white" />
              </div>
              <span className="text-black font-aiMono-700">{name}</span>
            </div>

            {/* project image */}
            <div className="w-full h-44 sm:h-52 border-b-2 border-black">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* body */}
            <div className="p-6">
              <p className="mt-4 text-black font-aiMono text-[16px] leading-7">
                {description}
              </p>

              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className="mt-6 m-auto flex bg-gray-200 border-4 border-black px-6 py-3 text-[16px] font-aiMono-700
                           hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform text-black"
                aria-label={`View ${name}`}
              >
                View project
              </button>

              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`font-aiMono text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("down", "tween", 0, 1.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-1 font-aiMono text-white text-[17px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 justify-center flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
