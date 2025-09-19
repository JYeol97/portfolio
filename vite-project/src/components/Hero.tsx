import backgroundImg from "../assets/background.jpg";
import profileImg from "../assets/profile.jpg";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative py-24 flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ 어두운 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* 왼쪽에 사진 (xl 이상에서만 표시) */}
      <div className="absolute left-60 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="w-[300px] h-[300px] rounded-lg overflow-hidden shadow-lg border-4 border-white/30">
          <img src={profileImg} alt="임재열 프로필" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="relative z-10 px-6 max-w-3xl">
        {/* 인삿말 */}
        <div className="relative min-h-[260px] flex items-center justify-center">
          <div className="invisible text-4xl md:text-5xl font-semibold leading-relaxed">
            안녕하세요. <br />
            <span className="text-indigo-400">새로운 도전을 즐기며 성장하는</span> <br />
            개발자 임재열입니다.
          </div>
          <p className="absolute text-4xl md:text-5xl text-gray-200 font-semibold drop-shadow whitespace-pre-line leading-snug">
            <ReactTyped
              strings={["안녕하세요.\n<span class='text-indigo-400'>새로운 도전을 즐기며 성장하는</span>\n개발자 <span>임재열</span>입니다."]}
              typeSpeed={80}
              backSpeed={40}
              backDelay={5000}
              loop
            />
          </p>
        </div>

        <hr className="border-t-4 border-orange-500 w-24 mx-auto my-2" />

        {/* 태그라인 */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow mb-8 mt-10">
          수학교육과 전공, 학교 현장 경험, 그리고 SSAFY 과정을 통해 <span className="text-red-300">문제 해결력·끈기·협업 역량</span>을 고루 다져왔습니다. 앞으로도 배우고 성장하며 팀에 기여하는
          개발자가 되고자 합니다.
        </p>

        {/* CTA 버튼 */}
        <a href="#about" className="inline-block bg-orange-500 backdrop-blur-md text-white font-semibold px-6 py-4 rounded-full hover:bg-orange-600 transition">
          더 알아보기 ↓
        </a>
      </div>
    </section>
  );
};

export default Hero;
