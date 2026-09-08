# HƯỚNG DẪN BÀN GIAO FILE THU THẬP NỘI DUNG WEBSITE
**(Mẫu chuẩn hệ sinh thái đào tạo tiếng Trung - Tương tự Thanhmaihsk.edu.vn)**

---

## 📌 1. File Excel đã tạo:
- **Tên file:** `Tai_Lieu_Thu_Thap_Thong_Tin_Website_Dao_Tao.xlsx`
- **Đường dẫn lưu:** `d:\WEB\New folder\Tai_Lieu_Thu_Thap_Thong_Tin_Website_Dao_Tao.xlsx`

---

## 📋 2. Cấu trúc chi tiết 13 Tab (Worksheet) trong File Excel:

| STT | Tên Tab (Sheet) | Mục đích & Nội dung thu thập | Loại dữ liệu |
| :---: | :--- | :--- | :--- |
| **00** | `00_HUONG_DAN_CHUNG` | Hướng dẫn cách chia thư mục Google Drive, quy chuẩn kích thước ảnh, quy ước ký hiệu `(*)`. | Quy chuẩn & Hướng dẫn |
| **01** | `01_THUONG_HIEU_TOAN_TRANG` | Tên công ty, MST/ĐKKD, Hotline, Zalo OA, Email, Fanpage, Youtube, Tiktok, Logo, Favicon, SEO trang chủ. | Text + Link Logo/Media |
| **02** | `02_TRANG_CHU` | Slider Banner chính, 4 Lợi thế khác biệt (USP), Con số ấn tượng (Stats), Bảng vàng thành tích học viên, Video review. | Text + Link Banner Desktop/Mobile |
| **03** | `03_DANH_MUC_VA_KHOA_HOC` | Cây danh mục (Sơ cấp, HSK, Giao tiếp, Doanh nghiệp, Trẻ em, 1 kèm 1...) và Chi tiết từng khóa học (Chuẩn đầu ra, thời lượng, học phí, giáo trình, lộ trình). | Text + Bảng biểu + Link Ảnh |
| **04** | `04_LICH_KHAI_GIANG` | Bảng lịch khai giảng các lớp Online & Offline theo từng cơ sở, thứ trong tuần, khung giờ, học phí ưu đãi, tình trạng lớp. | Dữ liệu bảng (Table) |
| **05** | `05_DOI_NGU_GIANG_VIEN` | Hồ sơ giảng viên (Họ tên, học vị ThS/TS, trường tốt nghiệp, chứng chỉ HSK/CTCSOL, triết lý giảng dạy, video dạy mẫu). | Text + Link Ảnh chân dung + Video |
| **06** | `06_HE_THONG_CO_SO` | Danh sách cơ sở/chi nhánh toàn quốc (Hà Nội, HCM, các tỉnh...), địa chỉ chi tiết, hotline riêng, link Google Maps, ảnh cơ sở vật chất. | Text + Link Maps + Link Album ảnh |
| **07** | `07_DU_HOC_VA_HOC_BONG` | Chương trình du học & săn học bổng (CSC, CIS, Học bổng Tỉnh/Trường, 1 năm tiếng), điều kiện GPA/HSK, quyền lợi, quy trình làm hồ sơ. | Text + Link Banner |
| **08** | `08_THU_VIEN_TAI_LIEU` | Kho Ebook, 214 Bộ thủ, Đề thi thử New HSK/HSKK kèm audio, Sách Msutong, form thu thập Data Lead tải tài liệu. | Text + Link Mockup + Link File PDF/MP3 |
| **09** | `09_TIN_TUC_VA_BLOG` | Chuyên mục bài viết (Tin tức, Hội thảo Bác Nhã, Du học, Cẩm nang, Tuyển dụng) và danh sách bài viết mẫu chuẩn SEO. | Text + Link Thumbnail + Link Google Doc |
| **10** | `10_TRANG_GIOI_THIEU` | Lịch sử hình thành (Timeline), Tầm nhìn, Sứ mệnh, 4 Giá trị cốt lõi, Hội đồng cố vấn, Bằng khen/Giải thưởng pháp lý. | Text + Link Ảnh tư liệu |
| **11** | `11_FORM_DANG_KY_VA_LIEN_HE` | Cấu hình 5 loại form (Tư vấn khóa học, Test trình độ miễn phí, Tư vấn học bổng du học, Tải ebook, Hợp tác doanh nghiệp). | Text + Dropdown options + Email nhận Lead |
| **12** | `12_CHINH_SACH_VA_QUY_DINH` | Văn bản chính sách bắt buộc: Chính sách học phí/thanh toán, Chính sách bảo lưu/chuyển lớp, Chính sách giải quyết khiếu nại, Bảo mật thông tin. | Text + Link Văn bản Google Doc |

