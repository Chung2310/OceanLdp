import React, { useState } from 'react';
import { Link } from 'wouter';
import { X, ChevronRight, Phone, Calendar, MapPin, BookOpen, GraduationCap, HelpCircle, PhoneCall } from 'lucide-react';
import logoImg from '../../asset/img/logo.jpg';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLeadModal: () => void;
}

export default function MobileMenu({ isOpen, onClose, onOpenLeadModal }: MobileMenuProps): JSX.Element | null {
  const [coursesExpanded, setCoursesExpanded] = useState<boolean>(false);
  const [aboutExpanded, setAboutExpanded] = useState<boolean>(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[1100] flex justify-end" onClick={onClose}>
      <div
        className="w-80 max-w-[85vw] h-full bg-white flex flex-col shadow-2xl animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="GREEN OCEAN"
              style={{ maxHeight: '36px', width: 'auto' }}
              className="h-9 w-auto object-contain block"
            />
          </div>
          <button className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-between">
          <ul className="space-y-1 list-none p-0 m-0">
            <li>
              <Link href="/" className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-slate-800 hover:bg-slate-50 hover:text-[#1B7E45] transition-colors" onClick={onClose}>
                Trang Chủ
              </Link>
            </li>

            {/* Giới Thiệu Accordion */}
            <li>
              <div
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-sm text-slate-800 hover:bg-slate-50 hover:text-[#1B7E45] transition-colors cursor-pointer"
                onClick={() => setAboutExpanded(!aboutExpanded)}
              >
                <span>Giới Thiệu</span>
                <ChevronRight size={16} className={`transition-transform duration-200 ${aboutExpanded ? 'rotate-90' : ''}`} />
              </div>
              {aboutExpanded && (
                <ul className="pl-4 py-1 space-y-1 bg-slate-50 rounded-xl my-1 list-none">
                  <li>
                    <Link href="/gioi-thieu" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#1B7E45]" onClick={onClose}>
                      Về chúng tôi (Thương hiệu 15 năm)
                    </Link>
                  </li>
                  <li>
                    <Link href="/doi-ngu-giang-vien" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#1B7E45]" onClick={onClose}>
                      Đội ngũ Giảng viên (100% ThS/TS)
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Khóa Học Accordion */}
            <li>
              <div
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-sm text-slate-800 hover:bg-slate-50 hover:text-[#1B7E45] transition-colors cursor-pointer"
                onClick={() => setCoursesExpanded(!coursesExpanded)}
              >
                <span>Khóa Học Tiếng Trung</span>
                <ChevronRight size={16} className={`transition-transform duration-200 ${coursesExpanded ? 'rotate-90' : ''}`} />
              </div>
              {coursesExpanded && (
                <ul className="pl-4 py-1 space-y-1 bg-slate-50 rounded-xl my-1 list-none">
                  <li>
                    <Link href="/khoa-hoc/hsk-1-nen-tang-tieng-trung" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#1B7E45]" onClick={onClose}>
                      HSK 1 – Nền Tảng Tiếng Trung
                    </Link>
                  </li>
                  <li>
                    <Link href="/khoa-hoc/hsk-2-cung-co-nen-tang" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#1B7E45]" onClick={onClose}>
                      HSK 2 – Củng Cố Nền Tảng
                    </Link>
                  </li>
                  <li>
                    <Link href="/khoa-hoc/hsk-3-phat-trien-toan-dien" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#1B7E45]" onClick={onClose}>
                      HSK 3 – Phát Triển Toàn Diện
                    </Link>
                  </li>
                  <li>
                    <Link href="/khoa-hoc/hsk-4-nang-cao-nang-luc" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#1B7E45]" onClick={onClose}>
                      HSK 4 – Nâng Cao Năng Lực
                    </Link>
                  </li>
                  <li>
                    <Link href="/khoa-hoc/hsk-5-thanh-thao-chuyen-sau" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#1B7E45]" onClick={onClose}>
                      HSK 5 – Thành Thạo & Chuyên Sâu
                    </Link>
                  </li>
                  <li>
                    <Link href="/khoa-hoc/khoa-hoc-giao-tiep-cap-toc" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#1B7E45]" onClick={onClose}>
                      Khóa Giao Tiếp Cấp Tốc
                    </Link>
                  </li>
                  <li>
                    <Link href="/khoa-hoc/tieng-trung-tre-em" className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#1B7E45]" onClick={onClose}>
                      Tiếng Trung Trẻ Em (6–15 tuổi)
                    </Link>
                  </li>
                  <li>
                    <Link href="/khoa-hoc" className="block px-3 py-1.5 text-xs font-bold text-[#1B7E45]" onClick={onClose}>
                      Xem tất cả các khóa học &rarr;
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/lich-khai-giang" className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-slate-800 hover:bg-slate-50 hover:text-[#1B7E45] transition-colors" onClick={onClose}>
                <Calendar size={16} className="text-[#1B7E45]" /> Lịch Khai Giảng
              </Link>
            </li>

            <li>
              <div className="px-3.5 pt-2 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">Hệ thống cơ sở</div>
              <Link href="/he-thong-co-so" className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg font-bold text-sm text-slate-800 hover:bg-slate-50 hover:text-[#1B7E45] transition-colors" onClick={onClose}>
                <MapPin size={16} className="text-[#1B7E45]" /> Tất Cả Cơ Sở Đào Tạo
              </Link>
              <div className="pl-6 space-y-1 mt-1 border-l-2 border-slate-100 ml-5">
                <Link href="/he-thong-co-so/han-thuyen-bac-ninh" className="block py-1.5 text-xs text-slate-600 hover:text-[#1B7E45]" onClick={onClose}>
                  • Cơ sở 1: Hàn Thuyên – Bắc Ninh
                </Link>
                <Link href="/he-thong-co-so/nga-6-dai-phuc" className="block py-1.5 text-xs text-slate-600 hover:text-[#1B7E45]" onClick={onClose}>
                  • Cơ sở 2: Ngã 6 Đại Phúc – Bắc Ninh
                </Link>
                <Link href="/he-thong-co-so/online-nationwide" className="block py-1.5 text-xs text-slate-600 hover:text-[#1B7E45]" onClick={onClose}>
                  • Lớp Học Trực Tuyến Toàn Quốc
                </Link>
              </div>
            </li>

            <li>
              <Link href="/du-hoc-trung-quoc" className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-slate-800 hover:bg-slate-50 hover:text-[#1B7E45] transition-colors" onClick={onClose}>
                <GraduationCap size={16} className="text-[#1B7E45]" /> Du Học & Học Bổng
              </Link>
            </li>

            <li>
              <Link href="/thu-vien-tai-lieu" className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-slate-800 hover:bg-slate-50 hover:text-[#1B7E45] transition-colors" onClick={onClose}>
                <BookOpen size={16} className="text-[#F37021]" /> Thư Viện Ebook Miễn Phí
              </Link>
            </li>

            <li>
              <Link href="/tin-tuc" className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-slate-800 hover:bg-slate-50 hover:text-[#1B7E45] transition-colors" onClick={onClose}>
                Tin Tức & Cẩm Nang
              </Link>
            </li>

            <li>
              <Link href="/kiem-tra-trinh-do" className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-slate-800 hover:bg-slate-50 hover:text-[#1B7E45] transition-colors" onClick={onClose}>
                <HelpCircle size={16} className="text-[#1B7E45]" /> Test Năng Lực Trực Tuyến
              </Link>
            </li>

            <li>
              <Link href="/nhuong-quyen" className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-bold text-sm text-[#1B7E45] hover:bg-slate-50 transition-colors" onClick={onClose}>
                Hợp Tác Nhượng Quyền
              </Link>
            </li>

            <li>
              <Link href="/lien-he" className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl font-semibold text-sm text-slate-800 hover:bg-slate-50 hover:text-[#1B7E45] transition-colors" onClick={onClose}>
                Liên Hệ Trực Tiếp
              </Link>
            </li>
          </ul>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <button
              className="w-full h-11 bg-[#1B7E45] hover:bg-[#156637] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              onClick={onOpenLeadModal}
            >
              <PhoneCall size={16} /> ĐĂNG KÝ TƯ VẤN NGAY
            </button>
            <a href="tel:0931715889" className="flex items-center justify-center gap-2 text-xs text-slate-700 font-medium">
              <Phone size={14} className="text-[#F37021]" /> Hotline: <strong className="text-slate-900">0931.715.889</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
