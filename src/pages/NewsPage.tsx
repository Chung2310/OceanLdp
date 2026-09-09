import React, { useState } from 'react';
import { Link } from 'wouter';
import { ChevronRight, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { newsCategories, newsData } from '../data/newsData';

export default function NewsPage(): JSX.Element {
  const [selectedCat, setSelectedCat] = useState<string>('bac-nha');

  const currentCategory = newsCategories.find(c => c.id === selectedCat) || newsCategories[0];

  const filteredNews = selectedCat === 'all' 
    ? newsData 
    : newsData.filter(n => n.category === selectedCat);

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen font-sans pb-16">
      
      {/* Breadcrumbs Bar */}
      <div className="w-full bg-white border-b border-slate-200 py-3 px-4 shadow-xs">
        <div className="max-w-[880px] mx-auto flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#1B7E45] transition-colors">Trang Chủ</Link>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <span className="text-slate-800 font-semibold">Tin Tức & Học Thuật</span>
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
          {newsCategories.map((cat) => (
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

        {/* 1. Category Header Banner (Screenshot 1) */}
        <div className="text-center mb-10 pb-6 border-b border-slate-200">
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 uppercase tracking-wide mb-3">
            DANH MỤC: {currentCategory.name}
          </h1>
          <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed max-w-2xl mx-auto text-center sm:text-justify">
            {currentCategory.description}
          </p>
        </div>

        {/* 2. News Posts List (Exact layout matching Screenshot 1) */}
        <div className="space-y-6 sm:space-y-8">
          {filteredNews.map((post) => {
            if (post.layoutType === 'text-only') {
              // Layout B: Clean Text-Only Editorial Post (Screenshot 1 items 2 & 4)
              return (
                <article 
                  key={post.id} 
                  className="py-5 px-4 sm:px-6 bg-white rounded-lg border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all duration-200 group text-center sm:text-left"
                >
                  <Link href={`/tin-tuc/${post.slug}`} className="block">
                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-800 group-hover:text-[#1B7E45] transition-colors leading-snug mb-1.5">
                      {post.title}
                    </h3>
                  </Link>
                  <div className="text-[11px] text-slate-400 font-medium mb-2">
                    {post.date}
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>
                </article>
              );
            }

            // Layout A: Standard Post with Thumbnail & Red Date Box (Screenshot 1 items 1, 3, 5, 6)
            return (
              <article 
                key={post.id} 
                className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 p-4 sm:p-5 bg-white rounded-lg border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all duration-200 group"
              >
                {/* Left Thumbnail with Red Date Badge */}
                <Link 
                  href={`/tin-tuc/${post.slug}`} 
                  className="relative sm:w-[220px] md:w-[240px] aspect-[16/9] rounded-md overflow-hidden bg-slate-100 shrink-0 block"
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Distinctive Red/Orange Date Box (Screenshot 1) */}
                  <div className="absolute top-2 left-2 bg-white/95 border border-red-500 rounded-[3px] px-1.5 py-0.5 text-center shadow-xs backdrop-blur-xs min-w-[34px]">
                    <div className="text-red-600 font-black text-xs sm:text-[13px] leading-tight">
                      {post.day || '08'}
                    </div>
                    <div className="text-[9.5px] font-extrabold text-red-600 border-t border-red-200 mt-0.5 pt-0.5 uppercase leading-tight">
                      {post.month || 'Th10'}
                    </div>
                  </div>
                </Link>

                {/* Right Content */}
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <Link href={`/tin-tuc/${post.slug}`} className="block mb-2">
                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-[#1B7E45] transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-[13px] text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-auto pt-2 border-t border-slate-100">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar size={12} className="text-[#1B7E45]" /> {post.date}
                    </span>
                    <Link 
                      href={`/tin-tuc/${post.slug}`}
                      className="text-[#1B7E45] font-bold hover:underline inline-flex items-center gap-1"
                    >
                      Đọc tiếp <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State fallback */}
        {filteredNews.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-slate-200 p-8">
            <BookOpen size={40} className="text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700 mb-1">Chưa có bài viết trong danh mục này</h3>
            <p className="text-xs text-slate-500 mb-4">Mời bạn chọn danh mục khác để xem tin tức</p>
            <button 
              onClick={() => setSelectedCat('all')}
              className="px-4 py-2 bg-[#1B7E45] text-white text-xs font-bold rounded-md hover:bg-[#156637] transition-colors"
            >
              Xem tất cả bài viết
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
