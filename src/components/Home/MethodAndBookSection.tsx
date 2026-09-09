import React from 'react';
import { Link } from 'wouter';
import { Sparkles } from 'lucide-react';
import { msutongBooks } from '../../data/coursesData';
import { ResourceItem } from '../../types';

interface MethodAndBookSectionProps {
  onOpenDownloadModal: (res: ResourceItem | { title: string; format: string; size: string; downloads: string; image: string }) => void;
}

export default function MethodAndBookSection({ onOpenDownloadModal }: MethodAndBookSectionProps): JSX.Element {
  const formatPrice = (num: number) => new Intl.NumberFormat('vi-VN').format(num) + ' đ';

  return (
    <section className="w-full bg-white py-16" aria-label="Phương pháp và Giáo trình">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Top: Method Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center mb-16">
          <div className="space-y-4">
            <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
              PHƯƠNG PHÁP ĐÀO TẠO ĐỘC QUYỀN
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tight">
              Phương Pháp Tích Hợp <span className="text-[#1B7E45]">MCONTASK 3.0</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Khác với phương pháp truyền thống chỉ chú trọng ngữ pháp lý thuyết, phương pháp Mcontask tại Green Ocean tập trung xây dựng năng lực ngôn ngữ toàn diện thông qua 3 trụ cột:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#1B7E45] font-black text-sm flex items-center justify-center flex-shrink-0">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E293B] mb-1">Nhúng Ngôn Ngữ Thực Tế (Multi-context)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Tạo môi trường 90% tiếng Trung trong giờ học, giúp học viên rèn phản xạ tư duy trực diện không qua dịch nhẩm.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#1B7E45] font-black text-sm flex items-center justify-center flex-shrink-0">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E293B] mb-1">Học Qua Nhiệm Vụ (Task-based Learning)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Mỗi bài học được thiết kế như một nhiệm vụ thực tế: đàm phán mua bán, phỏng vấn, đặt tiệc, thuyết trình sản phẩm.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#1B7E45] font-black text-sm flex items-center justify-center flex-shrink-0">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E293B] mb-1">Tích Hợp 4 Kỹ Năng + Dịch Thuật</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Nghe – Nói – Đọc – Viết được rèn luyện đồng thời, bổ sung kỹ năng dịch xuôi/ngược đáp ứng chuẩn New HSK mới.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
                alt="Lớp học tiếng Trung tích hợp" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-[#F37021] flex items-center justify-center">
                <Sparkles size={22} />
              </div>
              <div>
                <div className="text-sm font-black text-[#1E293B]">100% Cam Kết Đầu Ra</div>
                <div className="text-xs text-slate-500">Đạt chuẩn HSK 3 - 6 quốc tế</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100 my-16"></div>

        {/* Bottom: Msutong Books Showcase */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
                GIÁO TRÌNH BẢN QUYỀN
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tight">
                Bộ Sách Giáo Trình <span className="text-[#1B7E45]">Hán Ngữ Msutong</span>
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Xuất bản bởi NXB Đại Học Ngôn Ngữ Bắc Kinh – Đơn vị uy tín số 1 thế giới về giáo dục Hán ngữ.
              </p>
            </div>
            <Link href="/thu-vien-tai-lieu" className="text-xs font-bold text-[#1B7E45] hover:text-[#156637] inline-flex items-center gap-1 transition-colors">
              Khám phá tủ sách &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {msutongBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-slate-50 flex items-center justify-center p-3">
                  <img src={book.image} alt={book.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-2 left-2 bg-[#F37021] text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">
                    {book.category}
                  </span>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide mb-1">{book.publisher}</div>
                  <h4 className="text-sm font-bold text-[#1E293B] mb-1.5 line-clamp-2 leading-tight group-hover:text-[#1B7E45] transition-colors">{book.title}</h4>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed flex-grow">{book.desc}</p>
                  
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-[#F37021]">{formatPrice(book.salePrice)}</span>
                      <span className="text-[11px] text-slate-400 line-through">{formatPrice(book.price)}</span>
                    </div>
                    <button 
                      onClick={() => onOpenDownloadModal({ title: book.title, format: 'PDF Đọc thử', size: '30 MB', downloads: '25.000+', image: book.image })}
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
    </section>
  );
}
