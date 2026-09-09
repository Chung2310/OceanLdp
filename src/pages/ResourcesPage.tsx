import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronRight, Calendar, ArrowRight, BookOpen, Download, Eye } from 'lucide-react';
import { resourceCategories, resourcesData } from '../data/resourcesData';

export default function ResourcesPage(): JSX.Element {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [location] = useLocation();

  // Check URL query param if any (e.g. ?cat=tu-vung)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const catParam = urlParams.get('cat');
      if (catParam && resourceCategories.some(c => c.id === catParam)) {
        setSelectedCat(catParam);
      }
    }
  }, [location]);

  const currentCategory = resourceCategories.find(c => c.id === selectedCat) || resourceCategories[0];

  const filteredResources = selectedCat === 'all' 
    ? resourcesData 
    : resourcesData.filter(r => r.category === selectedCat);

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen font-sans pb-16">
      
      {/* 1. Breadcrumbs Bar */}
      <div className="w-full bg-white border-b border-slate-200 py-3 px-4 shadow-xs">
        <div className="max-w-[880px] mx-auto flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#1B7E45] transition-colors">Trang Chủ</Link>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <span className="text-slate-800 font-semibold">Thư Viện Tài Liệu</span>
          {selectedCat !== 'all' && (
            <>
              <ChevronRight size={13} className="text-slate-400 shrink-0" />
              <span className="text-[#1B7E45] font-semibold">{currentCategory.name}</span>
            </>
          )}
        </div>
      </div>

      {/* Main Editorial Container */}
      <div className="max-w-[880px] mx-auto px-4 py-8 sm:py-12">
        
        {/* Category Pills Navigation */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {resourceCategories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                selectedCat === cat.id 
                  ? 'bg-[#1B7E45] text-white shadow-xs' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
              onClick={() => setSelectedCat(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 2. Category Header Banner (Matching Screenshot 1) */}
        <div className="text-center mb-10 pb-6 border-b border-slate-200">
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 uppercase tracking-wide mb-3">
            DANH MỤC: {selectedCat === 'all' ? 'THƯ VIỆN' : currentCategory.name}
          </h1>
          <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed max-w-2xl mx-auto text-center sm:text-justify">
            {currentCategory.description}
          </p>
        </div>

        {/* 3. Library Posts List (Exact layout with red date badge matching Screenshot 1) */}
        <div className="space-y-6 sm:space-y-8">
          {filteredResources.map((item) => (
            <article 
              key={item.id} 
              className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 p-4 sm:p-5 bg-white rounded-lg border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all duration-200 group"
            >
              {/* Left Thumbnail with Red Date Box */}
              <Link 
                href={`/thu-vien-tai-lieu/${item.slug || item.id}`} 
                className="relative sm:w-[240px] md:w-[260px] aspect-[16/9] rounded-md overflow-hidden bg-slate-100 shrink-0 block"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Distinctive Red/Orange Date Box (Screenshot 1) */}
                <div className="absolute top-2 left-2 bg-white/95 border border-red-500 rounded-[3px] px-1.5 py-0.5 text-center shadow-xs backdrop-blur-xs min-w-[34px]">
                  <div className="text-red-600 font-black text-xs sm:text-[13px] leading-tight">
                    {item.day || '15'}
                  </div>
                  <div className="text-[9.5px] font-extrabold text-red-600 border-t border-red-200 mt-0.5 pt-0.5 uppercase leading-tight">
                    {item.month || 'Th8'}
                  </div>
                </div>
              </Link>

              {/* Right Content */}
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <Link href={`/thu-vien-tai-lieu/${item.slug || item.id}`} className="block mb-2">
                  <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-[#1B7E45] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-[13px] text-slate-600 line-clamp-2 leading-relaxed mb-3">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between text-[11px] text-slate-400 mt-auto pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar size={12} className="text-[#1B7E45]" /> {item.date || '15/08/2025'}
                    </span>
                    {item.downloads && (
                      <span className="flex items-center gap-1 font-medium text-slate-500">
                        <Download size={12} className="text-[#F37021]" /> {item.downloads} lượt tải
                      </span>
                    )}
                  </div>
                  <Link 
                    href={`/thu-vien-tai-lieu/${item.slug || item.id}`}
                    className="text-[#1B7E45] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Xem chi tiết <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State fallback */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-slate-200 p-8">
            <BookOpen size={40} className="text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700 mb-1">Chưa có tài liệu trong danh mục này</h3>
            <p className="text-xs text-slate-500 mb-4">Mời bạn chọn danh mục khác để tìm kiếm tài liệu học tập</p>
            <button 
              onClick={() => setSelectedCat('all')}
              className="px-4 py-2 bg-[#1B7E45] text-white text-xs font-bold rounded-md hover:bg-[#156637] transition-colors"
            >
              Xem tất cả tài liệu
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
