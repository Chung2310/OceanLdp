import React, { useState, lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import FloatingContact from './components/Common/FloatingContact';
import LeadModal from './components/Common/LeadModal';
import DownloadModal from './components/Common/DownloadModal';
import Toast from './components/Common/Toast';

import HomePage from './pages/HomePage';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage'));
const SchedulePage = lazy(() => import('./pages/SchedulePage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage'));
const BranchesPage = lazy(() => import('./pages/BranchesPage'));
const BranchDetailPage = lazy(() => import('./pages/BranchDetailPage'));
const StudyAbroadPage = lazy(() => import('./pages/StudyAbroadPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ResourceDetailPage = lazy(() => import('./pages/ResourceDetailPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));
const FranchisePage = lazy(() => import('./pages/FranchisePage'));
const PlacementTestPage = lazy(() => import('./pages/PlacementTestPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PolicyPage = lazy(() => import('./pages/PolicyPage'));
const AdminPage = lazy(() => import('./pages/AdminContentPage'));
import MobileStickyBar from './components/Common/MobileStickyBar';
import { ResourceItem } from './types';

export default function App(): JSX.Element {
  const [location] = useLocation();
  const isAdmin = location === '/admin' || location.startsWith('/admin/');

  // Lead modal state
  const [leadModalOpen, setLeadModalOpen] = useState<boolean>(false);
  const [selectedCourseForLead, setSelectedCourseForLead] = useState<string>('');

  // Download modal state
  const [downloadModalOpen, setDownloadModalOpen] = useState<boolean>(false);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | { title: string; format: string; size: string; downloads: string; image: string } | null>(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenLeadModal = (courseTitle: string = '') => {
    setSelectedCourseForLead(courseTitle);
    setLeadModalOpen(true);
  };

  const handleOpenDownloadModal = (res: ResourceItem | { title: string; format: string; size: string; downloads: string; image: string }) => {
    setSelectedResource(res);
    setDownloadModalOpen(true);
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="app-root-layout">
      {/* Main Sticky Navbar & Mega Menu */}
      {!isAdmin && <Navbar onOpenLeadModal={handleOpenLeadModal} />}

      {/* Main Router View */}
      <div className="main-content-view">
        <Suspense fallback={<div className="min-h-[60vh] grid place-items-center text-slate-500" role="status">?ang t?i trang?</div>}>
        <Switch>
          <Route path="/">
            <HomePage 
              onOpenLeadModal={handleOpenLeadModal} 
              onOpenDownloadModal={handleOpenDownloadModal}
              onShowToast={handleShowToast}
            />
          </Route>

          <Route path="/gioi-thieu">
            <AboutPage onOpenLeadModal={() => handleOpenLeadModal()} />
          </Route>

          <Route path="/doi-ngu-giang-vien">
            <TeachersPage onOpenLeadModal={() => handleOpenLeadModal()} />
          </Route>

          <Route path="/khoa-hoc">
            <CoursesPage onOpenLeadModal={handleOpenLeadModal} />
          </Route>

          <Route path="/khoa-hoc/:slug">
            <CourseDetailPage onOpenLeadModal={handleOpenLeadModal} />
          </Route>

          <Route path="/lich-khai-giang">
            <SchedulePage onOpenLeadModal={handleOpenLeadModal} />
          </Route>

          <Route path="/he-thong-co-so">
            <BranchesPage />
          </Route>

          <Route path="/he-thong-co-so/:id">
            <BranchDetailPage onOpenLeadModal={handleOpenLeadModal} />
          </Route>

          <Route path="/co-so/:id">
            <BranchDetailPage onOpenLeadModal={handleOpenLeadModal} />
          </Route>

          <Route path="/du-hoc-trung-quoc">
            <StudyAbroadPage onOpenLeadModal={handleOpenLeadModal} />
          </Route>

          <Route path="/thu-vien-tai-lieu">
            <ResourcesPage />
          </Route>

          <Route path="/thu-vien-tai-lieu/:slug">
            <ResourceDetailPage />
          </Route>

          <Route path="/thu-vien/:slug">
            <ResourceDetailPage />
          </Route>

          <Route path="/tin-tuc">
            <NewsPage />
          </Route>

          <Route path="/tin-tuc/:slug">
            <NewsDetailPage />
          </Route>

          <Route path="/nhuong-quyen">
            <FranchisePage onShowToast={handleShowToast} />
          </Route>

          <Route path="/kiem-tra-trinh-do">
            <PlacementTestPage onOpenLeadModal={handleOpenLeadModal} />
          </Route>

          <Route path="/lien-he">
            <ContactPage onShowToast={handleShowToast} />
          </Route>

          <Route path="/chinh-sach/:tab*">
            <PolicyPage />
          </Route>

          <Route path="/admin">
            <AdminPage />
          </Route>

          {/* 404 Fallback */}
          <Route>
            <div className="container section-padding text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <h1 style={{ fontSize: '3rem', color: '#0f2942' }}>404</h1>
              <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Trang bạn tìm kiếm không tồn tại hoặc đã được cập nhật.</p>
              <a href="/" className="btn btn-primary btn-lg">Quay về Trang Chủ</a>
            </div>
          </Route>
        </Switch>
        </Suspense>
      </div>

      {/* Floating Action Buttons */}
      {!isAdmin && <FloatingContact />}

      {/* Mobile Sticky Bottom Action Bar */}
      {!isAdmin && <MobileStickyBar onOpenLeadModal={() => handleOpenLeadModal()} />}

      {/* Lead Registration Modal */}
      <LeadModal 
        isOpen={leadModalOpen} 
        onClose={() => setLeadModalOpen(false)} 
        defaultCourse={selectedCourseForLead}
        onShowToast={handleShowToast}
      />

      {/* Free Ebook Download Modal */}
      <DownloadModal 
        resource={selectedResource}
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        onShowToast={handleShowToast}
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage(null)} 
        />
      )}

      {/* Main Footer */}
      {!isAdmin && <Footer />}
    </div>
  );
}
