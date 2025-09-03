import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const TimelineCard = ({ experience }) => {
  return (
    <div className="relative">
      {/* back sheet */}
      <div className="absolute inset-0 translate-y-2 bg-bg-light border border-black translate-x-2" />

      {/* front sheet */}
      <div className="relative z-10 bg-bg-light border border-black p-4">
        <h3 className="text-black text-[28px] leading-tight font-semibold">
          {experience.title}
        </h3>
        <p className="font-semibold text-black text-[16px] leading-6">
          {experience.company_name}
        </p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, i) => (
            <li key={i} className="text-black text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>

        {/* date at the end of the card */}
        <p className="mt-6 text-sm text-gray-600 italic">{experience.date}</p>
      </div>
    </div>
  );
};

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        padding: 0,
        border: "none",
      }}
      contentArrowStyle={{
        borderRight: "17px solid #fff",
        marginLeft: "7px",
      }}
      iconStyle={{ background: experience.iconBg, overflow: "hidden" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            style={{ width: "inherit", height: "inherit", objectFit: "cover" }}
          />
        </div>
      }
    >
      <TimelineCard experience={experience} />
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-0 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
