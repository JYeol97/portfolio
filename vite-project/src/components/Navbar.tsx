import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Archiving", to: "archiving" },
    { name: "Career", to: "career" },
    // { name: "Contact", to: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className={`font-bold text-3xl transition-colors duration-300 ${scrolled ? "text-gray-800" : "text-gray-200 drop-shadow"}`}>YJY`s Protfolio</h1>
        <ul className={`flex gap-6 font-medium transition-colors duration-300 ${scrolled ? "text-gray-800" : "text-gray-200 drop-shadow"}`}>
          {menus.map((m, idx) => (
            <li key={idx}>
              <Link to={m.to} smooth={true} duration={600} offset={-64} className="cursor-pointer hover:text-indigo-500 transition">
                {m.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
