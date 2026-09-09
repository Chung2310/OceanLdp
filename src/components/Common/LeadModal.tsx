import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';
import { coursesData } from '../../data/coursesData';
import { branchesData } from '../../data/branchesData';
import { leadService } from '../../services/leadService';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
  onShowToast?: (msg: string) => void;
}

interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  branch: string;
  course: string;
  note: string;
}

export default function LeadModal({ isOpen, onClose, defaultCourse = '', onShowToast }: LeadModalProps): JSX.Element | null {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    branch: '',
    course: defaultCourse || '',
    note: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Vui lòng nhập họ tên và số điện thoại!');
      return;
    }

    // Save lead to leadService
    leadService.saveLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      branch: formData.branch || 'Toàn quốc',
      course: formData.course || defaultCourse || 'Tư vấn lộ trình chung',
      note: formData.note,
      source: 'lead_modal'
    });

    // Trigger confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
    if (onShowToast) {
      onShowToast('Đăng ký tư vấn thành công! Chuyên viên sẽ liên hệ trong 15 phút.');
    }

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Đóng">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="p-8 md:p-12 text-center flex flex-col items-center gap-4">
            <CheckCircle2 size={64} className="text-emerald-500 animate-float" />
            <h3 className="text-2xl font-black text-neutral">ĐĂNG KÝ THÀNH CÔNG!</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md mx-auto">
              Cảm ơn bạn <strong className="text-neutral font-bold">{formData.name}</strong> đã để lại thông tin. Chuyên viên tư vấn Green Ocean sẽ liên hệ qua SĐT <strong className="text-primary font-bold">{formData.phone}</strong> trong vòng 15 phút để tư vấn lộ trình và ưu đãi học phí tốt nhất!
            </p>
          </div>
        ) : (
          <div className="p-6 md:p-7">
            <div className="text-center mb-5">
              <span className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-200/60 text-rose-600 font-extrabold text-xs px-3 py-1 rounded-full mb-2">
                <Sparkles size={14} /> TƯ VẤN LỘ TRÌNH 1-1 MIỄN PHÍ
              </span>
              <h3 className="text-xl md:text-2xl font-black text-neutral mb-1.5">ĐĂNG KÝ NHẬN TƯ VẤN KHÓA HỌC</h3>
              <p className="text-xs md:text-sm text-slate-500">
                Nhận ngay <strong className="text-secondary font-bold">Voucher 500K</strong> &amp; Bộ Giáo Trình Msutong độc quyền khi đăng ký hôm nay!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form space-y-3.5">
              <div className="form-group">
                <label className="form-label">Họ và tên của bạn <span className="req">*</span></label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Ví dụ: Nguyễn Văn A" 
                  className="form-input" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="form-group">
                  <label className="form-label">Số điện thoại (Zalo) <span className="req">*</span></label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    placeholder="Ví dụ: 0912 345 678" 
                    className="form-input" 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email nhận tài liệu</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="email@example.com" 
                    className="form-input" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="form-group">
                  <label className="form-label">Cơ sở muốn học <span className="req">*</span></label>
                  <select 
                    name="branch" 
                    value={formData.branch} 
                    onChange={handleChange} 
                    required 
                    className="form-select"
                  >
                    <option value="">-- Chọn cơ sở gần bạn --</option>
                    <option value="online">Toàn quốc (Học Trực Tuyến Online)</option>
                    {branchesData.map((b) => (
                      <option key={b.id} value={b.id}>{b.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Khóa học quan tâm <span className="req">*</span></label>
                  <select 
                    name="course" 
                    value={formData.course} 
                    onChange={handleChange} 
                    required 
                    className="form-select"
                  >
                    <option value="">-- Chọn khóa học --</option>
                    {coursesData.map((c) => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Mục tiêu học tập / Lời nhắn thêm</label>
                <textarea 
                  name="note" 
                  value={formData.note} 
                  onChange={handleChange} 
                  rows={2} 
                  placeholder="Ví dụ: Cần học cấp tốc để đi du học, khung giờ rảnh tối thứ 2-4-6..." 
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="w-full mt-2 py-3 px-6 rounded-xl bg-primary hover:bg-primary-hover text-white font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all cursor-pointer">
                <PhoneCall size={18} /> GỬI YÊU CẦU TƯ VẤN NGAY
              </button>

              <p className="text-xs text-slate-400 text-center mt-3">
                🔒 Cam kết bảo mật thông tin 100% theo tiêu chuẩn an toàn dữ liệu.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
