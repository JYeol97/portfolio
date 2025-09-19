import { Code2, Monitor, Server, Cloud, Brain, Users } from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "프로그래밍 언어",
      icon: <Code2 className="w-6 h-6 text-yellow-500" />,
      items: [
        { name: "JavaScript (ES6+)", level: 70 },
        { name: "TypeScript", level: 70 },
        { name: "Python", level: 65 },
      ],
    },
    {
      title: "프론트엔드",
      icon: <Monitor className="w-6 h-6 text-pink-500" />,
      items: [
        { name: "React", level: 80 },
        { name: "Vue.js", level: 55 },
        { name: "Tailwind CSS / CSS3", level: 85 },
        { name: "Redux / Zustand / Recoil", level: 65 },
      ],
    },
    {
      title: "백엔드 & 데이터베이스",
      icon: <Server className="w-6 h-6 text-green-500" />,
      items: [
        { name: "FastAPI", level: 50 },
        { name: "Django", level: 45 },
        { name: "MySQL", level: 35 },
        { name: "SQLite", level: 60 },
      ],
    },
    {
      title: "AI 엔지니어링",
      icon: <Brain className="w-6 h-6 text-indigo-500" />,
      items: [
        { name: "Computer Vision (Mediapipe, OpenCV)", level: 40 },
        { name: "Image Segmentation (BiSeNet)", level: 50 },
        { name: "Face Alignment (FFHQ)", level: 45 },
        { name: "Model Fine-tuning (LoRA, Transfer Learning)", level: 25 },
      ],
    },
    {
      title: "DevOps",
      icon: <Cloud className="w-6 h-6 text-emerald-500" />,
      items: [
        { name: "Docker / Jenkins / Nginx", level: 75 },
        { name: "AWS S3 / CloudFront", level: 50 },
      ],
    },
    {
      title: "협업 & 디자인 툴",
      icon: <Users className="w-6 h-6 text-orange-500" />,
      items: [
        { name: "GitHub / GitLab", level: 70 },
        { name: "Jira / Notion", level: 80 },
        { name: "Figma", level: 30 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-200 from-gray-50 to-white">
      {/* 타이틀 */}
      <h2 className="text-5xl font-blackHan text-center mb-3 text-black tracking-wide">Skills</h2>
      <hr className="w-24 h-1 mx-auto bg-gray-400 rounded border-0 mb-12" />

      {/* 카드 레이아웃 */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((cat, idx) => (
          <div key={idx} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform">
            {/* 헤더 */}
            <div className="flex items-center gap-3 mb-6">
              {cat.icon}
              <h3 className="text-xl font-bold text-gray-800">{cat.title}</h3>
            </div>

            {/* 스킬 리스트 */}
            <ul className="space-y-4">
              {cat.items.map((item, i) => (
                <li key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-indigo-500 h-2.5 rounded-full transition-all" style={{ width: `${item.level}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
