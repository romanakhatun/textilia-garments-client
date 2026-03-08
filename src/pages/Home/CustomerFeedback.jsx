// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    quote:
      "The Garments Tracker revolutionized our small factory. Order tracking is seamless, and monitoring the cutting stage is invaluable. Delivery times are now 20% faster!",
    name: "Riley Foster",
    title: "Factory Owner",
    avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
  },
  {
    id: 2,
    quote:
      "This system provides perfect transparency. The Manager dashboard pages make product approval and order management incredibly efficient and stress-free.",
    name: "Taylor Mitchell",
    title: "Production Manager",
    avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
  },
  {
    id: 3,
    quote:
      "As a buyer, placing an order is simple, and the Order Price calculation is fast. The live tracking feature is fantastic—I always know where my shipment is.",
    name: "Alex Johnson",
    title: "Buyer (Client)",
    avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
  },
  {
    id: 4,
    quote:
      "Architectural design meets functional efficiency. The platform's ability to handle complex QC stages while maintaining a clean UI is truly impressive.",
    name: "Jordan Smith",
    title: "QC Lead",
    avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
  },
];

const TestimonialCard = ({ quote, name, title, avatar }) => (
  <motion.div
    whileHover={{ y: -10 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="p-10 h-full flex flex-col bg-base-100 border border-base-content/5 relative group overflow-hidden"
  >
    {/* Decorative Background Quote */}
    <FaQuoteLeft className="absolute -top-4 -right-4 text-7xl text-base-content/3 group-hover:text-primary/10 transition-all duration-1000 rotate-12" />

    <div className="mb-8 relative z-10">
      <p className="text-lg md:text-xl font-arsenal italic leading-relaxed text-base-content/80 group-hover:text-base-content transition-colors duration-500">
        "{quote}"
      </p>
    </div>

    <div className="flex items-center mt-auto pt-8 border-t border-base-content/10">
      <div className="w-12 h-12 rounded-none grayscale-0 overflow-hidden border border-base-content/10 p-1 bg-base-200">
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="ml-4">
        <h4 className="text-[11px] font-bold uppercase tracking-[3px] text-base-content">
          {name}
        </h4>
        <p className="text-[9px] uppercase tracking-[2px] text-base-content/40 mt-1 italic font-medium">
          {title}
        </p>
      </div>
    </div>
  </motion.div>
);

const CustomerFeedback = () => {
  return (
    <section className="py-24 bg-(--body-bg) overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-xl"
          >
            <span className="highlight-title text-[10px] font-bold uppercase tracking-[5px] text-primary mb-4 inline-block">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-5xl md:text-6xl font-arsenal font-medium text-base-content leading-none tracking-tighter">
              Client{" "}
              <span className="italic font-light opacity-60 ml-2">
                Perspectives
              </span>
            </h2>
          </motion.div>

          {/* Slider Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-2"
          >
            <button className="swiper-prev-btn btn btn-outline border-base-content/10 hover:bg-primary hover:border-primary rounded-none h-16 w-16 p-0 group transition-all duration-500">
              <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="swiper-next-btn btn btn-outline border-base-content/10 hover:bg-primary hover:border-primary rounded-none h-16 w-16 p-0 group transition-all duration-500">
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            loop={true}
            navigation={{
              prevEl: ".swiper-prev-btn",
              nextEl: ".swiper-next-btn",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper pb-14!"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom Styles for Pagination/Progress */}
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          width: 30px;
          height: 2px;
          border-radius: 0;
          background: var(--fallback-bc, currentColor);
          opacity: 0.1;
          transition: all 0.3s;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: var(--fallback-p, oklch(var(--p)));
          width: 50px;
        }
      `}</style>
    </section>
  );
};

export default CustomerFeedback;
