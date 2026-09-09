import React from 'react';
import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react';
import roadmapImg from '../../asset/img/roadmap/roadmap.png';

interface HSKRoadmapSectionProps {
  onOpenLeadModal: () => void;
}

export default function HSKRoadmapSection({ onOpenLeadModal }: HSKRoadmapSectionProps): JSX.Element {
  return (
    <section className="w-full bg-[#f8fafc] py-6 sm:py-8 md:py-10 border-b border-slate-100" aria-label="Lộ trình New HSK 3.0">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Responsive Roadmap Banner Card */}
        <div className="w-full bg-white rounded-2xl md:rounded-3xl shadow-sm border border-slate-200/90 overflow-hidden transition-all duration-300">
          
          {/* Main Roadmap Image */}
          <div className="w-full bg-slate-50">
            <img 
              src={roadmapImg} 
              alt="Lộ trình tổng quan chinh phục HSK 3.0 Green Ocean" 
              className="w-full h-auto block object-cover"
              loading="lazy"
            />
          </div>

          {/* Bottom Action Strip */}
          <div className="p-4 sm:p-5 md:px-6 md:py-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-semibold">
                <CheckCircle size={16} className="text-[#1B7E45] shrink-0" /> Kiểm tra đầu vào miễn phí
              </span>
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-semibold">
                <CheckCircle size={16} className="text-[#1B7E45] shrink-0" /> Đảm bảo chuẩn đầu ra
              </span>
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-semibold">
                <CheckCircle size={16} className="text-[#1B7E45] shrink-0" /> Hỗ trợ hồ sơ thi HSK và HSKK
              </span>
            </div>

            <button 
              type="button"
              onClick={onOpenLeadModal}
              className="w-full sm:w-auto bg-[#1B7E45] hover:bg-[#145A32] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <BookOpen size={16} /> Đăng Ký Tư Vấn Lộ Trình <ArrowRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
