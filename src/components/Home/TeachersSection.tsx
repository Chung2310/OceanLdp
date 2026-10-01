import React, { useState, useEffect } from 'react';

import teacher1 from '../../asset/teachers/1.jpg';
import teacher2 from '../../asset/teachers/2.jpg';
import teacher3 from '../../asset/teachers/3.jpg';
import teacher4 from '../../asset/teachers/4.jpg';
import teacher5 from '../../asset/teachers/5.jpg';

interface Expert {
  id: string;
  name: string;
  trinhDo: string[];
  kinhNghiem: string[];
  image: string;
}

const experts: Expert[] = [
  {
    id: 'nguyen-xuan-quang',
    name: 'ThS. Nguyễn Xuân Quảng',
    trinhDo: [
      'Thạc sỹ chuyên ngành Ngôn ngữ học & Ngôn ngữ học ứng dụng – Đại học Tương Đàm, Hồ Nam, Trung Quốc',
      '6 năm học tập và nghiên cứu chuyên sâu tại Trung Quốc',
      'Cố vấn chuyên môn & Giám đốc đào tạo tại Green Ocean'
    ],
    kinhNghiem: [
      '28 năm học tập và làm việc với tiếng Trung, hơn 10 năm giảng dạy tại các trường Đại học chính quy',
      'Chuyên gia xây dựng lộ trình đào tạo tiếng Trung mọi cấp độ: từ cơ bản đến tiếng Trung thương mại thực chiến',
      'Đào tạo thành công hàng nghìn học viên đạt chứng chỉ HSK và thành thạo giao tiếp'
    ],
    image: teacher3
  },
  {
    id: 'ngo-hoang-linh',
    name: 'Cô Ngô Hoàng Linh',
    trinhDo: [
      'Cử nhân Ngôn ngữ Trung – Trường Đại học Sư phạm Thái Nguyên',
      'Nền tảng kiến thức sư phạm bài bản, phương pháp giảng dạy hiện đại và linh hoạt',
      'Giảng viên chuyên môn kỳ cựu tại Green Ocean'
    ],
    kinhNghiem: [
      'Hơn 20 năm kinh nghiệm giảng dạy và làm việc thực tế với tiếng Trung',
      'Chuyên sâu đào tạo tiếng Trung thương mại, dịch thuật, đàm phán hợp đồng và xuất nhập khẩu',
      'Phương pháp trực quan sinh động, thấu hiểu tâm lý học viên, xóa tan nỗi sợ ngoại ngữ'
    ],
    image: teacher4
  },
  {
    id: 'nguyen-thi-thu-thuy',
    name: 'ThS. Nguyễn Thị Thu Thủy',
    trinhDo: [
      'Thạc sỹ chuyên ngành Quản lý du lịch – Đại học Giao thông Tây Nam, Thành Đô, Trung Quốc',
      'Tốt nghiệp chuyên ngành Ngôn ngữ và Văn học Trung Quốc – Đại học Quảng Tây, Nam Ninh, Trung Quốc',
      'Nhiều năm học tập, nghiên cứu và làm việc thực tế tại Trung Quốc'
    ],
    kinhNghiem: [
      'Hơn 20 năm kinh nghiệm giảng dạy và làm việc với tiếng Trung',
      'Phương pháp giảng dạy trực quan sinh động, giàu năng lượng, truyền cảm hứng mạnh mẽ',
      'Đồng hành sát sao, xây dựng phản xạ giao tiếp tự tin và tự nhiên cho từng học viên'
    ],
    image: teacher5
  },
  {
    id: 'do-thanh-trung',
    name: 'Thầy Đỗ Thành Trung',
    trinhDo: [
      'Tốt nghiệp chuyên ngành Ngôn ngữ Trung – Trường Đại học Hà Nội (HANU)',
      'Chuyên sâu thuật ngữ đàm phán kinh tế, quản trị văn phòng và kỹ thuật sản xuất nhà xưởng',
      'Giảng viên thực chiến tiếng Trung Doanh nghiệp tại Green Ocean'
    ],
    kinhNghiem: [
      'Hơn 20 năm kinh nghiệm giảng dạy và làm việc thực tế trong các doanh nghiệp FDI lớn',
      'Phương pháp dạy thực dụng, lược bỏ lý thuyết suông, chú trọng phản xạ giao tiếp và thương thảo',
      'Huấn luyện thành thạo cho cán bộ quản lý, kỹ sư và nhân sự làm việc với đối tác Trung Quốc'
    ],
    image: teacher2
  },
  {
    id: 'nguyen-ngoc-anh',
    name: 'Cô Nguyễn Ngọc Anh',
    trinhDo: [
      'Tốt nghiệp chuyên ngành Ngôn ngữ Trung Quốc – Trường Đại học Kinh doanh & Công nghệ Hà Nội',
      'Chứng chỉ HSK 6 điểm cao, phương pháp sư phạm chuẩn hóa theo khung HSK mới',
      'Chuyên gia luyện thi New HSK cấp tốc tại Green Ocean'
    ],
    kinhNghiem: [
      '05 năm chuyên sâu giảng dạy và luyện thi New HSK điểm số tối ưu',
      'Sở hữu kho đề thi cập nhật liên tục và các mẹo làm bài (tips) độc quyền',
      'Phương pháp tư duy logic, ghi nhớ chữ Hán qua hình ảnh, sát sao tiến độ từng buổi học'
    ],
    image: teacher1
  }
];

