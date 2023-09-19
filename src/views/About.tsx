// assets
import aboutPageImg from '../assets/image/about-me-page.svg';
import aboutIllustration from '../assets/image/about-illustration.svg';
import facebookIcon from '../assets/image/facebook-icon.svg';
import instagramIcon from '../assets/image/instagram-icon.svg';
import twitterIcon from '../assets/image/twitter-icon.svg';
import youtubeIcon from '../assets/image/youtube-icon.svg';
import linkedIn from '../assets/image/linkedin-icon.svg';
import githubIcon from '../assets/image/github-icon.svg';

// components
import { SocialMediaIcon, Reveal } from '../components';

// framer-motion
import { motion } from 'framer-motion';

// utils
import { fadeIn, scale } from '../utils/variants';
import { transition } from '../utils/transition';

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-center items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              About <span className="text-secondary">me</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              I am an optimistic and hard working kind of person. I give
              importance to punctuality because I believe it is a commitment and
              it reflects on what kind of person I am. My long term goals is to
              pivot my career in this field because this is my passion and also
              to develop my own career plan. My short term goals is sharpen my
              skills to provide a better output and to be a productive person at
              work.
            </p>
          </Reveal>
          <motion.div
            variants={fadeIn('up')}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <SocialMediaIcon imgSrc={facebookIcon} title="Facebook" />
            <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" />
            <SocialMediaIcon imgSrc={twitterIcon} title="Twitter" />
            <SocialMediaIcon imgSrc={linkedIn} title="Linkedin" />
            <SocialMediaIcon imgSrc={githubIcon} title="Github" />
          </motion.div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt="About Image"
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>
      <div className=" absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
