import { animate, delay, motion } from "framer-motion";

const homeVariants = {
  hidden: {
    y: "+300vw",
  },
  visible: {
    y: 0,
    transition: { duration: 1, type: "spring", stifness: "500" },
  },
};
const HomePage = () => {
  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      className="h-full w-full bg-white flex justify-center items-center text-3xl text-black"
    >
      HomePage
    </motion.div>
  );
};

export default HomePage;
