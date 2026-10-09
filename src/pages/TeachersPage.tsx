import React from 'react';
import { Sparkles, GraduationCap, Award, Users, BookOpen, PhoneCall } from 'lucide-react';
import TeachersSection from '../components/Teachers/TeachersSection';

interface TeachersPageProps {
  onOpenLeadModal: () => void;
}

export default function TeachersPage({ onOpenLeadModal }: TeachersPageProps): JSX.Element {
  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Header */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-14 md:py-16 px-4 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1B7E45]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#86efac] border border-white/15 text-xs font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-xs">
            <Sparkles size={14} className="text-[#F37021]" />
            ĐỘI NGŨ GIẢNG VIÊN
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            ĐỘI NGŨ GIẢNG VIÊN GREEN OCEAN
          </h1>
          <p className="text-base sm:text-lg text-[#fcd34d] font-bold mb-3 tracking-wide">
            "Chuyên môn cao – Giàu tâm huyết – Phương pháp chuẩn mực"
          </p>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Quy tụ các Thạc sĩ, Cử nhân tốt nghiệp từ các trường Đại học danh tiếng tại Việt Nam và Trung Quốc, với từ 5 đến 28 năm kinh nghiệm giảng dạy và thực chiến ngôn ngữ.
          </p>
        </div>
      </div>

      {/* 4 Pillars Highlights */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#EAF5EE] text-[#1B7E45] flex items-center justify-center shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold">Trình độ học vấn</div>
              <div className="text-sm font-black text-[#1E293B]">100% ĐH & Thạc sĩ uy tín</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F37021] flex items-center justify-center shrink-0">
              <Award size={24} />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold">Kinh nghiệm thực chiến</div>
              <div className="text-sm font-black text-[#1E293B]">Từ 5 đến 28 năm</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#1B7E45] flex items-center justify-center shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold">Phương châm đào tạo</div>
              <div className="text-sm font-black text-[#1E293B]">Thực chất – Ứng dụng</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-md flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <Users size={24} />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-semibold">Học viên tin tưởng</div>
              <div className="text-sm font-black text-[#1E293B]">Hơn 5.000+ học viên</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Teachers Showcase (Arched Frame Cards + Carousel / Grid + Modal Detail) */}
      <div className="pt-8">
        <TeachersSection onOpenLeadModal={onOpenLeadModal} />
      </div>

      {/* Action Callout */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-[#135830] text-white p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2.5 relative z-10">
            <span className="px-3 py-1 rounded-md bg-[#F37021] text-white font-extrabold text-[11px] uppercase tracking-wider">
              Đồng Hành Cùng Chuyên Gia
            </span>
            <h3 className="text-xl md:text-2xl font-black text-white">
              Đăng Ký Xếp Lớp & Tư Vấn Cùng Giảng Viên Green Ocean
            </h3>
            <p className="text-xs md:text-sm text-emerald-100 max-w-xl leading-relaxed">
              Trải nghiệm buổi đánh giá năng lực đầu vào miễn phí để được các thầy cô tư vấn lộ trình học tối ưu và phù hợp nhất với mục tiêu của bạn.
            </p>
          </div>
          <button 
            type="button"
            onClick={onOpenLeadModal} 
            className="inline-flex items-center gap-2 bg-[#F37021] hover:bg-[#d95e14] text-white font-black text-sm px-7 py-4 rounded-2xl shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0"
          >
            <PhoneCall size={18} /> Nhận Tư Vấn Miễn Phí
          </button>
        </div>
      </div>
    </div>
  );
}
