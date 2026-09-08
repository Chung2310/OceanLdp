import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import banner1 from '../../asset/banner/banner1.png';
import banner2 from '../../asset/banner/banner2.png';
import banner3 from '../../asset/banner/banner3.png';

interface HeroSliderProps {
  onOpenLeadModal: () => void;
  onShowToast?: (msg: string) => void;
}

interface BannerSlide {
  id: number;
  image: string;
  title: string;
  alt: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    image: banner1,
    title: 'Học tiếng Trung hôm nay - Vững vàng tương lai',
    alt: 'Banner Green Ocean - Khóa học tiếng Trung chuẩn đầu ra HSK'
  },
  {
    id: 2,
    image: banner2,
    title: 'Đội ngũ giáo viên - Nền tảng tạo nên chất lượng',
    alt: 'Banner Green Ocean - Đội ngũ giáo viên chất lượng cao'
  },
  {
    id: 3,
    image: banner3,
    title: '6 năm hơn 5.000 học viên đồng hành cùng Green Ocean',
    alt: 'Banner Green Ocean - 6 năm hơn 5.000 học viên đồng hành'
  }
];

export default function HeroSlider({ onOpenLeadModal }: HeroSliderProps): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Auto-advance banner every 5 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  return (
    <section className="w-full bg-white relative" aria-label="Banner Trang Chủ">
      {/* Full-Width Edge-to-Edge Banner Slider */}
      <div
        className="relative w-full aspect-[2006/784] max-h-[calc(100vh-111px)] overflow-hidden cursor-pointer group select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full">
          {bannerSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out cursor-pointer ${
                idx === currentSlide ? 'opacity-100 z-10 visible' : 'opacity-0 z-0 invisible pointer-events-none'
              }`}
              onClick={onOpenLeadModal}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenLeadModal();
                }
              }}
              title="Nhấp để đăng ký nhận ưu đãi học phí lên tới 1.500.000đ"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                width={2006}
                height={784}
                className="w-full h-full object-cover block select-none pointer-events-none"
                loading={idx === 0 ? 'eager' : 'lazy'}
                fetchPriority={idx === 0 ? 'high' : 'low'}
              />
            </div>
          ))}
        </div>

        {/* Previous Arrow */}
        <button
          type="button"
          aria-label="Xem banner trước"
          className="absolute top-1/2 -translate-y-1/2 left-4 z-20 w-11 h-11 rounded-full bg-slate-900/40 hover:bg-[#1B7E45] text-white border border-white/40 hover:border-[#1B7E45] hidden md:flex items-center justify-center cursor-pointer backdrop-blur-sm transition-all duration-200 opacity-70 hover:opacity-100 hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
        >
          <ChevronLeft size={26} />
        </button>

        {/* Next Arrow */}
        <button
          type="button"
          aria-label="Xem banner tiếp theo"
          className="absolute top-1/2 -translate-y-1/2 right-4 z-20 w-11 h-11 rounded-full bg-slate-900/40 hover:bg-[#1B7E45] text-white border border-white/40 hover:border-[#1B7E45] hidden md:flex items-center justify-center cursor-pointer backdrop-blur-sm transition-all duration-200 opacity-70 hover:opacity-100 hover:scale-110"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
        >
          <ChevronRight size={26} />
        </button>

        {/* Pagination Dots (Center Bottom) */}
        <div 
          className="absolute bottom-4 max-md:bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-black/30 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20" 
          role="tablist" 
          aria-label="Chuyển đổi banner"
        >
          {bannerSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === currentSlide}
              aria-label={`Banner ${idx + 1}`}
              className={`h-2.5 rounded-full border-2 border-white cursor-pointer transition-all duration-300 p-0 ${
                idx === currentSlide 
                  ? 'w-7 bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)]' 
                  : 'w-2.5 bg-white/30 hover:bg-white/80'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(idx);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
