import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onShowToast?: (msg: string) => void;
}

export default function ContactPage({ onShowToast }: ContactPageProps): JSX.Element {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: 'tu-van-khoa-hoc', message: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert('Vui lòng nhập họ tên và số điện thoại!');
      return;
    }

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
    if (onShowToast) {
      onShowToast('Cảm ơn bạn! Đội ngũ tư vấn sẽ liên hệ lại trong ít phút.');
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-14 px-4 text-center text-white">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block bg-[#1B7E45]/25 text-[#bbf0d2] border border-[#1B7E45]/40 text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
            LIÊN HỆ TRỰC TIẾP
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            Hệ Thống Trụ Sở & Chăm Sóc Khách Hàng
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe, tư vấn lộ trình và giải đáp mọi thắc mắc của bạn 24/7.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-[#1E293B] mb-2 tracking-tight">Thông Tin Trụ Sở Chính</h2>
              <p className="text-xs font-bold text-[#1B7E45] uppercase tracking-wider">
                CÔNG TY TNHH PHÁT TRIỂN GIÁO DỤC VÀ HỢP TÁC QUỐC TẾ THANHMAIHSK
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#EAF5EE] text-[#1B7E45] flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Địa chỉ trụ sở chính:</div>
                  <div className="text-sm font-semibold text-slate-800">Số 9 ngõ 49 Huỳnh Thúc Kháng, P. Láng Hạ, Q. Đống Đa, Hà Nội</div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F37021] flex items-center justify-center flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Hotline tư vấn tuyển sinh:</div>
                  <div className="text-sm font-bold text-slate-800">0931.715.889 / 0981.123.456</div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#EAF5EE] text-[#1B7E45] flex items-center justify-center flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email hỗ trợ & Học vụ:</div>
                  <div className="text-sm font-semibold text-slate-800">marketing@tmedu.vn / hocvu@tmedu.vn</div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Giờ làm việc:</div>
                  <div className="text-sm font-semibold text-slate-800">08:00 - 21:30 (Tất cả các ngày trong tuần)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <h2 className="text-2xl font-black text-[#1E293B] mb-6 tracking-tight">Gửi Tin Nhắn Cho Chúng Tôi</h2>
            
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center gap-3">
                <CheckCircle2 size={64} className="text-[#1B7E45]" />
                <h3 className="text-xl font-bold text-[#1E293B]">GỬI TIN NHẮN THÀNH CÔNG!</h3>
                <p className="text-sm text-slate-600 max-w-sm">
                  Cảm ơn bạn <strong className="text-slate-800">{form.name}</strong> đã liên hệ. Ban Tuyển sinh Thanhmaihsk sẽ phản hồi qua số <strong className="text-[#F37021]">{form.phone}</strong> sớm nhất!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">
                    Họ và tên của bạn <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Nguyễn Văn A" 
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">
                      Số điện thoại (Zalo) <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="0912 345 678" 
                      className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">Email</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com" 
                      className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">Chủ đề cần hỗ trợ</label>
                  <select 
                    className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  >
                    <option value="tu-van-khoa-hoc">Tư vấn khóa học tiếng Trung</option>
                    <option value="du-hoc-hoc-bong">Tư vấn du học & học bổng Trung Quốc</option>
                    <option value="hoc-vu-bao-luu">Hỗ trợ học vụ / Bảo lưu / Học bù</option>
                    <option value="nhuong-quyen">Hợp tác nhượng quyền thương hiệu</option>
                    <option value="khac">Nội dung khác</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">Nội dung chi tiết</label>
                  <textarea 
                    rows={4} 
                    placeholder="Nhập nội dung bạn cần hỗ trợ..." 
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20 resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full h-12 bg-[#1B7E45] hover:bg-[#156637] text-white rounded-xl font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all active:scale-95 pt-1"
                >
                  <Send size={18} /> GỬI YÊU CẦU NGAY
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
