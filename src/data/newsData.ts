import { NewsPost } from '../types';

import thumbTapSan1 from '../asset/news/thumb_tap_san_1.png';
import thumbNhanhNhat from '../asset/news/thumb_nhanh_nhat.png';
import thumbLeRaMat from '../asset/news/thumb_le_ra_mat.png';
import thumbChiecPhao from '../asset/news/thumb_chiec_phao.png';

export const newsCategories = [
  { 
    id: 'all', 
    name: 'Tất cả tin tức',
    description: 'Cập nhật tin tức khai giảng, cẩm nang luyện thi New HSK, phương pháp học tiếng Trung và học bổng du học mới nhất tại Green Ocean.'
  },
  { 
    id: 'green-ocean', 
    name: 'Tin Tức Green Ocean',
    description: 'Tin tức khai giảng, hoạt động ngoại khóa, lễ tốt nghiệp và bảng vàng thành tích học viên xuất sắc tại Trung tâm Ngoại ngữ Green Ocean.'
  },
  { 
    id: 'cam-nang', 
    name: 'Cẩm Nang Học Tiếng Trung',
    description: 'Bí quyết ghi nhớ chữ Hán, ngữ pháp New HSK 3.0, kỹ năng phản xạ đàm thoại thực chiến và tài liệu học tiếng Trung miễn phí.'
  },
  { 
    id: 'du-hoc', 
    name: 'Du Học Trung Quốc',
    description: 'Thông tin học bổng chính phủ CSC, học bổng Khổng Tử CIS, học bổng tỉnh và cẩm nang thủ tục visa du học Trung Quốc.'
  }
];