---

## ✉️ 3. Mẫu Email / Tin nhắn gửi Khách hàng điền thông tin:

```markdown
Kính gửi: Ban Giám Đốc & Phòng Marketing / Đào Tạo [Tên Khách Hàng / Trung Tâm]

Để tiến hành giai đoạn thiết kế giao diện (UI/UX) và lập trình website đào tạo tiếng Trung chuẩn chỉnh, tối ưu trải nghiệm học viên và chuyển đổi tuyển sinh cao nhất, Team phát triển đã nghiên cứu và xây dựng biểu mẫu thu thập tài liệu chi tiết đính kèm:

📁 File đính kèm: Tai_Lieu_Thu_Thap_Thong_Tin_Website_Dao_Tao.xlsx

📌 QUY TRÌNH CHUẨN BỊ TÀI LIỆU (3 BƯỚC ĐƠN GIẢN):
1. Tạo 1 Thư mục tổng trên Google Drive (VD: "DU_LIEU_WEBSITE_[TEN_TRUNG_TAM]"), bên trong tạo các thư mục con (01_Logo, 02_Banner, 03_KhoaHoc, 04_GiangVien, 05_CoSo, 06_HocVien, 07_TaiLieu, 08_TinTuc, 09_PhapLy).
2. Cài đặt quyền chia sẻ thư mục Drive là: "Bất kỳ ai có liên kết đều có thể xem".
3. Mở file Excel đính kèm và điền thông tin vào từng Tab:
   - Các dòng màu vàng nhạt (In nghiêng) là DỮ LIỆU MẪU thực tế (tham khảo từ Thanhmaihsk) để Quý trung tâm dễ hình dung.
   - Quý trung tâm vui lòng điền nội dung thực tế của mình vào các dòng trống bên dưới.
   - Các trường có dấu (*) là bắt buộc để lên giao diện demo hoàn chỉnh.

🎯 TIẾN ĐỘ ĐỀ XUẤT NỘP DỮ LIỆU:
- Giai đoạn 1 (Ưu tiên dựng khung): Tab 01 (Thương hiệu), Tab 02 (Trang chủ), Tab 03 (Khóa học cốt lõi).
- Giai đoạn 2 (Hoàn thiện chức năng): Tab 04 (Lịch khai giảng), Tab 05 (Giảng viên), Tab 06 (Hệ thống cơ sở), Tab 11 (Form tư vấn).
- Giai đoạn 3 (Nội dung bổ trợ): Tab 07 (Du học), Tab 08 (Thư viện), Tab 09 (Tin tức), Tab 10 (Giới thiệu), Tab 12 (Chính sách).

Trong quá trình điền thông tin, nếu có bất kỳ điểm nào cần hỗ trợ hoặc tư vấn cách tối ưu nội dung chuẩn SEO/Marketing giáo dục, Quý trung tâm vui lòng liên hệ Team qua Hotline/Zalo kỹ thuật: [Số điện thoại của bạn].

Trân trọng cảm ơn sự hợp tác của Quý khách!
```
