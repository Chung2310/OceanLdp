import React from 'react';
import { Link } from 'wouter';
import { Clock, Users, Star, ArrowRight, ShieldCheck } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
  onOpenConsult: (courseTitle: string) => void;
}

export default function CourseCard({ course, onOpenConsult }: CourseCardProps): JSX.Element {
  const formatPrice = (num: number) => new Intl.NumberFormat('vi-VN').format(num) + ' đ';

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group">
      {/* Thumbnail */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-900">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          loading="lazy" 
        />
        {course.badge && (
          <span className="absolute top-3 left-3 bg-[#F37021] text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
            {course.badge}
          </span>
        )}
        <div className="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded">
          {course.format.split('&')[0]}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
          <div className="flex items-center gap-1">
            <Star size={13} className="text-amber-500 fill-amber-500" />
            <span className="font-bold text-slate-800">{course.rating}</span>
            <span className="text-slate-400">({course.reviewsCount})</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-slate-500">
            <Users size={13} /> {course.studentsCount} học viên
          </div>
        </div>

        <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#1B7E45] transition-colors mb-2 line-clamp-2 leading-snug min-h-[44px]">
          <Link href={`/khoa-hoc/${course.slug}`}>
            {course.title}
          </Link>
        </h3>

        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {course.shortDesc}
        </p>

        <div className="flex items-center gap-3 py-2.5 border-y border-dashed border-slate-200 text-xs text-slate-600 mb-4 font-semibold">
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-[#1B7E45]" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-[#1B7E45]" />
            <span>Cam kết đầu ra</span>
          </div>
        </div>

        {/* Price & Actions */}
        <div className="flex items-center justify-between mt-auto pt-1">
          <div className="flex flex-col">
            <div className="text-lg font-black text-[#F37021] leading-none">
              {formatPrice(course.salePrice)}
              {course.priceUnit && <span className="text-xs font-normal text-slate-500">/{course.priceUnit}</span>}
            </div>
            {course.originalPrice && course.originalPrice > course.salePrice && (
              <div className="text-[11px] text-slate-400 line-through mt-0.5">
                {formatPrice(course.originalPrice)}
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <Link 
              href={`/khoa-hoc/${course.slug}`} 
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-[#1B7E45] text-slate-700 hover:text-[#1B7E45] text-xs font-bold transition-colors cursor-pointer bg-slate-50"
            >
              Chi tiết
            </Link>
            <button 
              onClick={() => onOpenConsult(course.title)} 
              className="inline-flex items-center gap-1 bg-[#1B7E45] hover:bg-[#156637] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer shadow-sm active:scale-95"
            >
              Tư vấn <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
