import React from 'react';
import { Phone, Mail, Clock, Facebook, Youtube, Send, Sparkles } from 'lucide-react';

export default function Topbar(): JSX.Element {
  return (
    <div className="w-full bg-[#1E293B] text-slate-300 text-xs border-b border-white/10 relative z-50">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex items-center justify-between h-9">
          {/* Left info */}
          <div className="flex items-center gap-3">
            <a href="tel:0931715889" className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#2da15e] transition-colors">
              <Phone size={13} className="text-[#F37021]" />
              <span>Hotline: <strong className="text-white">0931.715.889</strong></span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a href="mailto:marketing@tmedu.vn" className="hidden sm:inline-flex items-center gap-1.5 text-slate-200 hover:text-[#2da15e] transition-colors">
              <Mail size={13} className="text-[#1B7E45]" />
              <span>marketing@tmedu.vn</span>
            </a>
            <span className="text-white/20 hidden lg:inline">|</span>
            <div className="hidden lg:inline-flex items-center gap-1.5 text-slate-400">
              <Clock size={13} className="text-[#1B7E45]" />
              <span>08:00 - 21:30 (Mở cả tuần)</span>
            </div>
          </div>

          {/* Center highlight promo ticker */}
          <div className="hidden xl:flex items-center">
            <div className="inline-flex items-center gap-1.5 bg-[#1B7E45]/20 text-[#bbf0d2] px-3 py-0.5 rounded-full text-[11px] border border-[#1B7E45]/30">
              <Sparkles size={12} className="text-[#F37021]" />
              <span><strong>ƯU ĐÃI THÁNG NÀY:</strong> Giảm tới 35% học phí + Tặng trọn bộ giáo trình Msutong độc quyền!</span>
            </div>
          </div>

          {/* Right socials */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-[11px] text-slate-400">Kết nối:</span>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#1B7E45] flex items-center justify-center text-white transition-all" title="Facebook">
              <Facebook size={12} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-all" title="YouTube">
              <Youtube size={12} />
            </a>
            <a href="https://zalo.me" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-[#0068ff] flex items-center justify-center text-white transition-all" title="Zalo">
              <span className="text-[9px] font-black">Zalo</span>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#1B7E45] flex items-center justify-center text-white transition-all" title="TikTok">
              <Send size={11} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
