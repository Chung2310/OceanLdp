import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  Filter, 
  BookOpen, 
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  Send,
  AlertCircle
} from 'lucide-react';
import { campusScheduleCards, CampusScheduleCard, CampusScheduleRow } from '../data/scheduleData';
import ConsultationForm from '../components/Common/ConsultationForm';
import logoImg from '../asset/img/logo.jpg';
import bookSoCap from '../asset/books/msutong_socap.jpg';
import bookTrungCap from '../asset/books/msutong_trungcap.jpg';
import bookCaoCap from '../asset/books/msutong_caocap.jpg';

interface SchedulePageProps {
  onOpenLeadModal: (courseTitle?: string) => void;
}

export default function SchedulePage({ onOpenLeadModal }: SchedulePageProps): JSX.Element {
  // Region & Filter States (Matching Green Ocean branches from Footer)
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedShift, setSelectedShift] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Pre-filled class selection state for ConsultationForm
  const [selectedBranch, setSelectedBranch] = useState<string>('Cơ sở 1: Hàn Thuyên – Đại Phúc');
  const [selectedCourse, setSelectedCourse] = useState<string>('Tiếng Trung Tích Hợp HSK3 3.0');
  const [selectedClassAlert, setSelectedClassAlert] = useState<string | null>(null);

  // Filter campus cards based on region, shift and search
  const filteredCampuses = campusScheduleCards.filter((card) => {
    // Region match
    const matchRegion = selectedRegion === 'all' || card.region === selectedRegion;

    // Search query match
    const matchSearch = searchTerm.trim() === '' || 
      card.branchName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.badgeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.courses.some(c => c.courseName.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchRegion && matchSearch;
  });

  // Handle clicking a class row in any schedule table
  const handleSelectClassRow = (
    branchName: string, 
    courseName: string, 
    row: CampusScheduleRow
  ) => {
    setSelectedBranch(branchName);
    setSelectedCourse(courseName);
    setSelectedClassAlert(`Bạn đã chọn: ${courseName} | ${branchName} (${row.days}, ${row.time}) - Khai giảng: ${row.startDate}`);

    // Smooth scroll to registration form
    const formElement = document.getElementById('form-dang-ky');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const getSubheadingText = () => {
    switch (selectedRegion) {
      case 'co-so-1':
        return 'Lịch khai giảng lớp tiếng Trung Offline tháng 9/2026 tại Cơ sở 1: 567 Hàn Thuyên, TP. Bắc Ninh';
      case 'co-so-2':
        return 'Lịch khai giảng lớp tiếng Trung Offline tháng 9/2026 tại Cơ sở 2: Ngã 6 Phường Đại Phúc, TP. Bắc Ninh';
      case 'online':
        return 'Lịch khai giảng các lớp tiếng Trung Online tương tác trực tuyến 2 chiều toàn quốc tháng 9/2026';
      default:
        return 'Lịch khai giảng toàn bộ hệ thống cơ sở GREEN OCEAN tháng 9/2026';
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen text-[#1E293B]">
      {/* 1. Header Banner / Hero Section */}
      <section className="w-full bg-gradient-to-br from-[#1E293B] via-[#164E33] to-[#1B7E45] py-12 md:py-16 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#EAF5EE]/20 border border-[#bbf0d2]/30 px-3.5 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider text-[#bbf0d2] mb-3">
            <Calendar size={14} className="text-[#F37021]" />
            TRUNG TÂM NGOẠI NGỮ GREEN OCEAN
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
            Lịch Khai Giảng Khóa Học Tiếng Trung Tháng 9/2026
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Học chuẩn phương pháp M-contask & giáo trình Msutong 3.0 độc quyền. Cam kết chuẩn đầu ra New HSK 3.0 bằng văn bản tại các cơ sở Bắc Ninh và lớp trực tuyến tương tác toàn quốc.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1320px] mx-auto px-4 py-8 md:py-12">
        
        {/* 2. Intro Content with authentic Green Ocean details */}
        <div className="bg-white rounded-lg p-6 md:p-8 border border-slate-200 shadow-sm mb-10 text-[15px] md:text-base text-slate-700 leading-relaxed space-y-4">
          <p>
            Bạn muốn tìm <strong className="text-[#1E293B] font-bold">lịch khai giảng khóa học tiếng Trung</strong> tháng 9/2026 chất lượng, phù hợp với trình độ của mình? Hay tìm một trung tâm uy tín hàng đầu tại Bắc Ninh? Hãy tham gia vào các <strong className="text-[#1E293B] font-bold">khóa học tiếng Trung</strong> của <strong className="text-[#1B7E45] font-black">GREEN OCEAN</strong>. Chúng tôi sẽ giúp bạn bứt phá hành trình tiếng Trung của mình nhanh nhất.
          </p>
          <p>
            Với 2 cơ sở đào tạo chuẩn mực tại trung tâm TP. Bắc Ninh (<strong className="text-[#1E293B] font-bold">Cơ sở 1: Số 567 đường Hàn Thuyên</strong> và <strong className="text-[#1E293B] font-bold">Cơ sở 2: Ngã 6 Phường Đại Phúc</strong>), GREEN OCEAN thường xuyên <strong className="text-[#1E293B] font-bold">khai giảng các khóa học tiếng Trung</strong> hàng tháng; đáp ứng tối đa nhu cầu của học sinh, sinh viên, người đi làm và doanh nghiệp FDI. Song song các lớp học trực tiếp, GREEN OCEAN triển khai <strong className="text-[#1B7E45] font-bold">lớp học online trực tuyến tương tác 2 chiều</strong>, giúp học viên toàn quốc và người bận rộn tiếp cận chương trình đào tạo chất lượng cao một cách thuận tiện nhất.
          </p>
        </div>

        {/* 3. Section Headings */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] tracking-tight mb-2">
            Lịch khai giảng khóa học tháng 9/2026 tại GREEN OCEAN
          </h2>
          <h3 className="text-lg md:text-xl font-bold text-[#1B7E45]">
            {getSubheadingText()}
          </h3>
        </div>

        {/* 4. Region Tabs & Filter Toolbar (Green Ocean Branches) */}
        <div className="bg-white rounded-lg p-4 md:p-5 border border-slate-200 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Region Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedRegion('all')}
                className={`px-4 py-2 rounded-md text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  selectedRegion === 'all'
                    ? 'bg-[#1E293B] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Tất cả cơ sở
              </button>
              <button
                onClick={() => setSelectedRegion('co-so-1')}
                className={`px-4 py-2 rounded-md text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  selectedRegion === 'co-so-1'
                    ? 'bg-[#1B7E45] text-white shadow-sm shadow-[#1B7E45]/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Cơ sở 1: Hàn Thuyên (Bắc Ninh)
              </button>
              <button
                onClick={() => setSelectedRegion('co-so-2')}
                className={`px-4 py-2 rounded-md text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  selectedRegion === 'co-so-2'
                    ? 'bg-[#1B7E45] text-white shadow-sm shadow-[#1B7E45]/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Cơ sở 2: Ngã 6 Đại Phúc (Bắc Ninh)
              </button>
              <button
                onClick={() => setSelectedRegion('online')}
                className={`px-4 py-2 rounded-md text-xs md:text-sm font-bold transition-all cursor-pointer ${
                  selectedRegion === 'online'
                    ? 'bg-[#1B7E45] text-white shadow-sm shadow-[#1B7E45]/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Trực Tuyến Online Toàn Quốc
              </button>
            </div>

            {/* Quick Search and Shift Filters */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Tìm cơ sở, khóa học..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-10 pl-9 pr-3.5 bg-slate-50 border border-slate-200 rounded-md text-xs md:text-sm text-slate-800 outline-none focus:border-[#1B7E45] focus:bg-white focus:ring-2 focus:ring-[#1B7E45]/15 transition-all"
                />
              </div>

              <select
                value={selectedShift}
                onChange={(e) => setSelectedShift(e.target.value)}
                className="h-10 px-3 bg-slate-50 border border-slate-200 rounded-md text-xs md:text-sm text-slate-700 outline-none focus:border-[#1B7E45]"
              >
                <option value="all">Mọi ca học</option>
                <option value="sang">Chỉ ca Sáng</option>
                <option value="toi">Chỉ ca Tối</option>
              </select>
            </div>
          </div>
        </div>

        {/* 5. Schedule Table Cards Grid (Authentic Green Ocean Schedule Table Cards with Project Theme) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-14">
          {filteredCampuses.map((campus) => (
            <div 
              key={campus.id} 
              className="bg-white rounded-lg border-2 border-[#1B7E45] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Top Branded Header */}
              <div>
                <div className="bg-gradient-to-r from-[#156637] via-[#1B7E45] to-[#156637] text-white px-4 py-3 border-b-2 border-[#156637]">
                  {/* Brand Subtitle Row */}
                  <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-white/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F37021]" />
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-100">
                        GREEN OCEAN | HỆ SINH THÁI ĐÀO TẠO NĂNG LỰC TIẾNG TRUNG TOÀN DIỆN
                      </span>
                    </div>
                  </div>

                  {/* Main Title Banner & Campus Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 bg-[#F37021] text-white px-3 py-1 rounded-md text-xs md:text-sm font-black uppercase tracking-wider shadow-sm">
                      <Calendar size={14} />
                      LỊCH KHAI GIẢNG THÁNG 9
                    </div>
                    <div className="bg-white text-[#1B7E45] font-black text-xs md:text-sm px-3 py-1 rounded-md shadow border border-emerald-100 uppercase tracking-wide">
                      {campus.badgeName}
                    </div>
                  </div>
                </div>

                {/* Table Layout */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[580px]">
                    <thead>
                      <tr className="bg-[#1B7E45] text-white text-[11px] md:text-xs font-black uppercase tracking-wider text-center">
                        <th className="py-2.5 px-2 border-r border-[#156637] w-[26%]">KHÓA HỌC</th>
                        <th className="py-2.5 px-2 border-r border-[#156637] w-[18%]">NGÀY KHAI GIẢNG DỰ KIẾN</th>
                        <th className="py-2.5 px-2 border-r border-[#156637] w-[18%]">LỊCH HỌC</th>
                        <th className="py-2.5 px-2 border-r border-[#156637] w-[18%]">THỜI GIAN</th>
                        <th className="py-2.5 px-2 w-[20%]">CAM KẾT ĐẦU RA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1B7E45]/20 text-xs md:text-[12.5px]">
                      {campus.courses.map((course, cIdx) => {
                        // Filter rows by shift if selected
                        const visibleRows = course.rows.filter(r => 
                          selectedShift === 'all' || r.timeSlot === selectedShift
                        );

                        if (visibleRows.length === 0) return null;

                        return (
                          <React.Fragment key={course.courseName + cIdx}>
                            {visibleRows.map((row, rIdx) => (
                              <tr 
                                key={row.id}
                                onClick={() => handleSelectClassRow(campus.branchName, course.courseName, row)}
                                title="Nhấp để điền thông tin đăng ký giữ chỗ lớp này"
                                className="group hover:bg-[#EAF5EE] transition-colors cursor-pointer border-b border-[#1B7E45]/15"
                              >
                                {/* Course Name Column - RowSpan on first row */}
                                {rIdx === 0 && (
                                  <td 
                                    rowSpan={visibleRows.length}
                                    className="p-3 text-center align-middle font-bold text-[#1B7E45] border-r border-[#1B7E45]/20 bg-slate-50/60 leading-snug"
                                  >
                                    <div className="font-extrabold uppercase">
                                      {course.courseName}
                                    </div>
                                  </td>
                                )}

                                {/* Start Date */}
                                <td className="p-2 text-center font-semibold text-slate-800 border-r border-[#1B7E45]/20 whitespace-nowrap group-hover:text-[#1B7E45]">
                                  {row.startDate}
                                </td>

                                {/* Days */}
                                <td className="p-2 text-center text-slate-700 border-r border-[#1B7E45]/20 whitespace-nowrap">
                                  {row.days}
                                </td>

                                {/* Time */}
                                <td className="p-2 text-center text-slate-700 border-r border-[#1B7E45]/20 whitespace-nowrap font-medium">
                                  {row.time}
                                </td>

                                {/* Commitment Column - RowSpan on first row */}
                                {rIdx === 0 && (
                                  <td 
                                    rowSpan={visibleRows.length}
                                    className="p-3 text-center align-middle font-semibold text-slate-700 bg-slate-50/60 leading-snug"
                                  >
                                    <span className="inline-block text-[11.5px] text-slate-600 font-medium">
                                      {course.commitment}
                                    </span>
                                  </td>
                                )}
                              </tr>
                            ))}
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 truncate max-w-[340px]">
                  <MapPin size={14} className="text-[#1B7E45] shrink-0" />
                  <span className="truncate">{campus.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#F37021]">☎ {campus.hotline}</span>
                  <button 
                    onClick={() => {
                      setSelectedBranch(campus.branchName);
                      setSelectedClassAlert(`Bạn đã chọn cơ sở: ${campus.branchName}`);
                      document.getElementById('form-dang-ky')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 bg-[#1B7E45] hover:bg-[#156637] text-white text-[11px] font-bold px-3 py-1.5 rounded-md transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    Chọn cơ sở này
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 6. Section "Tại sao nên học tiếng Trung tại GREEN OCEAN?" */}
        <section className="bg-white rounded-lg p-6 md:p-10 border border-slate-200 shadow-sm mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-[#1E293B] mb-6 tracking-tight">
            Tại sao nên học tiếng Trung tại GREEN OCEAN?
          </h2>

          {/* Bullet points */}
          <div className="space-y-3.5 text-slate-700 text-sm md:text-base leading-relaxed mb-10">
            <div className="flex items-start gap-2.5 font-bold text-[#1E293B]">
              <span className="text-xl">🎯</span>
              <span>Hơn 5.000 học viên đã tin tưởng và bứt phá thành công cùng Green Ocean với:</span>
            </div>

            <div className="flex items-start gap-2.5 pl-2">
              <CheckCircle2 size={18} className="text-[#1B7E45] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#1E293B]">Lộ trình học tinh gọn HSK 3–4–5–6:</strong> học theo từng chặng rõ ràng, cam kết đầu ra, theo chuẩn HSK 3.0 mới nhất.
              </p>
            </div>

            <div className="flex items-start gap-2.5 pl-2">
              <CheckCircle2 size={18} className="text-[#1B7E45] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#1E293B]">Bộ giải pháp Msutong 3.0 độc quyền:</strong> bổ sung từ vựng hiện đại, ngữ cảnh thực tế, sát theo format đề thi mới.
              </p>
            </div>

            <div className="flex items-start gap-2.5 pl-2">
              <CheckCircle2 size={18} className="text-[#1B7E45] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#1E293B]">Phương pháp M-contask:</strong> học thông qua nhiệm vụ cụ thể, phát triển toàn diện 4 kỹ năng Nghe – Nói – Đọc – Viết ứng dụng ngay trong giao tiếp hàng ngày và luyện thi HSK.
              </p>
            </div>

            <div className="flex items-start gap-2.5 pl-2">
              <CheckCircle2 size={18} className="text-[#1B7E45] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#1E293B]">Đội ngũ giảng viên chất lượng cao:</strong> thạc sĩ, tiến sĩ được bảo chứng chuyên môn bởi Viện nghiên cứu Ứng dụng Ngôn ngữ Bác Nhã.
              </p>
            </div>

            <div className="flex items-start gap-2.5 pl-2">
              <CheckCircle2 size={18} className="text-[#1B7E45] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#1E293B]">Hình thức học đa dạng:</strong> Online – Offline – VOD, đáp ứng mọi lịch trình.
              </p>
            </div>
          </div>

          {/* 3 Msutong Textbook Sets Showcase (Matching Screenshot 2) */}
          <div className="pt-6 border-t border-slate-100">
            <div className="text-center mb-8">
              <span className="text-xs font-extrabold uppercase text-[#1B7E45] tracking-wider bg-[#EAF5EE] px-3.5 py-1 rounded-md">
                GIÁO TRÌNH ĐỘC QUYỀN CHUẨN ĐẠI HỌC BẮC KINH
              </span>
              <h3 className="text-xl md:text-2xl font-black text-[#1E293B] mt-2">
                Bộ Sách Giáo Trình Hán Ngữ Msutong
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sách Sơ Cấp */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-full max-w-[260px] aspect-square rounded-lg overflow-hidden bg-white p-3 mb-4 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-slate-100">
                  <img 
                    src={bookSoCap} 
                    alt="Hán ngữ Msutong sơ cấp" 
                    className="w-full h-full object-contain rounded-md"
                  />
                  <span className="absolute top-4 right-4 bg-[#F37021] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-sm">
                    Bản Quyền
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1E293B] group-hover:text-[#1B7E45] transition-colors mb-1">
                  Hán ngữ Msutong sơ cấp
                </h4>
                <p className="text-xs text-slate-500">Trọn bộ 4 tập - Cho người mới bắt đầu</p>
              </div>

              {/* Sách Trung Cấp */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-full max-w-[260px] aspect-square rounded-lg overflow-hidden bg-white p-3 mb-4 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-slate-100">
                  <img 
                    src={bookTrungCap} 
                    alt="Hán ngữ Msutong trung cấp" 
                    className="w-full h-full object-contain rounded-md"
                  />
                  <span className="absolute top-4 right-4 bg-[#1B7E45] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-sm">
                    HSK 4 - 5
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1E293B] group-hover:text-[#1B7E45] transition-colors mb-1">
                  Hán ngữ Msutong trung cấp
                </h4>
                <p className="text-xs text-slate-500">Trọn bộ 4 tập - Ngữ cảnh giao tiếp thực chiến</p>
              </div>

              {/* Sách Cao Cấp */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-full max-w-[260px] aspect-square rounded-lg overflow-hidden bg-white p-3 mb-4 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-slate-100">
                  <img 
                    src={bookCaoCap} 
                    alt="Hán ngữ Msutong cao cấp" 
                    className="w-full h-full object-contain rounded-md"
                  />
                  <span className="absolute top-4 right-4 bg-[#1E293B] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow-sm">
                    HSK 6
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#1E293B] group-hover:text-[#1B7E45] transition-colors mb-1">
                  Hán ngữ Msutong cao cấp
                </h4>
                <p className="text-xs text-slate-500">Trọn bộ chuyên sâu - Thương mại & dịch thuật</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Section Form "ĐĂNG KÝ NHẬN TƯ VẤN" (Matching Screenshot 2 - Reusable ConsultationForm) */}
        <section id="form-dang-ky" className="max-w-2xl mx-auto mb-16 scroll-mt-24">
          <p className="text-center text-slate-700 text-sm md:text-base font-medium mb-4 leading-relaxed">
            Để nhận <strong className="text-[#1E293B] font-bold">“Tư vấn”</strong> và nhận các chương trình <strong className="text-[#F37021] font-bold">“Ưu Đãi”</strong> về khóa học cũng như lịch học cụ thể, Bạn hãy để lại thông tin dưới đây nhé!
          </p>

          <ConsultationForm
            title="ĐĂNG KÝ NHẬN TƯ VẤN"
            defaultBranch={selectedBranch}
            defaultCourse={selectedCourse}
            selectedAlert={selectedClassAlert}
          />
        </section>

      </div>
    </div>
  );
}
