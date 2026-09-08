import React, { useState } from 'react';
import { Search, Download, BookOpen } from 'lucide-react';
import { resourceCategories, resourcesData } from '../data/resourcesData';
import { msutongBooks } from '../data/coursesData';
import { ResourceItem } from '../types';

interface ResourcesPageProps {
  onOpenDownloadModal: (res: ResourceItem | { title: string; format: string; size: string; downloads: string; image: string }) => void;
}

export default function ResourcesPage({ onOpenDownloadModal }: ResourcesPageProps): JSX.Element {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredResources = resourcesData.filter((r) => {
    const matchCat = selectedCat === 'all' || r.category === selectedCat;
    const matchSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        r.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const formatPrice = (num: number) => new Intl.NumberFormat('vi-VN').format(num) + ' đ';

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-14 px-4 text-center text-white">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block bg-[#1B7E45]/25 text-[#bbf0d2] border border-[#1B7E45]/40 text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
            KHO TÀI LIỆU HỌC TẬP
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            Thư Viện Ebook & Đề Thi HSK Miễn Phí
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tổng hợp tài liệu luyện thi New HSK 3 cấp 9 bậc, sổ tay ngữ pháp, 214 bộ thủ pinyin và bản đọc thử giáo trình Msutong độc quyền.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-10">
        {/* Search & Filter Bar */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm tài liệu, đề thi HSK, từ vựng, ngữ pháp..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-10 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-[#1B7E45] focus:bg-white outline-none transition-all focus:ring-2 focus:ring-[#1B7E45]/20 text-slate-800"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {resourceCategories.map((cat) => (
              <button
                key={cat.id}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCat === cat.id 
                    ? 'bg-[#1B7E45] text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                onClick={() => setSelectedCat(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Free Downloads Grid */}
        <div className="flex items-center gap-2 mb-6">
          <BookOpen size={22} className="text-[#1B7E45]" />
          <h2 className="text-xl md:text-2xl font-extrabold text-[#1E293B] tracking-tight">
            Tài Liệu Tải Miễn Phí (Ebook PDF & Audio MP3)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredResources.map((res) => (
            <div 
              key={res.id} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src={res.image} 
                  alt={res.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <span className="absolute top-3 right-3 bg-[#1B7E45] text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
                  {res.format}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="text-xs font-medium text-slate-500 mb-1.5">
                  Biên soạn: <span className="text-[#1B7E45] font-semibold">{res.author}</span>
                </div>
                <h3 className="text-base font-bold text-[#1E293B] mb-2 line-clamp-2 leading-snug group-hover:text-[#1B7E45] transition-colors">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed flex-grow">
                  {res.desc}
                </p>
                
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                  <span className="text-[11px] text-slate-500 font-medium">
                    {res.size} • {res.downloads} tải
                  </span>
                  <button 
                    onClick={() => onOpenDownloadModal(res)}
                    className="inline-flex items-center gap-1.5 bg-[#1B7E45] hover:bg-[#156637] text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    <Download size={14} /> Tải miễn phí
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Msutong Official Books Section */}
        <div className="pt-10 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen size={22} className="text-[#F37021]" />
            <h2 className="text-xl md:text-2xl font-extrabold text-[#1E293B] tracking-tight">
              Bộ Sách Giáo Trình Hán Ngữ Msutong Bản Quyền
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {msutongBooks.map((book) => (
              <div 
                key={book.id} 
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-slate-50 flex items-center justify-center p-3">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                  />
                  <span className="absolute top-2 left-2 bg-[#F37021] text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">
                    {book.category}
                  </span>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">
                    {book.publisher}
                  </div>
                  <h4 className="text-sm font-bold text-[#1E293B] mb-1.5 line-clamp-2 leading-tight group-hover:text-[#1B7E45] transition-colors">
                    {book.title}
                  </h4>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed flex-grow">
                    {book.desc}
                  </p>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-[#F37021]">
                        {formatPrice(book.salePrice)}
                      </span>
                      <span className="text-[11px] text-slate-400 line-through">
                        {formatPrice(book.price)}
                      </span>
                    </div>
                    <button 
                      onClick={() => onOpenDownloadModal({ 
                        title: book.title, 
                        format: 'PDF Đọc thử', 
                        size: '30 MB', 
                        downloads: '25.000+', 
                        image: book.image 
                      })}
                      className="inline-flex items-center bg-[#1B7E45] hover:bg-[#156637] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer shadow-sm"
                    >
                      Đọc thử PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
