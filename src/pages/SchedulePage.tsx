import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, PhoneCall, Filter } from 'lucide-react';
import { scheduleData } from '../data/scheduleData';
import { branchesData } from '../data/branchesData';

interface SchedulePageProps {
  onOpenLeadModal: (courseTitle?: string) => void;
}

export default function SchedulePage({ onOpenLeadModal }: SchedulePageProps): JSX.Element {
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');

  const filteredSchedule = scheduleData.filter((item) => {
    const matchBranch = selectedBranch === 'all' || item.branchId === selectedBranch;
    const matchTime = selectedTimeSlot === 'all' || item.timeSlot === selectedTimeSlot;
    const matchFormat = selectedFormat === 'all' || 
      (selectedFormat === 'online' ? item.format.includes('Online') : !item.format.includes('Online'));
    return matchBranch && matchTime && matchFormat;
  });

  const formatPrice = (num: number) => new Intl.NumberFormat('vi-VN').format(num) + ' đ';

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-14 px-4 text-center text-white">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block bg-[#1B7E45]/25 text-[#bbf0d2] border border-[#1B7E45]/40 text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
            LỊCH KHAI GIẢNG TOÀN QUỐC
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            Lịch Khai Giảng Các Khóa Học Mới Nhất
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Cập nhật liên tục lịch học các lớp Offline tại cơ sở và Online trực tuyến tương tác qua Google Meet.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-10">
        {/* Filters Bar */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={18} className="text-[#1B7E45]" />
            <span className="text-xs font-extrabold text-[#1B7E45] tracking-wider uppercase">
              BỘ LỌC LỊCH HỌC TIỆN LỢI
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Chọn cơ sở</label>
              <select 
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
              >
                <option value="all">Tất cả cơ sở (Toàn quốc & Online)</option>
                <option value="online">Học Trực Tuyến Online</option>
                {branchesData.map((b) => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Khung giờ học</label>
              <select 
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20"
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
              >
                <option value="all">Tất cả ca học (Sáng, Chiều, Tối)</option>
                <option value="sang">Ca Sáng (08:30 - 11:00)</option>
                <option value="chieu">Ca Chiều (14:00 - 16:30)</option>
                <option value="toi">Ca Tối (18:00 - 21:30)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">Hình thức học</label>
              <select 
                className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white transition-all focus:ring-2 focus:ring-[#1B7E45]/20"
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
              >
                <option value="all">Tất cả hình thức</option>
                <option value="offline">Học Offline tại lớp</option>
                <option value="online">Học Online Google Meet</option>
              </select>
            </div>
          </div>
        </div>

        {/* Schedule List */}
        <div>
          <div className="text-sm text-slate-600 mb-6 font-medium">
            Tìm thấy <strong className="text-[#1B7E45] font-bold">{filteredSchedule.length}</strong> lớp học phù hợp với lịch của bạn:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSchedule.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-bold text-xs px-2.5 py-0.5 rounded-md mb-1.5">
                        Mã: {item.id}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-[#1E293B] leading-snug">
                        {item.courseName}
                      </h3>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#EAF5EE] text-[#1B7E45] border border-[#1B7E45]/30 whitespace-nowrap">
                      {item.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 py-4 border-y border-slate-100 text-xs text-slate-600 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={15} className="text-[#1B7E45] flex-shrink-0" />
                      <span><strong>Cơ sở:</strong> {item.branch}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={15} className="text-[#F37021] flex-shrink-0" />
                      <span><strong>Lịch:</strong> {item.days}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-[#1B7E45] flex-shrink-0" />
                      <span><strong>Giờ:</strong> {item.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <User size={15} className="text-[#F37021] flex-shrink-0" />
                      <span><strong>GV:</strong> {item.teacher}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-slate-400 font-medium">Học phí ưu đãi:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base md:text-lg font-black text-[#F37021]">
                        {formatPrice(item.fee)}
                      </span>
                      <span className="text-xs text-slate-400 line-through">
                        {formatPrice(item.originalFee)}
                      </span>
                    </div>
                  </div>

                  <button 
                    onClick={() => onOpenLeadModal(`${item.courseName} (${item.branch})`)} 
                    className="inline-flex items-center gap-1.5 bg-[#1B7E45] hover:bg-[#156637] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors cursor-pointer shadow-sm hover:shadow active:scale-95"
                  >
                    <PhoneCall size={14} /> Giữ chỗ ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
