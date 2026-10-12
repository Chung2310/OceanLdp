import React, { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle2, ArrowRight, ExternalLink, ChevronRight, Sparkles, GraduationCap, Building2 } from 'lucide-react';
import { useBranches } from '../services/contentService';
import ConsultationForm from '../components/Common/ConsultationForm';

interface BranchDetailPageProps {
  onOpenLeadModal?: (courseName?: string, branchName?: string) => void;
}

export default function BranchDetailPage({ onOpenLeadModal }: BranchDetailPageProps): JSX.Element {
  const branchesData = useBranches();
  const [, params1] = useRoute<{ id: string }>('/he-thong-co-so/:id');
  const [, params2] = useRoute<{ id: string }>('/co-so/:id');
  const branchId = params1?.id || params2?.id || '';

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [branchId]);

  const branch = branchesData.find(b => b.id === branchId || b.slug === branchId) || branchesData[0];
  if (!branch) return <div className="py-20 text-center text-slate-500">Chưa có thông tin cơ sở.</div>;
  const otherBranches = branchesData.filter(b => b.id !== branch.id);

  const scrollToRegistration = () => {
    const el = document.getElementById('dang-ky-tu-van');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen pb-16 font-sans">

      {/* Main Editorial Article Container matching Thanhmaihsk/Green Ocean reference */}
      <article className="max-w-[980px] mx-auto px-4 py-6 sm:py-10">

        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-6 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1B7E45] transition-colors">Trang Chủ</Link>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <Link href="/he-thong-co-so" className="hover:text-[#1B7E45] transition-colors">Hệ Thống Cơ Sở</Link>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <span className="text-[#1B7E45] font-semibold truncate">{branch.name}</span>
        </nav>

        {/* 2. Top Lead Paragraph (Screenshot 1) */}
        <div className="mb-6">
          <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify">
            {branch.introText || `Trung tâm tiếng Trung Green Ocean ${branch.shortName || branch.name} là một địa điểm đào tạo thuộc hệ thống Green Ocean tại ${branch.city || branch.address}.`}
          </p>
        </div>

        {/* 3. Section Heading 1 (Screenshot 1) */}
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-5">
          Thông tin và môi trường học tại Trung tâm tiếng Trung Green Ocean {branch.shortName || branch.name}
        </h2>

        {/* 4. Hero Promotional Scholarship Banner (Screenshot 1 & 2) */}
        <div className="mb-8 rounded-lg overflow-hidden border border-amber-200/80 shadow-md bg-gradient-to-br from-amber-50 to-orange-50 relative group">
          <div className="relative">
            <img 
              src={branch.image}
              alt={`Trung tâm tiếng Trung Green Ocean ${branch.name}`}
              className="w-full h-auto object-cover block max-h-[520px]"
            />
            {/* Clickable Action Overlay Button */}
            <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2">
              <button
                onClick={scrollToRegistration}
                className="bg-gradient-to-r from-red-600 to-[#c82333] hover:from-red-700 hover:to-red-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-9 py-2.5 sm:py-3 rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center gap-2 cursor-pointer border border-white/30"
              >
                <Sparkles size={16} className="text-amber-300 animate-pulse" /> BẮT ĐẦU NGAY
              </button>
            </div>
          </div>
          
          {/* Mobile Scholarship Summary Bar */}
          <div className="bg-gradient-to-r from-[#135830] to-[#1B7E45] p-3 sm:p-4 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#F37021] flex items-center justify-center font-black text-sm shrink-0">
                🎁
              </span>
              <div className="text-xs sm:text-sm">
                <span className="font-extrabold text-amber-300">Tặng Học Bổng Lên Đến 1.500.000đ</span> khi đăng ký khóa học tại cơ sở {branch.shortName} trong tháng này!
              </div>
            </div>
            <button
              onClick={() => onOpenLeadModal ? onOpenLeadModal('Khóa Học Tại ' + branch.name, branch.name) : scrollToRegistration()}
              className="px-4 py-1.5 rounded-md bg-[#F37021] hover:bg-[#d95d13] text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-xs cursor-pointer"
            >
              Nhận Ưu Đãi
            </button>
          </div>
        </div>

        {/* 5. Branch Overview & Table (Screenshot 2) */}
        <div className="mb-10">
          <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify mb-5">
            Nằm tại khu vực {branch.area}, cơ sở Green Ocean tạo thêm lựa chọn cho những người muốn học tiếng Trung trực tiếp tại khu vực {branch.city}. Bên cạnh vị trí, người học cũng cần quan tâm đến môi trường lớp học, phương pháp đào tạo và khả năng lựa chọn chương trình phù hợp với mục tiêu cá nhân.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
            Thông tin Trung tâm Green Ocean {branch.shortName || branch.name}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed">
            <strong className="text-[#135830] font-bold">Green Ocean {branch.shortName}</strong> là một cơ sở trong hệ thống đào tạo tiếng Trung Green Ocean tại {branch.city}. Người học có thể đến trực tiếp cơ sở để tìm hiểu chương trình hoặc liên hệ trước để được tư vấn về lớp học phù hợp.
          </p>

          {/* Authentic Specification Table matching Screenshot */}
          <div className="overflow-x-auto border border-slate-300 rounded-lg shadow-2xs mb-6 bg-white">
            <table className="w-full text-xs sm:text-sm border-collapse text-left">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300">
                  <th className="p-3 font-bold text-slate-800 w-[160px] sm:w-[220px] border-r border-slate-300">Thông tin</th>
                  <th className="p-3 font-bold text-slate-800">Chi tiết</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50/50 border-r border-slate-200">Tên cơ sở</td>
                  <td className="p-3 text-slate-900 font-bold">{branch.name}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50/50 border-r border-slate-200">Địa chỉ</td>
                  <td className="p-3 text-slate-800 flex items-start gap-1.5">
                    <MapPin size={15} className="text-[#1B7E45] shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50/50 border-r border-slate-200">Hotline</td>
                  <td className="p-3">
                    <a href={`tel:${branch.hotline}`} className="text-[#1B7E45] font-extrabold hover:underline inline-flex items-center gap-1">
                      <Phone size={14} className="text-[#F37021]" /> {branch.hotline}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50/50 border-r border-slate-200">Hình thức học</td>
                  <td className="p-3 text-slate-800">{branch.format || 'Học trực tiếp tại cơ sở'}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50/50 border-r border-slate-200">Đối tượng</td>
                  <td className="p-3 text-slate-800">{branch.targetAudience || 'Người mới bắt đầu, người học nâng cao năng lực tiếng Trung, học viên có mục tiêu HSK và HSKK'}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-700 bg-slate-50/50 border-r border-slate-200">Giờ hoạt động</td>
                  <td className="p-3 text-slate-800 flex items-center gap-1.5">
                    <Clock size={14} className="text-slate-400" /> {branch.hours}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 6. Section 2: Không gian học tập (Screenshot 3) */}
        <div className="mb-10">
          <div className="mb-5 rounded-lg overflow-hidden border border-slate-200 shadow-xs">
            <img 
              src={branch.storefrontImage || branch.image}
              alt={`Không gian đào tạo hiện đại tại Green Ocean ${branch.name}`} 
              className="w-full h-auto object-cover max-h-[460px]"
            />
            <div className="bg-slate-100 px-4 py-2 text-[11px] text-slate-600 text-center italic border-t border-slate-200">
              Mặt tiền và khu vực tiếp đón học viên chuẩn mực, khang trang tại Trung tâm Ngoại ngữ Green Ocean
            </div>
          </div>

          <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify mb-4">
            Đây cũng là yếu tố đáng cân nhắc với những người có lịch học hoặc lịch làm việc tương đối cố định. Một khóa tiếng Trung thường cần duy trì trong một khoảng thời gian nhất định, vì vậy khoảng cách di chuyển thuận tiện có thể hỗ trợ người học duy trì lịch học ổn định hơn.
          </p>

          <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify mb-5">
            Với những người vẫn đang trong giai đoạn khảo sát và muốn so sánh thêm địa điểm, có thể tham khảo danh sách <Link href="/he-thong-co-so" className="text-[#1B7E45] font-bold hover:underline">hệ thống cơ sở Green Ocean</Link> để có góc nhìn rộng hơn trước khi lựa chọn cơ sở phù hợp.
          </p>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
            {branch.environmentTitle || 'Không gian học tập phục vụ hình thức học trực tiếp'}
          </h2>

          <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify">
            {(branch.environmentText?.length ? branch.environmentText : ['Thông tin môi trường học tập tại cơ sở đang được cập nhật.']).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </div>

        {/* 7. Section 3: Giảng dạy theo lộ trình (Screenshot 4) */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
            {branch.curriculumTitle || 'Giảng dạy theo lộ trình thay vì học rời rạc từng nội dung'}
          </h2>

          <div className="mb-5 rounded-lg overflow-hidden border border-slate-200 shadow-xs">
            <img 
              src={branch.classroomImage || branch.image}
              alt={`Lớp học sôi nổi với giáo trình chuẩn tại Green Ocean ${branch.name}`} 
              className="w-full h-auto object-cover max-h-[460px]"
            />
            <div className="bg-slate-100 px-4 py-2 text-[11px] text-slate-600 text-center italic border-t border-slate-200">
              Học viên Green Ocean học tập theo giáo trình Msutong bản quyền và tích cực tương tác cùng bạn học
            </div>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify">
            {(branch.curriculumText?.length ? branch.curriculumText : ['Thông tin lộ trình đào tạo tại cơ sở đang được cập nhật.']).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </div>

        {/* 8. Section 4: Lựa chọn lớp và đăng ký học (Screenshot 5) */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
            {branch.adviceTitle || `Lựa chọn lớp và đăng ký học tại ${branch.name}`}
          </h2>

          <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify mb-6">
            {(branch.adviceText?.length ? branch.adviceText : ['Liên hệ Green Ocean để được tư vấn lớp học và lộ trình phù hợp.']).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>

          <div className="mb-8 rounded-lg overflow-hidden border border-slate-200 shadow-xs">
            <img 
              src={branch.teachingImage || branch.image}
              alt={`Giảng viên Green Ocean hướng dẫn bài bản khẩu hình và phát âm`} 
              className="w-full h-auto object-cover max-h-[460px]"
            />
            <div className="bg-slate-100 px-4 py-2 text-[11px] text-slate-600 text-center italic border-t border-slate-200">
              Giảng viên Green Ocean hướng dẫn cặn kẽ hệ thống ngữ âm Pinyin và bảng chữ Hán cho người mới bắt đầu
            </div>
          </div>
        </div>

        {/* 9. Registration Call-to-Action Form Container */}
        <div id="dang-ky-tu-van" className="scroll-mt-20 pt-4 mb-14">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="inline-block bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-xs px-3.5 py-1 rounded-md uppercase tracking-wider mb-2">
              ĐĂNG KÝ XẾP LỚP & NHẬN HỌC BỔNG
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Nhận Tư Vấn Lộ Trình & Ưu Đãi Tại {branch.shortName || branch.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Để lại thông tin để kiểm tra trình độ đầu vào miễn phí và giữ suất học bổng 1.500.000đ trong tuần này.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <ConsultationForm 
              defaultBranch={branch.name}
              title={`Đăng ký tư vấn tại ${branch.shortName}`}
              subtitle="Chuyên viên học vụ Green Ocean sẽ liên hệ hỗ trợ bạn trong vòng 15 phút"
              source={`branch_detail_${branch.id}`}
            />
          </div>

          {/* Quick Contact & Navigation Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-700">
            <Link 
              href="/lich-khai-giang"
              className="px-4 py-2.5 rounded-md bg-white border border-slate-200 hover:border-[#1B7E45] hover:text-[#1B7E45] transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <Calendar size={14} className="text-[#1B7E45]" /> Xem Lịch Khai Giảng Tại Cơ Sở Này
            </Link>

            <a 
              href={branch.mapUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2.5 rounded-md bg-white border border-slate-200 hover:border-[#1B7E45] hover:text-[#1B7E45] transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <MapPin size={14} className="text-[#F37021]" /> Xem Chỉ Đường Trên Google Maps
            </a>

            <a 
              href={`tel:${branch.hotline}`} 
              className="px-4 py-2.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <Phone size={14} className="text-emerald-600" /> Gọi Hotline: {branch.hotline}
            </a>
          </div>
        </div>

        {/* 10. Other Branches in Green Ocean System */}
        <div className="pt-8 border-t border-slate-200">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Building2 size={18} className="text-[#1B7E45]" />
            Cơ sở đào tạo khác trong hệ thống Green Ocean
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherBranches.map((other) => (
              <Link 
                key={other.id} 
                href={`/he-thong-co-so/${other.id}`}
                className="p-4 rounded-lg bg-white border border-slate-200 hover:border-[#1B7E45] hover:shadow-md transition-all flex items-start gap-3 group block"
              >
                <div className="w-10 h-10 rounded-md bg-[#EAF5EE] text-[#1B7E45] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Building2 size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#1B7E45] transition-colors truncate">
                    {other.name}
                  </h5>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {other.address}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-[#1B7E45] font-bold mt-2">
                    <span>Xem chi tiết cơ sở</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
}
