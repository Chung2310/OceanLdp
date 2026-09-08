import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { courseCategories, coursesData } from '../../data/coursesData';
import CourseCard from '../Common/CourseCard';

interface FeaturedCoursesProps {
  onOpenLeadModal: (courseTitle?: string) => void;
}

export default function FeaturedCourses({ onOpenLeadModal }: FeaturedCoursesProps): JSX.Element {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const filteredCourses = selectedCat === 'all' 
    ? coursesData.slice(0, 6) 
    : coursesData.filter(c => c.category === selectedCat);

  return (
    <section className="w-full bg-[#f8fafc] py-16" aria-label="Khóa học nổi bật">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            CHƯƠNG TRÌNH ĐÀO TẠO
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tight">
            Khóa Học Tiếng Trung <span className="text-[#1B7E45]">Chuẩn New HSK 3 Cấp 9 Bậc</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-2">
            Lộ trình học bài bản, tinh gọn từ cơ bản đến nâng cao, đáp ứng toàn diện mọi mục tiêu: du học, giao tiếp công sở và luyện thi chứng chỉ quốc tế.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {courseCategories.slice(0, 6).map((cat) => (
            <button
              key={cat.id}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCat === cat.id 
                  ? 'bg-[#1B7E45] text-white shadow-md' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
              onClick={() => setSelectedCat(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onOpenConsult={(title) => onOpenLeadModal(title)} 
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/khoa-hoc" 
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#1B7E45] text-[#1B7E45] hover:bg-[#EAF5EE] font-extrabold text-xs tracking-wide transition-colors cursor-pointer"
          >
            Xem tất cả 10+ khóa học tiếng Trung <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
