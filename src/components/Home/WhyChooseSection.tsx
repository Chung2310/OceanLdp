import React, { useState, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import reason01 from '../../asset/reasons/reason01.png';
import reason02 from '../../asset/reasons/reason02.png';
import reason03 from '../../asset/reasons/reason03.png';
import reason04 from '../../asset/reasons/reason04.png';
import reason05 from '../../asset/reasons/reason05.png';
import reason06 from '../../asset/reasons/reason06.png';

interface ReasonItem {
  id: string;
  shortTitle: string;
  title: string;
  sub: string;
  bullets: string[];
  image: string;
}

const reasonsData: ReasonItem[] = [
  {
    id: '01',
    shortTitle: 'Hành trình 6 năm',
    sub: 'Từ 07/2020 đến nay',
    title: 'Hành trình 6 năm phát triển bền vững',
    bullets: [
      'Khởi đầu từ tháng 07/2020: Lấy phương châm Thực chất – Ứng dụng – Hiệu quả làm kim chỉ nam.',
      'Hơn 5.000 học viên đã đồng hành, đạt chuẩn đầu ra và tự tin giao tiếp.',
      'Tháng 01/2026 chính thức đổi tên Green Ocean, nâng tầm quy mô và chuẩn hóa toàn diện.',
      'Kiến tạo giá trị bền vững từ ngôn ngữ, đồng hành cùng sự nghiệp học viên.'
    ],
    image: reason01
  },
  {
    id: '02',
    shortTitle: 'GV 15+ năm KN',
    sub: '100% ĐH Ngoại ngữ',
    title: 'Đội ngũ giáo viên 15+ năm kinh nghiệm',
    bullets: [
      '100% giáo viên tốt nghiệp chuyên ngành Tiếng Trung tại các trường ĐH hàng đầu Hà Nội.',
      'Kinh nghiệm thực chiến và giảng dạy từ 15 năm trở lên, có tính ổn định cao.',
      'Phương pháp truyền đạt dễ hiểu, giúp học viên học chắc và phản xạ tự nhiên.',
      'Tận tâm, sát sao và truyền cảm hứng học tập trong từng buổi học.'
    ],
    image: reason02
  },
  {
    id: '03',
    shortTitle: 'Phản xạ thực chiến',
    sub: 'Học được – Dùng ngay',
    title: 'Phương pháp phản xạ thực chiến – Học được, dùng ngay',
    bullets: [
      'Chương trình đào tạo thực tế: Bám sát tình huống giao tiếp đời sống và doanh nghiệp.',
      'Tối ưu 70% thời lượng luyện nghe nói phản xạ tương tác ngay tại lớp.',
      'Phương pháp học qua nhiệm vụ, gắn với mục tiêu giao tiếp rõ ràng từng buổi.',
      'Biến kiến thức thành kỹ năng thực tế: Học được là dùng được ngay.'
    ],
    image: reason03
  },
  {
    id: '04',
    shortTitle: 'Lộ trình New HSK',
    sub: 'Chuẩn khảo thí quốc tế',
    title: 'Lộ trình New HSK chuẩn khảo thí quốc tế',
    bullets: [
      'Lộ trình học tập rõ ràng, chú trọng đồng thời 4 kỹ năng Nghe, Nói, Đọc, Viết.',
      'Đồng hành cùng học sinh THPT và người đi làm chinh phục chứng chỉ HSK cao cấp.',
      'Bộ đề thực chiến bám sát kỳ thi thật, tối ưu kỹ năng làm bài và tâm lý thi.',
      'Cam kết chuẩn đầu ra: Tự tin dự thi và đạt kết quả vượt mong đợi.'
    ],
    image: reason04
  },
  {
    id: '05',
    shortTitle: 'Chăm sóc 1:1',
    sub: 'Đồng hành 24/7',
    title: 'Chăm sóc học viên 1:1 tận tâm',
    bullets: [
      'Tư vấn lựa chọn chương trình học và xác định mục tiêu học tập cá nhân hóa.',
      'Trợ giảng và giáo viên theo sát tiến độ, sửa phát âm và chấm bài chi tiết.',
      'Chính sách hỗ trợ học bù, bảo lưu linh hoạt tạo điều kiện tối đa cho học viên.',
      'Đồng hành trước, trong và sau khóa học, giải đáp thắc mắc liên tục.'
    ],
    image: reason05
  },
  {
    id: '06',
    shortTitle: 'Cơ sở hiện đại',
    sub: 'Tiện nghi chuyên nghiệp',
    title: 'Cơ sở vật chất hiện đại – môi trường chuyên nghiệp',
    bullets: [
      'Phòng học tiện nghi, không gian thoáng mát tạo cảm giác thoải mái khi học.',
      'Trang thiết bị hỗ trợ giảng dạy trực quan, âm thanh chuẩn hỗ trợ tối đa việc luyện nghe.',
      'Bộ học liệu và giáo trình chuẩn hóa độc quyền, hệ thống bài tập thực hành phong phú.',
      'Môi trường học tập thân thiện giúp học viên chủ động thực hành và tự tin giao tiếp.'
    ],
    image: reason06
  }
];

export default function WhyChooseSection(): JSX.Element {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const currentReason = reasonsData[activeTab];

  // Auto-play every 6 seconds if not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveTab(prev => (prev + 1) % reasonsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveTab(prev => (prev - 1 + reasonsData.length) % reasonsData.length);
  };

  const handleNext = () => {
    setActiveTab(prev => (prev + 1) % reasonsData.length);
  };

  return (
    <section 
      className="w-full bg-white py-8 sm:py-10 md:py-12 border-b border-slate-100" 
      aria-label="Lý do nên chọn Green Ocean"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Compact, balanced Outer Card Container */}
        <div className="bg-[#EAF5EE]/45 border border-[#1B7E45]/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xs">
          
          {/* Top Part: Section Header & Compact 3 Stats Counters */}
          <div className="text-center mb-5 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 bg-white text-[#1B7E45] border border-[#1B7E45]/30 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wide uppercase mb-2 shadow-2xs">
              Khác biệt trong đào tạo tiếng Trung
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#1B7E45] tracking-tight uppercase leading-snug">
              6 LÝ DO NÊN CHỌN TIẾNG TRUNG GREEN OCEAN
            </h2>
            <p className="text-xs sm:text-[13.5px] text-slate-600 max-w-xl mx-auto mt-1 leading-relaxed font-normal">
              GREEN OCEAN xây dựng hệ sinh thái học tiếng Trung toàn diện, kết hợp giảng viên chất lượng, giáo trình chuẩn và môi trường học tập hiện đại.
            </p>

            {/* Compact 3 Stat Counter Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3.5 max-w-[480px] mx-auto mt-3.5">
              <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:py-3 sm:px-4 border border-slate-200/80 shadow-2xs text-center">
                <span className="text-xl sm:text-2xl md:text-[28px] font-black text-[#1B7E45] tracking-tight block leading-none">6+</span>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-1">năm phát triển</p>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:py-3 sm:px-4 border border-slate-200/80 shadow-2xs text-center">
                <span className="text-xl sm:text-2xl md:text-[28px] font-black text-[#1B7E45] tracking-tight block leading-none">5.000+</span>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-1">học viên đồng hành</p>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:py-3 sm:px-4 border border-slate-200/80 shadow-2xs text-center">
                <span className="text-xl sm:text-2xl md:text-[28px] font-black text-[#1B7E45] tracking-tight block leading-none">15+</span>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-1">năm kinh nghiệm GV</p>
              </div>
            </div>
          </div>

          {/* Middle Part: Active Reason Card (Left: Title + Bullets | Right: Image) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-slate-200/80 shadow-sm transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Number Box + Reason Title + Bullets */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Number Badge and Reason Title */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#EAF5EE] text-[#1B7E45] font-black text-lg sm:text-xl flex items-center justify-center border border-[#1B7E45]/25 shadow-2xs shrink-0">
                    {currentReason.id}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {currentReason.title}
                  </h3>
                </div>

                {/* Bullets with Circular Checkmarks */}
                <div className="space-y-2 sm:space-y-2.5">
                  {currentReason.bullets.map((bullet, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-50/70 border border-slate-200/70 shadow-2xs hover:bg-white hover:border-[#1B7E45]/30 transition-all duration-200"
                    >
                      <div className="w-4.5 h-4.5 rounded-full bg-[#1B7E45] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <span className="text-xs sm:text-[13.5px] font-medium text-slate-700 leading-snug">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Illustration Image (clean, aspect-square, NO overlay badge) */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-50">
                  <img 
                    src={currentReason.image} 
                    alt={currentReason.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Selector: Clean Reason Cards Row with Prev/Next Navigation */}
          <div className="mt-4 sm:mt-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
              {reasonsData.map((reason, idx) => {
                const isActive = idx === activeTab;
                return (
                  <button
                    key={reason.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`cursor-pointer p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[76px] sm:min-h-[82px] ${
                      isActive
                        ? 'bg-white border-[#1B7E45] shadow-xs ring-1 ring-[#1B7E45]/30'
                        : 'bg-white/70 border-slate-200/80 hover:bg-white hover:border-[#1B7E45]/40 text-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className={`text-xs font-black px-1.5 py-0.5 rounded-md ${
                        isActive ? 'bg-[#1B7E45] text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {reason.id}
                      </span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B7E45] animate-pulse"></span>
                      )}
                    </div>
                    <div className="text-[12px] sm:text-[12.5px] font-bold text-slate-800 line-clamp-1 leading-tight">
                      {reason.shortTitle}
                    </div>
                    <div className="text-[10.5px] text-slate-500 line-clamp-1 mt-0.5">
                      {reason.sub}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Prev and Next controls row */}
            <div className="flex items-center justify-center gap-3 mt-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Lý do trước"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 hover:border-[#1B7E45] hover:bg-[#EAF5EE] text-slate-600 hover:text-[#1B7E45] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex items-center gap-1.5">
                {reasonsData.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    aria-label={`Chuyển đến lý do ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === activeTab ? 'w-6 bg-[#1B7E45]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Lý do tiếp theo"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 hover:border-[#1B7E45] hover:bg-[#EAF5EE] text-slate-600 hover:text-[#1B7E45] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
