import React from 'react';
import leadBg from '../../asset/poster/background.png';
import leadCutout from '../../asset/poster/img.png';
import ConsultationForm from '../Common/ConsultationForm';

interface LeadBannerSectionProps {
  onShowToast?: (msg: string) => void;
}

export default function LeadBannerSection({ onShowToast }: LeadBannerSectionProps): JSX.Element {
  const branchOptions = [
    { label: 'Cơ sở 1: Số 567 đường Hàn Thuyên, P. Đại Phúc, TP. Bắc Ninh', value: 'Cơ sở 1: Hàn Thuyên – Đại Phúc' },
    { label: 'Cơ sở 2: Ngã 6 Phường Đại Phúc, TP. Bắc Ninh', value: 'Cơ sở 2: Ngã 6 Đại Phúc' },
    { label: 'Đào Tạo Trực Tuyến Toàn Quốc (Online tương tác 2 chiều)', value: 'Cơ sở Đào Tạo Trực Tuyến Toàn Quốc' }
  ];

  const courseOptions = [
    { label: 'Hán Ngữ Tích Hợp 3.0', value: 'Hán Ngữ Tích Hợp 3.0' },
    { label: 'Hán Ngữ Tích Hợp 3.0 Trực Tuyến', value: 'Hán Ngữ Tích Hợp 3.0 Trực Tuyến' },
    { label: 'Khóa Luyện Thi HSK/ HSKK', value: 'Khóa Luyện Thi HSK/ HSKK' },
    { label: 'Tiếng Trung Giao Tiếp Thực Chiến', value: 'Tiếng Trung Giao Tiếp Thực Chiến' },
    { label: 'Khóa Doanh Nghiệp', value: 'Khóa Doanh Nghiệp' },
    { label: 'Khóa Học 1 Kèm 1 Theo Yêu Cầu', value: 'Khóa Học 1 Kèm 1 Theo Yêu Cầu' }
  ];

  return (
    <section 
      className="relative w-full py-10 sm:py-14 md:py-18 lg:py-22 bg-cover bg-center border-y border-slate-200/60"
      style={{ backgroundImage: `url(${leadBg})` }}
      aria-label="Đăng ký nhận tư vấn khóa học Green Ocean"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* CỘT BÊN TRÁI: Hình ảnh tách nền tự nhiên (img.png) */}
          <div className="lg:col-span-6 flex justify-center items-center w-full">
            <div className="w-full max-w-[640px] flex justify-center items-center p-2 sm:p-4">
              <img 
                src={leadCutout} 
                alt="Đến Green Ocean - Bứt phá tiếng Trung" 
                className="w-full h-auto max-h-[640px] lg:max-h-[720px] block object-contain drop-shadow-[0_20px_35px_rgba(20,90,50,0.18)]"
                loading="lazy"
              />
            </div>
          </div>

          {/* CỘT BÊN PHẢI: Form đăng ký tư vấn chuẩn dự án (Reusable ConsultationForm) */}
          <div className="lg:col-span-6 flex justify-center items-center w-full">
            <div className="w-full max-w-[540px]">
              <ConsultationForm
                title="ĐĂNG KÝ NHẬN TƯ VẤN NGAY HÔM NAY"
                subtitle="Nhận ngay Voucher 500K & Bộ Giáo Trình Msutong độc quyền khi đăng ký hôm nay"
                branchOptions={branchOptions}
                courseOptions={courseOptions}
                defaultBranch="Cơ sở 1: Hàn Thuyên – Đại Phúc"
                defaultCourse="Hán Ngữ Tích Hợp 3.0"
                source="home_lead_banner"
                buttonText="ĐĂNG KÝ NGAY"
                onSuccess={(name) => {
                  if (onShowToast) {
                    onShowToast(`Đăng ký tư vấn thành công! Chuyên viên sẽ liên hệ với ${name} trong 15 phút.`);
                  }
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
