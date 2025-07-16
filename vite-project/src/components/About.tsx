import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="h-screen flex items-center justify-center bg-white text-black"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-xl text-center">
        <h2 className="text-4xl font-bold mb-4">🙋‍♀️ About Me</h2>
        <p>저는 프론트엔드를 사랑하는 개발자 재여르입니다!</p>
      </div>
    </motion.section>
  );
};

export default About;
