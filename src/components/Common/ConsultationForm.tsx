import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import CustomSelect, { SelectOption } from './CustomSelect';
import { leadService } from '../../services/leadService';

export interface ConsultationFormProps {
  title?: string;
  subtitle?: string;
  defaultBranch?: string;
  defaultCourse?: string;
  selectedAlert?: string | null;
  branchOptions?: SelectOption[];
  courseOptions?: SelectOption[];
  source?: string;
  buttonText?: string;
  showEmail?: boolean;
  onSuccess?: (leadName: string) => void;
  className?: string;
}

export const DEFAULT_BRANCH_OPTIONS: SelectOption[] = [
  { value: 'Cơ sở 1: Hàn Thuyên – Đại Phúc', label: 'Cơ sở 1: Số 567 đường Hàn Thuyên, P. Đại Phúc, TP. Bắc Ninh' },
  { value: 'Cơ sở 2: Ngã 6 Đại Phúc', label: 'Cơ sở 2: Ngã 6 Phường Đại Phúc, TP. Bắc Ninh' },
  { value: 'Cơ sở Đào Tạo Trực Tuyến Toàn Quốc', label: 'Đào Tạo Trực Tuyến Toàn Quốc (Google Meet tương tác 2 chiều)' }
];

export const DEFAULT_COURSE_OPTIONS: SelectOption[] = [
  { value: 'Tiếng Trung Tích Hợp HSK3 3.0', label: 'Tiếng Trung Tích Hợp HSK3 3.0' },
  { value: 'Giao Tiếp Cơ Bản 1 (Thực Chiến)', label: 'Giao Tiếp Cơ Bản 1 (Thực Chiến)' },
  { value: 'Tiếng Trung Tích Hợp HSK4 3.0', label: 'Tiếng Trung Tích Hợp HSK4 3.0' },
  { value: 'Tiếng Trung Tích Hợp HSK5 3.0', label: 'Tiếng Trung Tích Hợp HSK5 3.0' },
  { value: 'Luyện Thi Toàn Diện HSK6 3.0', label: 'Luyện Thi Toàn Diện HSK6 3.0' },
  { value: 'Tiếng Trung Phổ Thông (Trẻ Em)', label: 'Tiếng Trung Phổ Thông (Trẻ Em)' },
  { value: 'Tiếng Trung Doanh Nghiệp FDI', label: 'Tiếng Trung Doanh Nghiệp FDI' },
  { value: 'Khóa Học VIP 1 Kèm 1 Theo Yêu Cầu', label: 'Khóa Học VIP 1 Kèm 1 Theo Yêu Cầu' }
];

