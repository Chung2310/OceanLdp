import React from 'react';
import HeroSlider from '../components/Home/HeroSlider';
import AboutEcosystemSection from '../components/Home/AboutEcosystemSection';
import WhyChooseSection from '../components/Home/WhyChooseSection';
import HSKRoadmapSection from '../components/Home/HSKRoadmapSection';
import FeaturedCourses from '../components/Home/FeaturedCourses';
import MethodAndBookSection from '../components/Home/MethodAndBookSection';
import StatsCounter from '../components/Home/StatsCounter';
import HallOfFameSection from '../components/Home/HallOfFameSection';
import TeachersSection from '../components/Home/TeachersSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import BranchMapSection from '../components/Home/BranchMapSection';
import FreeResourcesSection from '../components/Home/FreeResourcesSection';
import LatestNewsSection from '../components/Home/LatestNewsSection';
import FAQSection from '../components/Home/FAQSection';
import { ResourceItem } from '../types';

interface HomePageProps {
  onOpenLeadModal: (courseTitle?: string) => void;
  onOpenDownloadModal: (res: ResourceItem | { title: string; format: string; size: string; downloads: string; image: string }) => void;
  onShowToast?: (msg: string) => void;
}

export default function HomePage({ onOpenLeadModal, onOpenDownloadModal, onShowToast }: HomePageProps): JSX.Element {
  return (
    <main className="home-page-container">
      {/* 1. Hero Carousel Slider & Lead Form */}
      <HeroSlider 
        onOpenLeadModal={() => onOpenLeadModal()} 
        onShowToast={onShowToast}
      />

      {/* 2. Hệ sinh thái Đào tạo Năng lực Tiếng Trung Toàn Diện (Chuẩn layout Thanhmaihsk) */}
      <AboutEcosystemSection 
        onOpenLeadModal={() => onOpenLeadModal('Tư vấn Giới thiệu Hệ sinh thái Green Ocean')}
      />

      {/* 3. 6 Lý Do Nên Chọn Green Ocean (Interactive Reasons Showcase) */}
      <WhyChooseSection />

      {/* 4. Lộ trình chinh phục New HSK 3.0 Chuẩn Khảo Thí */}
      <HSKRoadmapSection 
        onOpenLeadModal={() => onOpenLeadModal('Tư vấn Lộ trình Chinh phục New HSK 3.0')}
      />

      {/* 5. Featured Courses Tabbed Filter */}
      <FeaturedCourses 
        onOpenLeadModal={(courseTitle) => onOpenLeadModal(courseTitle)} 
      />

      {/* 6. Bảng vàng thành tích học viên HSK 6 & HSK 5 cao điểm */}
      <HallOfFameSection />

      {/* 7. Phương pháp Mcontask & Bộ sách Msutong */}
      <MethodAndBookSection 
        onOpenDownloadModal={onOpenDownloadModal} 
      />

      {/* 8. Impressive Numbers & Stats Counter */}
      <StatsCounter />

      {/* 9. Top Faculty & Teachers Thạc sĩ/Tiến sĩ */}
      <TeachersSection />

      {/* 10. Student Scores & Testimonials */}
      <TestimonialsSection />

      {/* 11. 20+ Branches Interactive Viewer */}
      <BranchMapSection />

      {/* 12. Free Downloadable Resources & Ebooks */}
      <FreeResourcesSection 
        onOpenDownloadModal={onOpenDownloadModal} 
      />

      {/* 13. Latest News, Seminars & Articles */}
      <LatestNewsSection />

      {/* 14. FAQ Accordion Section */}
      <FAQSection 
        onOpenLeadModal={() => onOpenLeadModal()} 
      />
    </main>
  );
}
