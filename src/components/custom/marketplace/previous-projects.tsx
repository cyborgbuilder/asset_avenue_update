import { fromTopToBottomVariants } from "@/animations";
import { motion } from "framer-motion";

export const PreviousProjects = () => {
  return (
    <div>
      <motion.h2
        className="header w-full"
        variants={fromTopToBottomVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Previous Projects
      </motion.h2>
      <div className="mt-10 text-center">
        <p>No previous projects available yet.</p>
      </div>
    </div>
  );
};
