import React from 'react';
import { Award, BookCheck, Users, Headphones } from 'lucide-react';

const usps = [
  {
    icon: <Award size={28} />,
    title: '100% Giảng Viên Thạc Sĩ / Tiến Sĩ',
    desc: 'Đội ngũ giảng viên đầu ngành được đào tạo bài bản từ các trường Đại học danh tiếng tại Việt Nam và Trung Quốc.'
  },
  {
    icon: <BookCheck size={28} />,
    title: 'Giáo Trình Msutong Độc Quyền',
    desc: 'Bộ sách bản quyền từ NXB Đại học Ngôn ngữ Bắc Kinh, cập nhật chuẩn khảo thí New HSK 3 cấp 9 bậc mới nhất.'
  },
  {
    icon: <Users size={28} />,
    title: 'Phương Pháp Mcontask 3.0',
    desc: 'Lấy người học làm trung tâm, thực hành phản xạ đa giác quan. 80% thời lượng trên lớp dành cho Nghe – Nói tương tác.'
  },
  {
    icon: <Headphones size={28} />,
    title: 'Học Lại Miễn Phí & Cam Kết HSK',
    desc: 'Ký cam kết chuẩn đầu ra bằng văn bản. Miễn phí học lại 100% nếu học viên không đạt chứng chỉ mục tiêu.'
  }
];

export default function USPSection(): JSX.Element {
  return (
    <section className="w-full bg-white py-16" aria-label="Lý do chọn Thanhmaihsk">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            VÌ SAO CHỌN CHÚNG TÔI
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tight">
            4 Giá Trị Khác Biệt Tại Thanhmaihsk
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-2">
            Hệ sinh thái đào tạo Hán ngữ toàn diện nhất Việt Nam với chất lượng học thuật chuẩn quốc tế.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start group bg-white"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#EAF5EE] group-hover:bg-[#1B7E45] text-[#1B7E45] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2 leading-snug group-hover:text-[#1B7E45] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
