import { useState } from "react";
import { projects } from "./projectsData";
import type { Project } from "./projectsData";

import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const categories = ["all", "frontend", "backend", "ai", "devops"];
  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 text-center">
      <h2 className="text-5xl font-blackHan mb-4 text-black">Projects</h2>
      <hr className="w-24 h-1 mx-auto bg-gray-300 rounded border-0 mb-12" />

      {/* 필터 버튼 */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition 
              ${filter === cat ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 프로젝트 카드 */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-4">
        {filteredProjects.map((p, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(p)}
            className="relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition duration-300 group"
          >
            <img src={p.cover} alt={p.title} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="text-sm text-gray-200 mt-1">{p.period}</p>
              <p className="text-sm text-gray-300 mt-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 모달 */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Projects;
