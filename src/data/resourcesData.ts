import { ResourceItem } from '../types';

export const resourceCategories = [
  { id: 'all', name: 'Tất cả tài liệu' },
  { id: 'hsk', name: 'HSK & HSKK' },
  { id: 'tu-vung', name: 'Từ Vựng & Bộ Thủ' },
  { id: 'ngu-phap', name: 'Ngữ Pháp Tiếng Trung' },
  { id: 'sach', name: 'Kho Sách & Giáo Trình' }
];

export const resourcesData: ResourceItem[] = [
  {
    id: 'res-01',
    category: 'tu-vung',
    title: 'Trọn Bộ 214 Bộ Thủ Tiếng Trung Kèm Pinyin & Hình Ảnh Trực Quan',
    format: 'PDF Ebook (Màu)',
    size: '28 MB',
    downloads: '45.200+',
    author: 'Ban Chuyên Môn Green Ocean',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    desc: 'Tổng hợp 214 bộ thủ chữ Hán từ 1 đến 17 nét, có phiên âm pinyin, giải nghĩa Hán Việt, câu chuyện nhớ chữ và các từ ghép thông dụng nhất.'
  },
  {
    id: 'res-02',
    category: 'hsk',
    title: 'Bộ Đề Thi Thử New HSK 3 - 4 - 5 Chuẩn Format Cấu Trúc Mới (Kèm Audio MP3)',
    format: 'PDF + MP3 Audio',
    size: '145 MB',
    downloads: '38.900+',
    author: 'Viện Nghiên Cứu Bác Nhã',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop',
    desc: 'Tuyển tập 12 đề thi thử chuẩn format Hanban có file nghe giọng chuẩn Bắc Kinh, đáp án chi tiết và giải thích từng câu hỏi bẫy.'
  },
  {
    id: 'res-03',
    category: 'ngu-phap',
    title: 'Sổ Tay Ngữ Pháp Tiếng Trung Sơ Cấp & Trung Cấp Toàn Tập',
    format: 'PDF Ebook',
    size: '18 MB',
    downloads: '29.400+',
    author: 'TS. Nguyễn Thị Mai Thanh',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop',
    desc: 'Hệ thống hóa toàn bộ cấu trúc câu chữ Ba, chữ Bei, các loại bổ ngữ kết quả, trạng thái, khả năng, xu hướng và phương pháp phân biệt từ gần nghĩa.'
  },
  {
    id: 'res-04',
    category: 'sach',
    title: 'Bản Đọc Thử Giáo Trình Hán Ngữ Msutong Sơ Cấp (Bài 1 - 3)',
    format: 'PDF Bản Quyền',
    size: '35 MB',
    downloads: '52.100+',
    author: 'NXB ĐH Ngôn Ngữ Bắc Kinh',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop',
    desc: 'Trải nghiệm bộ giáo trình học tiếng Trung được yêu thích nhất hiện nay với thiết kế hình ảnh màu sắc, ngữ âm trực quan và bài tập đa dạng.'
  }
];
