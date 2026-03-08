import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="bg-(--body-bg) pt-20 md:pt-34 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title with Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-widest text-primary mb-2"
        >
          <span className="highlight-title">The Textilia Mission</span>
        </motion.div>

        {/* Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl lg:text-4xl font-arsenal leading-relaxed md:leading-[1.6] text-base-content/80 font-extralight"
        >
          "Seamlessly blend{" "}
          <span className="text-base-content  ">Style and Comfort</span>,
          offering a curated collection of garments that empower individuals to
          express their{" "}
          <span className="text-base-content font-medium  ">
            Unique Identity
          </span>
          . Our mission extends beyond clothing –{" "}
          <span className="text-base-content   ">We Envision a World</span>{" "}
          where each thread tells a story of{" "}
          <span className="text-base-content  ">Ethical Production</span>,
          environmental responsibility, and the{" "}
          <span className="text-base-content  ">
            Celebration Of Individuality
          </span>
          ."
        </motion.p>

        {/* Signature & Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex flex-col items-center justify-center relative"
        >
          {/* Handwritten Style Overlay*/}
          <div className="absolute -top-6 opacity-10 select-none">
            <span className="text-5xl md:text-7xl font-serif italic text-base-content">
              Romana
            </span>
          </div>

          <h4 className="text-lg md:text-xl font-arsenal text-base-content font-bold mt-4">
            Romana Khatun
          </h4>
          <p className="text-[10px] md:text-xs uppercase tracking-[3px] text-base-content/50 mt-1">
            CEO Founder Romana
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
