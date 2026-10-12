import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, Facebook } from 'lucide-react';
import { CONTACT, CONTACT_LINKS } from '../../config/contact';

export default function FloatingContact(): JSX.Element {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      {/* Hotline Call Button */}
      <a 
        href={CONTACT_LINKS.hotline}
        className="relative w-12 h-12 rounded-full bg-[#1B7E45] hover:bg-[#156637] text-white flex items-center justify-center shadow-xl transition-all hover:scale-110" 
        title={`Gọi Hotline: ${CONTACT.hotlineDisplay}`}
      >
        <Phone size={22} />
        <span className="absolute inset-0 rounded-full bg-[#1B7E45] opacity-50 animate-ping pointer-events-none"></span>
      </a>

      {/* Zalo Chat Button */}
      <a 
        href={CONTACT_LINKS.zaloPrimary}
        target="_blank" 
        rel="noreferrer" 
        className="w-12 h-12 rounded-full bg-[#0068ff] hover:bg-blue-700 text-white flex items-center justify-center shadow-xl transition-all hover:scale-110 text-xs font-black"
        title={`Chat Zalo: ${CONTACT.zaloPrimary}`}
      >
        <span>Zalo 1</span>
      </a>

      {/* Secondary personal Zalo */}
      <a 
        href={CONTACT_LINKS.zaloSecondary}
        target="_blank" 
        rel="noreferrer" 
        className="w-12 h-12 rounded-full bg-[#0068ff] hover:bg-blue-700 text-white flex items-center justify-center shadow-xl transition-all hover:scale-110 text-xs font-black"
        title={`Chat Zalo: ${CONTACT.zaloSecondary}`}>
        <span>Zalo 2</span>
      </a>

      {/* Facebook Page */}
      <a
        href={CONTACT_LINKS.facebookPage}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-[#1877F2] hover:bg-[#1264d6] text-white flex items-center justify-center shadow-xl transition-all hover:scale-110"
        title="Facebook Green Ocean"
      >
        <Facebook size={22} />
      </a>

      {/* Back to Top */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop} 
          className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-md transition-all hover:scale-110 backdrop-blur-sm cursor-pointer animate-in fade-in" 
          title="Lên đầu trang"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
