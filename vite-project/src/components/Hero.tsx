import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <motion.section
        className="h-screen w-screen flex flex-col justify-center items-center bg-black text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">안녕하세요, 재여르입니다 👋</h1>
        <p className="text-xl text-gray-300">이건 저의 포트폴리오입니다</p>
      </motion.section>
    </div>
  );
};

export default Hero;
