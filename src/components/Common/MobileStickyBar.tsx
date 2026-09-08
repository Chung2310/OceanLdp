import React from 'react';
import { Phone, MessageCircle, FileCheck, UserPlus } from 'lucide-react';
import { Link } from 'wouter';

interface MobileStickyBarProps {
  onOpenLeadModal: () => void;
}

export default function MobileStickyBar({ onOpenLeadModal }: MobileStickyBarProps): JSX.Element {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-14 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.1)] flex items-center justify-around z-[999] border-t border-slate-200 px-2 md:hidden">
      <a href="tel:0931715889" className="flex flex-col items-center justify-center gap-0.5 text-[11px] font-bold text-[#1B7E45] flex-1 py-1">
        <Phone size={17} />
        <span>Hotline</span>
      </a>

      <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-0.5 text-[11px] font-bold text-[#0068ff] flex-1 py-1">
        <MessageCircle size={17} />
        <span>Zalo OA</span>
      </a>

      <Link href="/kiem-tra-trinh-do" className="flex flex-col items-center justify-center gap-0.5 text-[11px] font-bold text-slate-700 flex-1 py-1">
        <FileCheck size={17} className="text-[#1B7E45]" />
        <span>Test HSK</span>
      </Link>

      <button onClick={onOpenLeadModal} className="flex flex-col items-center justify-center gap-0.5 text-[11px] font-bold text-white bg-[#1B7E45] hover:bg-[#156637] rounded-xl flex-1 py-1.5 shadow-sm active:scale-95 cursor-pointer">
        <UserPlus size={16} />
        <span>Đăng Ký</span>
      </button>
    </div>
  );
}
