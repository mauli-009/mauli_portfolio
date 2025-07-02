import { motion } from "framer-motion";

const RightContentWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6  max-h-[88vh] overflow-y-auto overflow-x-hidden custom-scrollbar pr-2"
    >
      {children}
    </motion.div>
  );
};

export default RightContentWrapper;
