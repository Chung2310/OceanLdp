import React from 'react';
import { Star, Award, Quote } from 'lucide-react';

interface Achievement {
  name: string;
  course: string;
  score: string;
  avatar: string;
  feedback: string;
  scholarship: string;
}

const achievements: Achievement[] = [
  {
    name: 'Nguyễn Thu Trang',
    course: 'Lớp Hán ngữ Tích hợp HSK 5',
    score: 'HSK 5 (285/300) & HSKK Cao Cấp',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    feedback: 'Khóa học tại trung tâm giúp mình từ một người sợ chữ Hán trở nên tự tin giao tiếp và đạt HSK5 chỉ sau 6 tháng. Thầy cô nhiệt tình và hỗ trợ chữa bài 24/7.',
    scholarship: 'Học bổng toàn phần CSC ĐH Bắc Kinh'
  },
  {
    name: 'Trần Minh Hoàng',
    course: 'Tiếng Trung Doanh Nghiệp & 1 Kèm 1',
    score: 'Thành thạo đàm phán thương mại FDI',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    feedback: 'Giáo trình rất sát với công việc thực tế trong nhà máy, phản xạ tăng rõ rệt sau 30 buổi học. Hiện tại mình đã có thể tự tin chủ trì các cuộc họp cùng đối tác Trung Quốc.',
    scholarship: 'Trợ lý Giám đốc Tập đoàn Foxconn'
  },
  {
    name: 'Lê Quỳnh Anh',
    course: 'Luyện thi Đại học Khối D4',
    score: 'Điểm 9.8 Môn Tiếng Trung THPTQG',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
    feedback: 'Nhờ các buổi tổng ôn đề thi thực chiến và mẹo bẫy ngữ pháp của cô Mai Thanh, em đã đạt điểm số mơ ước và được tuyển thẳng vào ĐH Ngoại Thương.',
    scholarship: 'Tuyển thẳng ĐH Ngoại Thương'
  }
];

export default function TestimonialsSection(): JSX.Element {
  return (
    <section className="w-full bg-white py-16" aria-label="Bảng vàng thành tích">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            BẢNG VÀNG THÀNH TÍCH
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tight">
            Cảm Nhận & Thành Tích <span className="text-[#1B7E45]">Học Viên Xuất Sắc</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-2">
            Hàng chục nghìn học viên đã bứt phá thành công cùng Green Ocean để du học, thăng tiến sự nghiệp và đạt điểm tuyệt đối.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote size={28} className="text-[#1B7E45]/20" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>

              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                "{item.feedback}"
              </p>

              <div className="inline-flex items-center gap-2 bg-[#EAF5EE] text-[#1B7E45] text-xs font-black px-3 py-1.5 rounded-lg mb-4 w-fit">
                <Award size={15} className="text-[#F37021]" />
                <span>{item.score}</span>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#1B7E45]" />
                <div>
                  <div className="text-sm font-bold text-[#1E293B]">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.course}</div>
                  <div className="text-xs font-bold text-[#1B7E45]">{item.scholarship}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
