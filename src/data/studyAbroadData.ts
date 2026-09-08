import { StudyAbroadProgram } from '../types';

export const studyAbroadData: StudyAbroadProgram[] = [
  {
    id: 'hoc-bong-csc',
    title: 'Học Bổng Toàn Phần Chính Phủ Trung Quốc (CSC)',
    badge: 'Toàn phần 100%',
    type: 'Đại học, Thạc sĩ, Tiến sĩ',
    stipend: '2.500 - 3.500 NDT / tháng (~8.5 - 12 Triệu VNĐ)',
    benefits: [
      'Miễn 100% Học phí toàn khóa học (3 - 5 năm)',
      'Miễn 100% Phí ký túc xá tiện nghi khép kín',
      'Cấp Bảo hiểm Y tế toàn diện',
      'Trợ cấp sinh hoạt phí hàng tháng: ĐH (2.500 NDT), ThS (3.000 NDT), TS (3.500 NDT)'
    ],
    requirements: [
      'Tốt nghiệp THPT / Cử nhân với GPA từ 7.5/10 (hoặc 3.0/4.0) trở lên',
      'Chứng chỉ HSK 4 - 5 (đối với hệ tiếng Trung) hoặc IELTS 6.0+ (hệ tiếng Anh)',
      'Độ tuổi: Dưới 25 (Đại học), Dưới 35 (Thạc sĩ), Dưới 40 (Tiến sĩ)',
      'Không có tiền án tiền sự, sức khỏe đạt chuẩn du học'
    ],
    universities: [
      'Đại học Bắc Kinh (PKU)',
      'Đại học Thanh Hoa (THU)',
      'Đại học Chiết Giang (ZJU)',
      'Đại học Vũ Hán (WHU)',
      'Đại học Nam Kinh (NJU)',
      'Đại học Nhân dân Trung Quốc'
    ],
    deadline: 'Tháng 10 - Tháng 3 hàng năm',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
    desc: 'Học bổng danh giá và quyền lực nhất do Bộ Giáo dục Trung Quốc cấp nhằm hỗ trợ sinh viên quốc tế xuất sắc theo học tại các trường đại học trọng điểm Top đầu.'
  },
  {
    id: 'hoc-bong-cis',
    title: 'Học Bổng Giáo Viên Tiếng Trung Quốc Tế (Khổng Tử - CIS)',
    badge: 'Ưu đãi cao',
    type: '1 Năm tiếng, Đại học, Thạc sĩ MTCSOL',
    stipend: '2.500 - 3.000 NDT / tháng (~8.5 - 10.5 Triệu VNĐ)',
    benefits: [
      'Miễn 100% Học phí & Ký túc xá',
      'Trợ cấp sinh hoạt phí hàng tháng 2.500 - 3.000 NDT',
      'Cơ hội thực tập giảng dạy trực tiếp tại các trường học ở Trung Quốc',
      'Ưu tiên tuyển dụng làm giảng viên tiếng Trung sau khi tốt nghiệp'
    ],
    requirements: [
      'Hệ 1 Năm Tiếng: HSK 3 (210+) & HSKK Sơ cấp (60+)',
      'Hệ Đại học Sư phạm Hán ngữ: HSK 4 (210+) & HSKK Trung cấp (60+)',
      'Hệ Thạc sĩ Giảng dạy tiếng Hán (MTCSOL): HSK 5 (210+) & HSKK Cao cấp (60+)',
      'Đam mê và định hướng theo ngành giảng dạy tiếng Trung'
    ],
    universities: [
      'Đại học Ngôn ngữ Bắc Kinh (BLCU)',
      'Đại học Sư phạm Hoa Đông (ECNU)',
      'Đại học Sư phạm Bắc Kinh',
      'Đại học Trung Sơn',
      'Đại học Sư phạm Hoa Trung'
    ],
    deadline: 'Tháng 11 - Tháng 4 hàng năm',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    desc: 'Chương trình học bổng chuyên biệt đào tạo đội ngũ giáo viên, giảng viên tiếng Hán xuất sắc trên toàn cầu với tỷ lệ đỗ cực cao tại Thanhmaihsk.'
  },
  {
    id: 'du-hoc-1-nam-tieng',
    title: 'Chương Trình Du Học Tự Túc 1 Năm Tiếng Trung Quốc',
    badge: 'Visa dễ dàng',
    type: 'Khóa tiếng ngắn hạn (1 năm / 2 học kỳ)',
    stipend: 'Tự túc sinh hoạt phí',
    benefits: [
      'Cấp Visa du học X1 chính thức từ Bộ Công An Trung Quốc',
      'Môi trường sống 100% bản xứ giúp nâng trình độ từ HSK 1 lên HSK 5 sau 1 năm',
      'Được tự do trải nghiệm du lịch khám phá văn hóa khắp Trung Hoa',
      'Chi phí học tập và sinh hoạt cực kỳ hợp lý chỉ từ 80 - 120 triệu VNĐ / năm'
    ],
    requirements: [
      'Đã tốt nghiệp THPT trở lên (không giới hạn độ tuổi)',
      'Không yêu cầu chứng chỉ HSK ban đầu (nhận từ người chưa biết gì)',
      'Sức khỏe tốt, không mắc bệnh truyền nhiễm'
    ],
    universities: [
      'Đại học Ngoại ngữ Thượng Hải (SISU)',
      'Đại học Thiên Tân',
      'Đại học Trùng Khánh',
      'Đại học Quảng Tây',
      'Đại học Vân Nam'
    ],
    deadline: 'Tiếp nhận hồ sơ quanh năm cho kỳ mùa Xuân (tháng 3) & mùa Thu (tháng 9)',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=800&auto=format&fit=crop',
    desc: 'Lựa chọn hoàn hảo cho các bạn trẻ muốn trải nghiệm cuộc sống du học, rèn phản xạ ngôn ngữ thực tế trước khi học lên Đại học hoặc làm việc quốc tế.'
  }
];
