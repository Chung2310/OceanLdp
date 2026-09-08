import React from 'react';
import { Award, GraduationCap, Star, PhoneCall } from 'lucide-react';
import { teachersData } from '../data/teachersData';

interface TeachersPageProps {
  onOpenLeadModal: () => void;
}

export default function TeachersPage({ onOpenLeadModal }: TeachersPageProps): JSX.Element {
  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-14 px-4 text-center text-white">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block bg-[#1B7E45]/25 text-[#bbf0d2] border border-[#1B7E45]/40 text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
            ĐỘI NGŨ GIẢNG VIÊN
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            100% Giảng Viên Trình Độ Thạc Sĩ – Tiến Sĩ
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Đội ngũ chuyên gia học thuật đầu ngành tốt nghiệp các trường Đại học danh tiếng tại Việt Nam và Trung Quốc.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="space-y-8 mb-16">
          {teachersData.map((t) => (
            <div 
              key={t.id} 
              className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden mb-4 shadow-md bg-slate-100">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold text-amber-700">
                  <Star size={14} fill="#f59e0b" color="#f59e0b" />
                  <span>{t.rating}.0 / 5.0 (Đánh giá học viên)</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <h2 className="text-2xl font-black text-[#1E293B] tracking-tight">{t.name}</h2>
                    <div className="text-sm font-semibold text-[#1B7E45]">{t.role}</div>
                  </div>
                  <span className="bg-[#EAF5EE] text-[#1B7E45] border border-[#1B7E45]/30 text-xs font-black px-3.5 py-1 rounded-full">
                    {t.degree}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl">
                    <GraduationCap size={16} className="text-[#1B7E45] flex-shrink-0" />
                    <span><strong>Tốt nghiệp:</strong> {t.university}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl">
                    <Award size={16} className="text-[#F37021] flex-shrink-0" />
                    <span><strong>Chứng chỉ:</strong> {t.certificates}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{t.bio}</p>

                <div className="bg-[#EAF5EE] p-4 rounded-xl border border-[#1B7E45]/20 text-xs italic text-[#1B7E45] font-medium">
                  "{t.quote}"
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-bold text-slate-500">Các khóa phụ trách:</span>
                  {t.courses.map((c, ci) => (
                    <span key={ci} className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-lg">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consulting Callout */}
        <div className="bg-[#1E293B] text-white p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-black text-white">Muốn học thử cùng Giảng viên Thạc sĩ / Tiến sĩ?</h3>
            <p className="text-xs md:text-sm text-slate-300">Đăng ký tham gia ngay buổi học thử miễn phí để trải nghiệm phương pháp Mcontask độc quyền.</p>
          </div>
          <button 
            onClick={onOpenLeadModal} 
            className="inline-flex items-center gap-2 bg-[#F37021] hover:bg-[#d95e14] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            <PhoneCall size={18} /> Đăng Ký Học Thử Miễn Phí
          </button>
        </div>
      </div>
    </div>
  );
}
