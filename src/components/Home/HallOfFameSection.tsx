import React, { useState } from 'react';
import { Award, Star, Quote, ChevronRight, CheckCircle2 } from 'lucide-react';

interface StudentAchievement {
  id: string;
  name: string;
  avatar: string;
  score: string;
  hskLevel: string;
  courseTaken: string;
  quote: string;
  currentRole: string;
}

const hallOfFameData: StudentAchievement[] = [
  {
    id: '1',
    name: 'Nguyễn Diệu Linh',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    score: '286/300',
    hskLevel: 'HSK 6 Cấp 9 Bậc',
    courseTaken: 'Lớp Luyện thi HSK 6 Chuyên Sâu Cầu Giấy',
    quote: 'Phương pháp giảng dạy của cô Mai và các thầy cô Viện Bác Nhã rất logic, rèn tư duy tiếng Trung tự nhiên chứ không học vẹt ngữ pháp. Em đã đỗ học bổng CIS Thạc sĩ ĐH Phúc Đán!',
    currentRole: 'Học bổng Toàn phần ĐH Phúc Đán (Fudan University)'
  },
  {
    id: '2',
    name: 'Phạm Minh Quân',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    score: '292/300',
    hskLevel: 'HSK 5 & HSKK Cao Cấp',
    courseTaken: 'Khóa Tích Hợp HSK 3 - 5 Trực Tuyến',
    quote: 'Mặc dù học Online nhưng tương tác với giảng viên rất sát sao, có trợ giảng chấm chữa bài nói và viết từng câu chữ. Sau 6 tháng em đã đạt HSK 5 phục vụ công việc tại công ty FDI.',
    currentRole: 'Chuyên viên Mua hàng Cty Goertek Vina'
  },
  {
    id: '3',
    name: 'Đặng Mai Phương',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
    score: '279/300',
    hskLevel: 'HSK 6 Xuất Sắc',
    courseTaken: 'Khóa Luyện Thi HSK 6 Offline Quận 1 HCM',
    quote: 'Giáo trình Msutong và bộ tài liệu đề thi thử sát với đề thi thật 99%. Đội ngũ Thanhmaihsk luôn đồng hành tận tâm từ lúc học đến khi đăng ký thi và nhận chứng chỉ.',
    currentRole: 'Biên phiên dịch viên tiếng Trung Cao cấp'
  }
];

export default function HallOfFameSection(): JSX.Element {
  const [activeTab, setActiveTab] = useState<'hsk6' | 'hsk5' | 'scholarship'>('hsk6');

  return (
    <section className="hall-of-fame-section" style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#fef3c7', color: '#b45309', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '12px' }}>
            <Award size={16} /> BẢNG VÀNG THÀNH TÍCH HỌC VIÊN
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f2942', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
            KẾT QUẢ ĐẦU RA <span style={{ color: '#a71c20' }}>THỰC TẾ & VƯỢT TRỘI</span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem' }}>
            Hơn 100.000+ học viên đã tin tưởng lựa chọn Thanhmaihsk trong 15 năm qua, với tỷ lệ đỗ chứng chỉ quốc tế HSK/HSKK ngay lần thi đầu tiên đạt trên 98.6%.
          </p>
        </div>

        {/* Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {hallOfFameData.map((student) => (
            <div 
              key={student.id}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: '0 4px 20px rgba(15, 41, 66, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Gold Ribbon Tag */}
              <div 
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: '#fee2e2',
                  color: '#a71c20',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Star size={14} fill="#a71c20" color="#a71c20" /> {student.hskLevel}
              </div>

              <div>
                {/* Profile Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                  <img 
                    src={student.avatar} 
                    alt={student.name}
                    style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #fecdd3' }}
                  />
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '1.15rem', fontWeight: 700, color: '#0f2942' }}>{student.name}</h4>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                      <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#a71c20' }}>{student.score}</span>
                      <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Điểm tổng</span>
                    </div>
                  </div>
                </div>

                {/* Course Info */}
                <div style={{ backgroundColor: '#f8fafc', padding: '8px 12px', borderRadius: '8px', fontSize: '0.85rem', color: '#475569', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={15} color="#10b981" /> {student.courseTaken}
                </div>

                {/* Quote */}
                <div style={{ position: 'relative', paddingLeft: '16px', borderLeft: '3px solid #a71c20', fontStyle: 'italic', color: '#334155', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '20px' }}>
                  "{student.quote}"
                </div>
              </div>

              {/* Footer Badge */}
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px', fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                🎯 Hiện tại: <span style={{ color: '#0f2942' }}>{student.currentRole}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
