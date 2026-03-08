import { motion } from "framer-motion";
import { FaCheckCircle, FaCogs, FaTruck, FaUsers } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const About = () => {
  return (
    <div className="bg-[var(--body-bg)] overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        {/* --- Hero Header Section --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-28"
        >
          <span className="highlight-title text-[10px] font-bold uppercase tracking-[5px] text-primary mb-6 inline-block">
            ESTABLISHED 2025
          </span>
          <h1 className="text-6xl lg:text-8xl font-arsenal font-bold text-base-content leading-none tracking-tighter mb-8">
            About <span className="italic font-light opacity-60">Textila</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-base-content/50 max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-widest">
            Crafting the future of garment production through architectural
            precision and digital transparency.
          </p>
        </motion.section>

        {/* --- Mission Section (Editorial Layout) --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 text-[150px] font-arsenal font-bold text-base-content/[0.03] select-none">
              MISSION
            </div>
            <h2 className="text-4xl font-arsenal font-bold mb-8 text-base-content relative z-10">
              Our Visionary <br />{" "}
              <span className="italic font-light">Mission</span>
            </h2>
            <p className="text-base text-base-content/60 leading-[1.8] mb-6 italic font-arsenal text-lg">
              "Seamlessly blend Style and Comfort, offering a curated collection
              of garments that empower individuals."
            </p>
            <p className="text-sm text-base-content/50 leading-relaxed max-w-md">
              We empower buyers and managers with real-time visibility, ensuring
              that every thread tells a story of ethical production and
              responsibility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="relative overflow-hidden  transition-all duration-1000">
              <img
                src="https://images.pexels.com/photos/4492089/pexels-photo-4492089.jpeg"
                alt="Garments Production"
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
              />
            </div>
          </motion.div>
        </section>

        {/* --- Values Section (Sharp Flat Design) --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold tracking-[6px] text-primary uppercase mb-4">
              Core Principles
            </h2>
            <p className="text-3xl font-arsenal text-base-content italic">
              The Textila Advantage
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-base-content/5">
            {[
              {
                icon: <FaCheckCircle />,
                title: "Quality Assurance",
                desc: "Strict quality checks to ensure maximum reliability in every stitch.",
              },
              {
                icon: <FaTruck />,
                title: "Reliable Delivery",
                desc: "On-time logistics powered by real-time production tracking.",
              },
              {
                icon: <FaCogs />,
                title: "Modern Process",
                desc: "Manufacturing excellence ensuring high-precision efficiency.",
              },
              {
                icon: <FaUsers />,
                title: "Expert Support",
                desc: "Dedicated assistance throughout your entire ordering journey.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-10 border border-base-content/5 hover:bg-base-content/2 transition-colors group relative overflow-hidden"
              >
                <div className="text-primary/40 group-hover:text-primary transition-colors duration-500 mb-6 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xs uppercase tracking-[3px] mb-4 text-base-content">
                  {feature.title}
                </h3>
                <p className="text-[11px] text-base-content/40 leading-relaxed uppercase tracking-wider">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- Story Section --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[4/5] overflow-hidden transition-all duration-1000">
              <img
                src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <span className="text-[10px] font-bold text-primary tracking-[4px] uppercase mb-4 block">
              Our Heritage
            </span>
            <h2 className="text-5xl font-arsenal font-bold mb-8 text-base-content leading-tight">
              A Legacy of <br />{" "}
              <span className="italic font-light opacity-50">Innovation</span>
            </h2>
            <div className="space-y-6 text-sm text-base-content/60 leading-loose">
              <p>
                Textila started with a vision to simplify the garments ordering
                process. We built a digital-first platform designed to provide
                transparency and unmatched efficiency for modern brands.
              </p>
              <p className="italic border-l-2 border-primary pl-6 py-2">
                Today, we serve global clients with a focus on ethical
                production and environmental responsibility.
              </p>
            </div>

            <div className="mt-12">
              <div className="text-xs font-bold uppercase tracking-[4px] text-base-content">
                Romana Khatun
              </div>
              <div className="text-[10px] uppercase tracking-[2px] text-base-content/40 mt-1 italic">
                CEO & Founder, Romana
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;
