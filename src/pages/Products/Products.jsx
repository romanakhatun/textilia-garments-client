import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaArrowRight } from "react-icons/fa"; // Added Icons
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ProductCard from "../../components/ProductCard";
import LoadingSpinner from "../../components/LoadingSpinner";

const AllProducts = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products");
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner message="Curating collection..." />;

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="bg-(--body-bg) min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* --- Header Section with High Visibility Search --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-24 border-b border-base-content/5 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="text-[10px] font-bold uppercase tracking-[5px] text-primary mb-6 block italic">
              ARCHITECTURAL GARMENTS
            </span>
            <h1 className="text-6xl md:text-9xl font-arsenal font-light text-base-content uppercase tracking-tighter leading-none">
              The <br /> <span className="font-bold ml-12 md:ml-20">Edit</span>
            </h1>
          </motion.div>

          {/* --- Enhanced Search Bar (Matching image_8fb765.jpg logic) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full lg:w-[450px] group"
          >
            <h4 className="text-[10px] font-bold uppercase tracking-[4px] mb-4 text-primary transition-colors">
              Find in Catalogue
            </h4>

            <div className="relative flex items-center bg-base-content/5 border border-base-content/10 p-1 hover:border-primary/50 focus-within:border-primary transition-all duration-500">
              <div className="pl-5 text-base-content/20 group-focus-within:text-primary transition-colors">
                <FaSearch size={14} />
              </div>
              <input
                type="text"
                placeholder="SEARCH PRODUCTS..."
                className="w-full bg-transparent py-5 px-5 text-[11px] uppercase tracking-[4px] outline-none placeholder:text-base-content/20 font-bold"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="bg-[#E5C3B2] text-black h-[58px] px-8 hover:bg-white transition-all duration-500 flex items-center justify-center group/btn">
                <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* --- Product Grid --- */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- Empty State --- */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-48 text-center"
          >
            <div className="w-20 h-px bg-base-content/10 mx-auto mb-8"></div>
            <h2 className="text-xs font-arsenal uppercase tracking-[8px] text-base-content/20 italic">
              — No matching pieces found —
            </h2>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
