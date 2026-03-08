import { useParams, Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPlayCircle,
  FaBoxOpen,
  FaCreditCard,
} from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/LoadingSpinner";
import useRole from "../../hooks/useRole";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { role, status } = useRole();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner message="Unveiling the piece..." />;

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center font-arsenal uppercase tracking-widest text-error">
        Piece Not Found —
      </div>
    );
  }

  return (
    <section className="bg-(--body-bg) min-h-screen font-nunito transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        {/* --- Minimalist Breadcrumb --- */}
        <nav className="mb-12 overflow-hidden">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-[10px] uppercase tracking-[3px] text-base-content/40 font-bold"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>{" "}
            /
            <Link
              to="/all-products"
              className="hover:text-primary transition-colors"
            >
              {" "}
              Catalogue
            </Link>{" "}
            /<span className="text-base-content/80"> {product.name}</span>
          </motion.p>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* --- LEFT: Editorial Image Gallery --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="relative group overflow-hidden bg-base-200">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="w-full aspect-4/5 object-cover transition-all duration-1000 transform group-hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 text-black text-[9px] font-bold px-4 py-2 uppercase tracking-widest backdrop-blur-sm">
                  Exclusive Piece
                </span>
              </div>
            </div>

            {/* Thumbnails with Hover Effect */}
            <div className="grid grid-cols-4 gap-4">
              {product.images?.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square bg-base-200 overflow-hidden cursor-pointer group border border-transparent hover:border-primary/30 transition-all"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- RIGHT: Product Information (Arsenal + Nunito) --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <span className="text-xs font-bold uppercase tracking-[4px] text-primary mb-4 block">
              {product.category}
            </span>
            <h1 className="text-5xl lg:text-6xl font-arsenal font-bold text-base-content leading-tight mb-6">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-arsenal font-light text-base-content/90">
                ${product.price}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-base-content/40 font-bold">
                Inc. local taxes
              </span>
            </div>

            <div className="h-px bg-base-content/5 w-full mb-8"></div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-y-6 mb-10 text-[11px] uppercase tracking-[2px] font-bold text-base-content/60">
              <div className="flex items-center gap-3">
                <FaBoxOpen className="text-primary/40" size={16} />
                <span>Stock: {product.availableQuantity}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaArrowRight className="text-primary/40" size={14} />
                <span>Min Order: {product.minimumOrderQuantity}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCreditCard className="text-primary/40" size={15} />
                <span>Terms: {product.paymentOption}</span>
              </div>
            </div>

            {/* Description - Nunito for Readability */}
            <div className="mb-12">
              <h3 className="text-[10px] font-bold uppercase tracking-[4px] text-base-content/30 mb-4 italic">
                — The Story
              </h3>
              <p className="leading-[1.8] text-base-content/70 italic font-nunito text-lg">
                "{product.description}"
              </p>
            </div>

            {/* Order Action */}
            <div className="space-y-4">
              <Link to={`/order/${product._id}`}>
                <button
                  disabled={role !== "buyer" || status === "suspended"}
                  className="w-full h-16 bg-primary text-white text-[11px] font-bold uppercase tracking-[4px] flex items-center justify-center gap-4 hover:bg-black transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed group"
                >
                  Order Now{" "}
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
              <p className="text-[9px] text-center uppercase tracking-widest text-base-content/30 italic">
                {status === "suspended"
                  ? "Your account is restricted"
                  : "Secured architectural fulfillment"}
              </p>
            </div>

            {/* Demo Video Section */}
            {product.demoVideo && (
              <div className="mt-16 border-t border-base-content/5 pt-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-[4px] text-base-content/80 flex items-center gap-3">
                    <FaPlayCircle /> Production Reel
                  </h3>
                </div>
                <div className="relative aspect-video rounded-none overflow-hidden transition-all duration-700">
                  <iframe
                    className="w-full h-full"
                    src={product.demoVideo}
                    title="Product Video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