export const newsData: NewsPost[] = [
  {
    id: 'chuyen-doi-new-hsk-3-cap-9-bac',
    category: 'green-ocean',
    categoryName: 'Tin Tức Green Ocean',
    title: 'Chuyển Mình Thay Đổi Từ HSK 6 Bậc Sang New HSK 3 Cấp 9 Bậc: Những Điểm Mới Cần Lưu Ý',
    slug: 'chuyen-doi-tu-hsk-6-bac-sang-new-hsk-3-cap-9-bac',
    day: '18',
    month: 'Th8',
    date: '18/08/2026',
    author: 'Ban Chuyên Môn Green Ocean',
    views: '15.420',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    layoutType: 'standard',
    excerpt: 'Bộ Giáo dục Trung Quốc đã ban hành chuẩn đánh giá mới New HSK 3 cấp 9 bậc. Cùng Green Ocean tìm hiểu lộ trình học và thay đổi kỹ năng để tự tin đạt điểm cao.',
    content: `
      <h2>1. Tại sao lại có sự chuyển đổi sang New HSK 3 cấp 9 bậc?</h2>
      <p>Tháng 3 năm 2021, Bộ Giáo dục Trung Quốc và Ủy ban Công tác Ngôn ngữ Quốc gia đã ban hành bộ "Tiêu chuẩn đánh giá trình độ Hán ngữ trong giáo dục Hán ngữ quốc tế". Sự thay đổi này nhằm chuẩn hóa năng lực tiếng Trung tiệm cận khung tham chiếu ngôn ngữ châu Âu (CEFR), đáp ứng nhu cầu học thuật và nghiên cứu chuyên sâu.</p>
      
      <h2>2. Những điểm khác biệt then chốt trong kỳ thi New HSK</h2>
      <p>So với khung HSK 6 bậc cũ, kỳ thi mới được chia thành 3 cấp độ (Sơ cấp, Trung cấp, Cao cấp) với 9 bậc đánh giá:</p>
      <ul>
        <li><strong>Sơ cấp (Bậc 1, 2, 3):</strong> Yêu cầu từ 500 đến 2.245 từ vựng, tập trung giao tiếp thường nhật.</li>
        <li><strong>Trung cấp (Bậc 4, 5, 6):</strong> Yêu cầu từ 3.245 đến 5.456 từ vựng, bổ sung kỹ năng dịch nói và dịch viết.</li>
        <li><strong>Cao cấp (Bậc 7, 8, 9):</strong> Dành cho đối tượng chuyên gia, dịch giả, nghiên cứu sinh học thuật với 11.000+ từ vựng.</li>
      </ul>

      <h2>3. Lời khuyên chuẩn bị cho học viên tại Green Ocean</h2>
      <p>Để thích ứng tốt với kỳ thi mới, học viên cần rèn luyện tích hợp cả 4 kỹ năng Nghe – Nói – Đọc – Viết và kỹ năng Dịch thuật ngay từ các lớp sơ cấp. Hệ thống khóa học Tích hợp 3.0 tại Green Ocean đã được cập nhật toàn diện theo chuẩn New HSK mới nhất.</p>
    `
  },
  {
    id: 'thanh-thao-tieng-trung-trong-thoi-gian-ngan',
    category: 'cam-nang',
    categoryName: 'Cẩm Nang Học Tiếng Trung',
    title: 'Thành thạo tiếng Trung trong thời gian ngắn – Giải pháp nào cho người bận rộn?',
    slug: 'thanh-thao-tieng-trung-trong-thoi-gian-ngan',
    day: '06',
    month: 'Th10',
    date: '06/10/2025',
    author: 'Ban Chuyên Môn Green Ocean',
    views: '16.420',
    image: thumbNhanhNhat,
    layoutType: 'standard',
    excerpt: 'Trong nhiều năm trở lại đây, nhu cầu học tiếng Trung tại Việt Nam không ngừng tăng cao. Làm thế nào để người đi làm bận rộn chinh phục HSK trong thời gian ngắn nhất?',
    content: `
      <p>Áp lực công việc và quỹ thời gian eo hẹp khiến nhiều người e ngại việc học thêm một ngôn ngữ mới như tiếng Trung. Tuy nhiên, nếu áp dụng đúng phương pháp Mcontask và phân bổ thời gian hợp lý, bạn hoàn toàn có thể làm chủ tiếng Trung sau 3 đến 6 tháng.</p>
      <h2>1. Tối ưu hóa thời gian bằng phương pháp phản xạ thực chiến</h2>
      <p>Thay vì học thuộc lòng từng chữ Hán đơn lẻ một cách thụ động, hãy học theo cụm từ và tình huống giao tiếp thực tế. Điều này giúp não bộ ghi nhớ theo ngữ cảnh và phản xạ nói tự nhiên.</p>
      <h2>2. Tận dụng các ứng dụng học tập và công nghệ trực tuyến</h2>
      <p>Với hình thức học trực tuyến tương tác 2 chiều tại Green Ocean, học viên có thể linh hoạt chọn ca học tối hoặc cuối tuần, đồng thời xem lại video bài giảng lưu trữ trọn đời để củng cố kiến thức mọi lúc mọi nơi.</p>
    `
  },
  {
    id: 'vai-tro-tieng-viet-trong-hoc-tieng-trung',
    category: 'cam-nang',
    categoryName: 'Cẩm Nang Học Tiếng Trung',
    title: 'Vai trò của tiếng Việt trong học tiếng Trung tại Việt Nam: “Chiếc phao” hay “Điểm tựa”?',
    slug: 'vai-tro-cua-tieng-viet-trong-hoc-tieng-trung-tai-viet-nam',
    day: '26',
    month: 'Th9',
    date: '26/09/2025',
    author: 'TS. Trần Thị Hoàng Anh',
    views: '14.300',
    image: thumbChiecPhao,
    layoutType: 'standard',
    excerpt: 'Môi trường học ngoại ngữ – yếu tố quyết định thành công Trong hành trình chinh phục tiếng Hán, âm Hán Việt là lợi thế cực lớn nhưng cũng là cái bẫy nếu không nắm rõ quy luật...',
    content: `
      <p>Hơn 60% từ vựng tiếng Việt có nguồn gốc Hán Việt. Đây là ưu thế tuyệt đối giúp người Việt học từ vựng tiếng Trung nhanh gấp 3 lần so với người phương Tây.</p>
      <h2>Tận dụng âm Hán Việt đúng cách</h2>
      <p>Tuy nhiên, sự biến đổi ngữ nghĩa theo thời gian tạo ra hiện tượng "từ đồng dạng dị nghĩa". Học viên cần hiểu đúng bản chất ngữ âm học để biến âm Hán Việt thành điểm tựa vững chắc thay vì lạm dụng như một chiếc phao cứu sinh nhất thời.</p>
    `
  },
  {
    id: 'kinh-nghiem-san-hoc-bong-csc-toan-phan',
    category: 'du-hoc',
    categoryName: 'Du Học Trung Quốc',
    title: 'Kinh Nghiệm Săn Học Bổng Toàn Phần Chính Phủ CSC Đậu 100% Trường Top 1',
    slug: 'kinh-nghiem-san-hoc-bong-csc-toan-phan-dau-truong-top',
    day: '15',
    month: 'Th8',
    date: '15/08/2026',
    author: 'Nguyễn Thu Trang (Học viên CSC)',
    views: '18.900',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    layoutType: 'standard',
    excerpt: 'Chia sẻ từng bước chuẩn bị kế hoạch học tập (Study Plan), thư giới thiệu giáo sư và cách vượt qua vòng phỏng vấn xin học bổng toàn phần.',
    content: `
      <h2>1. Chuẩn bị hồ sơ năng lực từ sớm</h2>
      <p>Một bộ hồ sơ xin học bổng CSC mạnh cần có điểm GPA từ 8.0 trở lên, chứng chỉ HSK 5 (240+) và HSKK Cao cấp. Ngoài ra các giải thưởng nghiên cứu khoa học hoặc hoạt động ngoại khóa là điểm cộng cực lớn.</p>
      <h2>2. Viết kế hoạch học tập (Study Plan) thuyết phục</h2>
      <p>Không nên viết chung chung, hãy nêu rõ lý do tại sao bạn chọn ngôi trường đó, đề tài bạn muốn nghiên cứu và đóng góp của bạn sau khi tốt nghiệp trở về Việt Nam.</p>
    `
  },
  {
    id: 'khai-giang-cac-lop-tieng-trung-thang-moi',
    category: 'green-ocean',
    categoryName: 'Tin Tức Green Ocean',
    title: 'Lịch Khai Giảng Các Lớp Tiếng Trung Giao Tiếp & Luyện Thi HSK Tháng Này Tại Green Ocean',
    slug: 'lich-khai-giang-cac-lop-tieng-trung-thang-nay',
    day: '28',
    month: 'Th9',
    date: '28/09/2025',
    author: 'Phòng Đào Tạo Green Ocean',
    views: '12.850',
    image: thumbLeRaMat,
    layoutType: 'standard',
    excerpt: 'Green Ocean trân trọng thông báo lịch khai giảng các lớp học trực tiếp tại hệ thống cơ sở và trực tuyến tương tác cao, ưu đãi tới 35% học phí khi đăng ký sớm.',
    content: `
      <p>Nhằm đáp ứng nhu cầu học tiếng Trung phục vụ công việc, thương mại và thi chứng chỉ New HSK của đông đảo học viên, Trung tâm Ngoại ngữ Green Ocean liên tục khai giảng các lớp học mới trong tháng.</p>
      <h2>1. Hình thức học tập đa dạng, linh hoạt</h2>
      <p>Học viên có thể lựa chọn học trực tiếp tại các cơ sở hiện đại của Green Ocean hoặc tham gia lớp học trực tuyến qua Google Meet với giáo trình tương đương, cam kết chuẩn đầu ra 100%.</p>
      <h2>2. Chính sách ưu đãi đặc biệt trong tháng</h2>
      <p>Tặng học bổng lên tới 1.500.000đ khi đăng ký các gói combo lộ trình HSK 1 - HSK 5, tặng kèm trọn bộ giáo trình Msutong và tài liệu học tập độc quyền.</p>
    `
  },
  {
    id: 'phuong-phap-ghi-nho-214-bo-thu',
    category: 'cam-nang',
    categoryName: 'Cẩm Nang Học Tiếng Trung',
    title: 'Phương Pháp Ghi Nhớ 214 Bộ Thủ Tiếng Trung Chuẩn Khoa Học Và Dễ Thuộc Nhất',
    slug: 'phuong-phap-ghi-nho-214-bo-thu-tieng-trung-chuan-khoa-hoc',
    day: '12',
    month: 'Th9',
    date: '12/09/2025',
    author: 'TS. Nguyễn Xuân Nhật',
    views: '19.200',
    image: thumbTapSan1,
    layoutType: 'standard',
    excerpt: 'Bộ thủ là chìa khóa vàng giúp bạn giải mã ý nghĩa và quy tắc cấu tạo chữ Hán. Khám phá cách học bộ thủ theo hình tượng và câu chuyện cực kỳ dễ nhớ.',
    content: `
      <p>Chữ Hán là chữ biểu ý, mỗi chữ là sự kết hợp của các bộ thủ mang ý nghĩa nhất định. Khi nắm vững các bộ thủ thông dụng, bạn sẽ không còn cảm thấy chữ Hán phức tạp hay khó nhớ.</p>
      <h2>1. Học theo nhóm ý nghĩa liên quan</h2>
      <p>Phân loại bộ thủ theo các nhóm tự nhiên: con người (Nhân, Nữ, Tử), tự nhiên (Thủy, Hỏa, Mộc, Thổ, Kim), động vật và đồ vật giúp tăng khả năng liên tưởng của não bộ.</p>
      <h2>2. Ứng dụng flashcard và viết thực hành</h2>
      <p>Kết hợp viết đúng thứ tự nét thuận cùng việc giải thích câu chuyện đằng sau mỗi chữ giúp bạn ghi nhớ sâu và lâu hơn rất nhiều so với chép phạt cơ học.</p>
    `
  },
  {
    id: 'bi-quyet-chinh-phuc-hoc-bong-khong-tu-cis',
    category: 'du-hoc',
    categoryName: 'Du Học Trung Quốc',
    title: 'Bí Quyết Săn Học Bổng Khổng Tử (CIS) Hệ 1 Năm Tiếng & Đại Học 2026',
    slug: 'bi-quyet-chinh-phuc-hoc-bong-khong-tu-cis-2026',
    day: '05',
    month: 'Th9',
    date: '05/09/2025',
    author: 'Ban Tư Vấn Du Học Green Ocean',
    views: '11.340',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    layoutType: 'text-only',
    excerpt: 'Học bổng Giáo viên Tiếng Trung Quốc Tế (CIS) là một trong những học bổng danh giá và có đãi ngộ tốt nhất dành cho các bạn trẻ đam mê ngành Ngôn ngữ Trung.',
    content: `
      <p>Học bổng CIS bao gồm 100% học phí, ký túc xá miễn phí, bảo hiểm y tế và trợ cấp sinh hoạt phí hàng tháng từ 2.500 đến 3.000 NDT. Đây là cơ hội tuyệt vời để du học Trung Quốc mà không lo gánh nặng tài chính.</p>
      <h2>Điều kiện ứng tuyển học bổng CIS</h2>
      <p>Đối với hệ 1 năm tiếng: Cần tối thiểu HSK 3 (210 điểm trở lên) và chứng chỉ HSKK Sơ cấp (60 điểm). Đối với hệ Đại học: Cần HSK 4 (210 điểm) và HSKK Trung cấp.</p>
    `
  }
];
