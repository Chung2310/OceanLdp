import React from 'react';
import { Link } from 'wouter';
import { Clock, Users, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
  onOpenConsult: (courseTitle: string) => void;
}

export default function CourseCard({ course, onOpenConsult }: CourseCardProps): JSX.Element {
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
        {course.classCode && (
          <span className="absolute top-3 left-3 bg-[#1B7E45] text-white text-[11px] font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
            MÃ: {course.classCode}
          </span>
        )}
        <div className="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
          {course.format.includes('Online') ? 'Trực tiếp & Online' : 'Trực tiếp tại cơ sở'}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
          <span className="inline-flex items-center gap-1 font-bold text-[#1B7E45] bg-[#EAF5EE] px-2 py-0.5 rounded text-[11px]">
            <ShieldCheck size={13} /> {course.badge || 'Chuẩn New HSK'}
          </span>
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

        {/* Academic specs (Session duration & Output commitment) */}
        <div className="flex items-center justify-between py-2.5 border-y border-dashed border-slate-200 text-xs text-slate-600 mb-4 font-semibold">
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-[#1B7E45]" />
            <span>{course.totalSessions || course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-700">
            <BookOpen size={13} className="text-[#1B7E45]" />
            <span>Tích hợp 4 kỹ năng</span>
          </div>
        </div>

        {/* Educational CTA Actions (No shopping cart price) */}
        <div className="grid grid-cols-2 gap-2 mt-auto pt-1">
          <Link 
            href={`/khoa-hoc/${course.slug}`} 
            className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-[#1B7E45] text-slate-700 hover:text-[#1B7E45] text-xs font-bold transition-all text-center bg-slate-50 hover:bg-[#EAF5EE]"
          >
            Giới thiệu khóa
          </Link>
          <button 
            onClick={() => onOpenConsult(course.title)} 
            className="w-full py-2.5 inline-flex items-center justify-center gap-1 bg-[#1B7E45] hover:bg-[#156637] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
          >
            Tư vấn <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
