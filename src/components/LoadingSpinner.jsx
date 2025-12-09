// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

const spinVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "linear",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const LoadingSpinner = ({ fullScreen = true, message = "Loading data..." }) => {
  // Determine the container classes based on the fullScreen prop
  const containerClasses = fullScreen
    ? "fixed inset-0 z-[9999] flex items-center justify-center bg-base-100/80 backdrop-blur-sm transition-opacity"
    : "flex items-center justify-center w-full h-full min-h-[150px] bg-base-100/70 rounded-lg";

  return (
    <motion.div
      className={containerClasses}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex flex-col items-center">
        {/* Spinner Icon */}
        <motion.div
          variants={spinVariants}
          animate="animate"
          className="text-primary text-6xl"
        >
          <FaSpinner />
        </motion.div>

        {/* Loading Message */}
        <p className="mt-4 text-lg font-arsenal font-semibold text-base-content">
          {message}
        </p>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;
