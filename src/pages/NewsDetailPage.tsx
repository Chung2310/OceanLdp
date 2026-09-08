import React from 'react';
import { useRoute, Link } from 'wouter';
import { Calendar, User, Eye, ArrowLeft, Share2, Facebook } from 'lucide-react';
import { newsData } from '../data/newsData';

export default function NewsDetailPage(): JSX.Element {
  const [, params] = useRoute<{ slug: string }>('/tin-tuc/:slug');
  const slug = params?.slug || '';
  const post = newsData.find((n) => n.slug === slug) || newsData[0];
  const relatedPosts = newsData.filter((n) => n.id !== post.id);

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen py-10">
      <div className="max-w-[1280px] mx-auto px-4">
        <Link href="/tin-tuc" className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#1B7E45] text-xs font-semibold mb-6 transition-colors">
          <ArrowLeft size={16} /> Quay lại danh mục tin tức
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          {/* Main Article Content */}
          <article className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <span className="inline-block bg-[#1B7E45] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              {post.categoryName}
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-[#1E293B] mb-4 leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400 font-medium pb-5 mb-6 border-b border-slate-100">
              <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#1B7E45]" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><User size={14} className="text-[#F37021]" /> Tác giả: {post.author}</span>
              <span className="flex items-center gap-1.5"><Eye size={14} /> {post.views} lượt xem</span>
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 bg-slate-100 shadow-sm">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div 
              className="prose max-w-none text-sm md:text-base text-slate-700 leading-relaxed space-y-4 mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social Share Box */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-600">
                <Share2 size={16} className="text-[#1B7E45]" /> Chia sẻ bài viết:
              </span>
              <div className="flex gap-2">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 bg-[#1877F2] text-white text-xs font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Facebook size={14} /> Facebook
                </a>
                <a 
                  href="https://zalo.me" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1.5 bg-[#0068FF] text-white text-xs font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Zalo
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar: Related Posts */}
          <aside className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-extrabold text-[#1E293B] pb-3 border-b border-slate-100">
              Bài Viết Liên Quan
            </h3>
            <div className="space-y-4">
              {relatedPosts.map((r) => (
                <div key={r.id} className="flex gap-3 items-start group">
                  <img src={r.image} alt={r.title} className="w-20 h-16 object-cover rounded-xl flex-shrink-0 bg-slate-100" />
                  <div>
                    <span className="text-[11px] text-slate-400 block mb-1">{r.date}</span>
                    <h4 className="text-xs font-bold text-[#1E293B] group-hover:text-[#1B7E45] transition-colors line-clamp-2 leading-snug">
                      <Link href={`/tin-tuc/${r.slug}`}>{r.title}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
