import { Github, BookOpen } from "lucide-react";

const Archiving = () => {
  return (
    <section id="archiving" className="py-20 bg-[#222222] from-gray-50 to-white text-center">
      <h2 className="text-5xl font-blackHan text-center mb-4 text-white">Archiving</h2>
      <hr className="w-24 h-1 mx-auto bg-gray-300 rounded border-0 mb-12" />

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        {/* GitHub */}
        <a href="https://github.com/JYeol97" target="_blank" className="flex-1 p-8 bg-white border rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform">
          <div className="flex items-center justify-center mb-4">
            <Github className="w-10 h-10 text-gray-900" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">GitHub</h3>
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">프로젝트 코드</span>와 <span className="font-semibold">실험 기록</span>을 저장한 공간
          </p>
        </a>

        {/* Velog */}
        <a href="https://velog.io/@dreamjob/posts" target="_blank" className="flex-1 p-8 bg-white border rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Velog</h3>
          <p className="text-gray-600 text-sm">
            <span className="font-semibold">학습 과정</span>과 <span className="font-semibold">프로젝트 경험</span>을 정리한 블로그
          </p>
        </a>
      </div>
    </section>
  );
};

export default Archiving;
