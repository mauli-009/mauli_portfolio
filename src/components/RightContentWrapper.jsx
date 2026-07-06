import { motion } from "framer-motion";

const RightContentWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 overflow-x-hidden"
    >
      {children}
    </motion.div>
  );
};

export default RightContentWrapper;