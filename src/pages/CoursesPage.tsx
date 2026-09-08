import React, { useState } from 'react';
import { useSearch } from 'wouter';
import { Search, BookOpen } from 'lucide-react';
import { courseCategories, coursesData } from '../data/coursesData';
import CourseCard from '../components/Common/CourseCard';

interface CoursesPageProps {
  onOpenLeadModal: (courseTitle?: string) => void;
}

export default function CoursesPage({ onOpenLeadModal }: CoursesPageProps): JSX.Element {
  const searchParams = new URLSearchParams(useSearch());
  const initialCategory = searchParams.get('cat') || 'all';

  const [selectedCat, setSelectedCat] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = coursesData.filter((c) => {
    const matchCat = selectedCat === 'all' || c.category === selectedCat;
    const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        c.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-14 px-4 text-center text-white">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block bg-[#1B7E45]/25 text-[#bbf0d2] border border-[#1B7E45]/40 text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
            CHƯƠNG TRÌNH ĐÀO TẠO
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            Hệ Thống Khóa Học Tiếng Trung Chuẩn Quốc Tế
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Từ sơ cấp đến cao cấp HSK 6, tiếng Trung giao tiếp thực chiến, luyện thi THPT D4 và đào tạo doanh nghiệp FDI.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-10">
        {/* Search & Filter Bar */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm kiếm khóa học (HSK 3, HSK 4, giao tiếp, online...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-[#1B7E45] focus:bg-white outline-none transition-all focus:ring-2 focus:ring-[#1B7E45]/20 text-slate-800"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {courseCategories.map((cat) => (
              <button
                key={cat.id}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCat === cat.id 
                    ? 'bg-[#1B7E45] text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                onClick={() => setSelectedCat(cat.id)}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Course Count Display */}
        <div className="text-sm text-slate-600 mb-6 font-medium">
          Hiển thị <strong className="text-[#1B7E45] font-bold">{filteredCourses.length}</strong> khóa học phù hợp:
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                onOpenConsult={(title) => onOpenLeadModal(title)} 
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center flex flex-col items-center justify-center gap-3">
            <BookOpen size={48} className="text-slate-400" />
            <h3 className="text-lg font-bold text-slate-800">Không tìm thấy khóa học phù hợp</h3>
            <p className="text-sm text-slate-500 max-w-md">Vui lòng thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.</p>
            <button 
              onClick={() => { setSelectedCat('all'); setSearchQuery(''); }} 
              className="mt-2 px-5 py-2.5 rounded-lg border border-[#1B7E45] text-[#1B7E45] font-bold text-xs hover:bg-[#EAF5EE] transition-colors cursor-pointer"
            >
              Xem tất cả khóa học
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
