import React from 'react';
import { Link } from 'wouter';
import { Award, ArrowRight } from 'lucide-react';
import { teachersData } from '../../data/teachersData';

export default function TeachersSection(): JSX.Element {
  return (
    <section className="w-full bg-[#f8fafc] py-16" aria-label="Đội ngũ giảng viên">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            ĐỘI NGŨ CHUYÊN GIA
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tight">
            100% Giảng Viên <span className="text-[#1B7E45]">Thạc Sĩ & Tiến Sĩ</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-2">
            Quy tụ các thầy cô tâm huyết, vững vàng học thuật từ các trường Đại học danh tiếng trong nước và quốc tế.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachersData.map((teacher) => (
            <div 
              key={teacher.id} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              <div className="relative h-64 bg-slate-900 overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
                  loading="lazy" 
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded border-l-2 border-[#1B7E45]">
                  {teacher.degree}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="text-[11px] font-bold text-[#1B7E45] mb-1">{teacher.university}</div>
                <h3 className="text-base font-bold text-[#1E293B] mb-0.5">{teacher.name}</h3>
                <div className="text-xs font-semibold text-[#F37021] mb-2.5">{teacher.role}</div>
                
                <p className="text-xs text-slate-500 italic line-clamp-2 leading-relaxed mb-3">
                  "{teacher.quote}"
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 font-semibold py-2 border-t border-dashed border-slate-200 mb-3">
                  <Award size={13} className="text-amber-500" />
                  <span>{teacher.certificates.split(',')[0]}</span>
                </div>

                <div className="mt-auto">
                  <Link href="/doi-ngu-giang-vien" className="text-xs font-bold text-[#1B7E45] hover:text-[#156637] inline-flex items-center gap-1 transition-colors">
                    Xem hồ sơ chi tiết &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/doi-ngu-giang-vien" 
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#1B7E45] text-[#1B7E45] hover:bg-[#EAF5EE] font-extrabold text-xs tracking-wide transition-colors cursor-pointer"
          >
            Khám phá toàn bộ 50+ Giảng viên & Chuyên gia <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
