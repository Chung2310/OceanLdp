import { Teacher } from '../types';

export const teachersData: Teacher[] = [
  {
    id: 'ts-mai-thanh',
    name: 'TS. Nguyễn Thị Mai Thanh',
    role: 'Cố Vấn Học Thuật & Trưởng Ban Đào Tạo',
    degree: 'Tiến sĩ Ngôn ngữ học',
    university: 'Tiến sĩ ĐH Sư phạm Hoa Trung (Trung Quốc)',
    certificates: 'HSK 6 (295/300), HSKK Cao cấp, Chứng chỉ CTCSOL Quốc Tế',
    experience: '15 năm kinh nghiệm giảng dạy & nghiên cứu Hán ngữ',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    quote: 'Dạy tiếng Trung không chỉ đơn thuần là truyền đạt ngôn ngữ, mà là mở ra cánh cửa tư duy văn hóa và trao cơ hội nghề nghiệp tương lai cho thế hệ trẻ.',
    bio: 'Tiến sĩ Nguyễn Thị Mai Thanh là người đặt nền móng phương pháp giảng dạy tích hợp Mcontask và đồng chủ biên nhiều bộ sách luyện thi HSK, D4 nổi tiếng tại Việt Nam. Cô đã trực tiếp đào tạo hàng nghìn học viên đạt HSK 6 và giành học bổng danh giá.',
    courses: ['Luyện thi New HSK 5 - 6', 'Ôn thi THPT Quốc Gia môn tiếng Trung (D4)', 'Đào tạo Doanh nghiệp VIP'],
    rating: 5.0,
    videoUrl: 'https://www.youtube.com/watch?v=sample-video-1'
  },
  {
    id: 'ths-tran-hung',
    name: 'ThS. Trần Văn Hùng',
    role: 'Trưởng Bộ Môn Luyện Thi HSK / HSKK',
    degree: 'Thạc sĩ Giảng dạy tiếng Hán (MTCSOL)',
    university: 'Thạc sĩ ĐH Ngôn ngữ Bắc Kinh (BLCU)',
    certificates: 'HSK 6 (290/300), Giải Nhất Hùng biện Tiếng Hán toàn quốc',
    experience: '9 năm kinh nghiệm luyện thi chứng chỉ HSK',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop',
    quote: 'Ngữ pháp tiếng Trung sẽ trở nên vô cùng đơn giản nếu bạn nắm được bản chất tư duy cụm từ và logic cấu trúc thay vì học vẹt.',
    bio: 'Thầy Hùng nổi tiếng với phong cách giảng dạy trẻ trung, hài hước và phương pháp "bẻ khóa ngữ pháp bẫy" giúp học viên ghi nhớ nhanh các chủ điểm phức tạp trong đề thi HSK.',
    courses: ['Hán ngữ Tích hợp HSK 3 - 4', 'Luyện thi HSKK Trung/Cao cấp', 'Khóa học Trực tuyến Online'],
    rating: 4.9,
    videoUrl: 'https://www.youtube.com/watch?v=sample-video-2'
  },
  {
    id: 'ths-zhang-wei',
    name: 'ThS. Zhang Wei (Trương Vĩ)',
    role: 'Chuyên Gia Ngữ Âm & Giảng Viên Bản Xứ',
    degree: 'Thạc sĩ Ngôn ngữ & Văn hóa Trung Hoa',
    university: 'Tốt nghiệp ĐH Sư phạm Bắc Kinh (BNU)',
    certificates: 'Chứng chỉ Phổ Thông Thoại Cấp 1 Giáp (Mức cao nhất chuẩn âm Bắc Kinh)',
    experience: '7 năm giảng dạy tiếng Hán cho học viên quốc tế',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    quote: 'Chỉnh đúng khẩu hình và luồng hơi ngay từ ngày đầu tiên là chìa khóa để bạn nói tiếng Trung hay và tự nhiên như người bản xứ.',
    bio: 'Thầy Trương Vĩ có khả năng nói tiếng Việt lưu loát, thấu hiểu sâu sắc những khó khăn đặc thù của người Việt khi phát âm các âm khó như zh, ch, sh, r, j, q, x, u.',
    courses: ['Tiếng Trung Giao Tiếp Thương Mại', 'Khóa chỉnh âm & Luyện nói HSKK', 'Tiếng Trung VIP 1-1'],
    rating: 5.0,
    videoUrl: 'https://www.youtube.com/watch?v=sample-video-3'
  },
  {
    id: 'ths-le-thu-ha',
    name: 'ThS. Lê Thu Hà',
    role: 'Giảng Viên Cao Cấp Tiếng Trung Cơ Bản',
    degree: 'Thạc sĩ Ngôn ngữ Trung Quốc',
    university: 'ĐH Ngoại ngữ - ĐHQGHN',
    certificates: 'HSK 6 (288/300), Học bổng toàn phần Thạc sĩ ĐH Thượng Hải',
    experience: '8 năm kinh nghiệm giảng dạy sơ cấp & trung cấp',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    quote: 'Kiên trì viết đúng nét chữ và rèn thói quen nghe 15 phút mỗi ngày sẽ biến tiếng Trung thành một phần niềm vui cuộc sống của bạn.',
    bio: 'Cô Hà được hàng nghìn học viên yêu mến nhờ sự ân cần, tận tâm kèm cặp từng học viên yếu nét chữ, chậm phản xạ đến khi thành thạo.',
    courses: ['Hán ngữ Tích hợp HSK 3 3.0', 'Tiếng Trung Thiếu Nhi 8-14 tuổi', 'Tiếng Trung Giao Tiếp Đời Sống'],
    rating: 4.9,
    videoUrl: 'https://www.youtube.com/watch?v=sample-video-4'
  }
];
