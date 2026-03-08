import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Assets
import Fictional1 from "../../assets/brands/Fictional-company-logo-1.png";
import Fictional2 from "../../assets/brands/Fictional-company-logo-2.png";
import Fictional4 from "../../assets/brands/Fictional-company-logo-4.png";
import Fictional5 from "../../assets/brands/Fictional-company-logo-5.png";
import Fictional6 from "../../assets/brands/Fictional-company-logo-6.png";
import Fictional7 from "../../assets/brands/Fictional-company-logo-7.png";

const brandLogos = [
  Fictional1,
  Fictional2,
  Fictional4,
  Fictional5,
  Fictional6,
  Fictional7,
];

const Brands = () => {
  return (
    <section className="bg-[#1A1A1A] py-20 overflow-hidden border-y border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Headline from Image logic */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12 px-4"
        >
          <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[4px] font-medium">
            Trusted by over{" "}
            <span className="text-white font-bold tracking-normal">200K+</span>{" "}
            brands globally
          </p>
        </motion.div>

        {/* Infinite Swiper */}
        <Swiper
          loop={true}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          spaceBetween={60}
          speed={9000}
          allowTouchMove={false}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="brand-swiper-container pointer-events-none"
        >
          {[...brandLogos, ...brandLogos].map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Partner Logo"
                className="h-7 md:h-9 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .brand-swiper-container .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default Brands;
