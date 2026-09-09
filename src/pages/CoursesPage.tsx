import React, { useState } from 'react';
import { 
  CheckCircle2, ChevronRight, GraduationCap, 
  BookOpen, Sparkles, Send, MapPin, Award, Headphones,
  MessageSquare, BookMarked, PenTool, Target, Calendar
} from 'lucide-react';
import { coursesData } from '../data/coursesData';
import reason06 from '../asset/reasons/reason06.png';
import banner4 from '../asset/banner/banner4.png';
import ConsultationForm from '../components/Common/ConsultationForm';

interface CoursesPageProps {
  onOpenLeadModal: (courseTitle?: string) => void;
}

export default function CoursesPage({ onOpenLeadModal }: CoursesPageProps): JSX.Element {
  // Quick navigation between course sections
  const [activeTab, setActiveTab] = useState<string>('all');

  const scrollToCourse = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-white min-h-screen text-slate-800 font-sans">
      
      {/* 1. Solid Top Brand Strip & Breadcrumb */}
      <div className="w-full bg-[#1B7E45] text-white py-3 px-4 border-b border-[#156637]">
        <div className="max-w-[980px] mx-auto flex items-center justify-between text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <a href="/" className="hover:underline opacity-90">Trang chủ</a>
            <ChevronRight size={14} className="opacity-60" />
            <span className="font-bold opacity-100">Các khóa học tiếng Trung</span>
          </div>
          <span className="hidden sm:inline text-xs text-white/80">
            Hệ thống đào tạo năng lực Hán ngữ toàn diện
          </span>
        </div>
      </div>

      {/* Main Editorial Article Container matching Green Ocean Standards */}
      <article className="max-w-[980px] mx-auto px-4 py-8 sm:py-12">

        {/* 2. Top Intro Header matching Screenshot */}
        <div className="mb-6">
          <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed font-normal mb-5">
            <strong className="text-[#c02626] font-bold">GREEN OCEAN</strong> giới thiệu <strong className="text-[#c02626] font-bold">khóa học tiếng Trung</strong> tích hợp 4 kỹ năng: <strong>Nghe, nói, đọc, viết</strong>; tiếng Trung cho người mới bắt đầu đến nâng cao. Giáo trình phù hợp với các bạn chưa từng học Hán ngữ hoặc muốn bổ sung kiến thức đã quên. Lộ trình bài bản, tinh gọn và trọng tâm sẽ giúp bạn thành thạo kỹ năng mà bạn mong muốn.
          </p>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-6">
            Chuyển mình thay đổi từ HSK 6 bậc sang New HSK 3 cấp 9 bậc
          </h1>
        </div>

        {/* 3. Campaign & Scholarship Banner matching Screenshot 1 */}
        <div className="relative w-full rounded-lg overflow-hidden shadow-xl border border-red-100 bg-gradient-to-br from-[#8C1515] via-[#B82222] to-[#730D0D] text-white p-6 sm:p-10 mb-8 text-center">
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
              onClick={() => onOpenLeadModal('Khóa học tiếng Trung toàn diện')}
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-red-950 font-black text-base sm:text-lg px-8 py-3.5 rounded-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer active:scale-95 uppercase tracking-wide"
            >
              ▶ BẮT ĐẦU NGAY
            </button>
          </div>
        </div>

        {/* 4. Contextual Narrative matching Screenshot 2 */}
        <section className="space-y-4 text-[15px] sm:text-base leading-relaxed text-slate-700 mb-6">
          <p>
            Tháng 3 năm 2021, Bộ Giáo dục và Uỷ ban Công tác Ngôn ngữ Quốc gia của Trung Quốc đã ban hành bộ <strong>“Tiêu chuẩn đánh giá trình độ Hán ngữ trong giáo dục Hán ngữ quốc tế”</strong> về việc thay đổi tiêu chuẩn đánh giá trình độ tiếng Hán của người học tiếng Hán toàn thế giới từ HSK 6 bậc sang <strong>New HSK 3 cấp 9 bậc</strong>.
          </p>

          <p>
            Với mong muốn cung cấp đầy đủ kiến thức và kỹ năng cho người học, đảm bảo người học đáp ứng được các tiêu chí mới theo chuẩn New HSK 3 cấp 9 bậc sắp tới, <strong>Tiếng Trung Green Ocean</strong> triển khai <strong className="text-[#c02626]">“Hệ thống sản phẩm Hán ngữ New HSK 3 cấp 9 bậc”</strong> gồm khoá học Hán ngữ tích hợp NEW HSK, Luyện thi dịch NEW HSK, Luyện thi NEW HSK và NEW HSKK.
          </p>

          {/* Photo 1: Authentic Classroom photo matching screenshot */}
          <div className="my-6 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <img 
              src={reason06} 
              alt="Lớp học tiếng Trung tích hợp 4 kỹ năng tại Green Ocean" 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

          <p>
            Các khóa học phát triển toàn diện <strong>“4 kỹ năng nghe – nói – đọc – viết”</strong> cho người học Hán ngữ. New HSK 3 cấp 9 bậc sẽ có khối lượng kiến thức, từ vựng và ngữ pháp nâng cao hơn khá nhiều so với HSK 6 bậc trước đây, đặc biệt từ NEW HSK bậc 4 trở lên còn yêu cầu có thêm kỹ năng dịch.
          </p>

          <p>
            Đây là một sự thay đổi lớn ảnh hưởng đến đại đa số người học Hán ngữ trên thế giới nói chung không riêng gì ở Việt Nam. Đồng thời đặt ra bài toán người học Hán ngữ cần phải làm gì để sẵn sàng đáp ứng tiêu chuẩn mới của kỳ thi Trình độ Hán ngữ New HSK 3 cấp 9 bậc dự kiến sẽ áp dụng lần đầu tiên trong cuối năm nay.
          </p>

          <p>
            Vậy bạn đã sẵn sàng để thay đổi chưa? Đăng ký tham gia các khóa học theo tiêu chuẩn đầu ra New HSK 3 cấp 9 bậc của Green Ocean ngay nhé!
          </p>
        </section>

        {/* 5. Section: "Ai nên tham gia khóa học tiếng Trung cơ bản?" matching Screenshot 3 */}
        <section className="my-8 pt-6 border-t border-slate-200">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
            Ai nên tham gia khóa học tiếng Trung cơ bản?
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base mb-4">
            Khóa học tiếng Trung cơ bản phù hợp với nhiều đối tượng học viên khác nhau bao gồm:
          </p>

          <ul className="space-y-2.5 mb-5 text-[15px] sm:text-base text-slate-700 pl-4 list-disc">
            <li>Những bạn mới bắt đầu học tiếng Trung từ con số 0, sơ cấp</li>
            <li>Những bạn bị mất gốc tiếng Trung đã lâu</li>
            <li>Những bạn học tiếng Trung để thi HSK, học sinh THPT</li>
            <li>Những bạn học tiếng Trung Quốc muốn đi du học, du lịch hay đơn giản là muốn tìm hiểu văn hóa Trung Hoa</li>
            <li>Những người đi làm, dân văn phòng, công xưởng cần học về ngôn ngữ tiếng Trung để giao tiếp trong công việc</li>
          </ul>

          <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed mb-6">
            <strong className="text-slate-900">Khóa học tiếng Trung</strong> cơ bản sẽ giúp bạn có nền tảng vững chắc, nắm vững cách phát âm, nét chữ và <strong className="text-[#c02626]">bộ thủ</strong>. Đây là tiền đề giúp học viên chinh phục Hán ngữ và học lên trình độ cao hơn.
          </p>

          {/* Photo 2: Students in classroom */}
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm mb-8">
            <img 
              src={banner4} 
              alt="Môi trường học tiếng Trung thực tế tại Green Ocean Bắc Ninh" 
              className="w-full h-auto object-cover max-h-[480px]"
            />
          </div>
        </section>

        {/* 6. Section: "Bạn nhận được gì khi tham gia khóa học tiếng Trung?" matching Screenshot 4 */}
        <section className="my-8 pt-6 border-t border-slate-200">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
            Bạn nhận được gì khi tham gia khóa học tiếng Trung?
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base mb-5">
            Các bạn sẽ nhận được những lợi ích sau khi tham gia khóa học của chúng tôi như:
          </p>

          <ol className="space-y-3.5 text-[15px] sm:text-base text-slate-700 list-decimal pl-5">
            <li className="pl-1">
              <strong>Nắm vững ngữ pháp:</strong> Giúp bạn nắm chắc toàn bộ ngữ pháp để nói trôi chảy hoặc viết đoạn văn bằng tiếng Trung Quốc.
            </li>
            <li className="pl-1">
              <strong>Nền tảng từ vựng tốt:</strong> Khóa học cung cấp cho bạn hệ thống từ vựng sử dụng trong giao tiếp hàng ngày và phổ biến trong đời sống. Ngoài ra còn có trong các chủ điểm để thi các <strong>chứng chỉ tiếng Trung</strong>.
            </li>
            <li className="pl-1">
              <strong>Kỹ năng giao tiếp:</strong> Bạn sẽ biết cách phát âm chuẩn phổ thông, tự nhiên như người bản xứ. Kỹ năng được rèn phản xạ khi giao tiếp với phương pháp “nhúng”.
            </li>
            <li className="pl-1">
              <strong>Kỹ năng đọc – viết:</strong> Nền tảng ngữ pháp và từ vựng giúp đọc và viết được những đoạn văn từ đơn giản đến phức tạp.
            </li>
            <li className="pl-1">
              <strong>Kỹ năng nghe:</strong> Nâng cao và cải thiện kỹ năng nghe hiểu cơ bản với phương pháp khoa học.
            </li>
            <li className="pl-1">
              <strong>Kỹ năng dịch:</strong> Rèn luyện khả năng bao quát thông tin, phân tích và xử lý để dịch xuôi – ngược trong dịch nói và dịch viết từ câu đơn đến câu ghép. Tăng tốc độ dịch, tư duy dịch để đáp ứng nhu cầu công việc (có lớp dịch riêng).
            </li>
            <li className="pl-1">
              <strong>Đủ điều kiện và trình độ:</strong> Tham gia các kì thi cấp chứng chỉ như HSK, HSKK cũng như học các lớp tiếng Trung nâng cao khác.
            </li>
          </ol>
        </section>

        {/* 7. QUICK COURSE NAVIGATOR BAR */}
        <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-md py-3 px-2 border-y border-slate-200 shadow-xs mb-8 flex flex-wrap gap-2 items-center">
          <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mr-2">Chọn nhanh khóa học:</span>
          {coursesData.map((c) => (
            <button
              key={c.id}
              onClick={() => scrollToCourse(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === c.id
                  ? 'bg-[#1B7E45] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {c.classCode || c.title.split('–')[0].trim()}
            </button>
          ))}
        </div>

        {/* 8. SECTION: CÁC KHÓA HỌC TIẾNG TRUNG DÀNH CHO BẠN */}
        <section className="my-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8 pb-3 border-b-2 border-[#1B7E45]">
            Các khóa học tiếng Trung dành cho bạn
          </h2>

          <div className="space-y-16">
            {coursesData.map((course, index) => (
              <section key={course.id} id={course.id} className="scroll-mt-32 pt-2">
                
                {/* Course Title Header */}
                <div className="mb-4">
                  <span className="text-xs font-extrabold text-[#1B7E45] uppercase tracking-wider">
                    CHƯƠNG TRÌNH {index + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    {index + 1}. {course.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 mt-1">
                    {course.shortDesc}
                  </p>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-md border border-emerald-200 mt-2">
                    <Calendar size={14} /> Thời lượng: {course.totalSessions || course.duration}
                  </div>
                </div>

                {/* SPECIFICATION TABLE (Bảng thông số khóa học 2 cột chuẩn Screenshot) */}
                <div className="overflow-x-auto rounded-xl border border-slate-300 shadow-xs mb-6">
                  <table className="w-full border-collapse text-left text-xs sm:text-sm text-slate-800">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-300">
                        <th className="w-1/4 min-w-[130px] sm:min-w-[160px] p-3 sm:p-4 font-black text-slate-900 border-r border-slate-300 uppercase tracking-wider text-[11px] sm:text-xs">
                          Mã lớp
                        </th>
                        <th className="w-3/4 p-3 sm:p-4 font-extrabold text-[#1B7E45] uppercase tracking-wider text-xs sm:text-sm">
                          {course.classCode || 'HSK'}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-300 bg-white">
                      
                      {/* Đối tượng */}
                      <tr>
                        <td className="p-3 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                          Đối tượng
                        </td>
                        <td className="p-3 sm:p-4 leading-relaxed text-slate-700">
                          <ul className="space-y-1.5 pl-3 list-disc">
                            {course.targetAudience.map((aud, i) => (
                              <li key={i}>{aud}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>

                      {/* Số buổi học */}
                      <tr>
                        <td className="p-3 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                          Số buổi học
                        </td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-800">
                          {course.totalSessions || course.duration}
                        </td>
                      </tr>

                      {/* Thời lượng/1 buổi */}
                      <tr>
                        <td className="p-3 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                          Thời lượng/1 buổi
                        </td>
                        <td className="p-3 sm:p-4 font-semibold text-slate-800">
                          {course.sessionDuration || '1,5 giờ'}
                        </td>
                      </tr>

                      {/* Nội dung */}
                      <tr>
                        <td className="p-3 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                          Nội dung
                        </td>
                        <td className="p-3 sm:p-4 leading-relaxed text-slate-700">
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
                        <td className="p-3 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                          Giáo trình/Tài liệu
                        </td>
                        <td className="p-3 sm:p-4 font-medium text-slate-800">
                          {course.textbook}
                        </td>
                      </tr>

                      {/* Chuẩn đầu ra */}
                      <tr>
                        <td className="p-3 sm:p-4 font-bold bg-slate-50 text-slate-800 border-r border-slate-300 align-top">
                          Chuẩn đầu ra
                        </td>
                        <td className="p-3 sm:p-4 leading-relaxed text-slate-700">
                          <ul className="space-y-1 pl-3">
                            {course.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-[#1B7E45] font-bold">–</span>
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Detailed Breakdown: Mục tiêu & 4 Kỹ năng (nếu có) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Mục tiêu */}
                  {course.objectives && (
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Target size={16} className="text-[#1B7E45]" /> Mục tiêu khóa học:
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-3">
                        {course.objectives.map((obj, oi) => (
                          <li key={oi} className="flex items-start gap-1.5">
                            <span className="text-[#1B7E45] font-bold">•</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 4 Kỹ năng */}
                  {course.skills && (
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Award size={16} className="text-[#1B7E45]" /> 4 Kỹ năng đạt được:
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                          <div className="font-bold text-emerald-800 flex items-center gap-1 mb-1">
                            <Headphones size={13} /> Nghe
                          </div>
                          <p className="text-slate-600 leading-tight line-clamp-3">{course.skills.listen}</p>
                        </div>
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                          <div className="font-bold text-blue-800 flex items-center gap-1 mb-1">
                            <MessageSquare size={13} /> Nói
                          </div>
                          <p className="text-slate-600 leading-tight line-clamp-3">{course.skills.speak}</p>
                        </div>
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                          <div className="font-bold text-amber-800 flex items-center gap-1 mb-1">
                            <BookMarked size={13} /> Đọc
                          </div>
                          <p className="text-slate-600 leading-tight line-clamp-3">{course.skills.read}</p>
                        </div>
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                          <div className="font-bold text-purple-800 flex items-center gap-1 mb-1">
                            <PenTool size={13} /> Viết
                          </div>
                          <p className="text-slate-600 leading-tight line-clamp-3">{course.skills.write}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tiếng Trung Trẻ Em - 4 Cấp độ tuổi */}
                {course.kidLevels && (
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4 space-y-3">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm uppercase tracking-wider">
                      4 Cấp độ chuyên biệt theo lứa tuổi:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.kidLevels.map((lvl, li) => (
                        <div key={li} className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs">
                          <div className="flex justify-between font-bold text-[#1B7E45] mb-1">
                            <span>{lvl.name}</span>
                            <span className="text-slate-500 font-normal">{lvl.age}</span>
                          </div>
                          <div className="text-slate-600 mb-1"><strong>Thời lượng:</strong> {lvl.duration}</div>
                          <div className="text-emerald-700">👉 {lvl.outcome}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Consultation button for this specific course */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenLeadModal(course.title)}
                    className="px-5 py-2.5 rounded-md bg-[#1B7E45] hover:bg-[#156637] text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    Đăng ký tư vấn {course.classCode || course.title} <ChevronRight size={14} />
                  </button>
                  <a
                    href={`/khoa-hoc/${course.slug}`}
                    className="px-4 py-2.5 rounded-md border border-slate-200 hover:border-[#1B7E45] text-slate-700 hover:text-[#1B7E45] text-xs sm:text-sm font-medium transition-all"
                  >
                    Xem trang chi tiết riêng
                  </a>
                </div>

              </section>
            ))}
          </div>
        </section>

        {/* 9. FORM ĐĂNG KÝ TƯ VẤN KHÓA HỌC (Reusable ConsultationForm) */}
        <section className="max-w-2xl mx-auto my-14">
          <p className="text-center text-slate-700 text-sm md:text-base font-medium mb-4 leading-relaxed">
            Để nhận <strong className="text-[#1E293B] font-bold">“Lộ trình học chi tiết”</strong> và nhận các chương trình <strong className="text-[#F37021] font-bold">“Học Bổng Ưu Đãi”</strong>, Bạn hãy để lại thông tin dưới đây nhé!
          </p>

          <ConsultationForm
            title="ĐĂNG KÝ NHẬN LỘ TRÌNH & HỌC BỔNG KHÓA HỌC"
            subtitle="Chuyên viên học vụ sẽ liên hệ trực tiếp để tư vấn khóa học phù hợp với mục tiêu và thời gian của bạn."
            courseOptions={coursesData.map((c) => ({ value: c.title, label: c.title }))}
            branchOptions={[
              { value: 'Cơ sở 1: Hàn Thuyên – Đại Phúc', label: 'Cơ sở 1: Số 567 đường Hàn Thuyên, P. Đại Phúc, TP. Bắc Ninh' },
              { value: 'Cơ sở 2: Ngã 6 Đại Phúc', label: 'Cơ sở 2: Ngã 6 Phường Đại Phúc, TP. Bắc Ninh' },
              { value: 'Cơ sở Đào Tạo Trực Tuyến Toàn Quốc', label: 'Đào Tạo Trực Tuyến Toàn Quốc (Online tương tác 2 chiều)' }
            ]}
            defaultBranch="Cơ sở 1: Hàn Thuyên – Đại Phúc"
            defaultCourse={coursesData[0]?.title || 'Tiếng Trung Tích Hợp HSK3 3.0'}
            source="courses_overview_page"
            buttonText="GỬI ĐĂNG KÝ TƯ VẤN KHÓA HỌC"
          />

          <div className="mt-8 pt-6 border-t border-slate-200 text-center text-xs text-slate-600 space-y-1.5">
            <p className="flex items-center justify-center gap-1.5 font-medium">
              <MapPin size={14} className="text-[#1B7E45]" /> Cơ sở 1: Số 567 đường Hàn Thuyên, P. Đại Phúc, TP. Bắc Ninh
            </p>
            <p className="flex items-center justify-center gap-1.5 font-medium">
              <MapPin size={14} className="text-[#1B7E45]" /> Cơ sở 2: Ngã 6 Phường Đại Phúc, TP. Bắc Ninh
            </p>
          </div>
        </section>

      </article>
    </div>
  );
}
