import { ScheduleItem } from '../types';

export interface CampusScheduleRow {
  id: string;
  startDate: string;
  days: string;
  time: string;
  timeSlot: 'sang' | 'chieu' | 'toi';
  note?: string;
}

export interface CampusCourseSchedule {
  courseName: string;
  commitment: string;
  rows: CampusScheduleRow[];
}

export interface CampusScheduleCard {
  id: string;
  branchName: string;
  badgeName: string;
  region: 'co-so-1' | 'co-so-2' | 'online' | string;
  regionLabel: string;
  address: string;
  hotline: string;
  courses: CampusCourseSchedule[];
}

export const campusScheduleCards: CampusScheduleCard[] = [
  // 1. CƠ SỞ 1: HÀN THUYÊN – ĐẠI PHÚC (BẮC NINH)
  {
    id: 'co-so-1',
    branchName: 'Cơ sở 1: Hàn Thuyên – Đại Phúc',
    badgeName: 'CƠ SỞ 1: HÀN THUYÊN',
    region: 'co-so-1',
    regionLabel: 'Cơ sở 1 (Hàn Thuyên)',
    address: 'Số 567 đường Hàn Thuyên, P. Đại Phúc, TP. Bắc Ninh',
    hotline: '0961.556.677',
    courses: [
      {
        courseName: 'TIẾNG TRUNG TÍCH HỢP HSK3 3.0',
        commitment: 'Cam kết chuẩn New HSK3.0 & Giao tiếp phản xạ',
        rows: [
          { id: 'GO1-01', startDate: '16/09/2026', days: 'Sáng T2, 4, 6', time: '09:00 - 11:00', timeSlot: 'sang' },
          { id: 'GO1-02', startDate: '28/09/2026', days: 'Sáng T2, 4, 6', time: '09:00 - 11:00', timeSlot: 'sang' },
          { id: 'GO1-03', startDate: '14/09/2026', days: 'Tối T2, 4, 6', time: '18:00 - 20:00', timeSlot: 'toi' },
          { id: 'GO1-04', startDate: '25/09/2026', days: 'Tối T2, 4, 6', time: '18:00 - 20:00', timeSlot: 'toi' },
          { id: 'GO1-05', startDate: '07/09/2026', days: 'Tối T2, 4, 6', time: '20:00 - 22:00', timeSlot: 'toi' },
          { id: 'GO1-06', startDate: '10/09/2026', days: 'Tối T3, 5, CN', time: '18:30 - 20:30', timeSlot: 'toi' },
          { id: 'GO1-07', startDate: '29/09/2026', days: 'Tối T3, 5, CN', time: '18:30 - 20:30', timeSlot: 'toi' }
        ]
      },
      {
        courseName: 'GIAO TIẾP CƠ BẢN 1 (THỰC CHIẾN)',
        commitment: 'Tự tin đàm thoại đời sống & công việc',
        rows: [
          { id: 'GO1-08', startDate: '17/09/2026', days: 'Tối T3, 5, CN', time: '19:00 - 20:30', timeSlot: 'toi' },
          { id: 'GO1-09', startDate: '24/09/2026', days: 'Sáng T3, 5, 7', time: '09:00 - 10:30', timeSlot: 'sang' }
        ]
      },
      {
        courseName: 'TIẾNG TRUNG TÍCH HỢP HSK4 3.0',
        commitment: 'Đạt chuẩn New HSK4 3.0 & HSKK Trung cấp',
        rows: [
          { id: 'GO1-10', startDate: '18/09/2026', days: 'Tối T2, 4, 6', time: '18:00 - 20:00', timeSlot: 'toi' },
          { id: 'GO1-11', startDate: '26/09/2026', days: 'Tối T3, 5, 7', time: '19:30 - 21:30', timeSlot: 'toi' }
        ]
      },
      {
        courseName: 'TIẾNG TRUNG TÍCH HỢP HSK5 3.0',
        commitment: 'Đạt chuẩn New HSK5 3.0 & Thuyết trình chuyên sâu',
        rows: [
          { id: 'GO1-12', startDate: '18/09/2026', days: 'Tối T2, 4, 6', time: '18:00 - 20:00', timeSlot: 'toi' }
        ]
      },
      {
        courseName: 'TIẾNG TRUNG DOANH NGHIỆP FDI (KCN BẮC NINH)',
        commitment: 'Giao tiếp sản xuất, thương mại, hợp đồng',
        rows: [
          { id: 'GO1-13', startDate: '21/09/2026', days: 'Tối T2, 4, 6', time: '18:30 - 20:30', timeSlot: 'toi' }
        ]
      },
      {
        courseName: 'TIẾNG TRUNG PHỔ THÔNG (TRẺ EM)',
        commitment: 'Phát âm chuẩn bản xứ, đạt HSK 2-3 thiếu nhi',
        rows: [
          { id: 'GO1-14', startDate: '22/09/2026', days: 'Tối T3, 5', time: '18:30 - 20:00', timeSlot: 'toi' }
        ]
      }
    ]
  },

  // 2. CƠ SỞ 2: NGÃ 6 ĐẠI PHÚC (BẮC NINH)
  {
    id: 'co-so-2',
    branchName: 'Cơ sở 2: Ngã 6 Đại Phúc',
    badgeName: 'CƠ SỞ 2: NGÃ 6 ĐẠI PHÚC',
    region: 'co-so-2',
    regionLabel: 'Cơ sở 2 (Ngã 6)',
    address: 'Ngã 6 Phường Đại Phúc, TP. Bắc Ninh',
    hotline: '0961.556.677',
    courses: [
      {
        courseName: 'TIẾNG TRUNG TÍCH HỢP HSK3 3.0',
        commitment: 'Cam kết chuẩn New HSK3.0 & Giao tiếp phản xạ',
        rows: [
          { id: 'GO2-01', startDate: '15/09/2026', days: 'Sáng T3, 5, 7', time: '09:00 - 11:00', timeSlot: 'sang' },
          { id: 'GO2-02', startDate: '21/09/2026', days: 'Tối T2, 4, 6', time: '18:00 - 20:00', timeSlot: 'toi' },
          { id: 'GO2-03', startDate: '23/09/2026', days: 'Tối T2, 4, 6', time: '20:00 - 22:00', timeSlot: 'toi' },
          { id: 'GO2-04', startDate: '30/09/2026', days: 'Tối T3, 5, CN', time: '18:30 - 20:30', timeSlot: 'toi' }
        ]
      },
      {
        courseName: 'GIAO TIẾP CƠ BẢN 1 (THỰC CHIẾN)',
        commitment: 'Thành thạo giao tiếp đời sống & thương mại cơ bản',
        rows: [
          { id: 'GO2-05', startDate: '18/09/2026', days: 'Tối T2, 4, 6', time: '19:00 - 20:30', timeSlot: 'toi' },
          { id: 'GO2-06', startDate: '29/09/2026', days: 'Tối T3, 5, 7', time: '18:30 - 20:00', timeSlot: 'toi' }
        ]
      },
      {
        courseName: 'TIẾNG TRUNG TÍCH HỢP HSK4 3.0',
        commitment: 'Đạt chuẩn New HSK4 3.0 & HSKK Trung cấp',
        rows: [
          { id: 'GO2-07', startDate: '17/09/2026', days: 'Tối T3, 5, CN', time: '18:00 - 20:00', timeSlot: 'toi' },
          { id: 'GO2-08', startDate: '25/09/2026', days: 'Tối T2, 4, 6', time: '18:00 - 20:00', timeSlot: 'toi' }
        ]
      },
      {
        courseName: 'TIẾNG TRUNG TÍCH HỢP HSK5 3.0',
        commitment: 'Chuẩn New HSK5 3.0 đầu ra bằng văn bản',
        rows: [
          { id: 'GO2-09', startDate: '22/09/2026', days: 'Tối T3, 5, 7', time: '19:30 - 21:30', timeSlot: 'toi' }
        ]
      },
      {
        courseName: 'KHÓA HỌC 1 KÈM 1 THEO YÊU CẦU',
        commitment: 'Lộ trình cá nhân hóa, linh hoạt thời gian 100%',
        rows: [
          { id: 'GO2-10', startDate: 'Linh hoạt', days: 'Theo yêu cầu học viên', time: 'Sáng/Chiều/Tối', timeSlot: 'sang' }
        ]
      }
    ]
  },

  // 3. CƠ SỞ ĐÀO TẠO TRỰC TUYẾN TOÀN QUỐC (ONLINE GOOGLE MEET)
  {
    id: 'online',
    branchName: 'Cơ sở Đào Tạo Trực Tuyến Toàn Quốc',
    badgeName: 'TRỰC TUYẾN ONLINE GOOGLE MEET',
    region: 'online',
    regionLabel: 'Online Toàn Quốc',
    address: 'Nền tảng học trực tuyến tương tác 2 chiều (Học viên 63 tỉnh thành & Quốc tế)',
    hotline: '0961.556.677',
    courses: [
      {
        courseName: 'TIẾNG TRUNG TÍCH HỢP HSK3 3.0 TRỰC TUYẾN',
        commitment: 'Cam kết chuẩn New HSK3.0 đầu ra như học Offline',
        rows: [
          { id: 'OL-01', startDate: '10/09/2026', days: 'Sáng T2, 4, 6', time: '09:00 - 11:00', timeSlot: 'sang' },
          { id: 'OL-02', startDate: '14/09/2026', days: 'Tối T2, 4, 6', time: '18:00 - 20:00', timeSlot: 'toi' },
          { id: 'OL-03', startDate: '18/09/2026', days: 'Tối T2, 4, 6', time: '20:00 - 22:00', timeSlot: 'toi' },
          { id: 'OL-04', startDate: '19/09/2026', days: 'Tối T3, 5, 7', time: '19:30 - 21:30', timeSlot: 'toi' },
          { id: 'OL-05', startDate: '28/09/2026', days: 'Tối T2, 4, 6', time: '20:00 - 22:00', timeSlot: 'toi' }
        ]
      },
      {
        courseName: 'TIẾNG TRUNG TÍCH HỢP HSK4 3.0 TRỰC TUYẾN',
        commitment: 'Chuẩn New HSK4 3.0, chữa bài 1-1 chuyên sâu',
        rows: [
          { id: 'OL-06', startDate: '16/09/2026', days: 'Tối T2, 4, 6', time: '19:30 - 21:30', timeSlot: 'toi' },
          { id: 'OL-07', startDate: '25/09/2026', days: 'Tối T3, 5, 7', time: '20:00 - 22:00', timeSlot: 'toi' }
        ]
      },
      {
        courseName: 'TIẾNG TRUNG TÍCH HỢP HSK5 3.0 TRỰC TUYẾN',
        commitment: 'Chuẩn New HSK5 3.0, hỗ trợ xin học bổng du học',
        rows: [
          { id: 'OL-08', startDate: '21/09/2026', days: 'Tối T2, 4, 6', time: '20:00 - 22:00', timeSlot: 'toi' }
        ]
      },
      {
        courseName: 'LUYỆN THI HSK / HSKK CẤP TỐC TRỰC TUYẾN',
        commitment: 'Rèn đề thi thực chiến, chiến thuật làm bài chuẩn xác',
        rows: [
          { id: 'OL-09', startDate: '22/09/2026', days: 'Tối T3, 5, CN', time: '19:30 - 21:30', timeSlot: 'toi' }
        ]
      },
      {
        courseName: 'KHÓA VIP 1 KÈM 1 THEO YÊU CẦU TRỰC TUYẾN',
        commitment: '100% thời lượng tương tác riêng cùng Thạc sĩ, Tiến sĩ',
        rows: [
          { id: 'OL-10', startDate: 'Linh hoạt', days: 'Lịch học tùy chọn', time: 'Sáng/Chiều/Tối', timeSlot: 'sang' }
        ]
      }
    ]
  }
];

