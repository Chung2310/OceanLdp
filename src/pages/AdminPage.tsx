import React, { useState, useEffect } from 'react';
import { 
  Users, Download, Search, Filter, Phone, Mail, BookOpen, MapPin, 
  CheckCircle2, Clock, XCircle, AlertCircle, RefreshCw, Settings, Trash2, ArrowLeft 
} from 'lucide-react';
import { leadService, LeadRecord } from '../services/leadService';
import { Link } from 'wouter';

export default function AdminPage(): JSX.Element {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | LeadRecord['status']>('all');
  const [sourceFilter, setSourceFilter] = useState<'all' | string>('all');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [savedWebhookMsg, setSavedWebhookMsg] = useState(false);
  const [activeTab, setActiveTab] = useState<'leads' | 'settings'>('leads');

  useEffect(() => {
    loadLeads();
    const storedUrl = localStorage.getItem('greenocean_google_webhook_url') || localStorage.getItem('thanhmaihsk_google_webhook_url') || '';
    setWebhookUrl(storedUrl);
  }, []);

  const loadLeads = () => {
    const data = leadService.getLeads();
    setLeads(data);
  };

  const handleStatusChange = (id: string, newStatus: LeadRecord['status']) => {
    leadService.updateLeadStatus(id, newStatus);
    loadLeads();
  };

  const handleDeleteLead = (id: string) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa khách hàng này khỏi danh sách?')) {
      leadService.deleteLead(id);
      loadLeads();
    }
  };

  const handleExportCSV = () => {
    leadService.exportToCSV(filteredLeads);
  };

  const handleSaveWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('greenocean_google_webhook_url', webhookUrl.trim());
    setSavedWebhookMsg(true);
    setTimeout(() => setSavedWebhookMsg(false), 3000);
  };

  // Lọc dữ liệu
  const filteredLeads = leads.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.includes(searchQuery) ||
      (item.email && item.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.course && item.course.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesSource = sourceFilter === 'all' || item.source === sourceFilter;

    return matchesSearch && matchesStatus && matchesSource;
  });

  // Số liệu thống kê
  const totalLeads = leads.length;
  const newLeadsCount = leads.filter((l) => l.status === 'new').length;
  const contactedLeadsCount = leads.filter((l) => l.status === 'contacted').length;
  const enrolledLeadsCount = leads.filter((l) => l.status === 'enrolled').length;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', padding: '30px 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#64748b', textDecoration: 'none', fontSize: '0.9rem' }}>
                <ArrowLeft size={16} /> Về Trang Chủ
              </Link>
              <span style={{ color: '#cbd5e1' }}>|</span>
              <span style={{ fontSize: '0.85rem', color: '#1B7E45', fontWeight: 700, textTransform: 'uppercase' }}>Hệ Thống CRM Nội Bộ</span>
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1E293B', margin: '6px 0 0 0' }}>
              QUẢN TRỊ TUYỂN SINH GREEN OCEAN
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => setActiveTab(activeTab === 'leads' ? 'settings' : 'leads')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                backgroundColor: activeTab === 'settings' ? '#1E293B' : '#ffffff',
                color: activeTab === 'settings' ? '#ffffff' : '#334155',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <Settings size={18} /> {activeTab === 'settings' ? 'Danh Sách Lead' : 'Cài Đặt Webhook'}
            </button>

            <button
              onClick={handleExportCSV}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: '#1B7E45',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(27, 126, 69, 0.3)'
              }}
            >
              <Download size={18} /> Xuất Excel ({filteredLeads.length})
            </button>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={16} color="#1B7E45" /> TỔNG LEAD THU THẬP
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1E293B' }}>{totalLeads}</div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} color="#F37021" /> LEAD MỚI CẦN GỌI
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#F37021' }}>{newLeadsCount}</div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RefreshCw size={16} color="#f59e0b" /> ĐANG TƯ VẤN
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f59e0b' }}>{contactedLeadsCount}</div>
          </div>

          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#1B7E45" /> ĐÃ ĐĂNG KÝ HỌC
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1B7E45' }}>{enrolledLeadsCount}</div>
          </div>
        </div>

        {/* Tab 1: Lead Management */}
        {activeTab === 'leads' && (
          <div style={{ backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
            {/* Filter Bar */}
            <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0', display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Search Box */}
              <div style={{ position: 'relative', minWidth: '280px', flex: 1 }}>
                <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type="text"
                  placeholder="Tìm theo tên, SĐT, khóa học..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 38px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Status Filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>Trạng thái:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as any)}
                  style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.88rem', backgroundColor: '#fff' }}
                >
                  <option value="all">Tất cả trạng thái</option>
                  <option value="new">🔴 Mới đăng ký</option>
                  <option value="contacted">🟡 Đã liên hệ</option>
                  <option value="enrolled">🟢 Đã chốt học</option>
                  <option value="cancelled">⚪ Hủy bỏ</option>
                </select>
              </div>

              {/* Source Filter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>Nguồn:</span>
                <select
                  value={sourceFilter}
                  onChange={(e) => setSourceFilter(e.target.value)}
                  style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.88rem', backgroundColor: '#fff' }}
                >
                  <option value="all">Tất cả nguồn</option>
                  <option value="hero_form">Banner Trang Chủ</option>
                  <option value="lead_modal">Modal Đăng Ký</option>
                  <option value="placement_test">Bài Test Trình Độ</option>
                  <option value="download_modal">Tải Sách / Ebook</option>
                  <option value="contact_page">Trang Liên Hệ</option>
                  <option value="franchise_page">Trang Nhượng Quyền</option>
                </select>
              </div>

              <button
                onClick={loadLeads}
                style={{ padding: '8px 14px', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}
              >
                <RefreshCw size={14} /> Làm mới
              </button>
            </div>

            {/* Table of Leads */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    <th style={{ padding: '14px 16px' }}>Khách Hàng</th>
                    <th style={{ padding: '14px 16px' }}>Liên Hệ</th>
                    <th style={{ padding: '14px 16px' }}>Khóa Học / Cơ Sở</th>
                    <th style={{ padding: '14px 16px' }}>Nguồn & Điểm Test</th>
                    <th style={{ padding: '14px 16px' }}>Thời Gian</th>
                    <th style={{ padding: '14px 16px' }}>Trạng Thái</th>
                    <th style={{ padding: '14px 16px', textAlign: 'right' }}>Thao Tác</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={7} style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
                        Không tìm thấy khách hàng nào phù hợp với bộ lọc.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((item) => (
                      <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background-color 0.15s ease' }}>
                        {/* Name */}
                        <td style={{ padding: '14px 16px' }}>
                          <div style={{ fontWeight: 700, color: '#1E293B' }}>{item.name}</div>
                          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>ID: {item.id}</div>
                        </td>

                        {/* Contact */}
                        <td style={{ padding: '14px 16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#1B7E45' }}>
                            <Phone size={14} /> <a href={`tel:${item.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{item.phone}</a>
                          </div>
                          {item.email && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>
                              <Mail size={13} /> {item.email}
                            </div>
                          )}
                        </td>

                        {/* Course & Branch */}
                        <td style={{ padding: '14px 16px', maxWidth: '280px' }}>
                          <div style={{ fontWeight: 600, color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <BookOpen size={14} color="#1B7E45" /> {item.course}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
                            <MapPin size={13} /> {item.branch}
                          </div>
                        </td>

                        {/* Source & Score */}
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '3px 8px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                            {item.source}
                          </span>
                          {item.score !== undefined && (
                            <div style={{ marginTop: '4px', fontSize: '0.82rem', fontWeight: 700, color: '#1B7E45' }}>
                              🎯 {item.score}/100đ ({item.level})
                            </div>
                          )}
                        </td>

                        {/* Time */}
                        <td style={{ padding: '14px 16px', fontSize: '0.82rem', color: '#64748b' }}>
                          {new Date(item.createdAt).toLocaleString('vi-VN')}
                        </td>

                        {/* Status Dropdown */}
                        <td style={{ padding: '14px 16px' }}>
                          <select
                            value={item.status}
                            onChange={(e) => handleStatusChange(item.id, e.target.value as any)}
                            style={{
                              padding: '5px 10px',
                              borderRadius: '6px',
                              border: '1px solid #cbd5e1',
                              fontSize: '0.82rem',
                              fontWeight: 600,
                              backgroundColor: 
                                item.status === 'new' ? '#fee2e2' :
                                item.status === 'contacted' ? '#fef3c7' :
                                item.status === 'enrolled' ? '#EAF5EE' : '#f1f5f9',
                              color:
                                item.status === 'new' ? '#991b1b' :
                                item.status === 'contacted' ? '#92400e' :
                                item.status === 'enrolled' ? '#1B7E45' : '#475569'
                            }}
                          >
                            <option value="new">Mới đăng ký</option>
                            <option value="contacted">Đã liên hệ</option>
                            <option value="enrolled">Đã chốt học</option>
                            <option value="cancelled">Hủy bỏ</option>
                          </select>
                        </td>

                        {/* Action */}
                        <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                          <button
                            onClick={() => handleDeleteLead(item.id)}
                            title="Xóa khách hàng"
                            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '6px' }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Settings (Webhook Google Sheet) */}
        {activeTab === 'settings' && (
          <div style={{ backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', padding: '30px', maxWidth: '700px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: '12px' }}>
              CẤU HÌNH ĐỒNG BỘ GOOGLE SHEETS TỰ ĐỘNG
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '24px' }}>
              Khi học viên điền bất kỳ form nào trên website (Tư vấn, Test trình độ, Tải sách), hệ thống sẽ gửi ngay 1 dòng mới vào file Google Sheet của trung tâm thông qua Webhook Google Apps Script (hoàn toàn miễn phí và bảo mật).
            </p>

            <form onSubmit={handleSaveWebhook}>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>
                  Google Apps Script Webhook URL:
                </label>
                <input
                  type="url"
                  placeholder="https://script.google.com/macros/s/.../exec"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#1B7E45',
                    color: '#ffffff',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Lưu Cấu Hình
                </button>

                {savedWebhookMsg && (
                  <span style={{ color: '#1B7E45', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={16} /> Đã lưu thành công!
                  </span>
                )}
              </div>
            </form>

            <div style={{ marginTop: '30px', padding: '16px', backgroundColor: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: '#1E293B' }}>📌 Cách tạo Webhook Google Sheet (3 phút):</h4>
              <ol style={{ margin: 0, paddingLeft: '20px', color: '#475569', fontSize: '0.85rem', lineHeight: '1.7' }}>
                <li>Tạo 1 Google Sheet mới với các cột: Tên, SĐT, Email, Khóa học, Cơ sở, Nguồn, Điểm.</li>
                <li>Vào menu <b>Tiện ích mở rộng (Extensions) &rarr; Apps Script</b>.</li>
                <li>Dán đoạn mã nhận POST request và bấm <b>Deploy as Web App</b> (quyền: Anyone).</li>
                <li>Dán link Web App vừa tạo vào ô bên trên và bấm Lưu.</li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
