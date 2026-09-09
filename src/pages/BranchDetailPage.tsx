import React, { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle2, ArrowRight, ExternalLink, ChevronRight, Sparkles, GraduationCap, Building2 } from 'lucide-react';
import { branchesData } from '../data/branchesData';
import ConsultationForm from '../components/Common/ConsultationForm';

// Images
import greenOceanStorefrontImg from '../asset/branches/green_ocean_storefront.jpg';
import scholarshipBannerImg from '../asset/branches/banner_scholarship.png';
import classroomPhotoImg from '../asset/branches/photo_classroom.png';
import teacherPhotoImg from '../asset/branches/photo_teacher.png';

interface BranchDetailPageProps {
  onOpenLeadModal?: (courseName?: string, branchName?: string) => void;
}

export default function BranchDetailPage({ onOpenLeadModal }: BranchDetailPageProps): JSX.Element {
  const [, params1] = useRoute<{ id: string }>('/he-thong-co-so/:id');
  const [, params2] = useRoute<{ id: string }>('/co-so/:id');
  const branchId = params1?.id || params2?.id || '';

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [branchId]);

  const branch = branchesData.find(b => b.id === branchId || b.slug === branchId) || branchesData[0];
  const otherBranches = branchesData.filter(b => b.id !== branch.id);

  const scrollToRegistration = () => {
    const el = document.getElementById('dang-ky-tu-van');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen pb-16 font-sans">
      
      {/* 1. Breadcrumbs Bar */}
      <div className="w-full bg-white border-b border-slate-200 py-3 px-4 shadow-xs">
        <div className="max-w-[980px] mx-auto flex items-center gap-1.5 text-xs text-slate-500 font-medium overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#1B7E45] transition-colors">Trang Chủ</Link>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <Link href="/he-thong-co-so" className="hover:text-[#1B7E45] transition-colors">Hệ Thống Cơ Sở</Link>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <span className="text-slate-800 font-semibold truncate">{branch.name}</span>
        </div>
      </div>

      {/* Main Editorial Article Container matching Thanhmaihsk/Green Ocean reference */}
      <article className="max-w-[980px] mx-auto px-4 py-8 sm:py-12">

        {/* 2. Top Lead Paragraph (Screenshot 1) */}
        <div className="mb-6">
          <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify">
            Lựa chọn một địa điểm học thuận tiện giúp người học duy trì lịch học đều đặn và hạn chế thời gian di chuyển, đặc biệt với những người đang học tập, sinh sống hoặc làm việc tại khu vực {branch.city}. <strong className="text-slate-900 font-bold">Trung tâm tiếng Trung Green Ocean {branch.shortName || branch.name}</strong> là một trong những địa điểm đào tạo trực tiếp thuộc hệ thống Green Ocean tại {branch.city}, đặt tại {branch.address}. Cơ sở hướng đến nhiều nhóm học viên với nhu cầu khác nhau, từ người bắt đầu học tiếng Trung, người muốn phát triển khả năng sử dụng ngôn ngữ đến học viên có mục tiêu luyện thi HSK, HSKK. Việc tìm hiểu trước thông tin cơ sở, môi trường học và lộ trình đào tạo sẽ giúp người học dễ dàng lựa chọn chương trình phù hợp hơn.
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
              src={scholarshipBannerImg} 
              alt={`Học bổng ưu đãi tại Trung tâm tiếng Trung Green Ocean ${branch.name}`} 
              className="w-full h-auto object-cover block"
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
              src={greenOceanStorefrontImg} 
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
            <p>
              Một trong những điểm người học quan tâm khi lựa chọn cơ sở là trải nghiệm học trực tiếp. Khác với hình thức học online, lớp học tại trung tâm tạo điều kiện để học viên tương tác trực tiếp với giáo viên, luyện phản xạ ngôn ngữ và tham gia các hoạt động trên lớp cùng những người học khác.
            </p>
            <p>
              Không gian lớp học tại cơ sở {branch.shortName} được sử dụng cho quá trình giảng dạy trực tiếp, nơi học viên có thể theo dõi bài giảng, ghi chép, thực hành và trao đổi ngay trong buổi học. Với tiếng Trung, việc được nghe phát âm, sửa lỗi và thực hành thường xuyên đặc biệt quan trọng trong giai đoạn đầu. Những lỗi về thanh mẫu, vận mẫu hoặc thanh điệu nếu được phát hiện sớm sẽ giúp người học hạn chế hình thành thói quen phát âm sai về sau.
            </p>
            <p>
              Môi trường lớp học cũng tạo thêm tính kỷ luật cho quá trình học. Khi có lịch học cụ thể, nội dung bài được triển khai theo từng giai đoạn và có sự tương tác với giáo viên, học viên dễ theo dõi tiến độ hơn so với việc tự học hoàn toàn mà không có lộ trình rõ ràng.
            </p>
            <p>
              Đối với người đang sinh sống và làm việc tại các khu vực khác, hệ thống Green Ocean còn có các cơ sở khác như <Link href="/he-thong-co-so/han-thuyen-bac-ninh" className="text-[#1B7E45] font-bold hover:underline">Cơ sở 1 Hàn Thuyên</Link>, <Link href="/he-thong-co-so/nga-6-dai-phuc" className="text-[#1B7E45] font-bold hover:underline">Cơ sở 2 Ngã 6 Đại Phúc</Link>, và <Link href="/he-thong-co-so/online-nationwide" className="text-[#1B7E45] font-bold hover:underline">Lớp Trực Tuyến Toàn Quốc</Link> để người học chủ động sắp xếp lịch trình.
            </p>
          </div>
        </div>

        {/* 7. Section 3: Giảng dạy theo lộ trình (Screenshot 4) */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
            {branch.curriculumTitle || 'Giảng dạy theo lộ trình thay vì học rời rạc từng nội dung'}
          </h2>

          <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify mb-5">
            Một vấn đề phổ biến của người mới học tiếng Trung là tiếp cận kiến thức theo kiểu rời rạc. Người học có thể biết một số từ vựng, mẫu câu hoặc chữ Hán nhưng lại chưa hình thành được hệ thống kiến thức để sử dụng ngôn ngữ trong những tình huống cụ thể.
          </p>

          <div className="mb-5 rounded-lg overflow-hidden border border-slate-200 shadow-xs">
            <img 
              src={classroomPhotoImg} 
              alt={`Lớp học sôi nổi với giáo trình chuẩn tại Green Ocean ${branch.name}`} 
              className="w-full h-auto object-cover max-h-[460px]"
            />
            <div className="bg-slate-100 px-4 py-2 text-[11px] text-slate-600 text-center italic border-t border-slate-200">
              Học viên Green Ocean học tập theo giáo trình Msutong bản quyền và tích cực tương tác cùng bạn học
            </div>
          </div>

          <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify">
            <p>
              Tại Trung tâm tiếng Trung Green Ocean {branch.shortName}, việc học nên được nhìn theo một lộ trình gồm nhiều giai đoạn liên tiếp. Với người bắt đầu từ con số 0, bước đầu tiên là xây dựng nền tảng phát âm, làm quen với chữ Hán, từ vựng và các cấu trúc ngữ pháp cơ bản. Khi nền tảng dần ổn định, người học tiếp tục mở rộng vốn từ, tăng khả năng nghe hiểu, đọc hiểu và sử dụng câu trong giao tiếp.
            </p>
            <p>
              Việc học theo lộ trình cũng giúp học viên xác định được mình đang ở giai đoạn nào. Người mới bắt đầu không cần học ngay những cấu trúc quá phức tạp, trong khi người đã có kiến thức nền lại có thể tập trung nhiều hơn vào kỹ năng còn yếu.
            </p>
            <p>
              HSKK lại tập trung nhiều hơn vào khả năng sử dụng tiếng Trung bằng lời nói. Vì vậy, ngoài kiến thức ngôn ngữ, người học cần luyện phát âm, phản xạ và khả năng diễn đạt nội dung bằng câu tương đối hoàn chỉnh. Đây cũng là lý do quá trình thực hành và được chỉnh sửa trực tiếp có ý nghĩa với người đang chuẩn bị cho phần đánh giá khẩu ngữ.
            </p>
            <p>
              Tuy nhiên, lựa chọn lớp không nên chỉ dựa trên mong muốn đạt một cấp độ nhất định. Nếu nền tảng hiện tại còn cách khá xa mục tiêu, người học có thể cần một giai đoạn củng cố trước khi chuyển sang luyện thi chuyên sâu. Xác định đúng trình độ ban đầu sẽ giúp lộ trình thực tế hơn và hạn chế tình trạng chạy theo cấp độ nhưng thiếu kiến thức nền cần thiết.
            </p>
          </div>
        </div>

        {/* 8. Section 4: Lựa chọn lớp và đăng ký học (Screenshot 5) */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
            {branch.adviceTitle || `Lựa chọn lớp và đăng ký học tại ${branch.name}`}
          </h2>

          <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify mb-6">
            <p>
              Trước khi đăng ký tại Trung tâm tiếng Trung Green Ocean {branch.shortName}, người học có thể cân nhắc đồng thời ba yếu tố gồm trình độ hiện tại, mục tiêu sử dụng tiếng Trung và thời gian có thể dành cho việc học. Đây là những yếu tố trực tiếp ảnh hưởng đến việc lựa chọn chương trình và khả năng duy trì tiến độ trong thời gian dài.
            </p>
            <p>
              Người mới học nên ưu tiên xây dựng nền tảng thay vì đặt mục tiêu cấp độ quá nhanh. Người đã có kiến thức có thể xác định rõ phần kỹ năng còn yếu để lựa chọn chương trình phù hợp hơn. Với học viên cần HSK hoặc HSKK cho kế hoạch học tập, công việc hay những mục tiêu cá nhân khác, việc xác định thời điểm cần chứng chỉ cũng giúp chủ động hơn khi xây dựng kế hoạch học.
            </p>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden border border-slate-200 shadow-xs">
            <img 
              src={teacherPhotoImg} 
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
