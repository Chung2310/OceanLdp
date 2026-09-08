import React, { useState } from 'react';
import { X, Download, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ResourceItem } from '../../types';
import { leadService } from '../../services/leadService';

interface DownloadModalProps {
  resource: ResourceItem | { title: string; format: string; size: string; downloads: string; image: string } | null;
  isOpen: boolean;
  onClose: () => void;
  onShowToast?: (msg: string) => void;
}

export default function DownloadModal({ resource, isOpen, onClose, onShowToast }: DownloadModalProps): JSX.Element | null {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [downloading, setDownloading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  if (!isOpen || !resource) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Vui lòng nhập đầy đủ thông tin để nhận tài liệu!');
      return;
    }

    // Save lead
    leadService.saveLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      course: `Tải Ebook: ${resource.title}`,
      source: 'download_modal'
    });

    setDownloading(true);

    setTimeout(() => {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
      setDownloading(false);
      setSuccess(true);
      if (onShowToast) {
        onShowToast(`Đã gửi link tải tài liệu: "${resource.title}" vào email!`);
      }

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 3000);
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Đóng">
          <X size={20} />
        </button>

        {success ? (
          <div className="p-8 md:p-12 text-center flex flex-col items-center gap-4">
            <CheckCircle2 size={60} className="text-emerald-500 animate-float" />
            <h3 className="text-2xl font-black text-neutral">TẢI TÀI LIỆU THÀNH CÔNG!</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md mx-auto">
              Link tải trọn bộ tài liệu <strong className="text-neutral font-bold">{resource.title}</strong> đã được gửi tự động đến email <strong className="text-primary font-bold">{formData.email}</strong>. Vui lòng kiểm tra hộp thư đến (hoặc hòm thư Spam) nhé!
            </p>
          </div>
        ) : (
          <div className="p-6 md:p-7">
            <div className="flex gap-4 items-center bg-slate-50 p-4 rounded-xl mb-5 border border-slate-200/80">
              <img src={resource.image} alt={resource.title} className="w-20 h-24 object-cover rounded-lg shadow-md shrink-0" />
              <div>
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2.5 py-0.5 rounded-full mb-1">{resource.format}</span>
                <h4 className="text-sm md:text-base font-bold text-neutral my-1 line-clamp-2 leading-snug">{resource.title}</h4>
                <p className="text-xs text-slate-500">Dung lượng: {resource.size} • Đã tải: {resource.downloads}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="modal-form space-y-3.5">
              <div className="form-group">
                <label className="form-label">Họ và tên <span className="req">*</span></label>
                <input 
                  type="text" 
                  required 
                  placeholder="Nhập họ tên của bạn" 
                  className="form-input" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Số điện thoại (Zalo) <span className="req">*</span></label>
                <input 
                  type="tel" 
                  required 
                  placeholder="Nhập số điện thoại" 
                  className="form-input" 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email nhận link tải tài liệu <span className="req">*</span></label>
                <input 
                  type="email" 
                  required 
                  placeholder="email@example.com" 
                  className="form-input" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <button type="submit" disabled={downloading} className="w-full mt-2 py-3 px-6 rounded-xl bg-primary hover:bg-primary-hover text-white font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
                <Download size={18} /> {downloading ? 'ĐANG KHỞI TẠO LINK TẢI...' : 'TẢI MIỄN PHÍ NGAY (PDF)'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
