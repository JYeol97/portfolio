import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      className="h-screen flex items-center justify-center bg-gray-100 text-black"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-xl text-center">
        <h2 className="text-4xl font-bold mb-4">🛠️ Projects</h2>
        <p>제가 만든 프로젝트들을 소개합니다.</p>
      </div>
    </motion.section>
  );
};

export default Projects;
