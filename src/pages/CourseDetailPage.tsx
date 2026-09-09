import React from 'react';
import { useRoute, Link } from 'wouter';
import { 
  ArrowLeft, CheckCircle2, ChevronRight, GraduationCap, 
  BookOpen, Sparkles, Send, MapPin, Award, Headphones,
  MessageSquare, BookMarked, PenTool, Target, Calendar
} from 'lucide-react';
import { coursesData } from '../data/coursesData';
import reason06 from '../asset/reasons/reason06.png';
import banner4 from '../asset/banner/banner4.png';
import ConsultationForm from '../components/Common/ConsultationForm';

interface CourseDetailPageProps {
  onOpenLeadModal: (courseTitle?: string) => void;
}

export default function CourseDetailPage({ onOpenLeadModal }: CourseDetailPageProps): JSX.Element {
  const [, params] = useRoute<{ slug: string }>('/khoa-hoc/:slug');
  const rawSlug = params?.slug || '';

  // Backward compatibility mapping for older slugs
  let targetSlug = rawSlug;
  if (rawSlug === 'khoa-tieng-trung-co-ban-han-ngu-tich-hop-hsk3') {
    targetSlug = 'hsk-3-phat-trien-toan-dien';
  } else if (rawSlug === 'khoa-hoc-tieng-trung-tich-hop-hsk4') {
    targetSlug = 'hsk-4-nang-cao-nang-luc';
  } else if (rawSlug === 'khoa-luyen-thi-new-hsk5-chuyen-sau') {
    targetSlug = 'hsk-5-thanh-thao-chuyen-sau';
  } else if (rawSlug === 'tieng-trung-giao-tiep-cong-so-thuong-mai') {
    targetSlug = 'khoa-hoc-giao-tiep-cap-toc';
  }

  const course = coursesData.find((c) => c.slug === targetSlug) || coursesData[0];

  // Other related courses for navigation
  const relatedCourses = coursesData.filter((c) => c.slug !== course.slug);

  return (
    <div className="w-full bg-white min-h-screen text-slate-800 font-sans">
      
      {/* 1. Solid Top Brand Strip & Breadcrumb */}
      <div className="w-full bg-[#1B7E45] text-white py-4 px-4 border-b border-[#156637]">
        <div className="max-w-[1060px] mx-auto flex flex-wrap items-center justify-between text-xs sm:text-sm font-medium gap-2">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:underline opacity-90">Trang chủ</Link>
            <ChevronRight size={14} className="opacity-60" />
            <Link href="/khoa-hoc" className="hover:underline opacity-90">Khóa học</Link>
            <ChevronRight size={14} className="opacity-60" />
            <span className="font-bold opacity-100 truncate max-w-[280px] sm:max-w-none">{course.title}</span>
          </div>
          <Link 
            href="/khoa-hoc" 
            className="inline-flex items-center gap-1.5 text-white/90 hover:text-white text-xs font-semibold"
          >
            <ArrowLeft size={14} /> Xem danh sách khóa học
          </Link>
        </div>
      </div>

      {/* Main Editorial Article Container */}
      <article className="max-w-[1060px] mx-auto px-4 py-8 sm:py-12">

        {/* 2. Top Intro Header matching Screenshot 1 & Syllabus specifications */}
        <header className="mb-8">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-5">
            <strong className="text-[#1B7E45] font-extrabold uppercase">GREEN OCEAN</strong> giới thiệu chương trình đào tạo: <strong>{course.title}</strong>. {course.shortDesc} Lộ trình bài bản, tinh gọn và trọng tâm giúp học viên làm chủ kiến thức vững chắc và tự tin sử dụng tiếng Trung trong đời sống và công việc.
          </p>

          <div className="inline-flex items-center gap-2 bg-[#EAF5EE] text-[#1B7E45] font-extrabold text-sm px-3.5 py-1.5 rounded-lg border border-[#1B7E45]/30 mb-4">
            <Calendar size={16} /> Thời lượng: {course.totalSessions || course.duration}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-[34px] font-black text-slate-900 leading-tight mb-6">
            {course.title}
          </h1>
        </header>

        {/* 3. Campaign & Scholarship Banner matching Screenshot 1 */}
        <div className="relative w-full rounded-lg overflow-hidden shadow-xl border border-red-100 bg-gradient-to-br from-[#8C1515] via-[#B82222] to-[#730D0D] text-white p-6 sm:p-10 mb-10 text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-md text-xs font-bold tracking-wider uppercase text-amber-200 border border-amber-300/30 mb-4">
              <GraduationCap size={16} /> GREEN OCEAN | HỆ SINH THÁI ĐÀO TẠO TIẾNG TRUNG TOÀN DIỆN
            </div>

            <div className="text-xs sm:text-sm font-extrabold tracking-[0.2em] text-amber-300 uppercase mb-1">
              ƯU ĐÃI TUYỂN SINH MỚI NHẤT
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6 drop-shadow-md">
              HỌC CHĂM CHỈ – NHẬN HỌC BỔNG KHỦNG
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-amber-300/40 rounded-lg p-4 sm:p-5 flex flex-col items-center text-center hover:bg-white/15 transition-all">
                <span className="text-[11px] uppercase tracking-wider text-amber-200 font-bold">TẶNG HỌC BỔNG</span>
                <span className="text-3xl sm:text-4xl font-black text-amber-300 my-0.5">1.500K</span>
                <span className="text-xs sm:text-[13px] text-white/90 leading-snug">
                  Khi đăng ký khóa Offline tiếng Trung tích hợp HSK 4 - HSK 5
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-amber-300/40 rounded-lg p-4 sm:p-5 flex flex-col items-center text-center hover:bg-white/15 transition-all">
                <span className="text-[11px] uppercase tracking-wider text-amber-200 font-bold">TẶNG HỌC BỔNG</span>
                <span className="text-3xl sm:text-4xl font-black text-amber-300 my-0.5">1.200K</span>
                <span className="text-xs sm:text-[13px] text-white/90 leading-snug">
                  Khi đăng ký khóa Offline tiếng Trung tích hợp HSK 1 - HSK 3
                </span>
              </div>
            </div>

            <button
              onClick={() => onOpenLeadModal(course.title)}
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-red-950 font-black text-base sm:text-lg px-8 py-3.5 rounded-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer active:scale-95 uppercase tracking-wide"
            >
              ▶ BẮT ĐẦU NGAY
            </button>
          </div>
        </div>

        {/* 4. SECTION: MỤC TIÊU KHÓA HỌC */}
        {course.objectives && course.objectives.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
              <Target size={22} className="text-[#1B7E45]" />
              Mục tiêu khóa học
            </h2>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <ul className="space-y-3">
                {course.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 size={18} className="text-[#1B7E45] shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 5. SECTION: NỘI DUNG HỌC */}
        {course.contentTopics && course.contentTopics.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen size={22} className="text-[#1B7E45]" />
              Nội dung học
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.contentTopics.map((topic, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <span className="w-6 h-6 rounded-full bg-[#EAF5EE] text-[#1B7E45] font-black text-xs flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-800 leading-snug">{topic}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. SECTION: 4 KỸ NĂNG (NGHE – NÓI – ĐỌC – VIẾT) */}
        {course.skills && (
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
              <Award size={22} className="text-[#1B7E45]" />
              Kỹ năng phát triển toàn diện (Nghe – Nói – Đọc – Viết)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Nghe */}
              <div className="bg-emerald-50/50 p-5 rounded-lg border border-emerald-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-md bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Headphones size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Kỹ năng Nghe</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{course.skills.listen}</p>
                </div>
              </div>

              {/* Nói */}
              <div className="bg-blue-50/50 p-5 rounded-lg border border-blue-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Kỹ năng Nói</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{course.skills.speak}</p>
                </div>
              </div>

              {/* Đọc */}
              <div className="bg-amber-50/50 p-5 rounded-lg border border-amber-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-md bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <BookMarked size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Kỹ năng Đọc</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{course.skills.read}</p>
                </div>
              </div>

              {/* Viết */}
              <div className="bg-purple-50/50 p-5 rounded-lg border border-purple-200 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-md bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <PenTool size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">Kỹ năng Viết</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{course.skills.write}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 7. SECTION: ĐẦU RA CAM KẾT */}
        {course.outcomes && course.outcomes.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 size={22} className="text-[#1B7E45]" />
              Chuẩn đầu ra cam kết
            </h2>
            <div className="bg-[#EAF5EE] p-6 rounded-lg border border-[#1B7E45]/30">
              <ul className="space-y-2.5">
                {course.outcomes.map((out, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800 font-medium">
                    <span className="text-[#1B7E45] font-bold mt-0.5">👉</span>
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 8. TIẾNG TRUNG TRẺ EM (NẾU CÓ CÁC CẤP ĐỘ) */}
        {course.kidLevels && (
          <section className="mb-10 pt-6 border-t border-slate-200">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4">
              Lộ trình 4 giai đoạn theo từng độ tuổi
            </h2>
            <div className="space-y-6">
              {course.kidLevels.map((lvl, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-200">
                    <h3 className="text-base sm:text-lg font-black text-[#1B7E45]">{lvl.name}</h3>
                    <div className="flex items-center gap-2 text-xs font-bold">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-md">Độ tuổi: {lvl.age}</span>
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md">Thời lượng: {lvl.duration}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Mục tiêu:</h4>
                    <ul className="space-y-1.5 pl-4 text-xs sm:text-sm text-slate-600">
                      {lvl.objectives.map((obj, oi) => (
                        <li key={oi} className="flex items-start gap-2">
                          <span className="text-[#1B7E45]">•</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 mb-2">
                    <strong>Chủ đề:</strong> {lvl.topics}
                  </div>

                  <div className="bg-white p-3 rounded-md border border-slate-200 text-xs sm:text-sm font-semibold text-emerald-800">
                    👉 <strong>Đầu ra:</strong> {lvl.outcome}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. Authentic Classroom Photo */}
        <div className="my-10 rounded-lg overflow-hidden border border-slate-200 shadow-md">
          <img 
            src={reason06} 
            alt="Lớp học tiếng Trung tại Green Ocean" 
            className="w-full h-auto object-cover max-h-[500px]"
          />
          <p className="bg-slate-50 py-2.5 px-4 text-center text-xs text-slate-500 italic border-t border-slate-200">
            Môi trường học tập hiện đại, tương tác đa chiều giữa giảng viên và học viên tại Green Ocean Bắc Ninh
          </p>
        </div>

        {/* 10. SPECIFICATION TABLE matching Screenshot 5 */}
        <section className="my-10 pt-6 border-t border-slate-200">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
            Bảng thông số chi tiết khóa học
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Bảng thông số cấu hình và tiêu chuẩn đầu ra theo chuẩn đào tạo Green Ocean
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-sm mb-8">
            <table className="w-full border-collapse text-left text-xs sm:text-sm text-slate-800">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300">
                  <th className="w-1/4 min-w-[140px] sm:min-w-[180px] p-3.5 sm:p-4 font-black text-slate-900 border-r border-slate-300 uppercase tracking-wider text-[11px] sm:text-xs">
                    Tiêu chí
                  </th>
                  <th className="w-3/4 p-3.5 sm:p-4 font-black text-slate-900 uppercase tracking-wider text-[11px] sm:text-xs">
                    Nội dung chi tiết
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300 bg-white">
                {/* Mã lớp */}
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                    Mã lớp
                  </td>
                  <td className="p-3.5 sm:p-4 font-extrabold text-[#1B7E45]">
                    {course.classCode || 'HSK'}
                  </td>
                </tr>

                {/* Đối tượng */}
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                    Đối tượng
                  </td>
                  <td className="p-3.5 sm:p-4 leading-relaxed text-slate-700">
                    <ul className="space-y-1.5 pl-3 list-disc">
                      {course.targetAudience.map((aud, i) => (
                        <li key={i}>{aud}</li>
                      ))}
                    </ul>
                  </td>
                </tr>

                {/* Số buổi học */}
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                    Số buổi học
                  </td>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-800">
                    {course.totalSessions || course.duration}
                  </td>
                </tr>

                {/* Thời lượng/1 buổi */}
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                    Thời lượng/1 buổi
                  </td>
                  <td className="p-3.5 sm:p-4 font-semibold text-slate-800">
                    {course.sessionDuration || '1,5 giờ'}
                  </td>
                </tr>

                {/* Nội dung */}
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                    Nội dung
                  </td>
                  <td className="p-3.5 sm:p-4 leading-relaxed text-slate-700">
                    <p className="font-bold text-slate-800 mb-2">Đào tạo đầy đủ 4 kỹ năng Nghe – Nói – Đọc – Viết:</p>
                    <ul className="space-y-1 pl-3">
                      {course.contentPhasesSummary ? (
                        course.contentPhasesSummary.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#1B7E45] font-bold">–</span>
                            <span>{item}</span>
                          </li>
                        ))
                      ) : (
                        course.outcomes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#1B7E45] font-bold">–</span>
                            <span>{item}</span>
                          </li>
                        ))
                      )}
                    </ul>
                  </td>
                </tr>

                {/* Giáo trình/Tài liệu */}
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                    Giáo trình/Tài liệu
                  </td>
                  <td className="p-3.5 sm:p-4 font-medium text-slate-800">
                    {course.textbook}
                  </td>
                </tr>

                {/* Chuẩn đầu ra */}
                <tr>
                  <td className="p-3.5 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                    Chuẩn đầu ra
                  </td>
                  <td className="p-3.5 sm:p-4 leading-relaxed text-slate-700">
                    <ul className="space-y-1.5 pl-3 list-disc">
                      {course.outcomes.map((outcome, idx) => (
                        <li key={idx}>{outcome}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 11. Giáo trình & Quà tặng */}
        <section className="mb-10">
          <div className="bg-[#EAF5EE] p-5 sm:p-6 rounded-lg border border-[#1B7E45]/20">
            <h3 className="text-sm sm:text-base font-black text-[#1B7E45] mb-3 flex items-center gap-2">
              <Sparkles size={18} /> Học liệu và quyền lợi tặng kèm khi tham gia khóa học:
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {course.gifts.map((gift, gi) => (
                <div key={gi} className="inline-flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-md text-xs sm:text-sm font-semibold text-slate-800 shadow-xs border border-slate-200">
                  <CheckCircle2 size={15} className="text-[#1B7E45]" />
                  <span>{gift}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Consultation Registration Box (Reused ConsultationForm) */}
        <section className="max-w-2xl mx-auto my-12">
          <ConsultationForm
            title="ĐĂNG KÝ NHẬN LỘ TRÌNH & XẾP LỚP HỌC THỬ"
            subtitle="Vui lòng để lại thông tin, chuyên viên học vụ sẽ liên hệ tư vấn lộ trình và lịch học phù hợp nhất."
            defaultCourse={course.title}
            courseOptions={coursesData.map((c) => ({ value: c.title, label: c.title }))}
            source={`course_detail_${course.slug}`}
            buttonText="GỬI ĐĂNG KÝ TƯ VẤN LỘ TRÌNH"
          />
        </section>

        {/* 13. Related Courses Directory */}
        <section className="my-10 pt-6 border-t border-slate-200">
          <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
            <Award size={20} className="text-[#1B7E45]" />
            Các khóa học khác tại Green Ocean
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCourses.map((item) => (
              <div key={item.id} className="bg-slate-50 p-5 rounded-lg border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <span className="inline-block bg-white text-[#1B7E45] border border-[#1B7E45]/30 text-[11px] font-black px-2.5 py-0.5 rounded-md mb-2">
                    Mã: {item.classCode || 'HSK'}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                    <Link href={`/khoa-hoc/${item.slug}`} className="hover:text-[#1B7E45] transition-colors">
                      {item.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                    {item.shortDesc}
                  </p>
                </div>
                <Link 
                  href={`/khoa-hoc/${item.slug}`}
                  className="text-xs font-bold text-[#1B7E45] hover:underline inline-flex items-center gap-1 pt-2 border-t border-slate-200"
                >
                  Xem chi tiết lộ trình <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </section>

      </article>
    </div>
  );
}
