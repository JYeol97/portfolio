import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="h-screen flex items-center justify-center bg-black text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-xl text-center">
        <h2 className="text-4xl font-bold mb-4">📫 Contact</h2>
        <p>이메일: example@email.com</p>
      </div>
    </motion.section>
  );
};

export default Contact;
