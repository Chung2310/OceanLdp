import React from 'react';
import { Link } from 'wouter';
import { PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';

import banner1Img from '../asset/banner/banner1.png';
import banner2Img from '../asset/banner/banner2.png';
import banner3Img from '../asset/banner/banner3.png';
import banner4Img from '../asset/banner/banner4.png';
import reason02Img from '../asset/reasons/reason02.png';
import reason03Img from '../asset/reasons/reason03.png';

interface AboutPageProps {
  onOpenLeadModal: () => void;
}

export default function AboutPage({ onOpenLeadModal }: AboutPageProps): JSX.Element {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* 1. Top Brand Header Strip (Matching Thanh Mai reference style) */}
      <div className="w-full bg-[#135830] text-white py-6 md:py-8 px-4 text-center">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-base sm:text-lg md:text-xl font-black uppercase tracking-wide leading-snug m-0 text-white">
            GREEN OCEAN – HỆ SINH THÁI ĐÀO TẠO NĂNG LỰC TIẾNG TRUNG TOÀN DIỆN, HỌC ĐƯỢC – HÀNH NGAY
          </h1>
        </div>
      </div>

      {/* 2. Main Article Content Container (Clean editorial format, no border boxes) */}
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 py-10 md:py-14 text-slate-800">
        
        {/* Breadcrumb navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#1B7E45] transition-colors">Trang chủ</Link>
          <span>/</span>
          <span className="text-slate-400">Giới thiệu</span>
          <span>/</span>
          <span className="text-[#1B7E45] font-semibold">Về chúng tôi</span>
        </nav>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] mb-5 tracking-tight">
          Giới thiệu về GREEN OCEAN
        </h2>

        {/* Introductory Paragraphs */}
        <div className="space-y-4 text-[15px] sm:text-base text-slate-700 leading-relaxed font-normal">
          <p>
            Trung tâm Ngoại ngữ Green Ocean (tiền thân là <strong>Trung tâm Tiếng Trung Bắc Ninh</strong>, thành lập vào <strong>tháng 07/2020</strong>) là đơn vị đào tạo năng lực tiếng Trung chất lượng cao và toàn diện với hơn 6 năm phát triển bền vững, đồng hành cùng hơn <strong>5.000 học viên</strong> tại Bắc Ninh và trên toàn quốc. Chúng tôi kiên định định hướng đào tạo ngoại ngữ thực chất, tập trung vào hiệu quả ứng dụng thực tế và khả năng sử dụng tiếng Trung tự tin trong học tập, thi chứng chỉ HSK và công việc tại các doanh nghiệp.
          </p>
        </div>

        {/* Featured Banner Image 1 */}
        <div className="my-8">
          <img
            src={banner2Img}
            alt="Green Ocean - 6 năm hơn 5.000 học viên đồng hành"
            className="w-full h-auto rounded-lg shadow-xs object-cover"
            loading="lazy"
          />
          <p className="text-xs text-center text-slate-500 italic mt-2.5">
            Hơn 6 năm phát triển bền vững cùng hơn 5.000 học viên tại Trung tâm Ngoại ngữ Green Ocean
          </p>
        </div>

        {/* Continuation Paragraphs */}
        <div className="space-y-4 text-[15px] sm:text-base text-slate-700 leading-relaxed">
          <p>
            Khác với mô hình học chỉ phục vụ thi cử lý thuyết, Green Ocean xây dựng chương trình tiếng Trung <strong>học được – hành ngay</strong>, giúp người học phát triển đồng bộ cả 4 kỹ năng: <strong>Nghe – Nói – Đọc – Viết và Dịch thuật ứng dụng</strong>, từ đó tự tin sử dụng tiếng Trung trong giao tiếp hàng ngày, công việc văn phòng và sản xuất. Chương trình đào tạo được thiết kế phù hợp với nhiều đối tượng học viên: từ người mới bắt đầu (mất gốc), học sinh ôn thi HSK để xét tuyển thẳng Đại học, người đi làm tại các khu công nghiệp trọng điểm (Quế Võ, VSIP, Yên Phong...), cán bộ doanh nghiệp FDI và người có nhu cầu du học Trung Quốc.
          </p>
          <p>
            Đồng thời, chương trình đào tạo của Green Ocean được thiết kế bám sát các chuẩn khảo thí quốc tế <strong>New HSK 3.0</strong> và khung năng lực ngoại ngữ, giúp học viên vừa bứt phá năng lực sử dụng ngôn ngữ thực tế vừa đạt kết quả tối ưu trong các kỳ thi lấy chứng chỉ quốc tế.
          </p>
        </div>

        {/* Section 2: Differentiators */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E293B] mt-12 mb-6 tracking-tight">
          Những yếu tố tạo nên khác biệt của Green Ocean
        </h2>

        {/* Item 1 */}
        <div className="space-y-3 mb-8">
          <h3 className="text-base sm:text-lg font-bold text-[#1E293B]">
            1. Phương châm đào tạo "Thực chất – Ứng dụng – Hiệu quả"
          </h3>
          <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
            Lấy nhu cầu học tập, công việc và sự phát triển của học viên làm trọng tâm. Phương pháp giảng dạy tiệm cận ngôn ngữ đời sống, giúp người học biến kiến thức thành kỹ năng phản xạ tự nhiên. Lược bỏ hoàn toàn các lý thuyết hàn lâm không cần thiết, tập trung vào các tình huống đàm phán, giao tiếp công sở, nhà xưởng và đời sống hàng ngày để người học <strong>học được – hành ngay</strong>.
          </p>
          
          <div className="my-6 max-w-[760px] mx-auto">
            <img
              src={reason03Img}
              alt="Chương trình đào tạo bài bản thực tế tại Green Ocean"
              className="w-full h-auto rounded-lg shadow-xs object-cover"
              loading="lazy"
            />
            <p className="text-xs text-center text-slate-500 italic mt-2">
              Không gian lớp học tương tác thực hành trực tiếp tại Green Ocean
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="space-y-3 mb-8">
          <h3 className="text-base sm:text-lg font-bold text-[#1E293B]">
            2. Hệ thống học liệu và lộ trình New HSK chuẩn khảo thí
          </h3>
          <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
            Lộ trình học tập rõ ràng, khoa học từ cơ bản đến nâng cao (HSK1 đến HSK6), phân bổ kiến thức logic theo từng giai đoạn. Bộ giải pháp học liệu bài bản kết hợp kho đề thi cập nhật liên tục và các mẹo làm bài độc quyền, giúp học viên ghi nhớ chữ Hán qua tư duy hình ảnh, đơn giản hóa ngữ pháp phức tạp và tối ưu hóa thời gian ôn luyện.
          </p>
          
          <div className="my-6">
            <img
              src={banner1Img}
              alt="Lộ trình học tiếng Trung từ mất gốc đến HSK5"
              className="w-full h-auto rounded-lg shadow-xs object-cover"
              loading="lazy"
            />
            <p className="text-xs text-center text-slate-500 italic mt-2">
              Lộ trình đào tạo toàn diện từ mất gốc đến HSK5 chuẩn khảo thí quốc tế
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="space-y-3 mb-8">
          <h3 className="text-base sm:text-lg font-bold text-[#1E293B]">
            3. Đội ngũ giảng viên 5 sao giàu kinh nghiệm thực chiến
          </h3>
          <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
            Tại Green Ocean, 100% giảng viên tốt nghiệp chuyên ngành tiếng Trung tại các trường Đại học danh tiếng hàng đầu trong và ngoài nước (Thạc sĩ ĐH Tương Đàm – Hồ Nam, Thạc sĩ ĐH Giao thông Tây Nam, ĐH Sư phạm Thái Nguyên, ĐH Hà Nội HANU...). Đội ngũ thầy cô có từ <strong>5 đến 28 năm kinh nghiệm</strong> giảng dạy và thực chiến ngoại ngữ trong môi trường doanh nghiệp quốc tế; lối giảng dạy trực quan sinh động, giàu năng lượng và tận tâm đồng hành cùng từng học viên.
          </p>
          
          <div className="my-6">
            <img
              src={banner3Img}
              alt="Đội ngũ giáo viên Green Ocean - Nền tảng tạo nên chất lượng"
              className="w-full h-auto rounded-lg shadow-xs object-cover"
              loading="lazy"
            />
            <p className="text-xs text-center text-slate-500 italic mt-2">
              Đội ngũ giảng viên tâm huyết, giàu kinh nghiệm thực chiến tại Trung tâm Ngoại ngữ Green Ocean
            </p>
          </div>

          <div className="pt-1 text-right">
            <Link 
              href="/doi-ngu-giang-vien"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1B7E45] hover:underline"
            >
              <span>Xem chi tiết hồ sơ đội ngũ giảng viên Green Ocean</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Item 4 */}
        <div className="space-y-3 mb-8">
          <h3 className="text-base sm:text-lg font-bold text-[#1E293B]">
            4. Cam kết chuẩn đầu ra bằng văn bản & Hỗ trợ học lại miễn phí
          </h3>
          <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
            Green Ocean cam kết chuẩn đầu ra đỗ chứng chỉ HSK bằng văn bản. Học viên tham gia tối thiểu 80% thời lượng khóa học và hoàn thành bài tập định kỳ nếu không đạt điểm chuẩn trong kỳ thi mục tiêu sẽ được <strong>học lại hoàn toàn miễn phí 100%</strong>. Ngoài ra, trung tâm áp dụng chính sách bảo lưu linh hoạt tới 06 tháng và học bù miễn phí tại các lớp song song trong tuần.
          </p>
        </div>

        {/* Item 5 */}
        <div className="space-y-3 mb-8">
          <h3 className="text-base sm:text-lg font-bold text-[#1E293B]">
            5. Cơ sở vật chất hiện đại & Lớp học trực tuyến tương tác 2 chiều
          </h3>
          <p className="text-[15px] sm:text-base text-slate-700 leading-relaxed">
            Hệ thống cơ sở khang trang tại trung tâm TP. Bắc Ninh:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[14.5px] sm:text-base text-slate-700">
            <li><strong>Cơ sở 1:</strong> Số 567 đường Hàn Thuyên, Phường Đại Phúc, TP. Bắc Ninh.</li>
            <li><strong>Cơ sở 2:</strong> Ngã 6 Phường Đại Phúc, TP. Bắc Ninh.</li>
            <li><strong>Mô hình trực tuyến toàn quốc:</strong> Lớp học tương tác 2 chiều trực tiếp 100% cùng giảng viên, có video xem lại và giáo vụ kèm cặp chữa bài 24/7.</li>
          </ul>

          <div className="my-6 max-w-[760px] mx-auto">
            <img
              src={banner4Img}
              alt="Môi trường đào tạo năng động tại Green Ocean"
              className="w-full h-auto rounded-lg shadow-xs object-cover"
              loading="lazy"
            />
            <p className="text-xs text-center text-slate-500 italic mt-2">
              Không gian lớp học tiện nghi, hiện đại tại Trung tâm Ngoại ngữ Green Ocean
            </p>
          </div>
        </div>

        {/* Item 6 */}
        <div className="space-y-4 mb-10">
          <h3 className="text-base sm:text-lg font-bold text-[#1E293B]">
            6. Hành trình phát triển và các cột mốc quan trọng
          </h3>
          <ul className="space-y-3 text-[14.5px] sm:text-base text-slate-700 border-l-2 border-[#1B7E45]/40 pl-4">
            <li>
              <strong className="text-[#1B7E45]">Tháng 07/2020:</strong> Thành lập với tên gọi ban đầu là <strong>Trung tâm Tiếng Trung Bắc Ninh</strong>, mang sứ mệnh đem đến phương pháp đào tạo tiếng Trung thực chất, dễ hiểu cho người học tại địa bàn và các khu công nghiệp.
            </li>
            <li>
              <strong className="text-[#1B7E45]">Giai đoạn 2021 – 2023:</strong> Quy tụ đội ngũ giảng viên nòng cốt từ 5 đến 28 năm kinh nghiệm; đào tạo thành công hàng nghìn học viên và giúp đông đảo học sinh THPT đạt HSK4 trở lên phục vụ xét tuyển thẳng đại học.
            </li>
            <li>
              <strong className="text-[#1B7E45]">Giai đoạn 2024 – 2025:</strong> Phát triển mạnh mẽ mô hình lớp học trực tuyến tương tác 2 chiều chuẩn chỉnh, nâng tổng số học viên được đào tạo thành công vượt mốc 5.000 học viên trên toàn quốc.
            </li>
            <li>
              <strong className="text-[#1B7E45]">Tháng 01/2026:</strong> Chính thức chuyển đổi tên thương hiệu thành <strong>Trung tâm Ngoại ngữ Green Ocean</strong> nhằm mở rộng quy mô, nâng tầm chất lượng và chuẩn hóa hoạt động đào tạo hướng tới sự chuyên nghiệp, bài bản, hiện đại và bền vững.
            </li>
          </ul>
        </div>

        {/* Bottom Consulting Callout Banner (Clean editorial style) */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="bg-[#EAF5EE] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold text-[#135830] m-0">
                Bắt đầu hành trình chinh phục tiếng Trung cùng Green Ocean
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 m-0">
                Đăng ký ngay hôm nay để nhận tư vấn lộ trình học phù hợp và bài đánh giá năng lực đầu vào miễn phí.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenLeadModal}
              className="inline-flex items-center gap-2 bg-[#F37021] hover:bg-[#d95e14] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95 shrink-0"
            >
              <PhoneCall size={16} /> Đăng Ký Nhận Tư Vấn
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
