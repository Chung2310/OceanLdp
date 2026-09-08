import React from 'react';
import { Calendar, Users, MapPin, Award } from 'lucide-react';

interface StatItem {
  icon: JSX.Element;
  number: string;
  label: string;
  desc: string;
}

const stats: StatItem[] = [
  {
    icon: <Calendar size={36} className="text-[#F37021]" />,
    number: '15+',
    label: 'Năm Phát Triển Vững Mạnh',
    desc: 'Thành lập từ năm 2012'
  },
  {
    icon: <Users size={36} className="text-[#F37021]" />,
    number: '100.000+',
    label: 'Học Viên Đã Đào Tạo',
    desc: 'Trên toàn quốc & Quốc tế'
  },
  {
    icon: <MapPin size={36} className="text-[#F37021]" />,
    number: '20+',
    label: 'Cơ Sở Đào Tạo Toàn Quốc',
    desc: 'Hà Nội, TP.HCM, Bắc Ninh...'
  },
  {
    icon: <Award size={36} className="text-[#F37021]" />,
    number: '98.5%',
    label: 'Tỷ Lệ Đỗ HSK Mục Tiêu',
    desc: 'Cam kết chuẩn đầu ra'
  }
];

export default function StatsCounter(): JSX.Element {
  return (
    <section className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-16 text-white" aria-label="Thống kê">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div 
              key={idx} 
              className="text-center flex flex-col items-center p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-[#1B7E45]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-3">{item.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">{item.number}</div>
              <div className="font-bold text-sm md:text-base text-slate-200 mb-1">{item.label}</div>
              <div className="text-xs text-slate-400">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
