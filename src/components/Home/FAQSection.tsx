import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { faqData } from '../../data/faqData';

interface FAQSectionProps {
  onOpenLeadModal: () => void;
}

export default function FAQSection({ onOpenLeadModal }: FAQSectionProps): JSX.Element {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16" aria-label="Hỏi đáp thường gặp">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            HỎI & ĐÁP
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tight">
            Câu Hỏi Thường Gặp <span className="text-[#1B7E45]">Về Khóa Học</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mt-2">
            Giải đáp tất cả băn khoăn của bạn về lộ trình, phương pháp học, chính sách bảo lưu và chuẩn đầu ra.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 mb-12">
          {faqData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={faq.id} 
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-[#1B7E45] shadow-md bg-white' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button 
                  className="w-full p-5 flex items-center justify-between text-left cursor-pointer transition-colors"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-sm md:text-base font-bold text-[#1E293B]">
                    <HelpCircle size={18} className="text-[#1B7E45] flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#1B7E45]' : ''
                    }`} 
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                    <p className="pl-7">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside FAQ */}
        <div className="max-w-3xl mx-auto bg-[#1E293B] p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-white">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-lg md:text-xl font-bold text-white">Bạn còn câu hỏi nào khác chưa được giải đáp?</h3>
            <p className="text-xs md:text-sm text-slate-300">Hãy để lại thông tin, đội ngũ chuyên gia học thuật sẽ gọi lại tư vấn riêng cho bạn.</p>
          </div>
          <button 
            onClick={onOpenLeadModal} 
            className="inline-flex items-center gap-2 bg-[#F37021] hover:bg-[#d95e14] text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            <PhoneCall size={16} /> Đăng Ký Tư Vấn Ngay
          </button>
        </div>
      </div>
    </section>
  );
}
