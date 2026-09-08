import { BranchRegion, Branch } from '../types';

export const branchRegions: BranchRegion[] = [
  { id: 'ha-noi', name: 'Khu Vực Hà Nội (11 Cơ sở)' },
  { id: 'ho-chi-minh', name: 'Khu Vực TP. Hồ Chí Minh (4 Cơ sở)' },
  { id: 'tinh-thanh', name: 'Các Tỉnh Thành Khác (6 Cơ sở)' }
];

export const branchesData: Branch[] = [
  // Hà Nội
  {
    id: 'dong-da',
    region: 'ha-noi',
    name: 'Cơ sở Đống Đa - Hà Nội (Trụ sở chính)',
    address: 'Số 9 ngõ 49 Huỳnh Thúc Kháng, P. Láng Hạ, Q. Đống Đa, TP. Hà Nội',
    hotline: '0931.715.889',
    email: 'dongda@tmedu.vn',
    hours: '08:00 - 21:30 (Thứ 2 - Chủ Nhật)',
    mapUrl: 'https://maps.google.com/?q=Huynh+Thuc+Khang+Dong+Da+Hanoi',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    facilities: ['12 phòng học máy lạnh tiêu chuẩn', 'Bảng tương tác thông minh', 'Thư viện tự học & cafe học viên', 'Bãi đỗ ô tô và xe máy miễn phí']
  },
  {
    id: 'cau-giay-1',
    region: 'ha-noi',
    name: 'Cơ sở Cầu Giấy 1 - Hà Nội',
    address: 'Số 8 ngõ 72 Dương Khuê, P. Mai Dịch, Q. Cầu Giấy, TP. Hà Nội',
    hotline: '0981.123.456',
    email: 'caugiay@tmedu.vn',
    hours: '08:00 - 21:30 (Thứ 2 - Chủ Nhật)',
    mapUrl: 'https://maps.google.com/?q=Duong+Khue+Cau+Giay+Hanoi',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    facilities: ['10 phòng học hiện đại', 'Gần các trường ĐH Quốc Gia, Sư Phạm, Thương Mại', 'Trang thiết bị âm thanh luyện nghe chuẩn Hanban']
  },
  {
    id: 'hai-ba-trung',
    region: 'ha-noi',
    name: 'Cơ sở Hai Bà Trưng - Hà Nội',
    address: 'Số 311 Trần Đại Nghĩa, P. Trương Định, Q. Hai Bà Trưng, TP. Hà Nội',
    hotline: '0982.234.567',
    email: 'hbt@tmedu.vn',
    hours: '08:00 - 21:30 (Thứ 2 - Chủ Nhật)',
    mapUrl: 'https://maps.google.com/?q=Tran+Dai+Nghia+Hai+Ba+Trung+Hanoi',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    facilities: ['Gần cụm Bách Khoa, Kinh Tế Quốc Dân, Xây Dựng', 'Phòng học cách âm cao cấp', 'Khu vực pantry trà nước']
  },
  {
    id: 'ha-dong',
    region: 'ha-noi',
    name: 'Cơ sở Hà Đông - Hà Nội',
    address: 'Số 139K Chiến Thắng, P. Văn Quán, Q. Hà Đông, TP. Hà Nội',
    hotline: '0983.345.678',
    email: 'hadong@tmedu.vn',
    hours: '08:00 - 21:30 (Thứ 2 - Chủ Nhật)',
    mapUrl: 'https://maps.google.com/?q=Chien+Thang+Ha+Dong+Hanoi',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop',
    facilities: ['8 phòng học tiêu chuẩn', 'Gần Học viện An ninh, Học viện Bưu chính Viễn thông', 'Wifi tốc độ cao']
  },
  {
    id: 'gia-lam',
    region: 'ha-noi',
    name: 'Cơ sở Gia Lâm (Ocean Park) - Hà Nội',
    address: 'Hải Âu 16, SP16-79, Khu đô thị Vinhomes Ocean Park, Gia Lâm, Hà Nội',
    hotline: '0984.456.789',
    email: 'gialam@tmedu.vn',
    hours: '08:00 - 21:30 (Thứ 2 - Chủ Nhật)',
    mapUrl: 'https://maps.google.com/?q=Vinhomes+Ocean+Park+Gia+Lam',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    facilities: ['Không gian chuẩn quốc tế hiện đại bậc nhất', 'Khuôn viên xanh thoáng mát', 'Phòng học trang bị màn hình 4K']
  },

  // TP. Hồ Chí Minh
  {
    id: 'quan-1',
    region: 'ho-chi-minh',
    name: 'Cơ sở Quận 1 - TP. Hồ Chí Minh',
    address: 'Số 345/84 Trần Hưng Đạo, Phường Cầu Kho, Quận 1, TP. Hồ Chí Minh',
    hotline: '0938.112.233',
    email: 'quan1@tmedu.vn',
    hours: '08:00 - 21:30 (Thứ 2 - Chủ Nhật)',
    mapUrl: 'https://maps.google.com/?q=Tran+Hung+Dao+Quan+1+HCM',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop',
    facilities: ['Vị trí trung tâm Sài Gòn thuận tiện di chuyển', '8 phòng học máy lạnh tiêu chuẩn quốc tế', 'Đội ngũ giáo vụ tận tâm 24/7']
  },
  {
    id: 'tan-binh',
    region: 'ho-chi-minh',
    name: 'Cơ sở Tân Bình - TP. Hồ Chí Minh',
    address: 'Số 67 Nguyễn Thái Bình, Phường 4, Quận Tân Bình, TP. Hồ Chí Minh',
    hotline: '0939.223.344',
    email: 'tanbinh@tmedu.vn',
    hours: '08:00 - 21:30 (Thứ 2 - Chủ Nhật)',
    mapUrl: 'https://maps.google.com/?q=Nguyen+Thai+Binh+Tan+Binh+HCM',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800&auto=format&fit=crop',
    facilities: ['Gần sân bay Tân Sơn Nhất và các trường đại học', 'Phòng học chuyên biệt cho lớp 1 kèm 1 và đàm thoại doanh nghiệp']
  },
  {
    id: 'binh-thanh',
    region: 'ho-chi-minh',
    name: 'Cơ sở Bình Thạnh - TP. Hồ Chí Minh',
    address: 'Số 168/19 đường Nguyễn Gia Trí (D2 cũ), Phường 25, Quận Bình Thạnh, TP.HCM',
    hotline: '0937.334.455',
    email: 'binhthanh@tmedu.vn',
    hours: '08:00 - 21:30 (Thứ 2 - Chủ Nhật)',
    mapUrl: 'https://maps.google.com/?q=Nguyen+Gia+Tri+Binh+Thanh+HCM',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
    facilities: ['Tọa lạc giữa các trường ĐH HUTECH, Ngoại Thương CS2, Giao Thông Vận Tải', 'Khu tự học có máy pha cafe và trà sữa miễn phí']
  },

  // Tỉnh thành khác
  {
    id: 'bac-ninh',
    region: 'tinh-thanh',
    name: 'Cơ sở Bắc Ninh',
    address: 'Tòa nhà ParkView City, số 125 Huyền Quang, Phường Võ Cường, TP. Bắc Ninh',
    hotline: '0961.556.677',
    email: 'bacninh@tmedu.vn',
    hours: '08:00 - 21:30 (Thứ 2 - Chủ Nhật)',
    mapUrl: 'https://maps.google.com/?q=Huyen+Quang+Bac+Ninh',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
    facilities: ['Phục vụ đào tạo tiếng Trung cho kỹ sư các KCN Yên Phong, Quế Võ, VSIP', 'Phòng học chuẩn văn phòng doanh nghiệp']
  },
  {
    id: 'da-nang',
    region: 'tinh-thanh',
    name: 'Cơ sở Đà Nẵng',
    address: 'Số 186 Nguyễn Thị Minh Khai, Phường Hải Châu 1, Quận Hải Châu, TP. Đà Nẵng',
    hotline: '0962.667.788',
    email: 'danang@tmedu.vn',
    hours: '08:00 - 21:30 (Thứ 2 - Chủ Nhật)',
    mapUrl: 'https://maps.google.com/?q=Nguyen+Thi+Minh+Khai+Hai+Chau+Da+Nang',
    image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=800&auto=format&fit=crop',
    facilities: ['Cơ sở chuẩn quốc tế tại trung tâm miền Trung', 'Chuyên đào tạo tiếng Trung du lịch, khách sạn và xuất khẩu lao động']
  }
];
