import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { hackathons } from "../constants";
const FeedbackCard = ({
  index,
  description,
  name,
  place,
  company,
  image,
  link,
}) => (
  <motion.div
    variants={fadeIn("left", "spring", 0, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
  >
    <div
      className="
        w-full md:w-3/4               /* ~75% on md+ */
        max-w-[1100px]                /* cap */
        mx-auto
      "
    >
      {/* stack container */}
      <div className="relative">
        {/* back sheet */}
        <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black border-2 border-black z-10" />

        {/* front sheet */}
        <div className="relative z-20 border-2 border-black bg-white overflow-hidden">
          {/* browser bar */}
          <div
            className="
              relative bg-gray-300 border-b-2 border-black
              flex items-center justify-center
              px-16                      /* keep text clear of the left circles */
              h-auto min-h-[40px] py-2   /* default height */
              [@media(max-width:554px)]:min-h-[64px]  /* taller when narrow */
              [@media(max-width:554px)]:py-3
            "
          >
            {/* circles, vertically centered */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-black bg-white" />
              <span className="w-3 h-3 rounded-full border-2 border-black bg-white" />
            </div>

            <span className="text-black font-aiMono-700 text-center leading-snug break-words">
              {[company, place].filter(Boolean).join(" — ")}
            </span>
          </div>

          {/* hero image with responsive ratio */}
          <div className="w-full border-b-2 border-black aspect-[16/9] sm:aspect-[21/9]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* body */}
          <div className="p-6">
            <h3 className="text-black font-aiMono-700 text-[28px] leading-tight">
              {name}
            </h3>
            <p className="mt-4 text-black font-aiMono text-[16px] leading-7">
              {description}
            </p>

            {link && (
              <button
                onClick={() => window.open(link, "_blank")}
                className="mt-6 m-auto flex bg-gray-200 border-4 border-black px-6 py-3 text-[16px] font-aiMono-700
                           hover:-translate-y-0.5 hover:-translate-x-0.5 transition-transform text-black"
                aria-label={`Open ${name}`}
              >
                View project
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Hackathons and Challenges
        </h2>
      </motion.div>
      <div className={`items-center flex flex-col gap-7`}>
        {hackathons.map((hackathon, index) => (
          <FeedbackCard key={hackathon.name} index={index} {...hackathon} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
