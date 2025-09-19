import { User, Phone, Calendar, Mail, MapPin, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 mt-5">
      {/* 타이틀 */}
      <h2 className="text-5xl font-blackHan text-center mb-3 text-black tracking-wide ">ABOUT ME</h2>
      <hr className="w-24 h-1 mx-auto bg-gray-400 rounded border-0 mb-12" />

      {/* 아이콘 + 정보 그리드 */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:left-60 gap-8 text-gray-700">
        {/* 이름 */}
        <div className="flex items-center gap-3">
          <User className="w-10 h-10 text-gray-600" />
          <div className="flex flex-col gap-1">
            <p className="font-semibold font-gothicA1">이름</p>
            <p className="text-sm text-gray-500">임재열</p>
          </div>
        </div>

        {/* 생년월일 */}
        <div className="flex items-center gap-3">
          <Calendar className="w-10 h-10 text-gray-600" />
          <div className="flex flex-col gap-1">
            <p className="font-semibold font-gothicA1">생년월일</p>
            <p className="text-sm text-gray-500">97.11.10</p>
          </div>
        </div>

        {/* 위치 */}
        <div className="flex items-center gap-3">
          <MapPin className="w-10 h-10 text-gray-600" />
          <div className="flex flex-col gap-1">
            <p className="font-semibold font-gothicA1">위치</p>
            <p className="text-sm text-gray-500">서울특별시 은평구</p>
          </div>
        </div>

        {/* 연락처 */}
        <div className="flex items-center gap-3">
          <Phone className="w-10 h-10 text-gray-600" />
          <div className="flex flex-col gap-1">
            <p className="font-semibold font-gothicA1">연락처</p>
            <p className="text-sm text-gray-500">010-9220-1761</p>
          </div>
        </div>

        {/* 이메일 */}
        <div className="flex items-center gap-3">
          <Mail className="w-10 h-10 text-gray-600" />
          <div className="flex flex-col gap-1">
            <p className="font-semibold font-gothicA1">이메일</p>
            <p className="text-sm text-gray-500">a01092201761@gmail.com</p>
          </div>
        </div>

        {/* 학력 */}
        <div className="flex items-center gap-3">
          <GraduationCap className="w-10 h-10 text-gray-600" />
          <div className="flex flex-col gap-1">
            <p className="font-bold font-gothicA1">학력</p>
            <p className="text-sm text-gray-500">
              가톨릭관동대학교 <p>- 수학교육과</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
