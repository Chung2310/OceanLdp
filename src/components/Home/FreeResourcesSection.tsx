import React from 'react';
import { Link } from 'wouter';
import { Download } from 'lucide-react';
import { resourcesData } from '../../data/resourcesData';
import { ResourceItem } from '../../types';

interface FreeResourcesSectionProps {
  onOpenDownloadModal: (res: ResourceItem) => void;
}

export default function FreeResourcesSection({ onOpenDownloadModal }: FreeResourcesSectionProps): JSX.Element {
  return (
    <section className="w-full bg-white py-16" aria-label="Thư viện tài liệu miễn phí">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            THƯ VIỆN HỌC TẬP MIỄN PHÍ
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tight">
            Kho Ebook & Tài Liệu <span className="text-[#1B7E45]">Hán Ngữ Chuẩn Format</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-2">
            Tải ngay trọn bộ đề thi thử New HSK có file nghe MP3, 214 bộ thủ pinyin và sổ tay ngữ pháp biên soạn bởi chuyên gia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourcesData.slice(0, 4).map((res) => (
            <div 
              key={res.id} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src={res.image} 
                  alt={res.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <span className="absolute top-2.5 left-2.5 bg-[#1B7E45] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
                  {res.format}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="text-xs font-bold text-[#F37021] mb-1">🔥 Đã tải: {res.downloads}</div>
                <h3 className="text-sm font-bold text-[#1E293B] group-hover:text-[#1B7E45] transition-colors mb-2 line-clamp-2 leading-snug min-h-[38px]">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                  {res.desc}
                </p>
                
                <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-400 font-medium">{res.size}</span>
                  <button 
                    onClick={() => onOpenDownloadModal(res)}
                    className="inline-flex items-center gap-1 bg-[#1B7E45] hover:bg-[#156637] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer shadow-sm active:scale-95"
                  >
                    <Download size={13} /> Tải miễn phí
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/thu-vien-tai-lieu" 
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#1B7E45] text-[#1B7E45] hover:bg-[#EAF5EE] font-extrabold text-xs tracking-wide transition-colors cursor-pointer"
          >
            Xem toàn bộ 100+ Tài liệu & Sách giáo trình &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
