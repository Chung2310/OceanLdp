import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, X, PhoneCall, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import logoImg from '../../asset/img/logo.jpg';

import teacherQuang from '../../asset/teachers/ly-xuan-nam_4.webp';
import teacherLinh from '../../asset/teachers/pham-thanh-van_6.webp';
import teacherThuy from '../../asset/teachers/tran-thi-hoang-anh_9.webp';
import teacherTrung from '../../asset/teachers/le-quang-thanh_2.webp';
import teacherNgocAnh from '../../asset/teachers/vu-ngoc-anh_11.webp';

export interface TeacherItem {
  id: string;
  badgeName: string;
  badgeSub1: string;
  badgeSub2: string;
  bottomName: string;
  bottomLine1: string;
  bottomLine2: string;
  image: string;
  intro: string;
  hocHamHocVi: string[];
  noteUni?: string;
  noiCongTac: string[];
  summaryExp: string;
}

export const teachersList: TeacherItem[] = [
  {
    id: 'nguyen-xuan-quang',
    badgeName: 'THẦY NGUYỄN XUÂN QUẢNG',
    badgeSub1: 'Thạc sĩ ĐH Tương Đàm – Trung Quốc',
    badgeSub2: '28 năm học & làm việc tiếng Trung',
    bottomName: 'TH.S NGUYỄN XUÂN QUẢNG',
    bottomLine1: 'Thạc sĩ Ngôn ngữ học & Ngôn ngữ học ứng dụng',
    bottomLine2: 'Hơn 10 năm giảng dạy Đại học chính quy',
    image: teacherQuang,
    intro: 'Thầy Nguyễn Xuân Quảng – Thạc sỹ chuyên ngành Ngôn ngữ học & Ngôn ngữ học ứng dụng tại Đại học Tương Đàm, Hồ Nam, Trung Quốc. Thầy là chuyên gia đào tạo nòng cốt tại Green Ocean, hiện đang giảng dạy và xây dựng lộ trình học cho các học viên tại trung tâm.',
    hocHamHocVi: [
      'Thạc sỹ chuyên ngành Ngôn ngữ học & Ngôn ngữ học ứng dụng – Đại học Tương Đàm, Hồ Nam, Trung Quốc',
      '6 năm học tập và nghiên cứu chuyên sâu tại Trung Quốc',
      'Sở hữu tư duy ngôn ngữ bản địa sâu sắc, chuẩn ngữ âm và ngữ pháp học thuật'
    ],
    noteUni: '*Đại học Tương Đàm là trường đại học trọng điểm quốc gia có truyền thống học thuật xuất sắc tại Trung Quốc',
    noiCongTac: [
      '28 năm học tập và làm việc với tiếng Trung, đào tạo học viên ở nhiều cấp độ và lĩnh vực',
      'Hơn 10 năm giảng dạy tiếng Trung tại Trường Đại học chính quy',
      'Chuyên gia xây dựng lộ trình đào tạo tiếng Trung mọi cấp độ: từ người mất gốc đến tiếng Trung thương mại thực chiến',
      'Phương pháp giảng dạy dễ hiểu, thực tế, luôn tạo động lực và truyền cảm hứng mạnh mẽ cho học viên'
    ],
    summaryExp: 'Thầy có 28 năm học và làm việc với tiếng Trung, hơn 10 năm giảng dạy tại các trường Đại học chính quy và đã đào tạo thành công hàng nghìn học viên đạt chứng chỉ HSK và tự tin sử dụng tiếng Trung trong công việc.'
  },
  {
    id: 'ngo-hoang-linh',
    badgeName: 'CÔ NGÔ HOÀNG LINH',
    badgeSub1: 'Đại học Sư phạm Thái Nguyên',
    badgeSub2: 'Hơn 20 năm kinh nghiệm thực chiến',
    bottomName: 'CÔ NGÔ HOÀNG LINH',
    bottomLine1: 'Chuyên gia Tiếng Trung Thương Mại & Dịch Thuật',
    bottomLine2: 'Hơn 20 năm kinh nghiệm giảng dạy & đàm phán',
    image: teacherLinh,
    intro: 'Cô Ngô Hoàng Linh – Tốt nghiệp chuyên ngành Ngôn ngữ Trung tại Đại học Sư phạm Thái Nguyên. Cô là giảng viên kỳ cựu với hơn 20 năm kinh nghiệm giảng dạy và làm việc thực tế với tiếng Trung thương mại, dịch thuật và xuất nhập khẩu.',
    hocHamHocVi: [
      'Tốt nghiệp chuyên ngành Ngôn ngữ Trung – Đại học Sư phạm Thái Nguyên',
      'Nền tảng kiến thức sư phạm bài bản, phương pháp giảng dạy hiện đại và linh hoạt'
    ],
    noteUni: '*Đại học Sư phạm Thái Nguyên là một trong những trung tâm đào tạo sư phạm ngoại ngữ uy tín hàng đầu miền Bắc',
    noiCongTac: [
      'Hơn 20 năm kinh nghiệm giảng dạy và làm việc thực tế với tiếng Trung',
      'Kết hợp đỉnh cao giữa ngôn ngữ và kiến thức kinh tế thương mại',
      'Trang bị cho học viên tư duy dịch thuật sắc bén, kỹ năng đàm phán hợp đồng',
      'Tiếng Trung ứng dụng cao trong các ngành du lịch, dịch vụ và xuất nhập khẩu'
    ],
    summaryExp: 'Cô có hơn 20 năm kinh nghiệm giảng dạy và làm việc với tiếng Trung. Lối giảng dạy trực quan sinh động, giàu năng lượng; thấu hiểu tâm lý học viên, giúp xóa tan nỗi sợ ngoại ngữ và tạo phản xạ giao tiếp tự tin chỉ sau thời gian ngắn.'
  },
  {
    id: 'nguyen-thi-thu-thuy',
    badgeName: 'CÔ NGUYỄN THỊ THU THỦY',
    badgeSub1: 'Thạc sĩ ĐH Giao thông Tây Nam (TQ)',
    badgeSub2: 'Cử nhân ĐH Quảng Tây (TQ)',
    bottomName: 'TH.S NGUYỄN THỊ THU THỦY',
    bottomLine1: 'Thạc sĩ Quản lý Du lịch – ĐH Giao thông Tây Nam',
    bottomLine2: 'Hơn 20 năm kinh nghiệm giảng dạy tiếng Trung',
    image: teacherThuy,
    intro: 'Cô Nguyễn Thị Thu Thủy – Thạc sỹ chuyên ngành Quản lý du lịch (Đại học Giao thông Tây Nam, Thành Đô, Trung Quốc) và Cử nhân Ngôn ngữ & Văn học Trung Quốc (Đại học Quảng Tây, Nam Ninh, Trung Quốc). Cô có hơn 20 năm kinh nghiệm giảng dạy và làm việc tiếng Trung.',
    hocHamHocVi: [
      'Thạc sỹ chuyên ngành Quản lý du lịch – Đại học Giao thông Tây Nam, Thành Đô, Trung Quốc',
      'Tốt nghiệp chuyên ngành Ngôn ngữ và Văn học Trung Quốc – Đại học Quảng Tây, Nam Ninh, Trung Quốc',
      'Nhiều năm học tập, nghiên cứu và làm việc thực tế tại Trung Quốc'
    ],
    noteUni: '*Đại học Giao thông Tây Nam và Đại học Quảng Tây là các trường đại học trọng điểm quốc gia danh tiếng của Trung Quốc',
    noiCongTac: [
      'Hơn 20 năm kinh nghiệm giảng dạy và làm việc với tiếng Trung',
      'Phương pháp giảng dạy trực quan sinh động, giàu năng lượng',
      'Thấu hiểu sâu sắc tâm lý người học, đồng hành sát sao',
      'Tập trung xây dựng phản xạ giao tiếp tự tin và tự nhiên cho học viên'
    ],
    summaryExp: 'Cô có hơn 20 năm kinh nghiệm giảng dạy và làm việc tiếng Trung, lối giảng dạy trực quan sinh động, giàu năng lượng; thấu hiểu tâm lý học viên, giúp xóa tan nỗi sợ ngoại ngữ và tạo phản xạ giao tiếp tự tin chỉ sau thời gian ngắn.'
  },
  {
    id: 'do-thanh-trung',
    badgeName: 'THẦY ĐỖ THÀNH TRUNG',
    badgeSub1: 'Đại học Hà Nội (HANU)',
    badgeSub2: '20+ năm kinh nghiệm Doanh nghiệp',
    bottomName: 'THẦY ĐỖ THÀNH TRUNG',
    bottomLine1: 'Tốt nghiệp Ngôn ngữ Trung – Đại học Hà Nội',
    bottomLine2: '20+ năm kinh nghiệm giao tiếp văn phòng & nhà xưởng',
    image: teacherTrung,
    intro: 'Thầy Đỗ Thành Trung – Tốt nghiệp chuyên ngành Ngôn ngữ Trung tại Đại học Hà Nội (HANU). Thầy có hơn 20 năm kinh nghiệm thực chiến đàm phán hợp đồng, quản trị văn phòng và điều hành nhà xưởng trong môi trường doanh nghiệp FDI.',
    hocHamHocVi: [
      'Tốt nghiệp chuyên ngành Ngôn ngữ Trung – Đại học Hà Nội (HANU)',
      'Chuyên sâu về thuật ngữ đàm phán kinh tế, quản trị văn phòng và kỹ thuật sản xuất nhà xưởng'
    ],
    noteUni: '*Đại học Hà Nội (HANU) là cái nôi đào tạo ngoại ngữ và biên phiên dịch hàng đầu Việt Nam',
    noiCongTac: [
      'Hơn 20 năm kinh nghiệm giảng dạy và làm việc thực tế với tiếng Trung',
      'Phương pháp dạy thực dụng, lược bỏ hoàn toàn lý thuyết suông',
      'Tập trung tối đa vào phản xạ giao tiếp phản biện và thương thảo hợp đồng kinh tế',
      'Huấn luyện xử lý các tình huống thực tế trong môi trường văn phòng – nhà xưởng cho cán bộ quản lý và kỹ sư'
    ],
    summaryExp: 'Thầy có hơn 20 năm kinh nghiệm giảng dạy và làm việc thực tế với tiếng Trung trong các doanh nghiệp lớn, mang đến những bài học thực chiến, giải quyết chính xác các vấn đề giao tiếp trong công việc hàng ngày.'
  },
  {
    id: 'nguyen-ngoc-anh',
    badgeName: 'CÔ NGUYỄN NGỌC ANH',
    badgeSub1: 'ĐH Kinh doanh & Công nghệ Hà Nội',
    badgeSub2: 'Chuyên gia luyện thi New HSK',
    bottomName: 'CÔ NGUYỄN NGỌC ANH',
    bottomLine1: 'Cử nhân Ngôn ngữ Trung – ĐH KD&CN Hà Nội',
    bottomLine2: '05 năm chuyên sâu luyện thi HSK điểm cao',
    image: teacherNgocAnh,
    intro: 'Cô Nguyễn Ngọc Anh – Tốt nghiệp chuyên ngành Ngôn ngữ Trung Quốc tại Đại học Kinh doanh & Công nghệ Hà Nội. Cô là chuyên gia luyện thi HSK năng động với 05 năm kinh nghiệm chuyên sâu, sở hữu kho đề thi cập nhật liên tục và các mẹo làm bài độc quyền.',
    hocHamHocVi: [
      'Tốt nghiệp chuyên ngành Ngôn ngữ Trung Quốc – Đại học Kinh doanh Công nghệ Hà Nội',
      'Nền tảng kiến thức bài bản và chuyên sâu, đạt chứng chỉ HSK 6 điểm cao'
    ],
    noteUni: '*Đại học Kinh doanh & Công nghệ Hà Nội có khoa tiếng Trung đào tạo thực hành ứng dụng chất lượng cao',
    noiCongTac: [
      '05 năm kinh nghiệm giảng dạy và làm việc thực tế với tiếng Trung',
      'Sở hữu kho đề thi cập nhật liên tục và các mẹo làm bài (tips) độc quyền',
      'Phương pháp dạy logic, đơn giản hóa ngữ pháp phức tạp',
      'Mẹo ghi nhớ chữ Hán nhanh và sâu sắc qua tư duy hình ảnh',
      'Sát sao tiến độ từng buổi học, tạo động lực mạnh mẽ để học viên tự tin bứt phá điểm số'
    ],
    summaryExp: 'Cô có 05 năm kinh nghiệm chuyên sâu giảng dạy và luyện thi HSK. Phương pháp dạy logic, đơn giản hóa ngữ pháp phức tạp và mẹo ghi nhớ chữ Hán qua tư duy hình ảnh, sát sao tiến độ giúp học viên tối ưu hóa điểm số và đạt mục tiêu HSK trong thời gian ngắn nhất.'
  }
];

