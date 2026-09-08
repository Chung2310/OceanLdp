export interface LeadRecord {
  id: string;
  name: string;
  phone: string;
  email?: string;
  course?: string;
  branch?: string;
  source: string; // 'hero_form' | 'lead_modal' | 'download_modal' | 'placement_test' | 'contact_page' | 'franchise_page'
  score?: number;
  level?: string;
  note?: string;
  status: 'new' | 'contacted' | 'enrolled' | 'cancelled';
  createdAt: string;
}

const STORAGE_KEY = 'thanhmaihsk_leads_data_v1';

// Mẫu danh sách lead ban đầu để demo cho Admin nếu chưa có data thực tế
const INITIAL_LEADS: LeadRecord[] = [
  {
    id: 'lead-17150123401',
    name: 'Nguyễn Thuỳ Linh',
    phone: '0988123456',
    email: 'thuylinh.hsk@gmail.com',
    course: 'Khóa Tiếng Trung Cơ Bản Hán Ngữ Tích Hợp HSK 3 3.0',
    branch: 'Cơ sở Cầu Giấy – HN',
    source: 'lead_modal',
    status: 'new',
    createdAt: new Date(Date.now() - 1000 * 60 * 35).toISOString()
  },
  {
    id: 'lead-17150123402',
    name: 'Trần Văn Hoàng',
    phone: '0912987654',
    email: 'hoangtran.dev@gmail.com',
    course: 'Khóa Luyện Thi HSK 5 Chuyên Sâu Cấp Tốc',
    branch: 'Cơ sở Quận 1 – HCM',
    source: 'hero_form',
    status: 'contacted',
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString()
  },
  {
    id: 'lead-17150123403',
    name: 'Lê Minh Hạnh',
    phone: '0977345678',
    email: 'hanh.le99@gmail.com',
    course: 'Bài Test Năng Lực Trực Tuyến',
    branch: 'Cơ sở Mỹ Đình – HN',
    source: 'placement_test',
    score: 85,
    level: 'HSK 3 - Trung cấp sơ bộ',
    status: 'enrolled',
    createdAt: new Date(Date.now() - 1000 * 60 * 360).toISOString()
  },
  {
    id: 'lead-17150123404',
    name: 'Phạm Phương Nga',
    phone: '0963554433',
    email: 'phuongnga.marketing@gmail.com',
    course: 'Tải trọn bộ 214 Bộ Thủ & Sách Msutong PDF',
    branch: 'Học Trực Tuyến (Online)',
    source: 'download_modal',
    status: 'new',
    createdAt: new Date(Date.now() - 1000 * 60 * 720).toISOString()
  }
];

export const leadService = {
  // Lấy toàn bộ danh sách lead
  getLeads(): LeadRecord[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
        return INITIAL_LEADS;
      }
      return JSON.parse(data);
    } catch (e) {
      console.error('Lỗi khi đọc danh sách lead:', e);
      return INITIAL_LEADS;
    }
  },

  // Thêm lead mới vào hệ thống
  saveLead(lead: Omit<LeadRecord, 'id' | 'createdAt' | 'status'> & { status?: LeadRecord['status'] }): LeadRecord {
    const leads = this.getLeads();
    const newRecord: LeadRecord = {
      id: `lead-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name: lead.name,
      phone: lead.phone,
      email: lead.email || '',
      course: lead.course || 'Tư vấn chung',
      branch: lead.branch || 'Toàn quốc',
      source: lead.source,
      score: lead.score,
      level: lead.level,
      note: lead.note || '',
      status: lead.status || 'new',
      createdAt: new Date().toISOString()
    };

    const updated = [newRecord, ...leads];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Lỗi lưu lead vào localStorage:', e);
    }

    // Tự động bắn webhook nếu người dùng cấu hình Google Sheet Apps Script URL
    this.dispatchWebhook(newRecord);

    return newRecord;
  },

  // Cập nhật trạng thái lead
  updateLeadStatus(id: string, status: LeadRecord['status'], note?: string): boolean {
    const leads = this.getLeads();
    const idx = leads.findIndex((l) => l.id === id);
    if (idx === -1) return false;

    leads[idx].status = status;
    if (note !== undefined) {
      leads[idx].note = note;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    return true;
  },

  // Xoá lead
  deleteLead(id: string): boolean {
    const leads = this.getLeads();
    const filtered = leads.filter((l) => l.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  },

  // Xoá toàn bộ lead
  clearAllLeads(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  },

  // Gửi lead ra Webhook bên ngoài (Google Sheet / Telegram)
  async dispatchWebhook(lead: LeadRecord) {
    const googleWebhookUrl = localStorage.getItem('thanhmaihsk_google_webhook_url');
    if (googleWebhookUrl && googleWebhookUrl.trim() !== '') {
      try {
        await fetch(googleWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead)
        });
        console.log('Đã gửi lead đến Google Sheet Webhook:', lead.name);
      } catch (err) {
        console.warn('Lỗi gửi webhook Google Sheet:', err);
      }
    }
  },

  // Xuất file CSV / Excel tương thích tiếng Việt có UTF-8 BOM
  exportToCSV(leads: LeadRecord[]): void {
    const headers = [
      'Mã Lead',
      'Thời gian đăng ký',
      'Họ và tên',
      'Số điện thoại',
      'Email',
      'Khóa học quan tâm',
      'Cơ sở đăng ký',
      'Nguồn đăng ký',
      'Điểm test (nếu có)',
      'Trình độ đánh giá',
      'Trạng thái',
      'Ghi chú'
    ];

    const rows = leads.map((l) => [
      `"${l.id}"`,
      `"${new Date(l.createdAt).toLocaleString('vi-VN')}"`,
      `"${l.name.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.email || ''}"`,
      `"${(l.course || '').replace(/"/g, '""')}"`,
      `"${(l.branch || '').replace(/"/g, '""')}"`,
      `"${l.source}"`,
      `"${l.score !== undefined ? l.score : ''}"`,
      `"${(l.level || '').replace(/"/g, '""')}"`,
      `"${l.status === 'new' ? 'Mới' : l.status === 'contacted' ? 'Đã liên hệ' : l.status === 'enrolled' ? 'Đã chốt học' : 'Hủy bỏ'}"`,
      `"${(l.note || '').replace(/"/g, '""')}"`
    ]);

    // Thêm UTF-8 BOM '\uFEFF' để Microsoft Excel hiển thị đúng dấu tiếng Việt không bị lỗi font
    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Thanhmaihsk_Danh_Sach_Lead_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
