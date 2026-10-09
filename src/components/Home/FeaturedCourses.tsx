import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'wouter';
import course01 from '../../asset/courses/course01.png';
import course02 from '../../asset/courses/course02.png';
import course03 from '../../asset/courses/course03.png';
import course04 from '../../asset/courses/course04.png';
import course05 from '../../asset/courses/course05.png';
import course06 from '../../asset/courses/course06.png';

interface FeaturedCoursesProps {
  onOpenLeadModal?: (courseTitle?: string) => void;
}

interface ProgramDisplayItem {
  id: string;
  title: string;
  slug: string;
  desc: string;
  image: string;
}

const programsData: ProgramDisplayItem[] = [
  {
    id: '01',
    title: 'HÁN NGỮ TÍCH HỢP 3.0',
    slug: 'hsk-1-nen-tang-tieng-trung',
    desc: 'Đào tạo bài bản 4 kỹ năng nghe – nói, đọc – viết đạt chuẩn đầu ra theo tiêu chuẩn 3.0',
    image: course01
  },
  {
    id: '02',
    title: 'HÁN NGỮ TÍCH HỢP 3.0 TRỰC TUYẾN',
    slug: 'hsk-2-cung-co-nen-tang',
    desc: 'Học trực tuyến từ xa trên nền tảng Google Meet, cam kết đầu ra như các lớp Offline',
    image: course02
  },
  {
    id: '03',
    title: 'KHÓA LUYỆN THI HSK/ HSKK',
    slug: 'hsk-3-phat-trien-toan-dien',
    desc: 'Lộ trình luyện thi chinh phục HSK sau 1 khóa học HSKK cao cấp với số điểm cao 70+ điểm',
    image: course03
  },
  {
    id: '04',
    title: 'KHÓA TIẾNG TRUNG TRẺ EM',
    slug: 'tieng-trung-tre-em',
    desc: 'Lộ trình bám sát chương trình phổ thông hiện hành, phù hợp cho trẻ từ 6-15 tuổi',
    image: course04
  },
  {
    id: '05',
    title: 'KHÓA DOANH NGHIỆP',
    slug: 'khoa-hoc-giao-tiep-cap-toc',
    desc: 'Khóa tiếng Trung với lộ trình học thiết kế riêng theo nhu cầu của Doanh nghiệp',
    image: course05
  },
  {
    id: '06',
    title: 'KHÓA HỌC THEO YÊU CẦU',
    slug: 'khoa-hoc-giao-tiep-cap-toc',
    desc: 'Khóa học VIP 1 kèm 1, 1 kèm 3 theo yêu cầu có thời gian học linh hoạt',
    image: course06
  }
];

export default function FeaturedCourses({ onOpenLeadModal }: FeaturedCoursesProps): JSX.Element {
  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-slate-100" aria-label="Các khóa học tiếng Trung">
      <div className="max-w-[1240px] mx-auto px-4">

        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-10 sm:mb-14">
          <div className="h-[1.5px] bg-slate-200 flex-1 max-w-[80px] sm:max-w-[200px]" />
          <div className="flex items-center gap-2 sm:gap-2.5 text-[#1B7E45] font-black text-base sm:text-xl md:text-2xl uppercase tracking-tight text-center">
            <Menu size={22} className="stroke-[3] shrink-0" />
            <span>CÁC KHÓA HỌC TIẾNG TRUNG TẠI GREEN OCEAN</span>
          </div>
          <div className="h-[1.5px] bg-slate-200 flex-1 max-w-[80px] sm:max-w-[200px]" />
        </div>

        {/* Courses Display Grid - Clean Style like Thanh Mai HSK */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-9 sm:gap-y-12">
          {programsData.map((item) => (
            <Link
              key={item.id}
              href={`/khoa-hoc/${item.slug}`}
              className="group block text-center cursor-pointer"
            >
              {/* Poster Image Frame */}
              <div className="w-full aspect-[720/490] rounded-2xl overflow-hidden bg-slate-50 shadow-[0_2px_12px_rgba(0,0,0,0.06)] group-hover:shadow-[0_8px_26px_rgba(27,126,69,0.18)] group-hover:scale-[1.02] transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 font-black text-base sm:text-lg text-[#1B7E45] group-hover:text-[#145A32] uppercase tracking-tight transition-colors">
                {item.title}
              </h3>

              {/* Short description */}
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-sm mx-auto">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
