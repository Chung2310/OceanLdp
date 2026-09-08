import React, { useState } from 'react';
import { Building2, TrendingUp, ShieldCheck, Award, PhoneCall, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FranchisePageProps {
  onShowToast?: (msg: string) => void;
}

export default function FranchisePage({ onShowToast }: FranchisePageProps): JSX.Element {
  const [partnerForm, setPartnerForm] = useState({ name: '', phone: '', email: '', city: '', investment: '', note: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.name || !partnerForm.phone) {
      alert('Vui lòng nhập họ tên và số điện thoại!');
      return;
    }

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
    if (onShowToast) {
      onShowToast('Đã tiếp nhận hồ sơ đối tác! Giám đốc phát triển mạng lưới sẽ liên hệ trong 24h.');
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-14 px-4 text-center text-white">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block bg-[#1B7E45]/25 text-[#bbf0d2] border border-[#1B7E45]/40 text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
            HỢP TÁC NHƯỢNG QUYỀN
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            Cùng Thanhmaihsk Kiến Tạo Doanh Thu Đột Phá
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nhượng quyền thương hiệu đào tạo tiếng Trung số 1 Việt Nam với mô hình vận hành tinh gọn, giáo trình độc quyền và tỷ lệ hoàn vốn nhanh chỉ từ 6 - 12 tháng.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-12">
        {/* 4 Pillars of Franchise Support */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <Building2 size={32} className="text-[#1B7E45] mb-3" />
            <h3 className="text-base font-bold text-[#1E293B] mb-2">Thương Hiệu 15 Năm Uy Tín</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Sở hữu ngay tệp 100.000+ khách hàng tin tưởng và độ nhận diện số 1 về HSK tại thị trường Việt Nam.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <ShieldCheck size={32} className="text-[#F37021] mb-3" />
            <h3 className="text-base font-bold text-[#1E293B] mb-2">Chuyển Giao Giáo Trình Độc Quyền</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Được cấp quyền sử dụng bộ sách Msutong của NXB ĐH Ngôn Ngữ Bắc Kinh và phương pháp Mcontask 3.0.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <TrendingUp size={32} className="text-[#1B7E45] mb-3" />
            <h3 className="text-base font-bold text-[#1E293B] mb-2">Hỗ Trợ Tuyển Sinh & Marketing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Đội ngũ Marketing chuyên nghiệp hỗ trợ chạy quảng cáo, bàn giao học viên tiềm năng ngay từ ngày khai trương.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
            <Award size={32} className="text-[#F37021] mb-3" />
            <h3 className="text-base font-bold text-[#1E293B] mb-2">Đào Tạo & Quản Trị Học Vụ A-Z</h3>
            <p className="text-xs text-slate-600 leading-relaxed">Đào tạo chuẩn hóa đội ngũ giáo viên, tư vấn viên và cung cấp phần mềm quản lý trung tâm hiện đại.</p>
          </div>
        </div>

        {/* Financial Highlights */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-lg mb-16 text-center">
          <h2 className="text-xl md:text-2xl font-black text-[#1E293B] mb-2 tracking-tight uppercase">
            BÀI TOÁN TÀI CHÍNH & HIỆU QUẢ ĐẦU TƯ
          </h2>
          <p className="text-xs md:text-sm text-slate-600 max-w-xl mx-auto mb-8">
            Mô hình kinh doanh giáo dục bền vững, dòng tiền đều đặn hàng tháng và ít rủi ro suy thoái kinh tế.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="text-2xl md:text-3xl font-black text-[#1E293B] mb-1">300 - 800 Triệu</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Vốn đầu tư ban đầu</div>
            </div>
            <div className="bg-[#EAF5EE] p-6 rounded-2xl border border-[#1B7E45]/20">
              <div className="text-2xl md:text-3xl font-black text-[#1B7E45] mb-1">6 - 12 Tháng</div>
              <div className="text-xs font-bold text-[#1B7E45] uppercase tracking-wider">Thời gian hoàn vốn (ROI)</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200">
              <div className="text-2xl md:text-3xl font-black text-[#F37021] mb-1">35% - 45%</div>
              <div className="text-xs font-bold text-[#F37021] uppercase tracking-wider">Biên lợi nhuận ròng</div>
            </div>
          </div>
        </div>

        {/* Partner Lead Form */}
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              ĐĂNG KÝ HỢP TÁC
            </span>
            <h2 className="text-2xl font-black text-[#1E293B] tracking-tight">
              Nhận Hồ Sơ Nhượng Quyền & Phân Tích Khả Thi
            </h2>
          </div>

          {submitted ? (
            <div className="py-10 text-center flex flex-col items-center gap-3">
              <CheckCircle2 size={64} className="text-[#1B7E45]" />
              <h3 className="text-xl font-bold text-[#1E293B]">TIẾP NHẬN HỒ SƠ THÀNH CÔNG!</h3>
              <p className="text-sm text-slate-600 max-w-md">
                Cảm ơn đối tác <strong className="text-slate-800">{partnerForm.name}</strong>. Giám đốc phát triển mạng lưới Thanhmaihsk sẽ liên hệ trực tiếp để trao đổi chi tiết kế hoạch hợp tác.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">
                    Họ và tên đối tác <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ví dụ: Trần Quốc Hưng" 
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20"
                    value={partnerForm.name}
                    onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">
                    Số điện thoại liên hệ <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="0912 345 678" 
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20"
                    value={partnerForm.phone}
                    onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">Email làm việc</label>
                  <input 
                    type="email" 
                    placeholder="doitac@gmail.com" 
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20"
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">
                    Khu vực / Tỉnh thành dự kiến <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ví dụ: Hải Phòng, Cần Thơ..." 
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20"
                    value={partnerForm.city}
                    onChange={(e) => setPartnerForm({ ...partnerForm, city: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Mức vốn đầu tư dự kiến</label>
                <select 
                  className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20"
                  value={partnerForm.investment}
                  onChange={(e) => setPartnerForm({ ...partnerForm, investment: e.target.value })}
                >
                  <option value="">-- Chọn khoảng ngân sách đầu tư --</option>
                  <option value="duoi-500tr">Dưới 500 triệu VNĐ</option>
                  <option value="500tr-1ty">500 triệu - 1 tỷ VNĐ</option>
                  <option value="tren-1ty">Trên 1 tỷ VNĐ</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Ghi chú thêm về năng lực / mặt bằng hiện có</label>
                <textarea 
                  rows={2} 
                  placeholder="Đã có sẵn mặt bằng tại trung tâm thành phố..." 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20 resize-none"
                  value={partnerForm.note}
                  onChange={(e) => setPartnerForm({ ...partnerForm, note: e.target.value })}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full h-12 bg-[#1B7E45] hover:bg-[#156637] text-white rounded-xl font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all active:scale-95 pt-1"
              >
                <PhoneCall size={18} /> GỬI HỒ SƠ ĐĂNG KÝ NHƯỢNG QUYỀN
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
