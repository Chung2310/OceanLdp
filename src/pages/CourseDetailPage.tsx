import React from 'react';
import { useRoute, Link } from 'wouter';
import { 
  Clock, Users, Star, CheckCircle, ShieldCheck, 
  Gift, BookOpen, Sparkles, PhoneCall, ArrowLeft 
} from 'lucide-react';
import { coursesData } from '../data/coursesData';

interface CourseDetailPageProps {
  onOpenLeadModal: (courseTitle?: string) => void;
}

export default function CourseDetailPage({ onOpenLeadModal }: CourseDetailPageProps): JSX.Element {
  const [, params] = useRoute<{ slug: string }>('/khoa-hoc/:slug');
  const slug = params?.slug || '';
  const course = coursesData.find((c) => c.slug === slug) || coursesData[0];

  const formatPrice = (num: number) => new Intl.NumberFormat('vi-VN').format(num) + ' đ';

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Breadcrumb & Header */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-12 px-4 text-white">
        <div className="max-w-[1280px] mx-auto">
          <Link href="/khoa-hoc" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-semibold mb-4 transition-colors">
            <ArrowLeft size={16} /> Quay lại danh sách khóa học
          </Link>

          <div className="max-w-3xl">
            {course.badge && (
              <span className="inline-block bg-[#F37021] text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                {course.badge}
              </span>
            )}
            <h1 className="text-2xl md:text-4xl font-black text-white mb-3 tracking-tight">
              {course.title}
            </h1>
            <p className="text-sm md:text-base text-slate-300 mb-6 leading-relaxed">
              {course.shortDesc}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Star size={16} className="text-[#F37021] fill-[#F37021]" />
                <span><strong className="text-white font-bold">{course.rating}</strong> ({course.reviewsCount} đánh giá)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={16} className="text-[#1B7E45]" />
                <span><strong className="text-white font-bold">{course.studentsCount}</strong> học viên</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-[#1B7E45]" />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-[1280px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Left Column: Course Details */}
          <div className="space-y-6">
            {/* 1. Target Audience */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#1E293B] mb-4 flex items-center gap-2">
                <Users size={20} className="text-[#1B7E45]" /> Đối tượng học viên phù hợp
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {course.targetAudience.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={17} className="text-[#1B7E45] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Outcomes */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#1E293B] mb-4 flex items-center gap-2">
                <ShieldCheck size={20} className="text-[#1B7E45]" /> Chuẩn đầu ra & Quyền lợi cam kết
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {course.outcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={17} className="text-[#1B7E45] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Curriculum Phases */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#1E293B] mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-[#F37021]" /> Lộ trình đào tạo chi tiết
              </h3>
              <div className="space-y-4">
                {course.curriculum.map((phase, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-[#EAF5EE] text-[#1B7E45] font-black text-xs px-2.5 py-0.5 rounded">
                        Phần {idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-[#1E293B]">{phase.phase}</h4>
                    </div>
                    <ul className="space-y-1.5 pl-4 text-xs text-slate-600">
                      {phase.topics.map((t, ti) => (
                        <li key={ti}>• {t}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Textbooks & Gifts */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#1E293B] mb-4 flex items-center gap-2">
                <Gift size={20} className="text-[#F37021]" /> Giáo trình & Quà tặng kèm theo
              </h3>
              <div className="space-y-3">
                <p className="text-sm text-slate-700">
                  <strong className="text-[#1E293B]">Giáo trình chính:</strong> {course.textbook}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {course.gifts.map((g, gi) => (
                    <div key={gi} className="inline-flex items-center gap-1.5 bg-[#EAF5EE] text-[#1B7E45] px-3 py-1.5 rounded-lg text-xs font-semibold border border-[#1B7E45]/20">
                      <Sparkles size={14} className="text-[#F37021]" />
                      <span>{g}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Pricing & Registration Box */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-lg">
              <div className="text-center pb-6 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  HỌC PHÍ ƯU ĐÃI
                </span>
                <div className="text-3xl font-black text-[#F37021] mb-1">
                  {formatPrice(course.salePrice)}
                  {course.priceUnit && <span className="text-sm font-normal text-slate-500">/{course.priceUnit}</span>}
                </div>
                {course.originalPrice > course.salePrice && (
                  <div className="text-xs text-slate-400 line-through mb-2">
                    Giá gốc: {formatPrice(course.originalPrice)}
                  </div>
                )}
                <span className="inline-block bg-orange-100 text-[#F37021] text-xs font-extrabold px-3 py-1 rounded-full">
                  Tiết kiệm {course.discountPercent || 20}% học phí
                </span>
              </div>

              <div className="py-5 space-y-3 text-xs border-b border-slate-100">
                <div className="flex justify-between text-slate-600">
                  <span>Hình thức:</span>
                  <strong className="text-slate-800">{course.format}</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Thời lượng:</span>
                  <strong className="text-slate-800">{course.duration}</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Lịch học:</span>
                  <strong className="text-slate-800">{course.schedule}</strong>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Sĩ số lớp:</span>
                  <strong className="text-slate-800">{course.classSize}</strong>
                </div>
              </div>

              <button 
                onClick={() => onOpenLeadModal(course.title)} 
                className="w-full mt-6 py-3.5 bg-[#1B7E45] hover:bg-[#156637] text-white rounded-xl font-extrabold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <PhoneCall size={18} /> ĐĂNG KÝ TƯ VẤN KHÓA HỌC
              </button>

              <div className="mt-5 space-y-1.5 text-center text-xs font-semibold text-slate-600">
                <div>✓ Cam kết đỗ chứng chỉ 100%</div>
                <div>✓ Hỗ trợ học bù miễn phí</div>
                <div>✓ Trả góp học phí 0% lãi suất</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