// Legacy schedule data array for backwards compatibility across existing components
export const scheduleData: ScheduleItem[] = [
  {
    id: 'SCH-01',
    courseName: 'Hán Ngữ Tích Hợp HSK 3.0',
    courseId: 'hsk-3-tich-hop',
    branch: 'Cơ sở 1: Hàn Thuyên – Đại Phúc, TP. Bắc Ninh',
    branchId: 'co-so-1',
    days: 'Thứ 2 - 4 - 6',
    time: '18h00 - 20h00 (Tối)',
    timeSlot: 'toi',
    startDate: '14/09/2026',
    format: 'Offline tại lớp',
    teacher: 'TS. Nguyễn Thu Trang',
    fee: 3840000,
    originalFee: 4800000,
    status: 'Sắp khai giảng',
    statusType: 'available',
    seatsLeft: 5
  },
  {
    id: 'SCH-02',
    courseName: 'Hán Ngữ Tích Hợp HSK 4.0',
    courseId: 'hsk-4-tich-hop',
    branch: 'Cơ sở 2: Ngã 6 Đại Phúc, TP. Bắc Ninh',
    branchId: 'co-so-2',
    days: 'Thứ 2 - 4 - 6',
    time: '18h00 - 20h00 (Tối)',
    timeSlot: 'toi',
    startDate: '18/09/2026',
    format: 'Offline tại lớp',
    teacher: 'TS. Trần Văn Hùng',
    fee: 4640000,
    originalFee: 5800000,
    status: 'Sắp đầy (Còn 2 chỗ)',
    statusType: 'filling',
    seatsLeft: 2
  },
  {
    id: 'SCH-03',
    courseName: 'Hán Ngữ Tích Hợp HSK 3 Online',
    courseId: 'hsk-3-tich-hop',
    branch: 'Toàn quốc (Trực tuyến Google Meet)',
    branchId: 'online',
    days: 'Thứ 3 - 5 - 7',
    time: '20h00 - 21h30 (Tối)',
    timeSlot: 'toi',
    startDate: '10/09/2026',
    format: 'Online Google Meet',
    teacher: 'ThS. Hoàng Phương Anh',
    fee: 3200000,
    originalFee: 4000000,
    status: 'Đang nhận học viên',
    statusType: 'available',
    seatsLeft: 8
  },
  {
    id: 'SCH-04',
    courseName: 'Tiếng Trung Giao Tiếp Sơ Cấp',
    courseId: 'giao-tiep-cong-so',
    branch: 'Cơ sở 1: Hàn Thuyên – Đại Phúc, TP. Bắc Ninh',
    branchId: 'co-so-1',
    days: 'Thứ 3 - 5 - CN',
    time: '19h00 - 20h30 (Tối)',
    timeSlot: 'toi',
    startDate: '17/09/2026',
    format: 'Offline tại lớp',
    teacher: 'ThS. Lê Thúy Hằng',
    fee: 3900000,
    originalFee: 4800000,
    status: 'Đang nhận học viên',
    statusType: 'available',
    seatsLeft: 6
  }
];
