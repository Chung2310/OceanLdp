import React from 'react';
import { Award, Calendar, PhoneCall } from 'lucide-react';
import { studyAbroadData } from '../data/studyAbroadData';

interface StudyAbroadPageProps {
  onOpenLeadModal: (courseTitle?: string) => void;
}

export default function StudyAbroadPage({ onOpenLeadModal }: StudyAbroadPageProps): JSX.Element {
  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-14 px-4 text-center text-white">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block bg-[#1B7E45]/25 text-[#bbf0d2] border border-[#1B7E45]/40 text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
            DU HỌC & HỌC BỔNG TRUNG QUỐC
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            Săn Học Bổng Toàn Phần Du Học Trung Quốc 2026
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Đồng hành cùng TM Edu – Đơn vị tư vấn học bổng CSC, CIS, Học bổng Tỉnh uy tín với tỷ lệ đỗ 99% vào các trường Đại học Top 1.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="space-y-8">
          {studyAbroadData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-[340px_1fr] items-start group"
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:h-full bg-slate-100 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-[#F37021] text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                  {item.badge}
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-100">
                  <h2 className="text-xl md:text-2xl font-black text-[#1E293B] group-hover:text-[#1B7E45] transition-colors leading-snug">
                    {item.title}
                  </h2>
                  <span className="bg-[#EAF5EE] text-[#1B7E45] border border-[#1B7E45]/30 text-xs font-bold px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.desc}</p>

                <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl flex items-center gap-2 text-xs text-amber-800">
                  <Award size={18} className="text-amber-600 flex-shrink-0" />
                  <span><strong>Trợ cấp sinh hoạt:</strong> {item.stipend}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-2">
                    <h4 className="font-bold text-[#1E293B]">Quyền lợi học bổng:</h4>
                    <ul className="space-y-1 text-slate-600">
                      {item.benefits.map((b, bi) => (
                        <li key={bi} className="text-[#1B7E45] font-medium">✓ {b}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-[#1E293B]">Điều kiện apply:</h4>
                    <ul className="space-y-1 text-slate-600">
                      {item.requirements.map((r, ri) => (
                        <li key={ri}>• {r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Các trường liên kết tiêu biểu:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.universities.map((u, ui) => (
                      <span key={ui} className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2.5 py-1 rounded-lg">
                        🏛️ {u}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#F37021]" /> Thời hạn nộp: <strong className="text-slate-800">{item.deadline}</strong>
                  </span>
                  <button 
                    onClick={() => onOpenLeadModal(`Tư vấn ${item.title}`)} 
                    className="inline-flex items-center gap-2 bg-[#1B7E45] hover:bg-[#156637] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer shadow-sm hover:shadow"
                  >
                    <PhoneCall size={14} /> Tư vấn hồ sơ học bổng
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
