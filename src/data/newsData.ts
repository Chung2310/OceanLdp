import { NewsPost } from '../types';

export const newsCategories = [
  { id: 'all', name: 'Tất cả tin tức' },
  { id: 'thanhmaihsk', name: 'Tin Tức Thanhmaihsk' },
  { id: 'bac-nha', name: 'Viện Bác Nhã' },
  { id: 'du-hoc', name: 'Du Học Trung Quốc' },
  { id: 'cam-nang', name: 'Cẩm Nang Học Tiếng Trung' },
  { id: 'tuyen-dung', name: 'Tuyển Dụng' }
];

export const newsData: NewsPost[] = [
  {
    id: 'chuyen-doi-new-hsk-3-cap-9-bac',
    category: 'cam-nang',
    categoryName: 'Cẩm Nang Học Tiếng Trung',
    title: 'Chuyển Mình Thay Đổi Từ HSK 6 Bậc Sang New HSK 3 Cấp 9 Bậc: Những Điểm Mới Cần Lưu Ý',
    slug: 'chuyen-doi-tu-hsk-6-bac-sang-new-hsk-3-cap-9-bac',
    date: '18/08/2026',
    author: 'Ban Chuyên Môn Thanhmaihsk',
    views: '12.450',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
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

      <h2>3. Lời khuyên chuẩn bị cho học viên tại Thanhmaihsk</h2>
      <p>Để thích ứng tốt với kỳ thi mới, học viên cần rèn luyện tích hợp cả 4 kỹ năng Nghe – Nói – Đọc – Viết và kỹ năng Dịch thuật ngay từ các lớp sơ cấp. Hệ thống khóa học Tích hợp 3.0 tại Thanhmaihsk đã được cập nhật toàn diện theo chuẩn New HSK mới nhất.</p>
    `
  },
  {
    id: 'kinh-nghiem-san-hoc-bong-csc-toan-phan',
    category: 'du-hoc',
    categoryName: 'Du Học Trung Quốc',
    title: 'Kinh Nghiệm Săn Học Bổng Toàn Phần Chính Phủ CSC Đậu 100% Trường Top 1',
    slug: 'kinh-nghiem-san-hoc-bong-csc-toan-phan-dau-truong-top',
    date: '15/08/2026',
    author: 'Nguyễn Thu Trang (Học viên CSC)',
    views: '18.900',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Chia sẻ từng bước chuẩn bị kế hoạch học tập (Study Plan), thư giới thiệu giáo sư và cách vượt qua vòng phỏng vấn xin học bổng toàn phần.',
    content: `
      <h2>1. Chuẩn bị hồ sơ năng lực từ sớm</h2>
      <p>Một bộ hồ sơ xin học bổng CSC mạnh cần có điểm GPA từ 8.0 trở lên, chứng chỉ HSK 5 (240+) và HSKK Cao cấp. Ngoài ra các giải thưởng nghiên cứu khoa học hoặc hoạt động ngoại khóa là điểm cộng cực lớn.</p>
      <h2>2. Viết kế hoạch học tập (Study Plan) thuyết phục</h2>
      <p>Không nên viết chung chung, hãy nêu rõ lý do tại sao bạn chọn ngôi trường đó, đề tài bạn muốn nghiên cứu và đóng góp của bạn sau khi tốt nghiệp trở về Việt Nam.</p>
    `
  },
  {
    id: 'hoi-thao-quoc-te-vien-bac-nha-2026',
    category: 'bac-nha',
    categoryName: 'Viện Bác Nhã',
    title: 'Hội Thảo Khoa Học Quốc Tế 2026: Phương Pháp Giảng Dạy Hán Ngữ Ứng Dụng Trong Thời Đại Số',
    slug: 'hoi-thao-khoa-hoc-quoc-te-vien-bac-nha-2026',
    date: '10/08/2026',
    author: 'Viện Nghiên Cứu Bác Nhã',
    views: '9.320',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Quy tụ hơn 100 chuyên gia, Giáo sư, Tiến sĩ hàng đầu từ ĐH Ngôn ngữ Bắc Kinh, ĐHQGHN và các trường đại học lớn trao đổi phương pháp dạy tiếng Trung mới.',
    content: `
      <h2>Tọa đàm học thuật đỉnh cao về đào tạo Hán ngữ</h2>
      <p>Hội thảo tập trung thảo luận về việc ứng dụng công nghệ AI, hệ thống bài giảng số hóa và phương pháp Mcontask vào nâng cao hiệu suất học tiếng Trung cho người Việt Nam.</p>
    `
  }
];
