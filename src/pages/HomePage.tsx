import React from 'react';
import HeroSlider from '../components/Home/HeroSlider';
import AboutEcosystemSection from '../components/Home/AboutEcosystemSection';
import WhyChooseSection from '../components/Home/WhyChooseSection';
import HSKRoadmapSection from '../components/Home/HSKRoadmapSection';
import FeaturedCourses from '../components/Home/FeaturedCourses';
import LeadBannerSection from '../components/Home/LeadBannerSection';
import TeachersSection from '../components/Home/TeachersSection';
import HallOfFameSection from '../components/Home/HallOfFameSection';
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

      {/* 2. Hệ sinh thái Đào tạo Năng lực Tiếng Trung Toàn Diện */}
      <AboutEcosystemSection
        onOpenLeadModal={() => onOpenLeadModal('Tư vấn Giới thiệu Hệ sinh thái Green Ocean')}
      />

      {/* 3. 6 Lý Do Nên Chọn Green Ocean */}
      <WhyChooseSection />

      {/* 4. Lộ trình chinh phục New HSK 3.0 Chuẩn Khảo Thí */}
      <HSKRoadmapSection
        onOpenLeadModal={() => onOpenLeadModal('Tư vấn Lộ trình Chinh phục New HSK 3.0')}
      />

      {/* 5. Featured Courses Display Showcase */}
      <FeaturedCourses
        onOpenLeadModal={(courseTitle) => onOpenLeadModal(courseTitle)}
      />

      {/* 6. Form Đăng Ký Tư Vấn Ngay Hôm Nay (Banner + Form) */}
      <LeadBannerSection
        onShowToast={onShowToast}
      />

      {/* 7. Đội Ngũ Chuyên Gia, Giảng Viên Hán Ngữ Đầu Ngành */}
      <TeachersSection />

      {/* 8. Bảng vàng thành tích học viên HSK 6 & HSK 5 cao điểm (Dual Marquee) */}
      <HallOfFameSection />
    </main>
  );
}
