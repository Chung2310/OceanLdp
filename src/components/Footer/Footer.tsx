import React from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock, Facebook, Youtube, ShieldCheck, Award, Sparkles, Send } from 'lucide-react';
import logoImg from '../../asset/img/logo.jpg';

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full bg-[#135830] text-emerald-100 text-xs border-t border-white/15 relative overflow-hidden" aria-label="Footer Trung tâm Ngoại ngữ Green Ocean">
      
      {/* Decorative Brand Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2da15e]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#F37021]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Value Propositions Bar */}
      <div className="bg-[#0f4a27] border-b border-white/15 py-6 sm:py-7 relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0 text-[#86efac] group-hover:scale-105 transition-transform shadow-xs">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-white font-extrabold text-sm sm:text-base">6 Năm Kiến Tạo Giá Trị</h4>
                <p className="text-emerald-200/90 text-xs mt-0.5">Hơn 5.000 học viên đạt chuẩn đầu ra HSK & tự tin giao tiếp</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center shrink-0 text-[#86efac] group-hover:scale-105 transition-transform shadow-xs">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="text-white font-extrabold text-sm sm:text-base">100% Giảng Viên ThS - Tiến Sĩ</h4>
                <p className="text-emerald-200/90 text-xs mt-0.5">Giảng viên giàu kinh nghiệm từ các trường đại học danh tiếng</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#F37021]/25 border border-[#F37021]/50 flex items-center justify-center shrink-0 text-[#F37021] group-hover:scale-105 transition-transform shadow-xs">
                <Sparkles size={24} />
              </div>
              <div>
                <h4 className="text-white font-extrabold text-sm sm:text-base">Cam Kết Đầu Ra Bằng Văn Bản</h4>
                <p className="text-emerald-200/90 text-xs mt-0.5">Lộ trình chuẩn New HSK 3.0, học lại miễn phí nếu chưa đạt</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 sm:py-16 relative z-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Col 1: Brand & Contact Info (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-block bg-white p-2.5 rounded-2xl shadow-md border border-white/30">
                <img 
                  src={logoImg} 
                  alt="Trung tâm Ngoại ngữ Green Ocean" 
                  className="h-11 w-auto object-contain block"
                />
              </div>

              <div>
                <h3 className="text-base font-black text-white uppercase tracking-tight">
                  TRUNG TÂM NGOẠI NGỮ GREEN OCEAN
                </h3>
                <p className="text-xs text-[#fbcfe8]/90 font-semibold mt-1 flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#F37021]" />
                  <span className="text-amber-300 font-bold">Đến Green Ocean - Bứt phá tiếng Trung</span>
                </p>
              </div>

              <p className="text-xs text-emerald-100/90 leading-relaxed">
                Hệ thống đào tạo năng lực tiếng Trung chất lượng cao tại Bắc Ninh và học trực tuyến tương tác hai chiều toàn quốc, định hướng chuẩn New HSK 3.0 và phản xạ thực chiến.
              </p>

              <ul className="space-y-2.5 text-xs text-emerald-100 pt-1">
                <li className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#F37021] shrink-0 mt-0.5" />
                  <div className="space-y-1 leading-snug">
                    <div>
                      <strong className="text-white">Cơ sở 1:</strong> Số 567 đường Hàn Thuyên, P. Đại Phúc, TP. Bắc Ninh
                    </div>
                    <div>
                      <strong className="text-white">Cơ sở 2:</strong> Ngã 6 Phường Đại Phúc, TP. Bắc Ninh
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={15} className="text-amber-300 shrink-0" />
                  <span>Hotline tư vấn: <strong className="text-white font-extrabold text-sm tracking-wide">0961.556.677</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={15} className="text-emerald-300 shrink-0" />
                  <span>Email: <span className="text-white">contact@greenocean.edu.vn</span></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock size={15} className="text-[#F37021] shrink-0" />
                  <span>Giờ làm việc: <strong className="text-white">08:00 - 21:30</strong> (Thứ 2 - Chủ Nhật)</span>
                </li>
              </ul>
            </div>

            {/* Col 2: Training Campus Info (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/20 pb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#F37021]" />
                CƠ SỞ ĐÀO TẠO
              </h4>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-colors shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md bg-white text-[#135830] font-black text-[10px] uppercase shadow-xs">
                      Cơ sở 1
                    </span>
                    <h5 className="font-bold text-white text-xs">Hàn Thuyên – Đại Phúc</h5>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed font-medium">
                    Số 567 đường Hàn Thuyên, P. Đại Phúc, TP. Bắc Ninh
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-colors shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-300 text-[#135830] font-black text-[10px] uppercase shadow-xs">
                      Cơ sở 2
                    </span>
                    <h5 className="font-bold text-white text-xs">Ngã 6 Đại Phúc</h5>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed font-medium">
                    Ngã 6 Phường Đại Phúc, TP. Bắc Ninh
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 transition-colors shadow-xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md bg-[#F37021] text-white font-black text-[10px] uppercase shadow-xs">
                      Trực tuyến
                    </span>
                    <h5 className="font-bold text-white text-xs">Lớp Học Online Tương Tác</h5>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed">
                    Học trực tiếp 100% cùng giảng viên qua nền tảng tương tác hai chiều trên toàn quốc.
                  </p>
                </div>
              </div>
            </div>

            {/* Col 3: Courses (2.5 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/20 pb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#F37021]" />
                CHƯƠNG TRÌNH ĐÀO TẠO
              </h4>

              <ul className="space-y-2 text-xs text-emerald-100">
                <li>
                  <Link href="/khoa-hoc" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5">
                    <span className="text-amber-300 font-bold">&rsaquo;</span> Hán Ngữ Tích Hợp 3.0
                  </Link>
                </li>
                <li>
                  <Link href="/khoa-hoc" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5">
                    <span className="text-amber-300 font-bold">&rsaquo;</span> Hán Ngữ Tích Hợp 3.0 Trực Tuyến
                  </Link>
                </li>
                <li>
                  <Link href="/khoa-hoc" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5">
                    <span className="text-amber-300 font-bold">&rsaquo;</span> Khóa Luyện Thi HSK / HSKK
                  </Link>
                </li>
                <li>
                  <Link href="/khoa-hoc" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5">
                    <span className="text-amber-300 font-bold">&rsaquo;</span> Tiếng Trung Giao Tiếp Thực Chiến
                  </Link>
                </li>
                <li>
                  <Link href="/khoa-hoc" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5">
                    <span className="text-amber-300 font-bold">&rsaquo;</span> Tiếng Trung Doanh Nghiệp FDI
                  </Link>
                </li>
                <li>
                  <Link href="/khoa-hoc" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5">
                    <span className="text-amber-300 font-bold">&rsaquo;</span> Khóa Học 1 Kèm 1 Theo Yêu Cầu
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Policies & Social (2.5 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/20 pb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#F37021]" />
                CHÍNH SÁCH
              </h4>

              <ul className="space-y-2 text-xs text-emerald-100">
                <li>
                  <Link href="/chinh-sach" className="hover:text-white hover:translate-x-1 transition-all block">
                    Cam kết chất lượng
                  </Link>
                </li>
                <li>
                  <Link href="/chinh-sach" className="hover:text-white hover:translate-x-1 transition-all block">
                    Chính sách học bù & bảo lưu
                  </Link>
                </li>
                <li>
                  <Link href="/chinh-sach" className="hover:text-white hover:translate-x-1 transition-all block">
                    Chính sách thanh toán học phí
                  </Link>
                </li>
                <li>
                  <Link href="/chinh-sach" className="hover:text-white hover:translate-x-1 transition-all block">
                    Bảo mật thông tin học viên
                  </Link>
                </li>
              </ul>

              <div className="pt-2">
                <div className="text-[11px] font-black text-white mb-2 uppercase tracking-wider">
                  KẾT NỐI VỚI GREEN OCEAN
                </div>
                <div className="flex items-center gap-2">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-8 h-8 rounded-lg bg-white/15 hover:bg-[#F37021] border border-white/20 flex items-center justify-center text-white transition-all shadow-xs" 
                    title="Facebook Green Ocean"
                  >
                    <Facebook size={15} />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-8 h-8 rounded-lg bg-white/15 hover:bg-red-600 border border-white/20 flex items-center justify-center text-white transition-all shadow-xs" 
                    title="YouTube Green Ocean"
                  >
                    <Youtube size={15} />
                  </a>
                  <a 
                    href="https://zalo.me" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-8 h-8 rounded-lg bg-[#0068ff] hover:brightness-110 flex items-center justify-center text-white transition-all font-bold text-[10px] shadow-xs" 
                    title="Zalo Green Ocean"
                  >
                    Zalo
                  </a>
                  <a 
                    href="https://tiktok.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-8 h-8 rounded-lg bg-white/15 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all shadow-xs" 
                    title="TikTok Green Ocean"
                  >
                    <Send size={14} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="py-4 bg-[#0a311a] border-t border-white/15 relative z-10 text-[11px] text-emerald-200/90">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div>
            &copy; {new Date().getFullYear()} TRUNG TÂM NGOẠI NGỮ GREEN OCEAN. Tất cả quyền được bảo lưu.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-emerald-200/90">
            <span>CS1: 567 Hàn Thuyên, TP. Bắc Ninh</span>
            <span>•</span>
            <span>CS2: Ngã 6 Phường Đại Phúc, TP. Bắc Ninh</span>
            <span>•</span>
            <span>Đào tạo Trực tuyến Toàn quốc</span>
            <span>•</span>
            <span>Hotline: <strong className="text-white">0961.556.677</strong></span>
          </div>
        </div>
      </div>

    </footer>
  );
}
