import SmartImage from '../Common/SmartImage';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import banner1 from '../../asset/banner/banner1.png';
import banner2 from '../../asset/banner/banner2.png';
import banner3 from '../../asset/banner/banner-1311.png';

import banner1Mobile from '../../asset/banner/banner1.png?width=768';
import banner2Mobile from '../../asset/banner/banner2.png?width=768';
import banner3Mobile from '../../asset/banner/banner-1311.png?width=768';

interface HeroSliderProps {
  onOpenLeadModal: () => void;
  onShowToast?: (msg: string) => void;
}

interface BannerSlide {
  id: number;
  image: string;
  mobileImage: string;
  title: string;
  alt: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    image: banner1,
    mobileImage: banner1Mobile,
    title: 'Học tiếng Trung hôm nay - Vững vàng tương lai',
    alt: 'Banner Green Ocean - Khóa học tiếng Trung chuẩn đầu ra HSK'
  },
  {
    id: 2,
    image: banner2,
    mobileImage: banner2Mobile,
    title: 'Đội ngũ giáo viên - Nền tảng tạo nên chất lượng',
    alt: 'Banner Green Ocean - Đội ngũ giáo viên chất lượng cao'
  },
  {
    id: 3,
    image: banner3,
    mobileImage: banner3Mobile,
    title: 'Tiếng Trung mở ra thế giới mới',
    alt: 'Green Ocean - Học tiếng Trung bắt đầu từ đây cùng đội ngũ giáo viên'
  }
];

export default function HeroSlider({ onOpenLeadModal }: HeroSliderProps): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const [requestedSlide, setRequestedSlide] = useState(0);
  const [readySlides, setReadySlides] = useState<number[]>([]);
  const [pageVisible, setPageVisible] = useState(true);
  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    update(); document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);
  useEffect(() => {
    if (readySlides.includes(requestedSlide)) setCurrentSlide(requestedSlide);
  }, [requestedSlide, readySlides]);
  useEffect(() => {
    if (isHovered || !pageVisible || !readySlides.includes(currentSlide)) return;
    const timer = setTimeout(() => setRequestedSlide((currentSlide + 1) % bannerSlides.length), 5000);
    return () => clearTimeout(timer);
  }, [isHovered, pageVisible, currentSlide, readySlides]);
  const prevSlide = () => setRequestedSlide((currentSlide - 1 + bannerSlides.length) % bannerSlides.length);
  const nextSlide = () => setRequestedSlide((currentSlide + 1) % bannerSlides.length);

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
              <SmartImage
                src={slide.image}
                srcSet={`${slide.mobileImage} 768w, ${slide.image} 1920w`}
                sizes="100vw"
                decoding="async"
                alt={slide.alt}
                width={2006}
                height={784}
                className={`w-full h-full ${idx === 2 ? 'object-fill' : 'object-cover'} block select-none pointer-events-none`}
                onLoad={() => setReadySlides(prev => prev.includes(idx) ? prev : [...prev, idx])}
                loading={idx === 0 || idx === requestedSlide ? 'eager' : 'lazy'}
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
                setRequestedSlide(idx);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
