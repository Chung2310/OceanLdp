import React from 'react';

import vinhDanh1 from '../../asset/achievers/vinh-danh-hoc-vien1_a-1.webp';
import vinhDanh2 from '../../asset/achievers/vinh-danh-hoc-vien1_a-2.webp';
import vinhDanh3 from '../../asset/achievers/vinh-danh-hoc-vien1_a-3.webp';
import vinhDanh4 from '../../asset/achievers/vinh-danh-hoc-vien1_a-4.webp';
import vinhDanh5 from '../../asset/achievers/vinh-danh-hoc-vien1_a-5.webp';
import vinhDanh6 from '../../asset/achievers/vinh-danh-hoc-vien1_a-6.webp';
import vinhDanh7 from '../../asset/achievers/vinh-danh-hoc-vien1_a-7.webp';
import vinhDanh8 from '../../asset/achievers/vinh-danh-hoc-vien1_a-8.webp';
import vinhDanh9 from '../../asset/achievers/vinh-danh-hoc-vien1_a-9.webp';
import vinhDanh10 from '../../asset/achievers/vinh-danh-hoc-vien1_a-10.webp';
import vinhDanh11 from '../../asset/achievers/vinh-danh-hoc-vien1_a-11.webp';
import vinhDanh12 from '../../asset/achievers/vinh-danh-hoc-vien1_a-12.webp';
import vinhDanh13 from '../../asset/achievers/vinh-danh-hoc-vien1_a-13.webp';
import vinhDanh14 from '../../asset/achievers/vinh-danh-hoc-vien1_a-14.webp';
import vinhDanh15 from '../../asset/achievers/vinh-danh-hoc-vien1_a-15.webp';

interface Achiever {
  name: string;
  level: string;
  img: string;
}

const row1Students: Achiever[] = [
  { name: 'PHẠM THỊ MAI HOA', level: 'HSK3', img: vinhDanh1 },
  { name: 'LÊ THỊ LAN', level: 'HSK3', img: vinhDanh2 },
  { name: 'NGUYỄN THỊ NGỌC HÀ', level: 'HSK3', img: vinhDanh3 },
  { name: 'QUÁCH HẢI YẾN', level: 'HSK4', img: vinhDanh4 },
  { name: 'ĐÀM HOÀNG PHƯƠNG THẢO', level: 'HSK3', img: vinhDanh5 },
  { name: 'VŨ THỊ NGỌC ANH', level: 'HSK3', img: vinhDanh6 },
  { name: 'NGUYỄN THỊ BÌNH', level: 'HSK3', img: vinhDanh7 },
  { name: 'TRƯƠNG THỊ MINH CHÂU', level: 'HSK3', img: vinhDanh8 }
];

const row2Students: Achiever[] = [
  { name: 'TRẦN QUANG HUY', level: 'HSK4', img: vinhDanh9 },
  { name: 'CHU MINH PHƯƠNG', level: 'HSK3', img: vinhDanh10 },
  { name: 'BÙI THỊ DIỆU ANH', level: 'HSK3', img: vinhDanh11 },
  { name: 'HÀ NGỌC VI', level: 'HSK4', img: vinhDanh12 },
  { name: 'VÕ PHƯƠNG DUNG', level: 'HSK3', img: vinhDanh13 },
  { name: 'TRỊNH THẢO NGUYÊN', level: 'HSK4', img: vinhDanh14 },
  { name: 'LÊ HẢI AN', level: 'HSK4', img: vinhDanh15 }
];

function StudentCard({ student }: { student: Achiever }) {
  return (
    <article className="w-[220px] sm:w-[240px] h-[300px] sm:h-[320px] shrink-0 rounded-2xl overflow-hidden relative shadow-lg select-none hover:scale-102 transition-transform duration-300 bg-white">
      <img
        src={student.img}
        alt={`Học viên ${student.name} đạt ${student.level}`}
        width={240}
        height={320}
        className="w-full h-full object-cover block"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute left-2.5 right-2.5 bottom-2.5 min-h-[44px] px-3 py-2 rounded-xl bg-black/65 backdrop-blur-md border border-white/20 text-white flex items-center justify-between gap-2 shadow-sm">
        <span className="font-bold text-[11px] sm:text-[12px] text-white uppercase tracking-tight line-clamp-1">
          {student.name}
        </span>
        <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-white/25 text-[10px] sm:text-[11px] font-black text-white border border-white/30">
          {student.level}
        </span>
      </div>
    </article>
  );
}

export default function HallOfFameSection(): JSX.Element {
  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-18 overflow-hidden" aria-label="Bảng vinh danh học viên">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6">
        
        {/* Main Panel */}
        <div className="marquee-container relative overflow-hidden bg-[#941A25] rounded-[32px] md:rounded-[40px] px-2 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 shadow-[0_25px_60px_-15px_rgba(148,26,37,0.35)]">
          
          {/* Two Marquee Rows */}
          <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 mb-10 sm:mb-14 overflow-hidden">
            
            {/* Row 1: Scrolling Left */}
            <div className="w-full overflow-hidden h-[300px] sm:h-[320px]">
              <div className="flex w-max animate-student-marquee-left">
                <div className="flex shrink-0 gap-5 sm:gap-6 pr-5 sm:pr-6">
                  {row1Students.map((st, i) => (
                    <StudentCard key={`r1-a-${i}`} student={st} />
                  ))}
                </div>
                <div className="flex shrink-0 gap-5 sm:gap-6 pr-5 sm:pr-6" aria-hidden="true">
                  {row1Students.map((st, i) => (
                    <StudentCard key={`r1-b-${i}`} student={st} />
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="w-full overflow-hidden h-[300px] sm:h-[320px]">
              <div className="flex w-max animate-student-marquee-right">
                <div className="flex shrink-0 gap-5 sm:gap-6 pr-5 sm:pr-6">
                  {row2Students.map((st, i) => (
                    <StudentCard key={`r2-a-${i}`} student={st} />
                  ))}
                </div>
                <div className="flex shrink-0 gap-5 sm:gap-6 pr-5 sm:pr-6" aria-hidden="true">
                  {row2Students.map((st, i) => (
                    <StudentCard key={`r2-b-${i}`} student={st} />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Heading */}
          <div className="text-center text-white px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-white tracking-tight leading-tight mb-2">
              Hành trình bứt phá tiếng Trung rực rỡ
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 font-medium tracking-normal">
              của học viên tại Green Ocean
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
