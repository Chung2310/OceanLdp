import React from 'react';
import { Link } from 'wouter';
import { Calendar, Eye, ArrowRight } from 'lucide-react';
import { newsData } from '../../data/newsData';

export default function LatestNewsSection(): JSX.Element {
  return (
    <section className="w-full bg-[#f8fafc] py-16" aria-label="Tin tức & sự kiện">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            TIN TỨC & SỰ KIỆN
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tight">
            Tin Tức & Cẩm Nang <span className="text-[#1B7E45]">Hán Ngữ Mới Nhất</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-2">
            Cập nhật những chuyển động mới nhất về kỳ thi New HSK, kinh nghiệm săn học bổng và hoạt động học thuật Viện Bác Nhã.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.slice(0, 3).map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  loading="lazy" 
                />
                <span className="absolute top-3 left-3 bg-[#1B7E45] text-white text-[11px] font-bold px-2.5 py-0.5 rounded shadow-sm">
                  {post.categoryName}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-2.5">
                  <span className="flex items-center gap-1"><Calendar size={13} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Eye size={13} /> {post.views} lượt xem</span>
                </div>

                <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#1B7E45] transition-colors mb-2 line-clamp-2 leading-snug min-h-[44px]">
                  <Link href={`/tin-tuc/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-3 border-t border-slate-100">
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

        <div className="text-center mt-10">
          <Link 
            href="/tin-tuc" 
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#1B7E45] text-[#1B7E45] hover:bg-[#EAF5EE] font-extrabold text-xs tracking-wide transition-colors cursor-pointer"
          >
            Xem tất cả bài viết cẩm nang &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
