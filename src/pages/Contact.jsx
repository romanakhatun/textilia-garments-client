import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[var(--body-bg)] transition-colors duration-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        {/* --- Header Section --- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="highlight-title text-[10px] font-bold uppercase tracking-[5px] text-primary mb-6 inline-block">
            GET IN TOUCH
          </span>
          <h1 className="text-6xl lg:text-8xl font-arsenal font-bold text-base-content leading-none tracking-tighter mb-8">
            Contact{" "}
            <span className="italic font-light opacity-60">Textilia</span>
          </h1>
          <p className="mt-4 text-[11px] uppercase tracking-[3px] text-base-content/40 max-w-2xl mx-auto leading-relaxed font-bold">
            Assisting clients in sourcing and managing garment production with
            architectural precision.
          </p>
        </motion.section>

        {/* --- Contact Info Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-base-content/5 mb-32">
          {[
            { icon: <FaPhoneAlt />, title: "Phone", detail: "(+62) 8896-2220" },
            {
              icon: <FaEnvelope />,
              title: "Email",
              detail: "help@support.com",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Address",
              detail: "Jl. Raya Kuta Chartered No.70 Street, Denpasar",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 text-center border border-base-content/5 hover:bg-base-content/[0.02] transition-colors group"
            >
              <div className="text-primary/30 group-hover:text-primary transition-colors duration-500 mb-6 flex justify-center text-2xl">
                {item.icon}
              </div>
              <h3 className="text-xs font-bold uppercase tracking-[4px] mb-4 text-base-content">
                {item.title}
              </h3>
              <p className="text-[11px] text-base-content/50 uppercase tracking-widest leading-loose">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- Form + Map Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Form - Sharp Design */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-base-100 border border-base-content/5 p-12 relative"
          >
            <div className="absolute top-0 left-0 bg-primary/10 px-6 py-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                ENQUIRY FORM
              </span>
            </div>

            <h2 className="text-3xl font-arsenal font-bold mb-10 text-base-content mt-4">
              Send us a{" "}
              <span className="italic font-light opacity-60">Message</span>
            </h2>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="text-[10px] font-bold uppercase tracking-[3px] text-base-content/30 group-focus-within:text-primary transition-colors">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="ENTER NAME"
                    className="w-full bg-transparent border-b border-base-content/10 py-4 text-[11px] tracking-widest outline-none focus:border-primary transition-colors uppercase"
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] font-bold uppercase tracking-[3px] text-base-content/30 group-focus-within:text-primary transition-colors">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-base-content/10 py-4 text-[11px] tracking-widest outline-none focus:border-primary transition-colors uppercase"
                  />
                </div>
              </div>

              <div className="group">
                <label className="text-[10px] font-bold uppercase tracking-[3px] text-base-content/30 group-focus-within:text-primary transition-colors">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="HOW CAN WE ASSIST YOU?"
                  className="w-full bg-transparent border-b border-base-content/10 py-4 text-[11px] tracking-widest outline-none focus:border-primary transition-colors uppercase resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#333] hover:bg-primary text-white text-[11px] font-bold uppercase tracking-[4px] py-6 transition-all duration-500 flex items-center justify-center gap-3 group">
                SEND MESSAGE{" "}
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Map Section - Grayscale Theme */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-[500px] border border-base-content/10 p-2 bg-base-100"
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15775.14867907548!2d115.1740942!3d-8.7118001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246bc3b7a5e3d%3A0x403061fc4957540!2sKuta%2C%20Badung%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              className="border-none"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