interface TeachersSectionProps {
  onOpenLeadModal?: (courseTitle?: string) => void;
}

export default function TeachersSection({ onOpenLeadModal }: TeachersSectionProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherItem | null>(null);
  const [displayMode, setDisplayMode] = useState<'carousel' | 'grid'>('carousel');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTeacher(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedTeacher) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedTeacher]);

  const maxIndex = Math.max(0, teachersList.length - visibleCount);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 overflow-hidden" aria-label="Đội ngũ giảng viên Green Ocean">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Top Centered Section Header with Dividing Lines */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="h-[1px] bg-slate-300 w-16 sm:w-36 md:w-56" />
            <h2 className="flex items-center gap-2 text-[#1B7E45] font-black text-base sm:text-xl md:text-2xl uppercase tracking-wider m-0">
              <Heart size={18} className="text-[#F37021] fill-[#F37021] shrink-0" />
              <span>ĐỘI NGŨ GIẢNG VIÊN GREEN OCEAN</span>
            </h2>
            <div className="h-[1px] bg-slate-300 w-16 sm:w-36 md:w-56" />
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed text-center px-2">
            Kể từ khi thành lập vào tháng 07/2020, TRUNG TÂM NGOẠI NGỮ GREEN OCEAN luôn tự hào là đơn vị đào tạo tiếng Trung được nhiều học sinh, sinh viên, người đi làm, doanh nghiệp tin tưởng lựa chọn. Đạt được điều này là nhờ vào đội ngũ giảng viên có trình độ chuyên môn cao, giàu tâm huyết và phương pháp giảng dạy chuyên nghiệp, khoa học và bài bản.
          </p>

          {/* View Mode Switcher */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => setDisplayMode('carousel')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                displayMode === 'carousel'
                  ? 'bg-[#1B7E45] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <SlidersHorizontal size={14} /> Chế độ Trượt (Carousel)
            </button>
            <button
              type="button"
              onClick={() => setDisplayMode('grid')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                displayMode === 'grid'
                  ? 'bg-[#1B7E45] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <LayoutGrid size={14} /> Xem Tất Cả (Lưới)
            </button>
          </div>
        </div>

        {/* CAROUSEL VIEW */}
        {displayMode === 'carousel' && (
          <div className="relative px-2 sm:px-10 md:px-14">
            
            {/* Left Arrow Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Giảng viên trước"
              className="absolute left-0 sm:left-2 top-[38%] -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#1B7E45] hover:border-[#1B7E45] shadow-md hover:shadow-lg flex items-center justify-center transition-all cursor-pointer active:scale-90"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Right Arrow Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Giảng viên kế tiếp"
              className="absolute right-0 sm:right-2 top-[38%] -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#1B7E45] hover:border-[#1B7E45] shadow-md hover:shadow-lg flex items-center justify-center transition-all cursor-pointer active:scale-90"
            >
              <ChevronRight size={22} />
            </button>

            {/* Sliding Track Viewport */}
            <div className="overflow-hidden" ref={containerRef}>
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
                }}
              >
                {teachersList.map((t) => (
                  <div
                    key={t.id}
                    className="shrink-0 px-3 sm:px-4 md:px-5"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    {/* Clickable Card Container */}
                    <div 
                      onClick={() => setSelectedTeacher(t)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter') setSelectedTeacher(t); }}
                      title="Bấm vào thẻ để xem chi tiết hồ sơ giảng viên"
                      className="flex flex-col items-center group cursor-pointer focus:outline-none"
                    >
                      
                      {/* Arch Frame Teacher Card with Offset Background */}
                      <div className="relative w-full max-w-[310px] aspect-[4/5] mx-auto">
                        
                        {/* Decorative Offset Shape */}
                        <div className="absolute -left-2 sm:-left-3 top-4 w-full h-[88%] bg-[#1B7E45] rounded-3xl -rotate-6 transition-transform duration-300 group-hover:-rotate-8 group-hover:-translate-x-1 shadow-sm opacity-95" />

                        {/* White Arched Card Frame */}
                        <div className="relative w-full h-full bg-white rounded-t-[70px] sm:rounded-t-[85px] rounded-b-2xl border-[3px] border-[#1B7E45] overflow-hidden shadow-lg flex flex-col justify-between transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#156637]">
                          
                          {/* Top Mini Brand Banner inside Card */}
                          <div className="pt-3 px-4 flex items-center justify-center gap-1.5 z-10">
                            <img src={logoImg} alt="Green Ocean Logo" className="h-5 w-auto object-contain" />
                            <div className="h-px bg-[#1B7E45]/40 flex-1 ml-1" />
                          </div>

                          {/* Teacher Portrait Image */}
                          <div className="relative w-full flex-1 flex items-end justify-center overflow-hidden pt-1">
                            <img
                              src={t.image}
                              alt={t.badgeName}
                              className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>

                          {/* Bottom Badge Box inside Card */}
                          <div className="w-[92%] mx-auto mb-2.5 bg-white border-2 border-[#1B7E45] rounded-xl px-2 py-1.5 text-center shadow-xs z-10 transition-colors group-hover:bg-[#EAF5EE]/40">
                            <h4 className="m-0 text-[#1B7E45] font-black text-[11px] sm:text-[12px] uppercase tracking-tight leading-tight">
                              {t.badgeName}
                            </h4>
                            <p className="m-0 text-slate-700 text-[9.5px] sm:text-[10.5px] font-semibold leading-tight mt-0.5">
                              {t.badgeSub1}
                            </p>
                            <p className="m-0 text-slate-500 text-[9px] sm:text-[10px] leading-tight mt-0.5">
                              {t.badgeSub2}
                            </p>
                          </div>

                        </div>
                      </div>

                      {/* Information Beneath Card */}
                      <div className="text-center mt-5 sm:mt-6 px-1">
                        <h3 className="m-0 text-[#1E293B] text-sm sm:text-base md:text-[17px] font-black uppercase tracking-tight leading-snug group-hover:text-[#1B7E45] transition-colors">
                          {t.bottomName}
                        </h3>
                        <p className="m-0 text-slate-700 text-xs sm:text-[13px] font-medium leading-relaxed mt-1">
                          {t.bottomLine1}
                        </p>
                        <p className="m-0 text-slate-500 text-[11.5px] sm:text-xs leading-relaxed mt-0.5">
                          {t.bottomLine2}
                        </p>
                        <span className="inline-block mt-2 text-[11px] font-bold text-[#1B7E45] group-hover:underline">
                          Bấm xem chi tiết hồ sơ &rsaquo;
                        </span>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Chuyển tới slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-7 bg-[#1B7E45]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

          </div>
        )}

        {/* GRID VIEW */}
        {displayMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
            {teachersList.map((t) => (
              <div 
                key={t.id}
                onClick={() => setSelectedTeacher(t)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedTeacher(t); }}
                title="Bấm vào thẻ để xem chi tiết hồ sơ giảng viên"
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                {/* Arch Frame Teacher Card with Offset Background */}
                <div className="relative w-full max-w-[310px] aspect-[4/5] mx-auto">
                  {/* Decorative Offset Shape */}
                  <div className="absolute -left-2 sm:-left-3 top-4 w-full h-[88%] bg-[#1B7E45] rounded-3xl -rotate-6 transition-transform duration-300 group-hover:-rotate-8 group-hover:-translate-x-1 shadow-sm opacity-95" />

                  {/* White Arched Card Frame */}
                  <div className="relative w-full h-full bg-white rounded-t-[70px] sm:rounded-t-[85px] rounded-b-2xl border-[3px] border-[#1B7E45] overflow-hidden shadow-lg flex flex-col justify-between transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#156637]">
                    {/* Top Mini Brand Banner inside Card */}
                    <div className="pt-3 px-4 flex items-center justify-center gap-1.5 z-10">
                      <img src={logoImg} alt="Green Ocean Logo" className="h-5 w-auto object-contain" />
                      <div className="h-px bg-[#1B7E45]/40 flex-1 ml-1" />
                    </div>

                    {/* Teacher Portrait Image */}
                    <div className="relative w-full flex-1 flex items-end justify-center overflow-hidden pt-1">
                      <img
                        src={t.image}
                        alt={t.badgeName}
                        className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Bottom Badge Box inside Card */}
                    <div className="w-[92%] mx-auto mb-2.5 bg-white border-2 border-[#1B7E45] rounded-xl px-2 py-1.5 text-center shadow-xs z-10 transition-colors group-hover:bg-[#EAF5EE]/40">
                      <h4 className="m-0 text-[#1B7E45] font-black text-[11px] sm:text-[12px] uppercase tracking-tight leading-tight">
                        {t.badgeName}
                      </h4>
                      <p className="m-0 text-slate-700 text-[9.5px] sm:text-[10.5px] font-semibold leading-tight mt-0.5">
                        {t.badgeSub1}
                      </p>
                      <p className="m-0 text-slate-500 text-[9px] sm:text-[10px] leading-tight mt-0.5">
                        {t.badgeSub2}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Information Beneath Card */}
                <div className="text-center mt-5 sm:mt-6 px-1">
                  <h3 className="m-0 text-[#1E293B] text-sm sm:text-base md:text-[17px] font-black uppercase tracking-tight leading-snug group-hover:text-[#1B7E45] transition-colors">
                    {t.bottomName}
                  </h3>
                  <p className="m-0 text-slate-700 text-xs sm:text-[13px] font-medium leading-relaxed mt-1">
                    {t.bottomLine1}
                  </p>
                  <p className="m-0 text-slate-500 text-[11.5px] sm:text-xs leading-relaxed mt-0.5">
                    {t.bottomLine2}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-bold text-[#1B7E45] group-hover:underline">
                    Bấm xem chi tiết hồ sơ &rsaquo;
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* DETAIL MODAL POPUP (Triggered after clicking on any card) */}
      {selectedTeacher && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setSelectedTeacher(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Chi tiết giảng viên ${selectedTeacher.bottomName}`}
        >
          <div 
            className="relative bg-white w-full max-w-2xl sm:max-w-3xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setSelectedTeacher(null)}
              aria-label="Đóng chi tiết"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer z-20"
            >
              <X size={20} />
            </button>


            {/* Centered Teacher Card Frame (Exact match to screenshot) */}
            <div className="relative w-[210px] sm:w-[240px] aspect-[4/5] mx-auto mb-8">
              
              {/* Decorative Offset Shape */}
              <div className="absolute -left-3 top-4 w-full h-[88%] bg-[#1B7E45] rounded-3xl -rotate-6 shadow-sm opacity-95" />

              {/* White Arched Card Frame */}
              <div className="relative w-full h-full bg-white rounded-t-[70px] sm:rounded-t-[80px] rounded-b-2xl border-[3px] border-[#1B7E45] overflow-hidden shadow-xl flex flex-col justify-between">
                
                {/* Top Mini Brand Banner */}
                <div className="pt-3 px-4 flex items-center justify-center gap-1.5 z-10">
                  <img src={logoImg} alt="Green Ocean Logo" className="h-5 w-auto object-contain" />
                  <div className="h-px bg-[#1B7E45]/40 flex-1 ml-1" />
                </div>

                {/* Teacher Portrait */}
                <div className="relative w-full flex-1 flex items-end justify-center overflow-hidden pt-1">
                  <img
                    src={selectedTeacher.image}
                    alt={selectedTeacher.badgeName}
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>

                {/* Bottom Badge Box */}
                <div className="w-[92%] mx-auto mb-2.5 bg-white border-2 border-[#1B7E45] rounded-xl px-2 py-1.5 text-center shadow-xs z-10">
                  <h4 className="m-0 text-[#1B7E45] font-black text-[11px] sm:text-[12px] uppercase tracking-tight leading-tight">
                    {selectedTeacher.badgeName}
                  </h4>
                  <p className="m-0 text-slate-700 text-[9.5px] sm:text-[10.5px] font-semibold leading-tight mt-0.5">
                    {selectedTeacher.badgeSub1}
                  </p>
                  <p className="m-0 text-slate-500 text-[9px] sm:text-[10px] leading-tight mt-0.5">
                    {selectedTeacher.badgeSub2}
                  </p>
                </div>

              </div>
            </div>

            {/* Profile Detailed Content Below Card */}
            <div className="space-y-4 text-left border-t border-slate-100 pt-6">
              
              {/* Intro Title & Description */}
              <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed font-bold">
                {selectedTeacher.intro}
              </p>

              {/* Section 1: Học hàm – Học vị */}
              <div className="pt-2">
                <h4 className="text-sm sm:text-base font-extrabold text-[#1E293B] mb-2.5 uppercase tracking-wide">
                  Học hàm – Học vị
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 pl-1">
                  {selectedTeacher.hocHamHocVi.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1B7E45] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {selectedTeacher.noteUni && (
                  <p className="text-xs text-slate-500 italic mt-2.5 pl-4">
                    {selectedTeacher.noteUni}
                  </p>
                )}
              </div>

              {/* Section 2: Nơi công tác & Kinh nghiệm */}
              <div className="pt-2">
                <h4 className="text-sm sm:text-base font-extrabold text-[#1E293B] mb-2.5 uppercase tracking-wide">
                  Nơi công tác & Kinh nghiệm giảng dạy:
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 pl-1">
                  {selectedTeacher.noiCongTac.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1B7E45] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Concluding Paragraph */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-dashed border-slate-200">
                {selectedTeacher.summaryExp}
              </p>

              {/* Modal Action Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTeacher(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-50 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const teacherName = selectedTeacher.bottomName;
                    setSelectedTeacher(null);
                    if (onOpenLeadModal) {
                      onOpenLeadModal(`Đăng ký tư vấn học cùng ${teacherName}`);
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F37021] hover:bg-[#d95e14] text-white text-xs sm:text-sm font-extrabold px-6 py-2.5 rounded-xl shadow-md transition-all cursor-pointer active:scale-95"
                >
                  <PhoneCall size={16} /> Đăng Ký Tư Vấn Cùng Giảng Viên
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
