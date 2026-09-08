import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronDown, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import logoImg from '../../asset/img/logo.jpg';

interface NavbarProps {
  onOpenLeadModal: (courseTitle?: string) => void;
}

export default function Navbar({ onOpenLeadModal }: NavbarProps): JSX.Element {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`bg-white border-b border-slate-100 sticky top-0 z-[990] w-full transition-all duration-200 ${isScrolled ? 'shadow-md' : 'shadow-[0_1px_3px_rgba(0,0,0,0.04)]'}`}>
        <div className={`max-w-[1360px] mx-auto px-6 flex items-center justify-between transition-all duration-200 ${isScrolled ? 'min-h-[72px] py-2' : 'min-h-[95px] py-3'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 mr-8 lg:mr-11">
            <img 
              src={logoImg} 
              alt="THANHMAIHSK"
              style={{ maxHeight: isScrolled ? '52px' : '62px', width: 'auto' }}
              className={`w-auto object-contain block transition-all duration-200 ${isScrolled ? 'h-[52px]' : 'h-[62px]'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center">
            <ul className="flex items-center list-none m-0 p-0 gap-1 font-['Montserrat',sans-serif]">
              {/* 1. TRANG CHỦ */}
              <li className="relative">
                <Link 
                  href="/" 
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-[12.8px] font-semibold uppercase tracking-[0.25px] whitespace-nowrap transition-colors leading-tight ${
                    location === '/' ? 'text-[#1B7E45]' : 'text-[#1E293B] hover:text-[#1B7E45]'
                  }`}
                >
                  TRANG CHỦ
                </Link>
              </li>

              {/* 2. GIỚI THIỆU */}
              <li 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/gioi-thieu" 
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-[12.8px] font-semibold uppercase tracking-[0.25px] whitespace-nowrap transition-colors leading-tight ${
                    location.startsWith('/gioi-thieu') || location.startsWith('/doi-ngu-giang-vien') ? 'text-[#1B7E45]' : 'text-[#1E293B] hover:text-[#1B7E45]'
                  }`}
                >
                  GIỚI THIỆU <ChevronDown size={12} strokeWidth={2.2} className="opacity-60 group-hover:text-[#1B7E45] group-hover:opacity-100 transition-opacity" />
                </Link>

                {activeDropdown === 'about' && (
                  <ul className="absolute top-full left-0 bg-white shadow-xl border border-slate-100 rounded-xl py-2 list-none m-0 min-w-[220px] z-[1000] animate-in fade-in duration-150">
                    <li>
                      <Link href="/gioi-thieu" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">
                        Về chúng tôi
                      </Link>
                    </li>
                    <li>
                      <Link href="/doi-ngu-giang-vien" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">
                        Đội ngũ Giảng viên
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* 3. KHÓA HỌC */}
              <li 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('courses')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/khoa-hoc" 
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-[12.8px] font-semibold uppercase tracking-[0.25px] whitespace-nowrap transition-colors leading-tight ${
                    location.startsWith('/khoa-hoc') ? 'text-[#1B7E45]' : 'text-[#1E293B] hover:text-[#1B7E45]'
                  }`}
                >
                  KHÓA HỌC <ChevronDown size={12} strokeWidth={2.2} className="opacity-60 group-hover:text-[#1B7E45] group-hover:opacity-100 transition-opacity" />
                </Link>

                {activeDropdown === 'courses' && (
                  <ul className="absolute top-full left-0 bg-white shadow-xl border border-slate-100 rounded-xl py-2 list-none m-0 min-w-[320px] z-[1000] animate-in fade-in duration-150">
                    <li>
                      <Link href="/khoa-hoc/khoa-tieng-trung-co-ban-han-ngu-tich-hop-hsk3" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">
                        Khóa Tiếng Trung Cơ Bản (4 Kỹ Năng)
                      </Link>
                    </li>
                    <li>
                      <Link href="/khoa-hoc?cat=online" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">
                        Khóa Tiếng Trung Trực Tuyến (Online)
                      </Link>
                    </li>
                    <li>
                      <Link href="/khoa-hoc?cat=hsk-hskk" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">
                        Khóa luyện thi HSK (HSK 3 - 6)
                      </Link>
                    </li>
                    <li>
                      <Link href="/khoa-hoc?cat=hsk-hskk" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">
                        Khóa Luyện thi HSKK Trung cấp – Cao cấp
                      </Link>
                    </li>
                    <li>
                      <Link href="/khoa-hoc?cat=thpt-d4" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">
                        Khóa luyện thi tiếng Trung TN THPT (D4)
                      </Link>
                    </li>
                    <li>
                      <Link href="/khoa-hoc?cat=doanh-nghiep" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">
                        Khóa Tiếng Trung Doanh Nghiệp
                      </Link>
                    </li>
                    <li>
                      <Link href="/khoa-hoc?cat=giao-tiep" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">
                        Khóa tiếng Trung giao tiếp
                      </Link>
                    </li>
                    <li>
                      <Link href="/khoa-hoc?cat=tre-em" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">
                        Khoá Tiếng Trung Trẻ Em
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* 4. LỊCH KHAI GIẢNG */}
              <li className="relative">
                <Link 
                  href="/lich-khai-giang" 
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-[12.8px] font-semibold uppercase tracking-[0.25px] whitespace-nowrap transition-colors leading-tight ${
                    location === '/lich-khai-giang' ? 'text-[#1B7E45]' : 'text-[#1E293B] hover:text-[#1B7E45]'
                  }`}
                >
                  LỊCH KHAI GIẢNG
                </Link>
              </li>

              {/* 5. HỆ THỐNG CƠ SỞ */}
              <li 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('branches')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/he-thong-co-so" 
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-[12.8px] font-semibold uppercase tracking-[0.25px] whitespace-nowrap transition-colors leading-tight ${
                    location === '/he-thong-co-so' ? 'text-[#1B7E45]' : 'text-[#1E293B] hover:text-[#1B7E45]'
                  }`}
                >
                  HỆ THỐNG CƠ SỞ <ChevronDown size={12} strokeWidth={2.2} className="opacity-60 group-hover:text-[#1B7E45] group-hover:opacity-100 transition-opacity" />
                </Link>

                {activeDropdown === 'branches' && (
                  <ul className="absolute top-full left-0 bg-white shadow-xl border border-slate-100 rounded-xl py-2 list-none m-0 min-w-[260px] z-[1000] animate-in fade-in duration-150">
                    <li className="px-4 pt-2 pb-1 text-[11px] font-extrabold text-[#1B7E45] uppercase tracking-wider">CƠ SỞ HÀ NỘI</li>
                    <li><Link href="/he-thong-co-so" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Cơ sở Mỹ Đình – HN</Link></li>
                    <li><Link href="/he-thong-co-so" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Cơ sở Hai Bà Trưng – HN</Link></li>
                    <li><Link href="/he-thong-co-so" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Cơ sở Cầu Giấy – HN</Link></li>
                    <li><Link href="/he-thong-co-so" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Cơ sở Đống Đa – HN</Link></li>
                    <li><Link href="/he-thong-co-so" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Cơ sở Hà Đông – HN</Link></li>
                    <li><Link href="/he-thong-co-so" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Cơ sở Times City – HN</Link></li>
                    <li className="px-4 pt-3 pb-1 text-[11px] font-extrabold text-[#1B7E45] uppercase tracking-wider">CƠ SỞ TP. HỒ CHÍ MINH</li>
                    <li><Link href="/he-thong-co-so" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Cơ sở Quận 1 – HCM</Link></li>
                    <li><Link href="/he-thong-co-so" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Cơ sở Tân Bình – HCM</Link></li>
                    <li><Link href="/he-thong-co-so" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Cơ sở Bình Thạnh – HCM</Link></li>
                  </ul>
                )}
              </li>

              {/* 6. TIN TỨC */}
              <li 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('news')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/tin-tuc" 
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-[12.8px] font-semibold uppercase tracking-[0.25px] whitespace-nowrap transition-colors leading-tight ${
                    location.startsWith('/tin-tuc') ? 'text-[#1B7E45]' : 'text-[#1E293B] hover:text-[#1B7E45]'
                  }`}
                >
                  TIN TỨC <ChevronDown size={12} strokeWidth={2.2} className="opacity-60 group-hover:text-[#1B7E45] group-hover:opacity-100 transition-opacity" />
                </Link>

                {activeDropdown === 'news' && (
                  <ul className="absolute top-full left-0 bg-white shadow-xl border border-slate-100 rounded-xl py-2 list-none m-0 min-w-[220px] z-[1000] animate-in fade-in duration-150">
                    <li><Link href="/tin-tuc" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Thanhmaihsk</Link></li>
                    <li><Link href="/tin-tuc" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Viện Bác Nhã</Link></li>
                    <li><Link href="/tin-tuc" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Hội Thảo Khoa Học</Link></li>
                    <li><Link href="/du-hoc-trung-quoc" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Du học Trung Quốc</Link></li>
                    <li><Link href="/tin-tuc" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Khám Phá Trung Quốc</Link></li>
                    <li><Link href="/tin-tuc" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Tuyển Dụng</Link></li>
                  </ul>
                )}
              </li>

              {/* 7. THƯ VIỆN */}
              <li 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('library')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href="/thu-vien-tai-lieu" 
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-[12.8px] font-semibold uppercase tracking-[0.25px] whitespace-nowrap transition-colors leading-tight ${
                    location === '/thu-vien-tai-lieu' ? 'text-[#1B7E45]' : 'text-[#1E293B] hover:text-[#1B7E45]'
                  }`}
                >
                  THƯ VIỆN <ChevronDown size={12} strokeWidth={2.2} className="opacity-60 group-hover:text-[#1B7E45] group-hover:opacity-100 transition-opacity" />
                </Link>

                {activeDropdown === 'library' && (
                  <ul className="absolute top-full left-0 bg-white shadow-xl border border-slate-100 rounded-xl py-2 list-none m-0 min-w-[240px] z-[1000] animate-in fade-in duration-150">
                    <li><Link href="/thu-vien-tai-lieu" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">HSK và HSKK</Link></li>
                    <li><Link href="/thu-vien-tai-lieu" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Từ Vựng Tiếng Trung</Link></li>
                    <li><Link href="/thu-vien-tai-lieu" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Ngữ Pháp Tiếng Trung</Link></li>
                    <li><Link href="/thu-vien-tai-lieu" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Thành Ngữ Tiếng Trung</Link></li>
                    <li><Link href="/thu-vien-tai-lieu" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Phương pháp học tiếng Trung</Link></li>
                    <li><Link href="/thu-vien-tai-lieu" className="block px-4 py-2 text-[13px] font-medium text-[#1E293B] hover:bg-[#EAF5EE] hover:text-[#1B7E45] transition-colors">Kho sách, tài liệu học tiếng Trung</Link></li>
                  </ul>
                )}
              </li>

              {/* 8. NHƯỢNG QUYỀN */}
              <li className="relative">
                <Link 
                  href="/nhuong-quyen" 
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-[12.8px] font-semibold uppercase tracking-[0.25px] whitespace-nowrap transition-colors leading-tight ${
                    location === '/nhuong-quyen' ? 'text-[#1B7E45]' : 'text-[#1E293B] hover:text-[#1B7E45]'
                  }`}
                >
                  NHƯỢNG QUYỀN
                </Link>
              </li>

              {/* 9. ĐĂNG KÝ */}
              <li className="relative ml-2">
                <button 
                  onClick={() => onOpenLeadModal()} 
                  className="bg-[#1B7E45] hover:bg-[#156637] text-white px-3.5 py-1.5 rounded-full font-bold text-[12.8px] tracking-[0.25px] shadow-sm hover:shadow transition-all active:scale-95 cursor-pointer uppercase"
                >
                  ĐĂNG KÝ
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            className="xl:hidden p-2 text-[#1E293B] cursor-pointer" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Mở Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        onOpenLeadModal={() => {
          setMobileMenuOpen(false);
          onOpenLeadModal();
        }}
      />
    </>
  );
}
