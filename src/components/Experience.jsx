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

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       className="vertical-timeline-element--work"
//       // don’t pass `date` here
//       contentStyle={{
//         background: "transparent",
//         boxShadow: "none",
//         padding: 0,
//         border: "none",
//       }}
//       contentArrowStyle={{ borderRight: "17px solid white" }}
//       iconStyle={{
//         background: experience.iconBg,
//         overflow: "hidden",
//       }}
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             style={{ width: "inherit", height: "inherit", objectFit: "cover" }}
//           />
//         </div>
//       }
//     >
//       {/* Stacked card */}
//       <div className="relative">
//         {/* back sheet */}
//         <div className="absolute inset-0 translate-x-2 translate-y-2 bg-bg-light border border-black" />

//         {/* front sheet */}
//         <div className="relative bg-bg-light border border-black p-4">
//           <h3 className="text-black text-[28px] leading-tight font-semibold">
//             {experience.title}
//           </h3>

//           <p className="font-semibold text-black text-[16px] leading-6">
//             {experience.company_name}
//           </p>

//           <ul className="mt-5 list-disc ml-5 space-y-2">
//             {experience.points.map((point, index) => (
//               <li
//                 key={`experience-point-${index}`}
//                 className="text-black text-[14px] pl-1 tracking-wider"
//               >
//                 {point}
//               </li>
//             ))}
//           </ul>

//           {/* date at the bottom */}
//           <p className="mt-6 text-sm text-gray-600 italic">{experience.date}</p>
//         </div>
//       </div>
//     </VerticalTimelineElement>
//   );
// };

// const TWO_COL_BREAKPOINT = 1170; // matches the library

// const ExperienceCard = ({ experience, index }) => {
//   const isLeft = index % 2 === 0; // library alternates; left on even in 2-col

//   return (
//     <VerticalTimelineElement
//       className="vertical-timeline-element--work"
//       // Hide the library arrow; we’ll draw our own
//       contentStyle={{
//         background: "transparent",
//         boxShadow: "none",
//         padding: 0,
//         border: "none",
//       }}
//       contentArrowStyle={{ borderRight: "0" }}
//       iconStyle={{ background: experience.iconBg, overflow: "hidden" }}
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             style={{ width: "inherit", height: "inherit", objectFit: "cover" }}
//           />
//         </div>
//       }
//     >
//       {/* Stacked card */}
//       <div className="relative">
//         {/* back sheet (kept underneath so it never blocks the arrow) */}
//         <div className="absolute inset-0 translate-x-2 translate-y-2 bg-bg-light border border-black z-0" />

//         {/* front sheet */}
//         <div className="relative bg-bg-light border border-black p-4 z-10">
//           {/* Custom arrow — desktop (>=1170px): flip side based on isLeft */}
//           <span
//             className={[
//               "hidden [@media(min-width:1170px)]:block",
//               "absolute top-8 w-4 h-4 bg-bg-light z-20",
//               isLeft
//                 ? "-left-4 [clip-path:polygon(100%_0,0_50%,100%_100%)]"
//                 : "-right-4 [clip-path:polygon(0_0,100%_50%,0_100%)]",
//               "border border-black border-l-0", // tiny border to match the card edge
//             ].join(" ")}
//           />

//           {/* Custom arrow — mobile (<1170px): always on the right */}
//           <span
//             className="[@media(min-width:1170px)]:hidden absolute top-8 -right-4 w-4 h-4 bg-bg-light z-20
//                        [clip-path:polygon(0_0,100%_50%,0_100%)] border border-black border-l-0"
//           />

//           <h3 className="text-black text-[28px] leading-tight font-semibold">
//             {experience.title}
//           </h3>
//           <p className="font-semibold text-black text-[16px] leading-6">
//             {experience.company_name}
//           </p>

//           <ul className="mt-5 list-disc ml-5 space-y-2">
//             {experience.points.map((point, i) => (
//               <li
//                 key={i}
//                 className="text-black text-[14px] pl-1 tracking-wider"
//               >
//                 {point}
//               </li>
//             ))}
//           </ul>

//           {/* Date at the bottom inside the card */}
//           <p className="mt-6 text-sm text-gray-600 italic">{experience.date}</p>
//         </div>
//       </div>
//     </VerticalTimelineElement>
//   );
// };

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
