import React from 'react';
import { ArrowRight, BookOpen, CheckCircle, Award } from 'lucide-react';

interface HSKRoadmapSectionProps {
  onOpenLeadModal: () => void;
}

export default function HSKRoadmapSection({ onOpenLeadModal }: HSKRoadmapSectionProps): JSX.Element {
  return (
    <section className="hsk-roadmap-section" style={{ backgroundColor: '#f8fafc', padding: '40px 0' }}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-header text-center" style={{ marginBottom: '28px' }}>
          <div className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#EAF5EE', color: '#1B7E45', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '10px' }}>
            <Award size={16} /> CHUẨN ĐẦU RA BẢN QUYỀN THANHMAIHSK
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1E293B', textTransform: 'uppercase', margin: '0 0 10px 0' }}>
            LỘ TRÌNH CHINH PHỤC <span style={{ color: '#1B7E45' }}>NEW HSK 3.0</span> TOÀN DIỆN
          </h2>
          <p style={{ color: '#64748b', maxWidth: '750px', margin: '0 auto', fontSize: '1rem' }}>
            Hệ thống đào tạo độc quyền theo tiêu chuẩn 9 bậc chuẩn Khung khảo thí quốc tế Hán Ban. Học viên được trang bị trọn vẹn 4 kỹ năng Nghe - Nói - Đọc - Viết.
          </p>
        </div>

        {/* Responsive Roadmap Banner */}
        <div 
          className="roadmap-banner-card"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(15, 41, 66, 0.08)',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            transition: 'transform 0.3s ease'
          }}
        >
          {/* Desktop Image */}
          <div className="hide-for-small" style={{ width: '100%', display: 'block' }}>
            <img 
              src="https://thanhmaihsk.edu.vn/wp-content/uploads/2026/08/lo-trinh-13-08-1.webp" 
              alt="Lộ trình chinh phục HSK 3.0 Thanhmaihsk"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>

          {/* Mobile Image */}
          <div className="show-for-small" style={{ width: '100%', display: 'none' }}>
            <img 
              src="https://thanhmaihsk.edu.vn/wp-content/uploads/2026/07/Lo-trinh-chinh-phuc-HSK3.0-3.webp" 
              alt="Lộ trình chinh phục HSK 3.0 Mobile"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>

          {/* Bottom Action Strip */}
          <div 
            style={{
              padding: '18px 24px',
              backgroundColor: '#fff',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              borderTop: '1px solid #f1f5f9'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: '#334155', fontWeight: 600 }}>
                <CheckCircle size={16} color="#1B7E45" /> Kiểm tra đầu vào miễn phí
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: '#334155', fontWeight: 600 }}>
                <CheckCircle size={16} color="#1B7E45" /> Đảm bảo đầu ra văn bản
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: '#334155', fontWeight: 600 }}>
                <CheckCircle size={16} color="#1B7E45" /> Hỗ trợ hồ sơ thi HSK & HSKK
              </span>
            </div>

            <button 
              onClick={onOpenLeadModal}
              className="btn btn-primary"
              style={{
                backgroundColor: '#1B7E45',
                color: '#ffffff',
                border: 'none',
                padding: '10px 22px',
                borderRadius: '8px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(27, 126, 69, 0.3)'
              }}
            >
              <BookOpen size={18} /> Đăng Ký Tư Vấn Lộ Trình <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
