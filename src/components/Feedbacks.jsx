import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { presentation } from '../assets';

import { hackathons } from '../constants';

const FeedbackCard = ({ index, description, name, place,
company, image, link }) => (

<motion.div
  variants={fadeIn('up', 'spring',
  index * 0.5, 0.75)}
>
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450
    }}
    className='bg-tertiary p-5 rounded-2xl s:w-[950px] w-full'
  >
    <div className="relative w-full h-[430px]">
      <img 
        src={image}
        alt={name}
        className="w-full h-full object-cover
        rounded-2xl"
      />
      <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
        <div
          onClick={() => window.open(link, "_blank")}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
        >
          <img
            src={presentation}
            alt='presentation link'
            className='w-1/2 h-1/2 object-contain'
            style={{background: '#fff'}}
          />
        </div>
      </div>
    </div>

    <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <h4 className="text-white  text-[18px]">{company}</h4>
        <p className="mt-2 text-secondary break-words text-[14px]">{description}</p>
    </div>


  </Tilt>
</motion.div>

)

const Feedbacks = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

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
    {isMobile 
      ? null
      : <div className='mt-12 bg-black-100 
      rounded-[20px]'>
        <div className={`${styles.padding} 
        bg-tertiary rounded-2xl min-h-[300px]`}>
          <motion.div
            variants={textVariant()}
          >
            <p className={styles.sectionSubText}>Extended learning activities</p>
            <h2 className={styles.sectionHeadText}>Hackathons and Challenges.</h2>
          </motion.div>
        </div>
        <div className={`${styles.paddingX} flex flex-col gap-7`}>
          {hackathons.map((hackathon, index) => (
            <FeedbackCard 
              key={hackathon.name}
              index={index}
              {...hackathon}
            />
          ))}
        </div>
      </div>
    }
   </>
  )
}

export default SectionWrapper(Feedbacks, '');