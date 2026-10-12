import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'wouter';
import { useCourses } from '../../services/contentService';

interface FeaturedCoursesProps {
  onOpenLeadModal?: (courseTitle?: string) => void;
}

export default function FeaturedCourses({ onOpenLeadModal }: FeaturedCoursesProps): JSX.Element {
  const programsData = useCourses().slice(0, 6).map(course => ({
    id: course.id,
    title: course.title,
    slug: course.slug,
    desc: course.shortDesc,
    image: course.thumbnail || course.image
  }));
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
