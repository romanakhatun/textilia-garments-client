import { Link } from "react-router";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-(--body-bg) pb-8 transition-all duration-500"
    >
      <div className="relative h-[500px] w-full overflow-hidden bg-base-200">
        {/* Main Image */}
        <motion.img
          src={product.images?.[0]}
          alt={product.name}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="h-full w-full object-cover grayscale-40 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Fashion Frame - Hover border  */}
        <div className="absolute inset-4 border border-white/20 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <Link
            to={`/product/${product._id}`}
            className="bg-white text-black px-10 py-4 text-[10px] font-bold uppercase tracking-[4px] shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out"
          >
            View Silhouette
          </Link>
        </div>
        {/* Status Tag */}
        <div className="absolute top-6 left-6 overflow-hidden">
          <span className="block bg-base-content text-base-100 text-[8px] font-bold uppercase tracking-[2px] px-3 py-1">
            New Arrival
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="mt-8 px-2">
        <div className="flex justify-between items-baseline mb-3">
          <div className="overflow-hidden">
            <motion.h3 className="text-base-content text-xl font-arsenal uppercase tracking-[2px]">
              {product.name}
            </motion.h3>
          </div>
          <span className="text-base-content font-arsenal font-medium text-lg">
            ${product.price}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-base-content/40 text-[9px] uppercase tracking-[3px] italic">
            Collection — {product.category}
          </p>
          <p className="text-[9px] text-primary uppercase font-black tracking-widest mt-1">
            Stock: {product.availableQuantity}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
