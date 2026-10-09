import { Teacher } from '../types';
import teacher1 from '../asset/teachers/1.jpg';
import teacher2 from '../asset/teachers/2.jpg';
import teacher3 from '../asset/teachers/3.jpg';
import teacher4 from '../asset/teachers/4.jpg';
import teacher5 from '../asset/teachers/5.jpg';

export const teachersData: Teacher[] = [
  {
    id: 'nguyen-xuan-quang',
    name: 'ThS. Nguyễn Xuân Quảng',
    role: 'Giám Đốc Học Thuật & Cố Vấn Chuyên Môn',
    degree: 'Thạc sĩ Ngôn ngữ học & Ngôn ngữ học ứng dụng',
    university: 'Đại học Tương Đàm (Hồ Nam, Trung Quốc)',
    certificates: 'HSK 6 cao cấp, HSKK Cao cấp, 28 năm học tập & nghiên cứu tiếng Trung',
    experience: '28 năm làm việc tiếng Trung, hơn 10 năm giảng dạy Đại học chính quy',
    image: teacher3,
    quote: 'Học tiếng Trung là mở khóa tư duy ngôn ngữ bản địa sâu sắc, kết hợp nhuần nhuyễn giữa chuẩn ngữ âm và ngữ pháp học thuật.',
    bio: 'Thầy Nguyễn Xuân Quảng là chuyên gia đào tạo nòng cốt tại Green Ocean. Thầy có 6 năm nghiên cứu chuyên sâu tại Trung Quốc, hơn 10 năm giảng dạy đại học chính quy và trực tiếp xây dựng giáo trình đào tạo bài bản cho trung tâm.',
    courses: ['Luyện thi New HSK 5 - 6', 'Tiếng Trung Thương Mại Cao Cấp', 'Đào Tạo Doanh Nghiệp VIP'],
    rating: 5.0,
    videoUrl: 'https://www.youtube.com/watch?v=sample-video-1'
  },
  {
    id: 'ngo-hoang-linh',
    name: 'Cô Ngô Hoàng Linh',
    role: 'Trưởng Ban Tiếng Trung Thương Mại & Dịch Thuật',
    degree: 'Cử nhân Ngôn ngữ Trung Quốc',
    university: 'Đại học Sư phạm Thái Nguyên',
    certificates: 'HSK 6, Chứng chỉ Sư phạm Quốc tế, Chuyên gia Dịch thuật',
    experience: 'Hơn 20 năm kinh nghiệm giảng dạy & đàm phán thương mại',
    image: teacher4,
    quote: 'Phương pháp trực quan sinh động và thấu hiểu tâm lý học viên là chìa khóa để xóa tan nỗi sợ ngoại ngữ và nói tự tin ngay tức thì.',
    bio: 'Cô Ngô Hoàng Linh là giảng viên kỳ cựu với hơn 20 năm kinh nghiệm giảng dạy và làm việc thực tế với tiếng Trung thương mại, dịch thuật và xuất nhập khẩu. Lối giảng giàu năng lượng, gần gũi và hiệu quả cao.',
    courses: ['Tiếng Trung Giao Tiếp Thương Mại', 'Dịch Thuật Hán - Việt', 'Tiếng Trung Cấp Tốc'],
    rating: 4.9,
    videoUrl: 'https://www.youtube.com/watch?v=sample-video-2'
  },
  {
    id: 'nguyen-thi-thu-thuy',
    name: 'ThS. Nguyễn Thị Thu Thủy',
    role: 'Giảng Viên Cao Cấp Hán Ngữ Ứng Dụng',
    degree: 'Thạc sĩ Quản lý Du lịch & Cử nhân Ngôn ngữ',
    university: 'Thạc sĩ ĐH Giao thông Tây Nam & Cử nhân ĐH Quảng Tây (TQ)',
    certificates: 'HSK 6, HSKK Cao cấp, Nhiều năm du học và nghiên cứu tại Trung Quốc',
    experience: 'Hơn 20 năm kinh nghiệm giảng dạy tiếng Trung',
    image: teacher5,
    quote: 'Học ngoại ngữ là một hành trình kết nối văn hóa đầy hứng khởi; chỉ cần đúng phương pháp, ai cũng có thể làm chủ tiếng Trung.',
    bio: 'Cô Nguyễn Thị Thu Thủy có nền tảng học vấn vững chắc tại các đại học trọng điểm quốc gia Trung Quốc. Cô luôn đồng hành sát sao cùng từng học viên, giúp người học phát âm chuẩn và phản xạ giao tiếp tự nhiên.',
    courses: ['Hán ngữ Tích hợp HSK 3 - 4', 'Tiếng Trung Du Lịch & Dịch Vụ', 'Luyện Phản Xạ Giao Tiếp'],
    rating: 5.0,
    videoUrl: 'https://www.youtube.com/watch?v=sample-video-3'
  },
  {
    id: 'do-thanh-trung',
    name: 'Thầy Đỗ Thành Trung',
    role: 'Chuyên Gia Tiếng Trung Doanh Nghiệp & Nhà Xưởng',
    degree: 'Cử nhân Ngôn ngữ Trung',
    university: 'Đại học Hà Nội (HANU)',
    certificates: 'HSK 6, Chuyên sâu Thuật ngữ Quản trị Chuỗi Cung Ứng & FDI',
    experience: '20+ năm kinh nghiệm giao tiếp văn phòng & quản lý nhà xưởng',
    image: teacher2,
    quote: 'Học tiếng Trung để làm việc cần tính thực dụng cao nhất: nói đúng trọng tâm, xử lý chuẩn xác tình huống và đàm phán thắng lợi.',
    bio: 'Thầy Đỗ Thành Trung có hơn 20 năm thực chiến điều hành và đàm phán hợp đồng trong các doanh nghiệp FDI. Lối dạy thực tế, chú trọng vào phản xạ đối thoại công việc hàng ngày của kỹ sư và nhà quản lý.',
    courses: ['Tiếng Trung Nhà Xưởng - Kỹ Thuật', 'Tiếng Trung Đàm Phán Doanh Nghiệp', 'HSK Giao Tiếp Cấp Tốc'],
    rating: 4.9,
    videoUrl: 'https://www.youtube.com/watch?v=sample-video-4'
  },
  {
    id: 'nguyen-ngoc-anh',
    name: 'Cô Nguyễn Ngọc Anh',
    role: 'Chuyên Gia Luyện Thi New HSK Điểm Cao',
    degree: 'Cử nhân Ngôn ngữ Trung Quốc',
    university: 'ĐH Kinh doanh & Công nghệ Hà Nội',
    certificates: 'HSK 6 xuất sắc, HSKK Cao cấp, Bộ mẹo giải đề HSK độc quyền',
    experience: '05 năm chuyên sâu luyện thi New HSK cấp tốc',
    image: teacher1,
    quote: 'Nắm chắc tư duy hình ảnh chữ Hán và mẹo làm đề độc quyền sẽ giúp bạn tự tin chinh phục mục tiêu HSK điểm cao trong thời gian ngắn nhất.',
    bio: 'Cô Nguyễn Ngọc Anh là chuyên gia luyện thi HSK năng động với kho đề thi cập nhật liên tục. Phương pháp dạy logic, đơn giản hóa ngữ pháp phức tạp và sát sao tiến độ giúp học viên bứt phá điểm số.',
    courses: ['Luyện Thi New HSK 1 - 2', 'Luyện Thi New HSK 3 - 4', 'Khóa Ghi Nhớ Chữ Hán Siêu Tốc'],
    rating: 5.0,
    videoUrl: 'https://www.youtube.com/watch?v=sample-video-5'
  }
];
