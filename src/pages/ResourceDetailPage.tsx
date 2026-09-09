import React, { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { Calendar, User, Eye, ArrowLeft, Share2, Facebook, ChevronRight, Sparkles, BookOpen, Download } from 'lucide-react';
import { resourcesData } from '../data/resourcesData';
import scholarshipBannerImg from '../asset/branches/banner_scholarship.png';
import ConsultationForm from '../components/Common/ConsultationForm';

export default function ResourceDetailPage(): JSX.Element {
  const [, params1] = useRoute<{ slug: string }>('/thu-vien-tai-lieu/:slug');
  const [, params2] = useRoute<{ slug: string }>('/thu-vien/:slug');
  const slug = params1?.slug || params2?.slug || '';

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const item = resourcesData.find((r) => r.slug === slug || r.id === slug) || resourcesData[0];
  const relatedItems = resourcesData.filter((r) => r.id !== item.id).slice(0, 4);

  const scrollToRegistration = () => {
    const el = document.getElementById('form-tu-van-thu-vien');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen font-sans pb-16">
      
      {/* 1. Breadcrumbs Bar */}
      <div className="w-full bg-white border-b border-slate-200 py-3 px-4 shadow-xs">
        <div className="max-w-[880px] mx-auto flex items-center gap-1.5 text-xs text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#1B7E45] transition-colors">Trang Chủ</Link>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <Link href="/thu-vien-tai-lieu" className="hover:text-[#1B7E45] transition-colors">Thư Viện</Link>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <span className="text-[#1B7E45] font-semibold">{item.categoryName || 'Tài Liệu'}</span>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <span className="text-slate-800 font-semibold truncate max-w-[280px] sm:max-w-md">{item.title}</span>
        </div>
      </div>

      {/* Main Editorial Container */}
      <article className="max-w-[880px] mx-auto px-4 py-8 sm:py-12">
        
        {/* Back Link */}
        <Link 
          href="/thu-vien-tai-lieu" 
          className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#1B7E45] text-xs font-semibold mb-5 transition-colors"
        >
          <ArrowLeft size={14} /> Quay lại danh mục thư viện
        </Link>

        {/* Category Pill & Title */}
        <div className="mb-4">
          <span className="inline-block bg-[#1B7E45] text-white text-[11px] font-extrabold px-3 py-0.5 rounded-md uppercase tracking-wider mb-3">
            {item.categoryName || 'Thư Viện Tiếng Trung'}
          </span>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">
            {item.title}
          </h1>
        </div>

        {/* Post Metadata Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium pb-5 mb-6 border-b border-slate-200">
          <span className="flex items-center gap-1.5"><Calendar size={13} className="text-[#1B7E45]" /> {item.date || '15/08/2025'}</span>
          <span className="flex items-center gap-1.5"><User size={13} className="text-[#F37021]" /> Tác giả: {item.author || 'Ban Chuyên Môn Green Ocean'}</span>
          {item.views && (
            <span className="flex items-center gap-1.5"><Eye size={13} /> {item.views} lượt xem</span>
          )}
          {item.downloads && (
            <span className="flex items-center gap-1.5 font-bold text-emerald-700">
              <Download size={13} /> {item.downloads} lượt tải
            </span>
          )}
        </div>

        {/* 2. Top Promotional Scholarship Banner (Screenshots 2 & 4) */}
        <div className="mb-8 rounded-lg overflow-hidden border border-amber-200/80 shadow-md bg-gradient-to-br from-amber-50 to-orange-50 relative group">
          <div className="relative">
            <img 
              src={scholarshipBannerImg} 
              alt="Học bổng ưu đãi đặc biệt tại Green Ocean" 
              className="w-full h-auto object-cover block"
            />
            {/* Clickable Action Button */}
            <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2">
              <button
                onClick={scrollToRegistration}
                className="bg-gradient-to-r from-red-600 to-[#c82333] hover:from-red-700 hover:to-red-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-9 py-2.5 sm:py-3 rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 cursor-pointer border border-white/30"
              >
                <Sparkles size={16} className="text-amber-300 animate-pulse" /> BẮT ĐẦU NGAY
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[#135830] to-[#1B7E45] p-3 sm:p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#F37021] flex items-center justify-center font-black text-sm shrink-0">
                🎁
              </span>
              <div className="text-xs sm:text-sm">
                <span className="font-extrabold text-amber-300">Tặng Học Bổng Khủng Lên Đến 1.500.000đ</span> khi đăng ký khóa học tiếng Trung trong tháng này!
              </div>
            </div>
            <button
              onClick={scrollToRegistration}
              className="px-4 py-1.5 rounded-md bg-[#F37021] hover:bg-[#d95d13] text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-xs cursor-pointer"
            >
              Nhận Ưu Đãi
            </button>
          </div>
        </div>

        {/* 3. Main Editorial Content Body (Tables + Subsections matching Screenshots 2, 3, 4) */}
        {item.content ? (
          <div 
            className="prose max-w-none text-slate-700 text-sm sm:text-[15px] leading-relaxed space-y-4 mb-10 text-justify"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        ) : (
          <div className="text-slate-700 text-sm sm:text-[15px] leading-relaxed space-y-4 mb-10">
            <p>{item.desc}</p>
          </div>
        )}

        {/* 4. Social Share Box */}
        <div className="p-4 bg-white rounded-lg border border-slate-200 flex flex-wrap items-center justify-between gap-4 mb-12 shadow-2xs">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-700">
            <Share2 size={16} className="text-[#1B7E45]" /> Chia sẻ tài liệu:
          </span>
          <div className="flex items-center gap-2">
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 bg-[#1877F2] text-white text-xs font-bold px-3.5 py-1.5 rounded-md hover:opacity-90 transition-opacity"
            >
              <Facebook size={14} /> Facebook
            </a>
            <a 
              href="https://zalo.me" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 bg-[#0068FF] text-white text-xs font-bold px-3.5 py-1.5 rounded-md hover:opacity-90 transition-opacity"
            >
              Zalo
            </a>
          </div>
        </div>

        {/* 5. Embedded Consultation Form Section */}
        <div id="form-tu-van-thu-vien" className="scroll-mt-20 pt-2 mb-14">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3.5 py-1 rounded-md uppercase tracking-wider mb-2">
              ĐĂNG KÝ TƯ VẤN LỘ TRÌNH
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Nhận Trọn Bộ Tài Liệu & Lộ Trình Học Chuẩn New HSK 3.0
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Chuyên viên học vụ Green Ocean sẽ liên hệ gửi tài liệu PDF bản mềm và tư vấn khóa học phù hợp trong 15 phút.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <ConsultationForm 
              title="Đăng Ký Nhận Giáo Trình & Tư Vấn Lộ Trình"
              subtitle="Tặng ngay học bổng 1.500.000đ khi đăng ký học tại Green Ocean"
              source={`library_detail_${item.id}`}
            />
          </div>
        </div>

        {/* 6. Related Library Items (with Date Badges) */}
        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
            <BookOpen size={18} className="text-[#1B7E45]" />
            Tài Liệu Liên Quan Cùng Chuyên Mục
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedItems.map((r) => (
              <Link 
                key={r.id} 
                href={`/thu-vien-tai-lieu/${r.slug || r.id}`}
                className="flex items-start gap-3.5 p-3.5 bg-white rounded-lg border border-slate-200 hover:border-[#1B7E45] hover:shadow-xs transition-all group block"
              >
                <div className="relative w-24 h-18 rounded-md overflow-hidden bg-slate-100 shrink-0">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute top-1 left-1 bg-white/90 border border-red-500 rounded-[2px] px-1 py-0.2 text-center text-[9px] leading-tight font-black text-red-600">
                    {r.day || '15'}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10.5px] text-slate-400 block mb-1">{r.date || '15/08/2025'}</span>
                  <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-[#1B7E45] transition-colors line-clamp-2 leading-snug">
                    {r.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
}
