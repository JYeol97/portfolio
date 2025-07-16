import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [count, setCount] = useState(3);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const delay = setTimeout(() => setShowHero(true), 300); // 약간의 텀을 주기
      return () => clearTimeout(delay);
    }
  }, [count]);

  return (
    <div className="w-screen">
      <AnimatePresence>
        {!showHero ? (
          <motion.div
            key="countdown"
            className="h-screen flex items-center justify-center bg-black text-white text-6xl font-bold"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {count}
          </motion.div>
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
