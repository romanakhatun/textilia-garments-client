import { motion } from "framer-motion";
import { FaCheck, FaTag, FaHeadset } from "react-icons/fa";

const PricingSection = () => {
  const plans = [
    {
      name: "WOVEN PLAN",
      price: "149,50",
      features: [
        "Personalized Tailoring Services",
        "Seeking Stylish & Convenient Options",
        "Alterations and Repair Services",
        "Guidance on Fashion Trend Wardrobe",
        "Assisting Clients In Sourcing",
        "Creating Custom Pattern",
      ],
    },
    {
      name: "PATTERN PLAN",
      price: "249,50",
      features: [
        "Personalized Tailoring Services",
        "Seeking Stylish & Convenient Options",
        "Alterations and Repair Services",
        "Guidance on Fashion Trend Wardrobe",
        "Assisting Clients In Sourcing",
        "Creating Custom Pattern",
      ],
    },
  ];

  return (
    <section className="bg-(--body-bg) pb-24 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <span className="highlight-title text-[10px] font-bold uppercase tracking-[3px] text-base-content/60 mb-4 inline-block w-fit">
            PRICING & PLAN
          </span>
          <h2 className="text-5xl font-arsenal font-bold text-base-content leading-tight mb-6">
            Our Special <br /> Garment Plans
          </h2>
          <p className="text-sm text-base-content/50 leading-relaxed mb-10 max-w-sm">
            Lorem ipsum dolor sit amet, consecte adipiscing elit seddo eiusmod
            tempor dolore magna aliqua inventore.
          </p>

          {/* Guarantee & Support Boxes */}
          <div className="space-y-4">
            {[
              { icon: <FaTag />, title: "100% Guarantee" },
              { icon: <FaHeadset />, title: "24/7 Support" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border border-base-content/10 p-6 flex items-start gap-4 hover:border-primary transition-colors"
              >
                <div className="bg-primary/20 p-3 text-primary">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-base-content uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-base-content/40 mt-1">
                    Lorem ipsum dolor elit sit amet sedo uteiusmod.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards Column */}
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative bg-base-100 border border-base-content/5 p-10 flex flex-col h-full"
          >
            {/* Plan Label */}
            <div className="absolute top-0 left-0 bg-primary/20 px-4 py-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                {plan.name}
              </span>
            </div>

            <div className="mt-8 mb-10">
              <h3 className="text-5xl font-arsenal font-bold text-base-content italic">
                ${plan.price}
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-base-content/40 font-bold">
                /Services
              </span>
            </div>

            {/* Features List */}
            <ul className="space-y-4 mb-12 grow">
              {plan.features.map((feature, fIdx) => (
                <li
                  key={fIdx}
                  className="flex items-center gap-3 text-xs text-base-content/70"
                >
                  <FaCheck className="text-[10px] text-base-content/30" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <button className="w-full bg-[#5A5A5A] hover:bg-primary text-white text-[10px] font-bold uppercase tracking-[3px] py-5 transition-all duration-300">
              CHOOSE PLAN
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
