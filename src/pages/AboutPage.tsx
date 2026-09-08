import React from 'react';
import { Target, Heart, PhoneCall } from 'lucide-react';

interface AboutPageProps {
  onOpenLeadModal: () => void;
}

const milestones = [
  { year: '2012', title: 'Khởi đầu sứ mệnh', desc: 'Thành lập cơ sở đầu tiên tại Đống Đa - Hà Nội với sứ mệnh phổ cập tiếng Trung chất lượng cao cho người Việt.' },
  { year: '2015', title: 'Chính thức cấp phép & Mở rộng', desc: 'Nhận giấy phép ĐKKD 0106852149 và mở rộng mạng lưới 5 cơ sở tại Hà Nội.' },
  { year: '2018', title: 'Mở rộng thị trường TP.HCM', desc: 'Chạm mốc 50.000 học viên và chính thức khai trương hệ thống chi nhánh tại TP. Hồ Chí Minh (Quận 1, Tân Bình, Bình Thạnh).' },
  { year: '2022', title: 'Chuyển giao Giáo trình Msutong', desc: 'Ký kết hợp tác chiến lược độc quyền với NXB Đại Học Ngôn Ngữ Bắc Kinh phát hành bộ giáo trình Hán ngữ Msutong và chuẩn New HSK 3.0.' },
  { year: '2025 - Nay', title: 'Hệ sinh thái đào tạo toàn diện', desc: 'Sở hữu hơn 20 cơ sở toàn quốc, 100.000+ học viên, Viện Nghiên cứu Bác Nhã và Trung tâm tư vấn Du học TM Edu.' }
];

export default function AboutPage({ onOpenLeadModal }: AboutPageProps): JSX.Element {
  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Header */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-14 px-4 text-center text-white">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block bg-[#1B7E45]/25 text-[#bbf0d2] border border-[#1B7E45]/40 text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
            VỀ CHÚNG TÔI
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            15 Năm Kiến Tạo Hệ Sinh Thái Giáo Dục Tiếng Trung
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tiên phong chuẩn hóa đào tạo Hán ngữ tại Việt Nam với phương pháp Mcontask và 100% giảng viên trình độ Thạc sĩ - Tiến sĩ.
          </p>
        </div>
      </div>

      {/* Core Values & Mission */}
      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <Target size={36} className="text-[#1B7E45] mb-4" />
            <h3 className="text-xl font-bold text-[#1E293B] mb-2 tracking-tight">TẦM NHÌN CHIẾN LƯỢC</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Trở thành Hệ sinh thái giáo dục Hán ngữ hàng đầu tại Việt Nam và khu vực Đông Nam Á, tiên phong ứng dụng công nghệ số và chuẩn khảo thí quốc tế.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <Heart size={36} className="text-[#F37021] mb-4" />
            <h3 className="text-xl font-bold text-[#1E293B] mb-2 tracking-tight">SỨ MỆNH PHỤNG SỰ</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Kiến tạo thế hệ học viên Việt Nam thành thạo tiếng Trung, tự tin hội nhập toàn cầu, nắm bắt cơ hội du học và nghề nghiệp không giới hạn.
            </p>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="mb-16 text-center">
          <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            GIÁ TRỊ CỐT LÕI
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] mb-8 tracking-tight">
            4 Trụ Cột Làm Nên Uy Tín Thanhmaihsk
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#1B7E45] font-black flex items-center justify-center mb-3">01</div>
              <h4 className="text-base font-bold text-[#1E293B] mb-1.5">TẬN TÂM</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Luôn đặt sự tiến bộ và lợi ích của học viên làm kim chỉ nam trong mọi hoạt động giảng dạy.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#1B7E45] font-black flex items-center justify-center mb-3">02</div>
              <h4 className="text-base font-bold text-[#1E293B] mb-1.5">CHUYÊN NGHIỆP</h4>
              <p className="text-xs text-slate-600 leading-relaxed">100% Giảng viên ThS/TS, quy trình học vụ chuẩn hóa và chăm sóc học viên tận tình 24/7.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F37021] font-black flex items-center justify-center mb-3">03</div>
              <h4 className="text-base font-bold text-[#1E293B] mb-1.5">THỰC TIỄN</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Học được - Hành ngay. 80% thời lượng phản xạ ứng dụng vào giao tiếp thực tế và công việc.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F37021] font-black flex items-center justify-center mb-3">04</div>
              <h4 className="text-base font-bold text-[#1E293B] mb-1.5">ĐỔI MỚI</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Liên tục cải tiến giáo trình Msutong bản quyền và cập nhật chuẩn thi New HSK 3 cấp 9 bậc.</p>
            </div>
          </div>
        </div>

        {/* Interactive Milestones Timeline */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              HÀNH TRÌNH PHÁT TRIỂN
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tight">
              Các Cột Mốc Lịch Sử Đáng Nhớ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-sm font-black text-[#1B7E45] bg-[#EAF5EE] px-3 py-1.5 rounded-lg whitespace-nowrap">
                  {item.year}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1E293B] mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystem Callout */}
        <div className="bg-[#1E293B] text-white p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-black text-white">Hệ Sinh Thái Toàn Diện Thanhmaihsk</h3>
            <ul className="space-y-1.5 text-xs md:text-sm text-slate-300">
              <li>✓ <strong className="text-white">Trung tâm tiếng Trung Thanhmaihsk:</strong> 20+ cơ sở đào tạo chuẩn quốc tế</li>
              <li>✓ <strong className="text-white">Viện Nghiên cứu Bác Nhã:</strong> Nghiên cứu ngôn ngữ và hợp tác quốc tế</li>
              <li>✓ <strong className="text-white">Du học Trung Quốc TM Edu:</strong> Đơn vị số 1 về tư vấn học bổng CSC/CIS</li>
              <li>✓ <strong className="text-white">Nhà sách Giáo trình Hán ngữ:</strong> Đơn vị phát hành giáo trình Msutong độc quyền</li>
            </ul>
          </div>
          <button 
            onClick={onOpenLeadModal} 
            className="inline-flex items-center gap-2 bg-[#F37021] hover:bg-[#d95e14] text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            <PhoneCall size={18} /> Đăng Ký Tư Vấn Ngay
          </button>
        </div>
      </div>
    </div>
  );
}
