import { stagger } from "framer-motion/dom";
import mypic from "../assets/ishanPic.jpeg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const childVarient = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pd-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={mypic}
              alt="myphoto"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
              variants={childVarient}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl text-white"
            >
              Ishan Kashyap{" "}
            </motion.h2>
            <motion.span
              variants={childVarient}
              className="bg-gradient-to-l from-green-100 to-green-300 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={childVarient}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-white"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVarient}
              href="/IshanCV11.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
