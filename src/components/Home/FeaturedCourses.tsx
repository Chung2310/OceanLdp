import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'wouter';
import course01 from '../../asset/courses/course01.png';
import course02 from '../../asset/courses/course02.png';
import course03 from '../../asset/courses/course03.png';

interface FeaturedCoursesProps {
  onOpenLeadModal: (courseTitle?: string) => void;
}

interface ProgramDisplayItem {
  id: string;
  title: string;
  slug: string;
  desc: string;
  duration: string;
  image: string;
}

const programsData: ProgramDisplayItem[] = [
  {
    id: '01',
    title: 'HSK 1 – NỀN TẢNG TIẾNG TRUNG',
    slug: 'hsk-1-nen-tang-tieng-trung',
    duration: '20 buổi (1,5 giờ/buổi)',
    desc: 'Làm quen tiếng Trung, phát âm, từ vựng và mẫu câu giao tiếp cơ bản từ con số 0',
    image: course01
  },
  {
    id: '02',
    title: 'HSK 2 – CỦNG CỐ NỀN TẢNG',
    slug: 'hsk-2-cung-co-nen-tang',
    duration: '20 buổi (1,5 giờ/buổi)',
    desc: 'Mở rộng vốn từ, nắm chắc ngữ pháp và nâng cao khả năng giao tiếp tình huống quen thuộc',
    image: course02
  },
  {
    id: '03',
    title: 'HSK 3 – PHÁT TRIỂN TOÀN DIỆN',
    slug: 'hsk-3-phat-trien-toan-dien',
    duration: '35 buổi (1,5 giờ/buổi)',
    desc: 'Tăng cường từ vựng, ngữ pháp, nghe – nói – đọc – viết; giao tiếp và xử lý tình huống thông dụng',
    image: course03
  },
  {
    id: '04',
    title: 'HSK 4 – NÂNG CAO NĂNG LỰC',
    slug: 'hsk-4-nang-cao-nang-luc',
    duration: '45 buổi (1,5 giờ/buổi)',
    desc: 'Phát triển khả năng đọc hiểu, nghe hiểu, diễn đạt trong học tập, công việc và thi HSK',
    image: course01
  },
  {
    id: '05',
    title: 'HSK 5 – THÀNH THẠO & CHUYÊN SÂU',
    slug: 'hsk-5-thanh-thao-chuyen-sau',
    duration: '80 buổi (1,5 giờ/buổi)',
    desc: 'Nâng cao khả năng sử dụng tiếng Trung trong các tình huống phức tạp và môi trường chuyên môn',
    image: course02
  },
  {
    id: '06',
    title: 'GIAO TIẾP CẤP TỐC – KỸ NĂNG TẬP TRUNG',
    slug: 'khoa-hoc-giao-tiep-cap-toc',
    duration: '35 buổi (1,5 giờ/buổi)',
    desc: 'Xây dựng nền tảng phát âm và khẩu ngữ chuẩn, tập trung vào nghe – nói – phản xạ giao tiếp',
    image: course03
  },
  {
    id: '07',
    title: 'TIẾNG TRUNG TRẺ EM (6–15 TUỔI)',
    slug: 'tieng-trung-tre-em',
    duration: 'Theo cấp độ (1,5 giờ/buổi)',
    desc: 'Phát triển tư duy – Tự tin giao tiếp, lộ trình bài bản 4 giai đoạn theo từng độ tuổi',
    image: course01
  }
];

export default function FeaturedCourses({ onOpenLeadModal }: FeaturedCoursesProps): JSX.Element {
  return (
    <section className="w-full bg-white py-10 sm:py-14 border-b border-slate-100" aria-label="Các khóa học tiếng Trung">
      <div className="max-w-[1240px] mx-auto px-4">

        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
          <div className="h-[1.5px] bg-slate-200 flex-1 max-w-[80px] sm:max-w-[220px]" />
          <div className="flex items-center gap-2 sm:gap-2.5 text-[#1B7E45] font-black text-base sm:text-xl md:text-2xl uppercase tracking-tight text-center">
            <Menu size={22} className="stroke-[3] shrink-0" />
            <span>CÁC KHÓA HỌC TIẾNG TRUNG TẠI GREEN OCEAN</span>
          </div>
          <div className="h-[1.5px] bg-slate-200 flex-1 max-w-[80px] sm:max-w-[220px]" />
        </div>

        {/* Courses Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programsData.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-5 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Poster Image Frame */}
              <Link href={`/khoa-hoc/${item.slug}`} className="block w-full aspect-[720/460] rounded-2xl overflow-hidden bg-slate-50 relative cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                  loading="lazy"
                />
                <span className="absolute bottom-2.5 right-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                  {item.duration}
                </span>
              </Link>

              {/* Title */}
              <h3 className="text-center font-black text-sm sm:text-base text-[#1B7E45] group-hover:text-[#145A32] mt-3.5 uppercase tracking-tight transition-colors">
                <Link href={`/khoa-hoc/${item.slug}`}>
                  {item.title}
                </Link>
              </h3>

              {/* Short description */}
              <p className="text-center text-xs text-slate-600 mt-1.5 leading-relaxed font-normal max-w-sm mx-auto line-clamp-2 flex-1">
                {item.desc}
              </p>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100">
                <Link
                  href={`/khoa-hoc/${item.slug}`}
                  className="py-2 px-3 text-center text-xs font-bold text-slate-700 hover:text-[#1B7E45] bg-slate-50 hover:bg-[#EAF5EE] rounded-xl border border-slate-200 transition-colors"
                >
                  Xem chi tiết
                </Link>
                <button
                  onClick={() => onOpenLeadModal(item.title)}
                  className="py-2 px-3 text-center text-xs font-bold text-white bg-[#1B7E45] hover:bg-[#156637] rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Tư vấn lộ trình
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
