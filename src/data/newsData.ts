import { NewsPost } from '../types';

import thumbTapSan1 from '../asset/news/thumb_tap_san_1.png';
import thumbNhanhNhat from '../asset/news/thumb_nhanh_nhat.png';
import thumbLeRaMat from '../asset/news/thumb_le_ra_mat.png';
import thumbChiecPhao from '../asset/news/thumb_chiec_phao.png';
import infographicTapSan1 from '../asset/news/infographic_tap_san_1.png';

export const newsCategories = [
  { 
    id: 'all', 
    name: 'Tất cả tin tức',
    description: 'Cập nhật tin tức học thuật, sự kiện đào tạo Hán ngữ, hoạt động Viện Bác Nhã và cẩm nang học tiếng Trung mới nhất.'
  },
  { 
    id: 'bac-nha', 
    name: 'Viện Bác Nhã',
    description: 'Với những nghiên cứu sâu rộng về phương pháp giảng dạy và tài liệu học tập, Viện đã cung cấp nền tảng lý thuyết vững chắc cho việc dạy và học tập tiếng Trung tại Việt Nam. Với tầm nhìn trở thành trung tâm nghiên cứu và đào tạo tiếng Trung hàng đầu Việt Nam, không ngừng đổi mới và nâng cao chất lượng dịch vụ. "Chuyên sâu – Sáng tạo – Uyên bác – Nhã chính".'
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
    id: 'nhung-con-so-biet-noi-tap-san-khoa-hoc-so-1',
    category: 'bac-nha',
    categoryName: 'Viện Bác Nhã',
    title: 'NHỮNG CON SỐ BIẾT NÓI – THÀNH CÔNG CỦA TẬP SAN KHOA HỌC SỐ 1 VIỆN BÁC NHÃ',
    slug: 'nhung-con-so-biet-noi-thanh-cong-tap-san-khoa-hoc-so-1',
    day: '08',
    month: 'Th10',
    date: '08/10/2025',
    author: 'Viện Nghiên Cứu Ứng Dụng Ngôn Ngữ Bác Nhã',
    views: '15.280',
    image: thumbTapSan1,
    infographicImage: infographicTapSan1,
    layoutType: 'standard',
    excerpt: 'Tập san Khoa học số 1 – Viện Nghiên cứu Ứng dụng Ngôn ngữ Bác Nhã không chỉ là ấn phẩm nghiên cứu, mà còn là biểu tượng của tinh thần kết nối tri thức, nơi quy tụ các nhà khoa học, giảng viên và chuyên gia trong lĩnh vực Hán ngữ học ứng dụng.',
    content: `
      <p>Mỗi công trình là một dấu ấn, mỗi con số là một bước tiến. Tập san Khoa học số 1 không chỉ là ấn phẩm nghiên cứu, mà còn là biểu tượng của tinh thần kết nối tri thức, nơi quy tụ các nhà khoa học, giảng viên và chuyên gia trong lĩnh vực Hán ngữ học ứng dụng.</p>
      <p>Từ đó, Viện Bác Nhã đã khẳng định vai trò là trung tâm nghiên cứu hàng đầu trong việc phát triển giáo dục Hán ngữ ngắn hạn tại Việt Nam.</p>

      <h2>2. Quy tụ 13 công trình – Gần 20 tác giả trong và ngoài nước</h2>
      <p>Tập san tập hợp 13 công trình nghiên cứu chuyên sâu của gần 20 tác giả Việt Nam và quốc tế, phản ánh sự đa dạng trong tiếp cận và chiều sâu học thuật.</p>
      <p>Các chủ đề tiêu biểu gồm:</p>
      <ul>
        <li>Chuẩn hóa năng lực giảng dạy tiếng Trung</li>
        <li>Đặc thù ngôn ngữ tiếng Hán đối với người học Việt Nam</li>
        <li>Đổi mới phương pháp giảng dạy tiếng Trung hiện đại</li>
        <li>Giải mã yếu tố văn hóa trong dạy và học Hán ngữ</li>
      </ul>
      <p>Những nghiên cứu này không chỉ đóng góp về mặt lý luận, mà còn mang giá trị định hướng thực tiễn, giúp nâng cao chất lượng đào tạo và bồi dưỡng đội ngũ giáo viên Hán ngữ tại Việt Nam.</p>

      <h2>3. Dấu ấn và sức lan tỏa của Tập san Khoa học số 1</h2>
      <p>Ngay sau khi ra mắt, tập san đã ghi nhận những con số ấn tượng:</p>
      <ul>
        <li><strong>1.000+</strong> bản được gửi đến các trường đại học, viện nghiên cứu, trung tâm đào tạo tiếng Trung trên toàn quốc</li>
        <li><strong>50+</strong> bài truyền thông và trích dẫn học thuật</li>
        <li><strong>100+</strong> phản hồi tích cực từ giảng viên, nhà nghiên cứu và độc giả</li>
      </ul>
      <p>Những kết quả này thể hiện sức ảnh hưởng và uy tín học thuật mà Viện Bác Nhã đang xây dựng trong lĩnh vực nghiên cứu ứng dụng Hán ngữ tại Việt Nam.</p>

      <h2>4. Hướng tới Tập san Khoa học số 2 – Nghiên cứu Dạy và Học Tiếng Trung Quốc 中文教学研究</h2>
      <p>Thành công của Tập san số 1 mở ra hành trình mới: Tập san Khoa học số 2 – “Nghiên cứu Dạy – Học Tiếng Trung Quốc 中文教学研究”, dự kiến phát hành năm 2026.</p>
      <p>Ấn phẩm này tiếp tục định hướng:</p>
      <blockquote>“Kế thừa tinh hoa – Nghiên cứu chuyên sâu – Sáng tạo vượt trội”</blockquote>
      <p>Qua đó, Viện Bác Nhã mong muốn tạo dựng hệ sinh thái học thuật Hán ngữ hiện đại, nơi tri thức không chỉ được lưu giữ mà còn được lan tỏa mạnh mẽ đến cộng đồng học giả, giảng viên và người học trên khắp Việt Nam.</p>

      <h2>5. Viện Bác Nhã – Tiên phong nghiên cứu ứng dụng Hán ngữ tại Việt Nam</h2>
      <p>Với sứ mệnh “Lan tỏa tri thức – Kết nối cộng đồng”, Viện Nghiên cứu Ứng dụng Ngôn ngữ Bác Nhã không ngừng thúc đẩy hợp tác học thuật trong và ngoài nước, nâng cao chất lượng giảng dạy và ứng dụng Hán ngữ trong đời sống – giáo dục – kinh tế.</p>
      <p>Viện hướng đến trở thành cầu nối tri thức quốc tế, góp phần đưa Việt Nam trở thành trung tâm đào tạo Hán ngữ chất lượng cao trong khu vực.</p>
    `
  },
  {
    id: 'chap-but-tap-san-khoa-hoc-so-2',
    category: 'bac-nha',
    categoryName: 'Viện Bác Nhã',
    title: 'Đồng hành cùng Viện Bác Nhã “chắp bút” Tập san Khoa học số 2 – Nghiên cứu dạy – học tiếng Trung Quốc (dự kiến 2026)',
    slug: 'dong-hanh-chap-but-tap-san-khoa-hoc-so-2',
    day: '07',
    month: 'Th10',
    date: '7 Tháng 10, 2025',
    author: 'Ban Thư Ký Viện Bác Nhã',
    views: '8.640',
    layoutType: 'text-only',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Mục tiêu và ý nghĩa Trong dòng chảy học thuật và đào tạo ngôn ngữ, Tập san Khoa học số 2 tiếp tục là diễn đàn học thuật quy tụ các bài nghiên cứu đổi mới phương pháp giảng dạy...',
    content: `
      <p>Tiếp nối thành công của số đầu tiên, Viện Nghiên cứu Ứng dụng Ngôn ngữ Bác Nhã chính thức phát động kế hoạch nhận bài cho Tập san Khoa học số 2 – “Nghiên cứu Dạy và Học Tiếng Trung Quốc”.</p>
      <h2>Mục tiêu và ý nghĩa học thuật</h2>
      <p>Tập san kỳ vọng mở rộng phạm vi nghiên cứu, đặc biệt chú trọng các nghiên cứu thực nghiệm về tâm lý học ngôn ngữ, ứng dụng công nghệ trí tuệ nhân tạo (AI) trong kiểm tra đánh giá năng lực Hán ngữ và phương pháp giảng dạy tiếng Trung chuyên ngành.</p>
      <p>Ban biên tập trân trọng kính mời các nhà khoa học, giảng viên, nghiên cứu sinh trong và ngoài nước tham gia gửi bài viết học thuật.</p>
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
    id: 'tang-cuong-ung-dung-nghien-cuu-day-hoc-han-ngu',
    category: 'bac-nha',
    categoryName: 'Viện Bác Nhã',
    title: 'Tăng cường ứng dụng nghiên cứu dạy – học Hán ngữ trong giới trẻ',
    slug: 'tang-cuong-ung-dung-nghien-cuu-day-hoc-han-ngu-trong-gioi-tre',
    day: '01',
    month: 'Th10',
    date: '1 Tháng 10, 2025',
    author: 'Viện Nghiên Cứu Bác Nhã',
    views: '7.190',
    layoutType: 'text-only',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Sau gần 2 năm hoạt động với phương châm “Kế thừa – Sẻ chia – Lan tỏa”, phong trào nghiên cứu học thuật Hán ngữ đã thu hút đông đảo sinh viên và giảng viên trẻ...',
    content: `
      <p>Thế hệ trẻ ngày nay có điều kiện tiếp cận các công cụ số và tài nguyên học thuật quốc tế phong phú. Việc khuyến khích học sinh, sinh viên tham gia các đề tài nghiên cứu ngôn ngữ học ứng dụng giúp các bạn nâng cao tư duy phản biện và làm chủ tiếng Trung sâu sắc hơn.</p>
      <h2>Chương trình kết nối nhà nghiên cứu trẻ</h2>
      <p>Viện Bác Nhã thường xuyên tổ chức các buổi tọa đàm khoa học mở, tạo không gian giao lưu giữa các chuyên gia kỳ cựu và các bạn trẻ đam mê nghiên cứu tiếng Hán.</p>
    `
  },
  {
    id: 'le-ra-mat-tap-san-khoa-hoc-so-1',
    category: 'bac-nha',
    categoryName: 'Viện Bác Nhã',
    title: 'Viện Bác Nhã ra mắt Tập san khoa học số 1: Tín hiệu tích cực cho đào tạo tiếng Trung ngắn hạn tại Việt Nam',
    slug: 'vien-bac-nha-ra-mat-tap-san-khoa-hoc-so-1',
    day: '26',
    month: 'Th9',
    date: '26/09/2025',
    author: 'Ban Truyền Thông Viện Bác Nhã',
    views: '11.850',
    image: thumbLeRaMat,
    layoutType: 'standard',
    excerpt: 'Tiếng Trung – Ngôn ngữ chiến lược trong thời kỳ hội nhập Trong bối cảnh hợp tác kinh tế Việt - Trung phát triển vượt bậc, sự ra đời của Tập san đánh dấu mốc quan trọng...',
    content: `
      <p>Buổi lễ ra mắt Tập san Khoa học số 1 của Viện Nghiên cứu Ứng dụng Ngôn ngữ Bác Nhã đã diễn ra trang trọng với sự tham dự của đông đảo các nhà giáo, nhà khoa học và đại diện các trường đại học đào tạo tiếng Trung hàng đầu cả nước.</p>
      <h2>Dấu ấn học thuật chuyên sâu</h2>
      <p>Sự kiện đánh dấu bước tiến quan trọng trong việc chuẩn hóa học thuật cho các trung tâm và cơ sở đào tạo tiếng Trung ngắn hạn, kết nối giữa giảng dạy đại học chính quy và đào tạo thực tiễn.</p>
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
    id: 'chuyen-doi-new-hsk-3-cap-9-bac',
    category: 'green-ocean',
    categoryName: 'Tin Tức Green Ocean',
    title: 'Chuyển Mình Thay Đổi Từ HSK 6 Bậc Sang New HSK 3 Cấp 9 Bậc: Những Điểm Mới Cần Lưu Ý',
    slug: 'chuyen-doi-tu-hsk-6-bac-sang-new-hsk-3-cap-9-bac',
    day: '18',
    month: 'Th8',
    date: '18/08/2026',
    author: 'Ban Chuyên Môn Green Ocean',
    views: '12.450',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    layoutType: 'standard',
    excerpt: 'Bộ Giáo dục Trung Quốc đã ban hành chuẩn đánh giá mới New HSK 3 cấp 9 bậc. Cùng tìm hiểu lộ trình học và thay đổi kỹ năng để tự tin đạt điểm cao.',
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
  }
];
