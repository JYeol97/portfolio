const Career = () => {
  return (
    <section id="career" className="py-20 bg-yellow-400 from-white to-gray-50">
      {/* 타이틀 */}
      <h2 className="text-5xl font-blackHan text-center mb-4 text-black">Career & Education</h2>
      <hr className="w-24 h-1 mx-auto bg-gray-800 rounded border-0 mb-12" />

      <div className="max-w-3xl mx-auto relative">
        {/* 타임라인 라인 */}
        <div className="absolute top-0 left-4 h-full w-0.5 bg-gray-200" />

        <div className="space-y-10">
          {/* SSAFY */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-1.5 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow">🎓</div>
            <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-gray-900 font-gothicA1">삼성 청년 SW 아카데미 (SSAFY) 12기</h3>
              <p className="text-sm text-gray-500 mt-1">2024.07 ~ 2025.07</p>
            </div>
          </div>

          {/* 교사 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-1.5 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white shadow">📚</div>

            {/* 교사 경력들 */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-gray-900 font-gothicA1">진관고등학교 수학 교사</h3>
                <p className="text-sm text-gray-500 mt-1">2023.04 ~ 2023.12</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg text-gray-900 font-gothicA1">철원고등학교 수학 교사</h3>
                <p className="text-sm text-gray-500 mt-1">2022.05 ~ 2022.06</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
