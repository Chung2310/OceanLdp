import React, { useState } from 'react';
import { Link } from 'wouter';
import { Calendar, Eye, ArrowRight } from 'lucide-react';
import { newsCategories, newsData } from '../data/newsData';

export default function NewsPage(): JSX.Element {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const filteredNews = selectedCat === 'all' 
    ? newsData 
    : newsData.filter(n => n.category === selectedCat);

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-14 px-4 text-center text-white">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block bg-[#1B7E45]/25 text-[#bbf0d2] border border-[#1B7E45]/40 text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
            TIN TỨC & BÁO CHÍ
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            Cẩm Nang Học Tiếng Trung & Tin Tức Sự Kiện
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Chia sẻ kinh nghiệm luyện thi New HSK, bí quyết săn học bổng CSC, CIS và các sự kiện học thuật Viện Bác Nhã.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-10">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {newsCategories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCat === cat.id 
                  ? 'bg-[#1B7E45] text-white shadow-sm' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
              onClick={() => setSelectedCat(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  loading="lazy" 
                />
                <span className="absolute top-3 right-3 bg-[#1B7E45] text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
                  {post.categoryName}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[11px] text-slate-400 font-medium mb-2.5">
                  <span className="flex items-center gap-1"><Calendar size={13} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Eye size={13} /> {post.views} lượt xem</span>
                </div>

                <h3 className="text-base font-bold text-[#1E293B] mb-2 line-clamp-2 leading-snug group-hover:text-[#1B7E45] transition-colors">
                  <Link href={`/tin-tuc/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 mb-4 line-clamp-3 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-3 border-t border-slate-100 mt-auto">
                  <Link 
                    href={`/tin-tuc/${post.slug}`} 
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1B7E45] hover:text-[#156637] transition-colors"
                  >
                    Đọc tiếp <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