export default function TeachersSection(): JSX.Element {
  const [active, setActive] = useState(0);
  const [lastWidth, setLastWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setLastWidth(window.innerWidth || 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const go = (index: number) => {
    if (index === active) return;
    const total = experts.length;
    const normalized = (index + total) % total;
    setIsChanging(true);
    setTimeout(() => {
      setActive(normalized);
      setIsChanging(false);
    }, 110);
  };

  const getStyle = (index: number) => {
    const total = experts.length;
    let diff = (index - active + total) % total;
    if (diff > total / 2) diff -= total;

    const isMobile = lastWidth < 768;
    const isTablet = lastWidth >= 768 && lastWidth < 1024;

    const size = (level: number) => {
      if (isMobile) return level === 0 ? 12 : 6;
      if (isTablet) return level === 0 ? 14 : 7;
      return level === 0 ? 18 : 11;
    };

    const gap = isMobile ? 1.4 : isTablet ? 2.2 : 3.4;
    const sign = diff >= 0 ? 1 : -1;
    let x = 0;

    for (let i = 1; i <= Math.abs(diff); i++) {
      x += sign * (size(sign * (i - 1)) / 2 + size(sign * i) / 2 + gap);
    }

    const y = (1 - Math.cos(diff * 0.35)) * (isMobile ? 20 : isTablet ? 30 : 52);
    const scale = Math.pow(0.95, Math.abs(diff));

    const visible = isMobile
      ? Math.abs(diff) <= 2
      : isTablet
        ? Math.abs(diff) <= 3
        : Math.abs(diff) <= 4;

    return {
      transform: `translate3d(-50%, -50%, 0) translate3d(${x}rem, ${y}rem, 0) scale(${scale})`,
      opacity: visible ? Math.max(0.22, 1 - Math.abs(diff) * 0.18) : 0,
      zIndex: 20 - Math.abs(diff),
      pointerEvents: (visible ? 'auto' : 'none') as React.CSSProperties['pointerEvents'],
      filter: Math.abs(diff) === 0 ? 'none' : 'saturate(0.92)'
    };
  };

  const currentItem = experts[active];

  return (
    <section className="w-full bg-white relative overflow-hidden pt-11 pb-16 md:pb-20" aria-label="Đội ngũ chuyên gia, giảng viên">
      <div className="w-full max-w-[1180px] mx-auto px-4 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-4 md:mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs tracking-wider uppercase mb-4 shadow-xs">
            ĐỘI NGŨ CHUYÊN GIA
          </span>
          <h2 className="m-0 text-slate-900 text-3xl sm:text-4xl md:text-[46px] font-extrabold leading-[1.16] tracking-tight">
            Đội ngũ chuyên gia, giảng viên <br className="hidden sm:inline" />
            <span className="text-[#1B7E45]">Hán ngữ đầu ngành</span>
          </h2>
        </div>

        {/* Arc Carousel Area */}
        <div className="relative w-full max-w-[1180px] h-[330px] md:h-[380px] min-h-[330px] md:min-h-[380px] mx-auto overflow-visible">
          {/* Arc Dashed Curve Line */}
          <div className="absolute w-[180%] md:w-[145%] h-[110%] top-[56%] left-1/2 -translate-x-1/2 border-t border-dashed border-[#F3F4F6] rounded-[100%_100%_0_0] pointer-events-none opacity-75" />

          {/* Avatars on Arc */}
          <div className="relative w-full h-full">
            {experts.map((item, index) => {
              const s = getStyle(index);
              const isActive = index === active;

              return (
                <div
                  key={item.id}
                  onClick={() => go(index)}
                  style={{
                    transform: s.transform,
                    WebkitTransform: s.transform,
                    opacity: s.opacity,
                    zIndex: s.zIndex,
                    pointerEvents: s.pointerEvents,
                    filter: s.filter
                  }}
                  className="absolute top-1/2 left-1/2 cursor-pointer transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                >
                  <div
                    className={`relative rounded-full overflow-hidden bg-[#FDF7F2] transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive
                        ? 'w-[96px] h-[96px] md:w-[150px] md:h-[150px] scale-[2.0] md:scale-[1.72] border-4 border-white shadow-[0_22px_46px_rgba(27,126,69,0.25)] ring-4 ring-[#1B7E45]/20'
                        : 'w-[96px] h-[96px] md:w-[150px] md:h-[150px] scale-100 border-4 border-white/90 shadow-[0_14px_30px_rgba(17,24,39,0.13)] hover:border-white'
                      }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover object-[center_18%]"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail Card Section */}
        <div className="relative z-20 -mt-4 md:-mt-14 pt-0">
          <div className="w-full max-w-[90vw] md:max-w-[650px] min-h-[420px] md:h-[430px] mx-auto relative">

            {/* Desktop Left Button */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-[84px] z-10">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Chuyên gia trước"
                className="w-[52px] h-[52px] rounded-full border border-[#F3F4F6] bg-white text-[#9CA3AF] hover:text-[#1B7E45] hover:border-[#1B7E45]/40 inline-flex items-center justify-center cursor-pointer shadow-[0_12px_28px_rgba(17,24,39,0.1)] hover:shadow-[0_18px_34px_rgba(27,126,69,0.18)] hover:-translate-y-0.5 active:scale-90 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px]" aria-hidden="true">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Desktop Right Button */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-[84px] z-10">
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Chuyên gia tiếp theo"
                className="w-[52px] h-[52px] rounded-full border border-[#F3F4F6] bg-white text-[#9CA3AF] hover:text-[#1B7E45] hover:border-[#1B7E45]/40 inline-flex items-center justify-center cursor-pointer shadow-[0_12px_28px_rgba(17,24,39,0.1)] hover:shadow-[0_18px_34px_rgba(27,126,69,0.18)] hover:-translate-y-0.5 active:scale-90 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-[30px] h-[30px]" aria-hidden="true">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Profile Card Content */}
            <div className="w-full min-h-[420px] md:h-[430px] bg-white rounded-[26px] md:rounded-[28px] p-5 sm:p-6 md:p-6 border border-[#F9FAFB] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.14)] text-left overflow-hidden">
              <div
                className={`h-full overflow-y-auto pr-1.5 transition-all duration-200 ${isChanging ? 'opacity-0 translate-y-1.5' : 'opacity-100 translate-y-0'
                  }`}
              >
                <h3 className="m-0 mb-4 text-[#111827] text-[21px] md:text-[24px] leading-[1.3] font-extrabold">
                  {currentItem.name}
                </h3>

                {/* Block: Trình độ */}
                {currentItem.trinhDo && currentItem.trinhDo.length > 0 && (
                  <div className="mt-4">
                    <p className="m-0 mb-1.5 text-[#1B7E45] text-xs md:text-sm leading-[1.4] font-extrabold uppercase tracking-[0.04em]">
                      TRÌNH ĐỘ
                    </p>
                    <ul className="list-none p-0 m-0 space-y-1">
                      {currentItem.trinhDo.map((text, i) => (
                        <li key={i} className="relative pl-[18px] text-[#4B5563] text-[13px] md:text-[14px] leading-[1.65]">
                          <span className="absolute top-2.5 left-0 w-1.5 h-1.5 rounded-full bg-[#1B7E45]" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Block: Kinh nghiệm & Thành tích */}
                {currentItem.kinhNghiem && currentItem.kinhNghiem.length > 0 && (
                  <div className="mt-4">
                    <p className="m-0 mb-1.5 text-[#1B7E45] text-xs md:text-sm leading-[1.4] font-extrabold uppercase tracking-[0.04em]">
                      KINH NGHIỆM & THÀNH TÍCH
                    </p>
                    <ul className="list-none p-0 m-0 space-y-1">
                      {currentItem.kinhNghiem.map((text, i) => (
                        <li key={i} className="relative pl-[18px] text-[#4B5563] text-[13px] md:text-[14px] leading-[1.65]">
                          <span className="absolute top-2.5 left-0 w-1.5 h-1.5 rounded-full bg-[#1B7E45]" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden justify-center items-center gap-4 mt-6">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Chuyên gia trước"
                className="w-12 h-12 rounded-full border border-[#F3F4F6] bg-white text-[#9CA3AF] hover:text-[#1B7E45] inline-flex items-center justify-center cursor-pointer shadow-md active:scale-90 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-[26px] h-[26px]" aria-hidden="true">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Chuyên gia tiếp theo"
                className="w-12 h-12 rounded-full border border-[#F3F4F6] bg-white text-[#9CA3AF] hover:text-[#1B7E45] inline-flex items-center justify-center cursor-pointer shadow-md active:scale-90 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-[26px] h-[26px]" aria-hidden="true">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
