/* eslint-disable no-unused-vars */
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import banner1 from "../../assets/banner-1.jpg";
import { Link } from "react-router";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const Banner = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image Side */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          delay: 0.2,
        }}
        className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[75%] h-full z-0 overflow-hidden"
      >
        <img
          src={banner1}
          alt="Banner Background"
          className="w-full h-full object-cover grayscale-10"
        />
        <div className="absolute inset-0 bg-black/10 hidden md:block lg:hidden"></div>
      </motion.div>

      <div className="container mx-auto px-4 z-10 h-full">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start h-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full md:w-[70%] lg:w-[60%] xl:w-[50%] lg:min-h-screen bg-(--body-bg) p-6 md:p-12 xl:p-15 shadow-xl md:shadow-none flex flex-col justify-center mx-auto md:mx-0 mt-16 md:mt-0 transition-colors duration-300"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm font-medium uppercase tracking-widest text-primary mb-2 "
            >
              <span className="highlight-title">TRACK YOUR SUCCESS.</span>
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-7xl font-arsenal font-light leading-[1.2] md:leading-[1.1] text-base-content"
            >
              Style in Every <br />
              Strand Elegance <br />
              in Every Stitch
            </motion.h1>

            {/* Descriptive Text */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-sm md:text-base text-base-content/80 leading-relaxed max-w-sm"
            >
              The Garments Order & Production Tracker simplifies managing
              orders, monitoring every stage from cutting to finishing.
            </motion.p>

            {/* Buttons Group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 md:gap-10 mt-8 md:mt-12"
            >
              <Link to="/all-products">
                <button className="btn-primary px-8 md:px-10 h-[50px] md:h-[55px] hover:opacity-90 transition-all">
                  Get Started
                </button>
              </Link>

              {/* Play Button Group */}
              <div className="flex items-center gap-4 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border border-base-content/20 bg-(--body-bg) flex items-center justify-center z-10 transition-colors duration-300">
                    <FaPlay className="text-[8px] md:text-[10px] ml-1 text-base-content/60" />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-xs md:text-sm font-semibold text-base-content">
                    Intro Video
                  </p>
                  <p className="text-[9px] md:text-[10px] text-base-content/50">
                    3 Min 45 Sec
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
