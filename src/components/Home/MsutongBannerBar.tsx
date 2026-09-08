import React from 'react';
import { BookMarked, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

interface MsutongBannerBarProps {
  onOpenDownloadModal?: () => void;
}

export default function MsutongBannerBar({ onOpenDownloadModal }: MsutongBannerBarProps): JSX.Element {
  return (
    <div 
      className="msutong-promo-bar"
      style={{
        backgroundColor: '#F37021',
        color: '#ffffff',
        padding: '14px 0',
        boxShadow: '0 4px 12px rgba(243, 112, 33, 0.25)',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '6px 10px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
            <BookMarked size={20} color="#ffffff" />
          </div>
          <span style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '0.3px', textTransform: 'uppercase' }}>
            MUA SÁCH GIÁO TRÌNH TIẾNG TRUNG MSUTONG – TỰ HỌC TIẾNG TRUNG TẠI NHÀ
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Link 
            href="/thu-vien-tai-lieu"
            className="btn"
            style={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '1.5px solid #ffffff',
              borderRadius: '20px',
              padding: '6px 20px',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease'
            }}
          >
            TẠI ĐÂY <ArrowRight size={15} />
          </Link>

          {onOpenDownloadModal && (
            <button
              onClick={onOpenDownloadModal}
              style={{
                backgroundColor: '#ffffff',
                color: '#F37021',
                border: 'none',
                borderRadius: '20px',
                padding: '6px 16px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              Tải Thử Bài 1 Miễn Phí
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
