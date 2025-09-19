import type { Project } from "./projectsData";
import { useEffect } from "react";

type Props = {
  project: Project;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: Props) => {
  useEffect(() => {
    // 모달 열릴 때 body 스크롤 막기
    document.body.style.overflow = "hidden";
    return () => {
      // 모달 닫힐 때 원상복구
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-[9999]" onClick={onClose}>
      <div
        className="bg-white max-w-3xl w-full rounded-2xl shadow-xl relative flex flex-col my-10 
             max-h-[100vh] overflow-y-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        {/* sticky header */}
        <div className="sticky top-0 flex justify-between items-center px-6 py-4 bg-black text-white rounded-t-2xl z-10">
          <div className="flex flex-row items-center gap-2">
            <h3 className="text-2xl font-bold">{project.title}</h3>
          </div>
          <button onClick={onClose} className="text-white text-2xl hover:text-gray-200 transition">
            ✕
          </button>
        </div>

        {/* 내용 */}
        <div className="px-6 py-6 text-left leading-relaxed text-gray-800 ">
          <img src={project.cover} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-8 shadow" />
          {/* Period + Member count */}
          <div className="flex flex-col items-center mb-3 gap-3">
            <h3 className="flex flex-row items-center text-xl font-semibold text-black">
              📅 {project.period}
              {project.details?.members && project.details.members.length > 0 && <span className="ml-2 text-black text-base font-normal">({project.details.members.length}명)</span>}
            </h3>

            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-indigo-600 hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.1.79-.25.79-.55v-1.9c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.18-1.18 3.18-1.18.63 1.56.23 2.72.11 3.01.74.81 1.19 1.84 1.19 3.1 0 4.45-2.69 5.42-5.26 5.71.42.36.8 1.1.8 2.22v3.29c0 .3.21.65.8.55A10.98 10.98 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                </svg>
                GitHub
              </a>
            )}
          </div>

          <p className="flex items-center justify-center font-extrabold mb-14 md:text-lg text-lg">{project.desc}</p>

          {project.details && (
            <div className="space-y-10">
              {/* Summary */}
              <section>
                <h3 className="flex items-center gap-2 text-xl font-semibold text-indigo-600 mb-3">📌 Summary</h3>
                <p className="text-gray-700 leading-7 font-gothicA1 text-sm">{project.details.summary}</p>
              </section>

              {/* Background */}
              {project.details.background && (
                <section>
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-amber-600 mb-3">🤔 Background</h3>
                  <p className="text-gray-700 leading-7 font-gothicA1 text-sm">{project.details.background}</p>
                </section>
              )}

              {/* Meaning */}
              {project.details.meaning && (
                <section>
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-emerald-600 mb-3">🔍 Meaning</h3>
                  <p className="text-gray-700 leading-7 font-gothicA1 text-sm">{project.details.meaning}</p>
                </section>
              )}

              {/* Features */}
              {project.details.features && (
                <section>
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-600 mb-3">⚙️ Features</h3>
                  <ul className="list-disc pl-6 space-y-2 marker:text-blue-500 font-gothicA1 text-sm">
                    {project.details.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Outcome */}
              {project.details.outcome && (
                <section>
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-rose-600 mb-3">🚀 Outcome</h3>
                  <ul className="list-disc pl-6 space-y-2 marker:text-rose-500 font-gothicA1 text-sm">
                    {project.details.outcome.map((o, i) => (
                      <li key={i}>{o}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Award */}
              {project.details.awards && project.details.awards.length > 0 && (
                <section>
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-yellow-600 mb-3">🏆 Award</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-7 font-gothicA1 text-sm">
                    {project.details.awards.map((award, i) => (
                      <li key={i}>{award}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Tech Stack */}
              {project.details.techStack && (
                <section>
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-violet-600 mb-3">🛠 Tech Stack</h3>

                  <div className="space-y-4">
                    {project.details.techStack.map((stack, i) => {
                      const [category, tools] = stack.split(":");
                      return (
                        <div key={i}>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">{category.trim()}</h4>
                          <div className="flex flex-wrap gap-2">
                            {tools
                              .split(",")
                              .map((tool) => tool.trim())
                              .map((tool, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 rounded-full text-xs font-medium 
                               bg-violet-50 text-violet-700 border border-violet-200
                               hover:bg-violet-100 transition"
                                >
                                  {tool}
                                </span>
                              ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* Members */}
              {project.details.members && (
                <section>
                  <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-900 mb-3">👪 Members</h3>
                  <ul className="space-y-1 font-gothicA1 text-sm">
                    {project.details.members.map((m, i) => (
                      <li key={i} className="flex gap-2 items-center">
                        <span className="font-medium">{m.name}</span>
                        <span className="text-sm text-gray-500">({m.role})</span>
                        {m.github && (
                          <a href={m.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-sm hover:underline">
                            GitHub
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
