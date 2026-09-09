import React, { useState } from 'react';
import { ShieldCheck, CreditCard, RefreshCw, Lock } from 'lucide-react';

export default function PolicyPage(): JSX.Element {
  const [activeTab, setActiveTab] = useState<'payment' | 'reservation' | 'privacy' | 'complaint'>('payment');

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-br from-[#1E293B] to-[#0f172a] py-14 px-4 text-center text-white">
        <div className="max-w-[1280px] mx-auto">
          <span className="inline-block bg-[#1B7E45]/25 text-[#bbf0d2] border border-[#1B7E45]/40 text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider">
            ĐIỀU KHOẢN & CHÍNH SÁCH
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            Quy Định Học Vụ & Cam Kết Bảo Mật
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Quy định minh bạch về thanh toán học phí, chính sách bảo lưu - chuyển lớp và bảo mật dữ liệu học viên.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 items-start">
          {/* Left: Tab Switcher */}
          <div className="space-y-2 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
            <button 
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                activeTab === 'payment' ? 'bg-[#1B7E45] text-white shadow-sm' : 'text-slate-700 hover:bg-slate-50'
              }`}
              onClick={() => setActiveTab('payment')}
            >
              <CreditCard size={18} /> Chính sách thanh toán học phí
            </button>
            <button 
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                activeTab === 'reservation' ? 'bg-[#1B7E45] text-white shadow-sm' : 'text-slate-700 hover:bg-slate-50'
              }`}
              onClick={() => setActiveTab('reservation')}
            >
              <RefreshCw size={18} /> Bảo lưu & Chuyển lớp
            </button>
            <button 
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                activeTab === 'complaint' ? 'bg-[#1B7E45] text-white shadow-sm' : 'text-slate-700 hover:bg-slate-50'
              }`}
              onClick={() => setActiveTab('complaint')}
            >
              <ShieldCheck size={18} /> Chính sách xử lý khiếu nại
            </button>
            <button 
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-bold text-left transition-all cursor-pointer ${
                activeTab === 'privacy' ? 'bg-[#1B7E45] text-white shadow-sm' : 'text-slate-700 hover:bg-slate-50'
              }`}
              onClick={() => setActiveTab('privacy')}
            >
              <Lock size={18} /> Chính sách bảo mật thông tin
            </button>
          </div>

          {/* Right: Tab Content */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm text-sm text-slate-700 leading-relaxed space-y-4">
            {activeTab === 'payment' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#1E293B]">1. Quy Định Thanh Toán Học Phí</h2>
                <p>Học viên đăng ký khóa học tại Green Ocean có thể thanh toán học phí qua các hình thức sau:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li><strong>Chuyển khoản Ngân hàng:</strong> Quét mã VietQR chuyển khoản vào tài khoản chính thức của Trung tâm Ngoại ngữ Green Ocean.</li>
                  <li><strong>Thanh toán trực tiếp:</strong> Tại bộ phận lễ tân các cơ sở đào tạo (CS1: 567 Hàn Thuyên, CS2: Ngã 6 Đại Phúc, TP. Bắc Ninh) bằng Tiền mặt hoặc Chuyển khoản.</li>
                  <li><strong>Trả góp học phí 0% lãi suất:</strong> Kỳ hạn linh hoạt thông qua thẻ tín dụng liên kết các ngân hàng.</li>
                </ul>
                <p>Học viên chỉ chính thức được xếp lớp sau khi hoàn tất ít nhất 50% học phí đặt cọc giữ chỗ trước ngày khai giảng.</p>
              </div>
            )}

            {activeTab === 'reservation' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#1E293B]">2. Chính Sách Bảo Lưu & Chuyển Lớp Học</h2>
                <p>Nhằm tạo điều kiện tối đa cho học viên có việc bận cá nhân hoặc công tác đột xuất, trung tâm áp dụng chính sách học vụ như sau:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li><strong>Bảo lưu khóa học:</strong> Học viên được bảo lưu tối đa <strong>06 tháng</strong> kể từ ngày nộp đơn xin bảo lưu. Phí bảo lưu: Miễn phí cho lần đầu tiên.</li>
                  <li><strong>Chuyển lớp / Chuyển ca:</strong> Được hỗ trợ chuyển sang lớp có cùng trình độ tại cơ sở khác trong hệ thống hoặc chuyển sang lớp Online.</li>
                  <li><strong>Học bù:</strong> Học viên vắng mặt có phép được đăng ký học bù miễn phí tại các lớp song song trong cùng tuần.</li>
                </ul>
              </div>
            )}

            {activeTab === 'complaint' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#1E293B]">3. Chính Sách Xử Lý Khiếu Nại & Cam Kết Đầu Ra</h2>
                <p>Green Ocean cam kết chuẩn đầu ra đỗ chứng chỉ HSK bằng văn bản. Quy trình xử lý khiếu nại:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Học viên tham gia tối thiểu 80% thời lượng khóa học và hoàn thành bài tập định kỳ nếu không đạt điểm chuẩn trong kỳ thi mục tiêu sẽ được <strong>học lại hoàn toàn miễn phí 100%</strong>.</li>
                  <li>Mọi ý kiến đóng góp về chất lượng giảng viên, cơ sở vật chất sẽ được bộ phận Chăm sóc khách hàng phản hồi và xử lý trong vòng <strong>24 giờ làm việc</strong> qua hotline 0961.556.677.</li>
                </ul>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#1E293B]">4. Chính Sách Bảo Mật Thông Tin Cá Nhân</h2>
                <p>Green Ocean cam kết bảo mật tuyệt đối dữ liệu thông tin cá nhân của học viên theo đúng quy định pháp luật Việt Nam:</p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Thông tin họ tên, số điện thoại, email và kết quả học tập chỉ được sử dụng cho mục đích quản lý học vụ, gửi tài liệu và thông báo lịch học.</li>
                  <li>Trung tâm cam kết <strong>không chia sẻ, mua bán hoặc chuyển giao</strong> thông tin học viên cho bất kỳ bên thứ ba nào vì mục đích thương mại.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
