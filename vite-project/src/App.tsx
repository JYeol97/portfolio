import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Archiving from "./components/Archiving";
import Projects from "./components/Projects";
import Career from "./components/Career";
import ScrollToTopButton from "./components/ScrollToTopButton";
// import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans">
      {/* ✅ Hero 위에 겹쳐질 Navbar */}
      <Navbar />

      {/* ✅ Hero 섹션 */}
      <Hero />

      {/* ✅ 나머지 섹션 */}
      <About />
      <Skills />
      <Projects />
      <Archiving />
      <Career />
      <ScrollToTopButton />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
