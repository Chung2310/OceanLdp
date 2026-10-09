import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  value: string;
  options: SelectOption[];
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
  direction?: 'auto' | 'down' | 'up';
}

export default function CustomSelect({
  label,
  value,
  options,
  onChange,
  placeholder = 'Chọn một tùy chọn...',
  className = '',
  buttonClassName = '',
  direction = 'auto'
}: CustomSelectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpwards, setOpenUpwards] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  // Auto-detect direction if near bottom of viewport
  const handleToggle = () => {
    if (!isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      if (direction === 'up') {
        setOpenUpwards(true);
      } else if (direction === 'down') {
        setOpenUpwards(false);
      } else {
        // Auto: if less than 240px below and more space above, open upwards
        setOpenUpwards(spaceBelow < 240 && rect.top > 240);
      }
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          {label}
        </label>
      )}

      {/* Button with exact matching height and border-radius as input fields */}
      <button
        type="button"
        onClick={handleToggle}
        className={buttonClassName || `w-full h-11 px-3.5 bg-white border text-left rounded-md text-sm text-slate-800 flex items-center justify-between transition-all cursor-pointer ${
          isOpen 
            ? 'border-[#1B7E45] ring-2 ring-[#1B7E45]/15 shadow-xs' 
            : 'border-slate-300 hover:border-slate-400'
        }`}
      >
        <span className={`truncate pr-2 ${!selectedOption ? 'text-slate-400' : 'text-slate-800 font-normal'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          size={16} 
          className={`text-slate-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#1B7E45]' : ''
          }`} 
        />
      </button>

      {/* Floating Menu with high z-index and auto-direction */}
      {isOpen && (
        <div 
          className={`absolute left-0 right-0 bg-white border border-slate-200 rounded-md shadow-xl py-1 z-[999] max-h-60 overflow-y-auto animate-in fade-in zoom-in-95 duration-100 ${
            openUpwards 
              ? 'bottom-full mb-1.5' 
              : 'top-full mt-1.5'
          }`}
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`px-3.5 py-2 text-xs sm:text-sm cursor-pointer flex items-center justify-between transition-colors ${
                  isSelected
                    ? 'bg-[#EAF5EE] text-[#1B7E45] font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#1B7E45] font-normal'
                }`}
              >
                <span className="truncate pr-2">{opt.label}</span>
                {isSelected && <Check size={15} className="text-[#1B7E45] shrink-0" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
