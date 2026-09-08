import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'warning';
  onClose: () => void;
}

export default function Toast({ message, type = 'success', onClose }: ToastProps): JSX.Element {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div 
      className={`fixed top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-3 z-[2000] max-w-md border border-slate-200 animate-in fade-in slide-in-from-top-4 duration-300 ${
        type === 'warning' ? 'border-l-4 border-l-amber-500' : 'border-l-4 border-l-[#1B7E45]'
      }`}
    >
      {type === 'success' ? (
        <CheckCircle size={20} className="text-[#1B7E45] flex-shrink-0" />
      ) : (
        <AlertCircle size={20} className="text-amber-500 flex-shrink-0" />
      )}
      <span className="text-xs md:text-sm font-semibold text-[#1E293B] leading-snug">{message}</span>
      <button 
        onClick={onClose} 
        className="p-1 text-slate-400 hover:text-slate-700 ml-auto cursor-pointer flex-shrink-0"
      >
        <X size={16} />
      </button>
    </div>
  );
}
