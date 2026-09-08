import React from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock, Facebook, Youtube, Send, ShieldCheck, Award } from 'lucide-react';
import logoImg from '../../asset/img/logo.jpg';

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full bg-[#0f172a] text-slate-400 text-xs mt-auto" aria-label="Footer website">
      {/* Top Banner Feature Bar */}
      <div className="bg-[#1E293B] py-6 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <Award className="text-[#F37021] flex-shrink-0" size={28} />
              <div>
                <div className="text-white font-bold text-sm">15 Năm Phát Triển Vững Mạnh</div>
                <div className="text-slate-400 text-xs">Hơn 100.000 học viên tin tưởng theo học</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-[#1B7E45] flex-shrink-0" size={28} />
              <div>
                <div className="text-white font-bold text-sm">100% Giảng Viên ThS - Tiến Sĩ</div>
                <div className="text-slate-400 text-xs">Đến từ các trường ĐH danh tiếng trong và ngoài nước</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-[#F37021] flex-shrink-0" size={28} />
              <div>
                <div className="text-white font-bold text-sm">Hệ Thống 20+ Cơ Sở Toàn Quốc</div>
                <div className="text-slate-400 text-xs">Hà Nội, TP.HCM, Bắc Ninh, Đà Nẵng...</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1: Legal & Company Info */}
            <div className="space-y-3">
              <div className="inline-block bg-white p-2 rounded-xl mb-2">
                <img 
                  src={logoImg} 
                  alt="THANHMAIHSK" 
                  style={{ maxHeight: '44px', width: 'auto' }}
                  className="h-10 w-auto object-contain block"
                />
              </div>
              <p className="text-xs font-bold text-white leading-relaxed">
                CÔNG TY TNHH PHÁT TRIỂN GIÁO DỤC VÀ HỢP TÁC QUỐC TẾ THANHMAIHSK
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><strong className="text-slate-200">Số ĐKKD:</strong> 0106852149 do Sở KHĐT TP.Hà Nội cấp ngày 25/05/2015</li>
                <li><strong className="text-slate-200">Trụ sở:</strong> Số 9 ngõ 49 Huỳnh Thúc Kháng, P. Láng Hạ, Q. Đống Đa, Hà Nội</li>
                <li className="flex items-center gap-1.5"><Clock size={13} className="text-[#1B7E45]" /> <span>08:00 - 21:30 (Thứ 2 - Chủ Nhật)</span></li>
                <li className="flex items-center gap-1.5"><Phone size={13} className="text-[#F37021]" /> <strong className="text-white">0931.715.889</strong></li>
                <li className="flex items-center gap-1.5"><Mail size={13} className="text-[#1B7E45]" /> <span>marketing@tmedu.vn</span></li>
              </ul>
              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-[11px] text-emerald-400 font-semibold">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Đã thông báo Bộ Công Thương</span>
                </div>
              </div>
            </div>

            {/* Col 2: Hanoi Branches */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">CƠ SỞ TẠI HÀ NỘI</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><strong className="text-slate-200">Đống Đa:</strong> Số 9 ngõ 49 Huỳnh Thúc Kháng</li>
                <li><strong className="text-slate-200">Cầu Giấy 1:</strong> Số 8 ngõ 72 Dương Khuê</li>
                <li><strong className="text-slate-200">Cầu Giấy 2:</strong> Số 25 Phạm Tuấn Tài</li>
                <li><strong className="text-slate-200">Hai Bà Trưng:</strong> Số 311 Trần Đại Nghĩa</li>
                <li><strong className="text-slate-200">Hà Đông:</strong> Số 139K Chiến Thắng</li>
                <li><strong className="text-slate-200">Mỹ Đình:</strong> Số 46 Nguyễn Hoàng</li>
                <li><strong className="text-slate-200">Gia Lâm:</strong> SP16-79 Ocean Park, Gia Lâm</li>
                <li><strong className="text-slate-200">Times City:</strong> Số 458 Minh Khai, HBT</li>
                <li><strong className="text-slate-200">Bách Khoa:</strong> Tầng 1, Tòa C3B ĐH Bách Khoa</li>
              </ul>
            </div>

            {/* Col 3: HCM & Province Branches */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">CƠ SỞ TP.HCM & CÁC TỈNH</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><strong className="text-slate-200">Quận 1:</strong> 345/84 Trần Hưng Đạo, P. Cầu Kho</li>
                <li><strong className="text-slate-200">Tân Bình:</strong> 67 Nguyễn Thái Bình, P. 4</li>
                <li><strong className="text-slate-200">Bình Thạnh:</strong> 168/19 Nguyễn Gia Trí, P. 25</li>
                <li><strong className="text-slate-200">Thuận An:</strong> 262/3A Thủ Khoa Huân, Bình Dương</li>
                <li><strong className="text-slate-200">Bắc Ninh:</strong> ParkView City, 125 Huyền Quang</li>
                <li><strong className="text-slate-200">Đà Nẵng:</strong> 186 Nguyễn Thị Minh Khai, Hải Châu</li>
                <li><strong className="text-slate-200">Thái Bình:</strong> 114 Nguyễn Văn Năng, TP. Thái Bình</li>
                <li><strong className="text-slate-200">Hưng Yên:</strong> Số 36 Thủy Nguyên, KĐT Ecopark</li>
              </ul>
            </div>

            {/* Col 4: Quick Links & Policies */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">QUY ĐỊNH & CHÍNH SÁCH</h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><Link href="/chinh-sach/chinh-sach-thanh-toan" className="hover:text-white transition-colors">Chính sách thanh toán học phí</Link></li>
                <li><Link href="/chinh-sach/chinh-sach-bao-luu-chuyen-lop" className="hover:text-white transition-colors">Chính sách bảo lưu & chuyển lớp</Link></li>
                <li><Link href="/chinh-sach/chinh-sach-xu-ly-khieu-nai" className="hover:text-white transition-colors">Chính sách xử lý khiếu nại</Link></li>
                <li><Link href="/chinh-sach/chinh-sach-bao-mat-thong-tin" className="hover:text-white transition-colors">Chính sách bảo mật thông tin</Link></li>
                <li><Link href="/gioi-thieu" className="hover:text-white transition-colors">Về Thanhmaihsk (15 năm phát triển)</Link></li>
                <li><Link href="/nhuong-quyen" className="hover:text-white transition-colors">Hợp tác & Nhượng quyền thương hiệu</Link></li>
                <li><Link href="/tin-tuc" className="hover:text-white transition-colors">Tin tức & Cẩm nang học tiếng Trung</Link></li>
              </ul>

              <div className="pt-3">
                <div className="text-[11px] font-bold text-slate-300 mb-2 uppercase tracking-wider">THEO DÕI CHÚNG TÔI</div>
                <div className="flex items-center gap-2">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#1B7E45] flex items-center justify-center text-white transition-colors" title="Facebook">
                    <Facebook size={14} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors" title="YouTube">
                    <Youtube size={14} />
                  </a>
                  <a href="https://zalo.me" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-[#0068ff] flex items-center justify-center text-white transition-colors" title="Zalo">
                    <span className="text-[10px] font-black">Zalo</span>
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#1B7E45] flex items-center justify-center text-white transition-colors" title="TikTok">
                    <Send size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="py-4 bg-[#09101d] border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} THANHMAIHSK. Tất cả quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-2">
            <Link href="/chinh-sach/chinh-sach-bao-mat-thong-tin" className="hover:text-slate-300">Bảo Mật</Link>
            <span>•</span>
            <Link href="/chinh-sach/chinh-sach-thanh-toan" className="hover:text-slate-300">Điều Khoản</Link>
            <span>•</span>
            <Link href="/he-thong-co-so" className="hover:text-slate-300">Hệ Thống Cơ Sở</Link>
            <span>•</span>
            <Link href="/admin" className="hover:text-slate-300 opacity-60">Quản Trị CRM</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
