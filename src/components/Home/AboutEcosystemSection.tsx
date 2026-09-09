import React from 'react';
import { Flag, Heart, LayoutGrid, Star, ChevronRight, PhoneCall } from 'lucide-react';
import defaultIntroImg from '../../asset/banner/banner4.png';
import logo from '../../asset/img/logo.jpg';

interface AboutEcosystemSectionProps {
  onOpenLeadModal: () => void;
  customImage?: string;
}

export default function AboutEcosystemSection({
  onOpenLeadModal,
  customImage
}: AboutEcosystemSectionProps): JSX.Element {
  const introImage = customImage || defaultIntroImg;

  const features = [
    {
      id: 1,
      icon: <Flag size={18} className="text-[#1B7E45]" />,
      text: 'Lộ trình học rõ ràng'
    },
    {
      id: 2,
      icon: <Heart size={18} className="text-[#1B7E45]" />,
      text: 'Giảng viên chất lượng cao'
    },
    {
      id: 3,
      icon: <LayoutGrid size={18} className="text-[#1B7E45]" />,
      text: 'Giáo trình bài bản'
    },
    {
      id: 4,
      icon: <Star size={18} className="text-[#1B7E45]" />,
      text: 'Luyện thi HSK hiệu quả'
    }
  ];

  return (
    <section className="w-full bg-slate-50/50 py-12 md:py-16 border-b border-slate-100" aria-label="Giới thiệu Hệ sinh thái Green Ocean">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Main Section Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1B7E45] tracking-tight uppercase leading-snug">
            TRUNG TÂM NGOẠI NGỮ GREEN OCEAN
            <span className="block text-[#F37021] mt-1.5 text-base sm:text-lg md:text-xl font-bold tracking-normal uppercase">
              HÀNH TRÌNH 6 NĂM KIẾN TẠO GIÁ TRỊ TỪ NGÔN NGỮ
            </span>
          </h2>
        </div>

        {/* 2-Column Showcase Card: Left is narrower (col-span-5), Right is wider (col-span-7), Equal Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* Left Column: Image Card (Chiều cao bằng chính xác 100% khung bên phải) */}
          <div className="lg:col-span-5 relative w-full h-full min-h-[340px] rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 bg-white group flex">
            <img
              src={introImage}
              alt="Trung tâm Ngoại ngữ Green Ocean"
              className="w-full h-full object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105 block"
            />
          </div>

          {/* Right Column: Introduction & Features Content Card (Rộng rãi, thoáng, khớp chiều cao) */}
          <div className="lg:col-span-7 h-full relative bg-white rounded-3xl p-6 sm:p-8 md:p-9 border border-slate-200/80 shadow-sm flex flex-col justify-between">

            {/* Decorative Dot Matrix in top-right corner */}
            <div className="absolute top-6 right-6 grid grid-cols-6 gap-1.5 opacity-30 pointer-events-none" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#1B7E45]" />
              ))}
            </div>

            <div>
              {/* Kicker with Logo Badge */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-slate-200">
                  <img src={logo} alt="Logo Green Ocean" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#1B7E45]">
                  TRUNG TÂM TIẾNG TRUNG
                </span>
              </div>

              {/* Main Card Title with Underline */}
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2 uppercase">
                GIỚI THIỆU VỀ GREEN OCEAN
              </h3>
              <div className="w-16 h-1.5 bg-[#1B7E45] rounded-full mb-6" />

              {/* Clean Concise Description Paragraph (No brackets/parentheses) */}
              <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-8">
                Green Ocean là Hệ sinh thái đào tạo năng lực tiếng Trung toàn diện tại Việt Nam với 6 năm phát triển,
                đồng hành cùng hơn 5.000 học viên và mạng lưới cơ sở học tập hiện đại. Chúng tôi định hướng đào tạo thực chất,
                ứng dụng và hiệu quả, tập trung vào khả năng sử dụng tiếng Trung tự tin trong học tập, công việc và môi trường quốc tế.
              </p>

              {/* 4 Feature Badges (Clean 2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {features.map((f) => (
                  <div
                    key={f.id}
                    className="flex items-center gap-3.5 px-4 py-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#1B7E45]/40 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#EAF5EE] flex items-center justify-center shrink-0">
                      {f.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-800">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 mt-auto">
              {/* Button 1: Tìm hiểu thêm */}
              <a
                href="#khoa-hoc"
                className="w-full h-12 sm:h-13 bg-[#1B7E45] hover:bg-[#156336] text-white font-bold text-sm sm:text-base rounded-2xl sm:rounded-full px-4 flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-lg group cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full bg-white text-[#1B7E45] flex items-center justify-center shrink-0 group-hover:translate-x-0.5 transition-transform shadow-sm">
                  <ChevronRight size={16} />
                </span>
                <span>Tìm hiểu thêm</span>
              </a>

              {/* Button 2: Liên hệ tư vấn */}
              <button
                type="button"
                onClick={onOpenLeadModal}
                className="w-full h-12 sm:h-13 bg-[#1B7E45] hover:bg-[#156336] text-white font-bold text-sm sm:text-base rounded-2xl sm:rounded-full px-4 flex items-center justify-center gap-3 transition-all duration-200 shadow-md hover:shadow-lg group cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full bg-white text-[#1B7E45] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <PhoneCall size={14} />
                </span>
                <span>Liên hệ tư vấn</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