export default function ConsultationForm({
  title = 'ĐĂNG KÝ NHẬN TƯ VẤN',
  subtitle,
  defaultBranch = 'Cơ sở 1: Hàn Thuyên – Đại Phúc',
  defaultCourse = 'Tiếng Trung Tích Hợp HSK3 3.0',
  selectedAlert = null,
  branchOptions = DEFAULT_BRANCH_OPTIONS,
  courseOptions = DEFAULT_COURSE_OPTIONS,
  source = 'consultation_form',
  buttonText = 'GỬI ĐI',
  showEmail = true,
  onSuccess,
  className = ''
}: ConsultationFormProps): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    branch: defaultBranch,
    course: defaultCourse
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');

  // Sync props updates if user clicks a class row or switches course/branch
  useEffect(() => {
    if (defaultBranch) {
      setFormData((prev) => ({ ...prev, branch: defaultBranch }));
    }
  }, [defaultBranch]);

  useEffect(() => {
    if (defaultCourse) {
      setFormData((prev) => ({ ...prev, course: defaultCourse }));
    }
  }, [defaultCourse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError('Vui lòng nhập họ tên và số điện thoại liên hệ!');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    try {
      leadService.saveLead({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        branch: formData.branch,
        course: formData.course,
        source: source,
        note: selectedAlert ? `Thông tin: ${selectedAlert}` : 'Đăng ký nhận tư vấn khóa học'
      });

      // Confetti animation
      try {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.65 }
        });
      } catch (err) {
        // ignore confetti if unsupported
      }

      setIsSubmitted(true);
      if (onSuccess) {
        onSuccess(formData.name.trim());
      }
    } catch (err) {
      console.error(err);
      setFormError('Có lỗi xảy ra khi lưu thông tin. Vui lòng thử lại!');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reusable input class with crisp, refined rounded-md (6px) and standardized h-11
  const inputClass = "w-full h-11 px-3.5 bg-white border border-slate-300 rounded-md text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-[#1B7E45] focus:ring-2 focus:ring-[#1B7E45]/15 transition-all";

  return (
    <div className={`bg-white rounded-lg border-2 border-[#1B7E45] shadow-lg relative ${className}`}>
      {/* Header Banner - crisp rounded-t-[6px] matching outer border radius */}
      <div className="bg-[#1B7E45] text-white text-center py-3.5 px-6 rounded-t-[6px] shadow-xs">
        <h3 className="text-base sm:text-lg font-black uppercase tracking-wider">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-emerald-100 mt-1 font-medium">
            {subtitle}
          </p>
        )}
      </div>

      {/* Selected Class Alert Highlight */}
      {selectedAlert && (
        <div className="bg-[#EAF5EE] border-b border-emerald-200 px-4 py-2.5 flex items-center gap-2 text-xs text-[#156637] font-semibold">
          <CheckCircle2 size={15} className="text-[#1B7E45] shrink-0" />
          <span className="truncate">{selectedAlert}</span>
        </div>
      )}

      {/* Form Content */}
      <div className="p-5 sm:p-7">
        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-[#EAF5EE] text-[#1B7E45] rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 size={28} />
            </div>
            <h4 className="text-lg font-black text-[#1E293B] mb-1.5 uppercase">Đăng Ký Thành Công!</h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-5 leading-relaxed">
              Cảm ơn bạn <strong className="text-slate-900">{formData.name}</strong>. Chuyên viên tư vấn <strong className="text-[#1B7E45]">GREEN OCEAN</strong> sẽ liên hệ lại qua số điện thoại <strong className="text-[#1B7E45]">{formData.phone}</strong> trong vòng 15 phút.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  branch: defaultBranch,
                  course: defaultCourse
                });
              }}
              className="inline-flex items-center gap-1.5 bg-[#1B7E45] hover:bg-[#156637] text-white text-xs font-bold px-5 py-2.5 rounded-md transition-all cursor-pointer shadow-xs active:scale-95"
            >
              Đăng ký tư vấn lớp khác
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {formError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-3.5 py-2 rounded-md text-xs flex items-center gap-2">
                <AlertCircle size={15} className="shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* Họ tên */}
            <div>
              <input
                type="text"
                placeholder="Họ tên *"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                required
                className={inputClass}
              />
            </div>

            {/* Số điện thoại */}
            <div>
              <input
                type="tel"
                placeholder="Số điện thoại *"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                required
                className={inputClass}
              />
            </div>

            {/* Email (Optional) */}
            {showEmail && (
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className={inputClass}
                />
              </div>
            )}

            {/* Chọn cơ sở (Sử dụng CustomSelect chuẩn của dự án) */}
            <div>
              <CustomSelect
                value={formData.branch}
                options={branchOptions}
                onChange={(val) => setFormData((prev) => ({ ...prev, branch: val }))}
                placeholder="Chọn cơ sở"
              />
            </div>

            {/* Chọn khóa học (Sử dụng CustomSelect - mở hướng lên tránh khuất nút gửi) */}
            <div>
              <CustomSelect
                value={formData.course}
                options={courseOptions}
                onChange={(val) => setFormData((prev) => ({ ...prev, course: val }))}
                placeholder="Chọn khóa học"
                direction="up"
              />
            </div>

            {/* Nút gửi đi (Crisp rounded-md Orange CTA Button) */}
            <div className="pt-1.5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-[#F37021] hover:bg-[#d95e14] active:scale-[0.99] text-white font-extrabold uppercase text-sm tracking-wider rounded-md transition-all shadow-sm hover:shadow cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>ĐANG GỬI THÔNG TIN...</span>
                ) : (
                  <>
                    <Send size={15} />
                    {buttonText}
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
