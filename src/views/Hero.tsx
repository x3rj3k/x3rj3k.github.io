// assets
import homePageImg from '../assets/image/home-page.svg';
import homePageIllustation from '../assets/image/hero-illustration.svg';
import downloadIcon from '../assets/image/download-btn-icon.svg';
import userImage from '../assets/image/user.svg';

// components
import { Button } from '../components';

// react-simple-typewriter
import { Typewriter } from 'react-simple-typewriter';

// framer-motion
import { motion } from 'framer-motion';

// utils
import { transition } from '../utils/transition';
import { fadeIn, scale } from '../utils/variants';

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-center items-center xl:items-start gap-24 xl:gap-40 w-full py-16 px-12">
        <div className="w-full xl:w-fit">
          <motion.h1
            variants={fadeIn('down')}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full xl:w-fit text-center xl:text-start text-3xl sm:text-5xl lg:text-6xl font-bold text-textPrimary"
          >
            Hi, I'm Jekxer
            <br />
            <span className="text-secondary">
              <Typewriter
                words={['Frontend', 'Developer']}
                cursor
                cursorStyle="_"
                typeSpeed={200}
                deleteSpeed={150}
                loop
              />
            </span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up')}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
          >
            <Button secondary>Hire me</Button>
            <Button icon={downloadIcon}>Download CV</Button>
          </motion.div>
        </div>
        <motion.img
          variants={scale()}
          transition={transition}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={userImage}
          alt="My Profile"
          className="max-w-full sm:max-w-[401px]"
        />
      </div>
      <div className=" absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Hero;
