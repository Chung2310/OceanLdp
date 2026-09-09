import React, { useState, useEffect } from 'react';

import lyXuanNam from '../../asset/teachers/ly-xuan-nam_4.webp';
import leQuangThanh from '../../asset/teachers/le-quang-thanh_2.webp';
import leXuanKhai from '../../asset/teachers/le-xuan-khai_3.webp';
import doHoangKhanhHuyen from '../../asset/teachers/do-hoang-khanh-huyen_1.webp';
import nguyenXuanNhat from '../../asset/teachers/nguyen-xuan-nhat_5.webp';
import phamThanhVan from '../../asset/teachers/pham-thanh-van_6.webp';
import tranDaiAn from '../../asset/teachers/tran-dai-an_7.webp';
import tranHoaiThu from '../../asset/teachers/tran-hoai-thu_8.webp';
import tranThiHoangAnh from '../../asset/teachers/tran-thi-hoang-anh_9.webp';
import trinhThiThuHuong from '../../asset/teachers/trinh-thi-thu-huong_10.webp';
import vuNgocAnh from '../../asset/teachers/vu-ngoc-anh_11.webp';

interface Expert {
  id: string;
  name: string;
  trinhDo: string[];
  kinhNghiem: string[];
  image: string;
}

const experts: Expert[] = [
  {
    id: 'ly-xuan-nam',
    name: 'TS. Lý Xuân Nam',
    trinhDo: [
      'Tiến sĩ Đại học Khoa học Công nghệ Nam Kinh',
      'Giảng viên Trường Đại học Công nghiệp Hà Nội'
    ],
    kinhNghiem: [
      'Tác giả của nhiều bài báo có chỉ số SCI, trong đó có 2 bài là tác giả chính đăng trên tờ báo quốc tế Surface & Coatings Technology (Top 1 chuyên ngành), tổng chỉ số IF (impact) báo đã đăng đạt ngưỡng 20.',
      'Hiện đang là phản biện chính của 2 tờ báo quốc tế SN Applied Sciences và Journal of Military Science and Technology.',
      'Giảng viên 5 sao Green Ocean'
    ],
    image: lyXuanNam
  },
  {
    id: 'le-quang-thanh',
    name: 'Ths. Lê Quang Thành',
    trinhDo: [
      'Thạc sĩ Chuyên ngành Ngôn ngữ và Ứng dụng Ngôn ngữ Trung Quốc, Trường Đại học Ngoại ngữ Bắc Kinh (Trung Quốc)',
      'Cử nhân Ngoại ngữ ngành Tiếng Trung Quốc tại trường Đại học Ngoại ngữ, Đại học Quốc gia Hà Nội',
      'Phó tổ trưởng bộ môn Tiếng Trung, Khoa Ngoại ngữ tại Học viện Cảnh sát Nhân dân'
    ],
    kinhNghiem: [
      'Kinh nghiệm trên 15 năm giảng dạy tiếng Trung Quốc mọi trình độ trực tiếp và trực tuyến, luyện thi HSK, giảng dạy tiếng Trung doanh nghiệp',
      'Giảng viên 5 sao Green Ocean'
    ],
    image: leQuangThanh
  },
  {
    id: 'le-xuan-khai',
    name: 'TS. Lê Xuân Khai',
    trinhDo: [
      'Tiến sĩ trường Đại học Sư phạm Quốc gia Đài Loan ngành Ngôn ngữ học và Văn hóa Trung Hoa',
      'Giảng viên Khoa Ngôn ngữ và Văn hoá Trung Quốc, trường Đại học Ngoại ngữ, Đại học Quốc gia Hà Nội'
    ],
    kinhNghiem: [
      'Trên 10 năm kinh nghiệm giảng dạy tiếng Trung các trình độ, luyện thi HSK, tiếng Trung giao tiếp,...',
      'Giảng viên 5 sao Green Ocean'
    ],
    image: leXuanKhai
  },
  {
    id: 'do-hoang-khanh-huyen',
    name: 'Ths. Đỗ Hoàng Khánh Huyền',
    trinhDo: [
      'Thạc sĩ Sư phạm Hán ngữ Quốc tế, Đại học Sư phạm Thiên Tân, Trung Quốc',
      'Cử nhân Đông phương học, Đại học Khoa học Xã hội và Nhân văn',
      'Giảng viên thỉnh giảng tại Đại học Khoa học Xã hội và Nhân văn, Đại học FPT'
    ],
    kinhNghiem: [
      'Hơn 5 năm kinh nghiệm giảng dạy tiếng Trung cho sinh viên, người đi làm và doanh nhân, đồng thời cung cấp dịch vụ luyện thi HSK và biên phiên dịch',
      'Giảng viên 5 sao Green Ocean'
    ],
    image: doHoangKhanhHuyen
  },
  {
    id: 'nguyen-xuan-nhat',
    name: 'Ths. Nguyễn Xuân Nhật',
    trinhDo: [
      'Thạc sỹ chuyên ngành Lý luận và Lịch sử kiến trúc, Đại học Thanh Hoa',
      'Cử nhân ngành Kiến trúc, Đại học Thanh Hoa',
      'Giảng viên Trường Đại học Kiến trúc Hà Nội',
      'Cán bộ Viện Khoa học và Giáo dục Đông Nam Á',
      'Giảng viên Khoa Chính sách công, Học viện Chính sách và Phát triển',
      'Cán bộ Viện Nghiên cứu Phát triển Giáo dục và Đào tạo Hướng nghiệp Đông Nam Á',
      'Cán bộ khoa Quốc tế – Đại học Quốc gia Hà Nội'
    ],
    kinhNghiem: [
      'Trên 10 năm giảng dạy tiếng Trung Quốc, có nhiều lớp đạt thành tích 5 sao tại trung tâm',
      'Giảng viên 5 sao Green Ocean'
    ],
    image: nguyenXuanNhat
  },
  {
    id: 'pham-thanh-van',
    name: 'TS. Phạm Thị Thanh Vân',
    trinhDo: [
      'Cử nhân Sư phạm tiếng Trung Quốc',
      'Thạc sĩ ngôn ngữ Hán',
      'Tiến sĩ ngôn ngữ Trung Quốc, trường đại học Ngoại ngữ, đại học Quốc gia Hà Nội',
      'Hiện đang giảng dạy tại khoa Ngoại ngữ, trường đại học Bách khoa Hà Nội'
    ],
    kinhNghiem: [
      'Kinh nghiệm trên 15 năm giảng dạy tiếng Trung Quốc',
      'Giảng viên 5 sao Green Ocean'
    ],
    image: phamThanhVan
  },
  {
    id: 'tran-dai-an',
    name: 'TS. Trần Đại An',
    trinhDo: [
      'Tốt nghiệp Thạc sĩ, tiến sĩ Hán Nôm, Đại học Sư phạm Hà Nội',
      'Giảng viên khoa Ngoại ngữ, Trường Đại học Phương Đông'
    ],
    kinhNghiem: [
      'Trên 10 năm giảng dạy tiếng Trung Quốc, có nhiều lớp đạt thành tích 5 sao tại trung tâm',
      'Giảng viên 5 sao Green Ocean'
    ],
    image: tranDaiAn
  },
  {
    id: 'tran-hoai-thu',
    name: 'Ths. Trần Hoài Thu',
    trinhDo: [
      'Cử nhân chuyên ngành tiếng Trung, Đại học Hà Nội',
      'Thạc sĩ chuyên ngành tiếng Hán, Đại học Hà Nội',
      'Giảng viên Viện Quản trị kinh doanh, Đại học FPT',
      'Giảng viên ĐH Đại Nam, Đại học Hà Nội, Đại học Đông Đô'
    ],
    kinhNghiem: [
      'Tác giả, đồng tác giả, dịch giả nhiều đầu sách tiếng Trung, trong đó có cuốn Sổ tay từ vựng NEW HSK4',
      'Giảng viên 5 sao Green Ocean'
    ],
    image: tranHoaiThu
  },
  {
    id: 'tran-thi-hoang-anh',
    name: 'TS. Trần Thị Hoàng Anh',
    trinhDo: [
      'Tiến sĩ Ngôn ngữ học Trường đại học Ngoại ngữ, Đại học Quốc gia Hà Nội',
      'Ủy viên Hội đồng Khoa học Viện Nghiên cứu Ứng dụng Ngôn ngữ Bác Nhã',
      'Cố vấn chuyên môn và giảng viên tại Green Ocean'
    ],
    kinhNghiem: [
      '30 năm kinh nghiệm giảng dạy và nghiên cứu tiếng Trung',
      'Giảng viên 5 sao Green Ocean'
    ],
    image: tranThiHoangAnh
  },
  {
    id: 'trinh-thi-thu-huong',
    name: 'Ths. Trịnh Thị Thu Hương',
    trinhDo: [
      'Thạc sĩ chuyên ngành tiếng Trung Quốc, trường Đại học Ngoại ngữ, Đại học Quốc gia Hà Nội',
      'Giảng viên thỉnh giảng trường Đại học Hà Nội'
    ],
    kinhNghiem: [
      'Có nhiều năm kinh nghiệm giảng dạy tiếng Trung mọi trình độ, kinh nghiệm nhiều năm luyện thi THPTQG môn tiếng Trung',
      'Giảng viên 5 sao Green Ocean'
    ],
    image: trinhThiThuHuong
  },
  {
    id: 'vu-ngoc-anh',
    name: 'Ths. Vũ Ngọc Anh',
    trinhDo: [
      'Thạc sĩ chuyên ngành Giáo dục Hán ngữ Quốc tế, trường Đại học Tây Nam (Trùng Khánh - Trung Quốc)',
      'Cử nhân ngôn ngữ Trung Quốc, Đại học Kinh doanh và Công nghệ Hà Nội'
    ],
    kinhNghiem: [
      'Trên 10 năm kinh nghiệm giảng dạy tiếng Trung Quốc tổng hợp, luyện thi HSK/HSKK luyện thi THPT QG, tiếng Trung trẻ em, tiếng Trung doanh nghiệp,...',
      'Giảng viên 5 sao Green Ocean'
    ],
    image: vuNgocAnh
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
                      className="w-full h-full object-cover object-center"
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
