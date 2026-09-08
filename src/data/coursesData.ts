import { CourseCategory, Course, MsutongBook } from '../types';

export const courseCategories: CourseCategory[] = [
  { id: 'all', name: 'Tất cả khóa học', count: 9 },
  { id: 'co-ban', name: 'Tiếng Trung Cơ Bản (3.0)', count: 3 },
  { id: 'online', name: 'Khóa Học Trực Tuyến', count: 2 },
  { id: 'hsk-hskk', name: 'Luyện Thi HSK & HSKK', count: 3 },
  { id: 'giao-tiep', name: 'Tiếng Trung Giao Tiếp', count: 2 },
  { id: 'doanh-nghiep', name: 'Tiếng Trung Doanh Nghiệp', count: 1 },
  { id: 'tre-em', name: 'Tiếng Trung Trẻ Em', count: 1 },
  { id: 'vip-1-1', name: 'Học Kèm 1-1 / Theo Yêu Cầu', count: 1 },
  { id: 'thpt-d4', name: 'Luyện Thi THPTQG (Khối D4)', count: 1 }
];

export const coursesData: Course[] = [
  {
    id: 'hsk-3-tich-hop',
    category: 'co-ban',
    title: 'Khóa Tiếng Trung Cơ Bản Hán Ngữ Tích Hợp HSK 3 3.0',
    slug: 'khoa-tieng-trung-co-ban-han-ngu-tich-hop-hsk3',
    badge: 'Bán chạy nhất',
    format: 'Offline tại cơ sở & Online Google Meet',
    rating: 4.9,
    reviewsCount: 384,
    studentsCount: '15.000+',
    duration: '36 buổi (3 tháng)',
    schedule: '3 buổi / tuần (2h / buổi)',
    classSize: '12 - 15 học viên',
    originalPrice: 4500000,
    salePrice: 3600000,
    discountPercent: 20,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
    shortDesc: 'Đào tạo bài bản 4 kỹ năng nghe – nói – đọc – viết chuẩn New HSK 3 cấp 9 bậc cho người mới bắt đầu từ số 0.',
    targetAudience: [
      'Người mới bắt đầu học tiếng Trung từ con số 0.',
      'Người bị mất gốc tiếng Trung lâu năm muốn củng cố nền tảng.',
      'Học sinh, sinh viên, người đi làm cần học để phục vụ công việc và du lịch.',
      'Người có mục tiêu thi chứng chỉ HSK 3 & HSKK Sơ cấp sau 3 tháng.'
    ],
    outcomes: [
      'Nắm vững 100% bảng phiên âm Pinyin chuẩn giọng phổ thông Bắc Kinh.',
      'Nắm chắc 214 bộ thủ thông dụng và 8 quy tắc vàng viết chữ Hán đẹp.',
      'Tích lũy 600+ từ vựng và 50+ cấu trúc ngữ pháp giao tiếp trọng điểm.',
      'Tự tin giao tiếp trôi chảy các chủ đề đời sống: chào hỏi, mua sắm, gọi món, chỉ đường, giới thiệu bản thân.',
      'Cam kết chuẩn đầu ra đỗ chứng chỉ HSK 3 (240+ điểm) và HSKK Sơ cấp.'
    ],
    curriculum: [
      {
        phase: 'Giai đoạn 1: Khởi động phát âm & Nhập môn chữ Hán (Buổi 1 - 8)',
        topics: [
          'Bài 1 - 3: Bảng chữ cái ngữ âm Pinyin, thanh mẫu, vận mẫu, thanh điệu, quy tắc biến âm.',
          'Bài 4 - 6: 214 Bộ thủ thông dụng, quy tắc viết nét thuận chữ Hán.',
          'Bài 7 - 8: Giao tiếp chào hỏi, làm quen, các câu đàm thoại thường nhật trong lớp.'
        ]
      },
      {
        phase: 'Giai đoạn 2: Tích lũy từ vựng & Ngữ pháp nền tảng HSK 1 - 2 (Buổi 9 - 22)',
        topics: [
          'Chủ đề Mua sắm & Hỏi giá tiền (Số đếm, đơn vị tiền tệ, mặc cả).',
          'Chủ đề Ăn uống & Ẩm thực Trung Hoa (Gọi món, hương vị, thanh toán).',
          'Chủ đề Phương hướng & Đi lại (Hỏi đường, xe bus, tàu điện ngầm, taxi).',
          'Chủ đề Thời gian & Lịch trình (Xem giờ, hẹn gặp, các ngày trong tuần, thời tiết).'
        ]
      },
      {
        phase: 'Giai đoạn 3: Tăng tốc phản xạ đàm thoại & Luyện thi HSK 3 (Buổi 23 - 36)',
        topics: [
          'Chủ đề Công việc & Văn phòng (Phỏng vấn cơ bản, xin nghỉ phép, trao đổi email).',
          'Chủ đề Sở thích & Giải trí (Du lịch, âm nhạc, phim ảnh, thể thao).',
          'Kỹ năng Dịch câu xuôi - ngược Việt - Trung.',
          'Thi thử 3 bộ đề New HSK 3 chuẩn định dạng thi máy và thi giấy.'
        ]
      }
    ],
    textbook: 'Bộ Giáo trình Hán ngữ Msutong Sơ cấp (NXB ĐH Ngôn ngữ Bắc Kinh) độc quyền.',
    gifts: [
      'Tặng trọn bộ giáo trình Msutong Sơ cấp (Sách bài học + Sách bài tập).',
      'Tặng Vở tập viết chữ Hán 214 bộ thủ độc quyền Thanhmaihsk.',
      'Tặng tài khoản E-learning bổ trợ nghe nói không giới hạn 1 năm.',
      'Voucher ưu đãi 500.000đ khi đăng ký tiếp khóa HSK 4.'
    ]
  },
  {
    id: 'hsk-4-tich-hop',
    category: 'co-ban',
    title: 'Khóa Học Tiếng Trung Tích Hợp HSK 4 3.0 (Trung Cấp)',
    slug: 'khoa-hoc-tieng-trung-tich-hop-hsk4',
    badge: 'Ưu đãi 25%',
    format: 'Trực tiếp tại lớp & Trực tuyến',
    rating: 4.9,
    reviewsCount: 290,
    studentsCount: '11.000+',
    duration: '42 buổi (3.5 tháng)',
    schedule: '3 buổi / tuần (2h / buổi)',
    classSize: '12 - 15 học viên',
    originalPrice: 5800000,
    salePrice: 4640000,
    discountPercent: 20,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop',
    shortDesc: 'Nâng tầm 4 kỹ năng, làm chủ 1.200+ từ vựng, tự tin giao tiếp công việc và cam kết đỗ HSK 4 & HSKK Trung cấp.',
    targetAudience: [
      'Học viên đã hoàn thành khóa HSK 3 hoặc có vốn từ khoảng 600 từ.',
      'Người cần chứng chỉ HSK 4 để nộp hồ sơ xin việc tại các công ty Trung Quốc/Đài Loan.',
      'Học sinh ôn thi đại học khối D4, sinh viên xin học bổng du học đại học 1 năm tiếng.'
    ],
    outcomes: [
      'Vốn từ vựng tăng lên 1.200+ từ vựng trung cấp và 100+ cấu trúc ngữ pháp phức hợp.',
      'Đọc hiểu các bài báo ngắn, đoạn văn bình luận xã hội, viết bài luận 150-200 chữ.',
      'Tự tin phỏng vấn xin việc và trao đổi công việc chuyên nghiệp bằng tiếng Trung.',
      'Đạt chuẩn đầu ra HSK 4 điểm cao (240+/300) và HSKK Trung cấp 70+ điểm.'
    ],
    curriculum: [
      {
        phase: 'Module 1: Củng cố & Mở rộng từ vựng chuyên sâu (Buổi 1 - 14)',
        topics: ['Chủ đề Đời sống hiện đại & Công nghệ', 'Chủ đề Môi trường & Sức khỏe', 'Ngữ pháp liên từ phức hợp và bổ ngữ kết quả, trạng thái nâng cao.']
      },
      {
        phase: 'Module 2: Đàm thoại thương mại & Kỹ năng dịch thuật (Buổi 15 - 28)',
        topics: ['Đàm phán thương mại, ký kết hợp đồng', 'Dịch văn bản báo chí và tài liệu văn phòng.']
      },
      {
        phase: 'Module 3: Luyện đề chuyên sâu New HSK 4 & HSKK (Buổi 29 - 42)',
        topics: ['Chiến thuật làm bài Nghe hiểu tốc độ cao', 'Phương pháp viết đoạn văn 80 - 100 chữ nhìn tranh đặt câu', 'Thi thử 4 đề thi mô phỏng đề thi thật.']
      }
    ],
    textbook: 'Giáo trình Hán ngữ Msutong Trung cấp tập 1 & 2.',
    gifts: [
      'Tặng bộ đề luyện thi New HSK 4 có đáp án giải thích chi tiết.',
      'Khóa học bổ trợ phát âm chuẩn phản xạ cùng GV Bản xứ.'
    ]
  },
  {
    id: 'hsk-5-chuyen-sau',
    category: 'hsk-hskk',
    title: 'Khóa Luyện Thi New HSK 5 Chuyên Sâu 3 Cấp 9 Bậc',
    slug: 'khoa-luyen-thi-new-hsk5-chuyen-sau',
    badge: 'Cam kết đầu ra',
    format: 'Trực tiếp & Online',
    rating: 5.0,
    reviewsCount: 215,
    studentsCount: '8.000+',
    duration: '48 buổi (4 tháng)',
    schedule: '3 buổi / tuần',
    classSize: '10 - 12 học viên',
    originalPrice: 7200000,
    salePrice: 5900000,
    discountPercent: 18,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
    shortDesc: 'Chinh phục HSK 5 (250+ điểm) và HSKK Cao cấp để xin học bổng Thạc sĩ/Tiến sĩ CSC và làm việc chuyên môn cao.',
    targetAudience: [
      'Học viên đã có chứng chỉ HSK 4 hoặc trình độ tương đương.',
      'Người chuẩn bị apply học bổng Thạc sĩ Chính phủ Trung Quốc (CSC, CIS).',
      'Biên phiên dịch viên, quản lý công ty FDI có vốn đầu tư Trung Quốc.'
    ],
    outcomes: [
      'Làm chủ 2.500+ từ vựng học thuật và văn hóa Trung Hoa.',
      'Đọc hiểu báo chí, xem phim tài liệu không cần phụ đề tiếng Việt.',
      'Viết bài luận nghị luận xã hội 250 - 300 chữ logic, chuẩn văn phong Hán ngữ.',
      'Cam kết đạt HSK 5 (240+ điểm) và HSKK Cao cấp 70+ điểm.'
    ],
    curriculum: [
      {
        phase: 'Giai đoạn 1: Nạp 1.300 từ vựng nâng cao & Văn hóa (Buổi 1 - 16)',
        topics: ['Chủ đề Kinh tế, Xã hội, Giáo dục, Khoa học công nghệ.', 'Ngữ pháp văn viết (thành ngữ 4 chữ, hư từ, phó từ).']
      },
      {
        phase: 'Giai đoạn 2: Kỹ năng Viết luận & Đọc hiểu nhanh (Buổi 17 - 32)',
        topics: ['Kỹ thuật skimming & scanning tìm keywords trong bài đọc dài.', 'Cách phân tích tranh và viết đoạn văn nghị luận 80 chữ.']
      },
      {
        phase: 'Giai đoạn 3: Giải đề thi thực chiến HSK 5 & HSKK Cao cấp (Buổi 33 - 48)',
        topics: ['Luyện 6 bộ đề thi thử bám sát ngân hàng đề Hanban.', 'Chữa bài 1 kèm 1 cùng Tiến sĩ Ngôn ngữ.']
      }
    ],
    textbook: 'Giáo trình Msutong Cao cấp & Bộ đề thi HSK 5 độc quyền.',
    gifts: [
      'Hỗ trợ sửa bài luận xin học bổng du học miễn phí cùng chuyên gia.',
      'Tặng trọn bộ 100 bài luận văn mẫu HSK 5 đạt điểm tuyệt đối.'
    ]
  },
  {
    id: 'hskk-trung-cao-cap',
    category: 'hsk-hskk',
    title: 'Khóa Luyện Thi HSKK Trung Cấp – Cao Cấp Điểm 70+',
    slug: 'khoa-luyen-thi-hskk-trung-cao-cap',
    badge: 'Luyện nói cấp tốc',
    format: 'Online & Offline',
    rating: 4.8,
    reviewsCount: 160,
    studentsCount: '5.200+',
    duration: '20 buổi (1.5 tháng)',
    schedule: '2 buổi / tuần',
    classSize: '8 - 10 học viên',
    originalPrice: 3200000,
    salePrice: 2700000,
    discountPercent: 15,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop',
    shortDesc: 'Bí kíp nhắc lại câu, kể lại đoạn văn và thuyết trình chủ đề tự tin, đạt điểm HSKK 70+ chỉ sau 1 khóa.',
    targetAudience: [
      'Thí sinh sắp thi HSK 4, HSK 5, HSK 6 cần thi kèm HSKK để du học hoặc tốt nghiệp đại học.',
      'Người giao tiếp còn ấp úng, thiếu tự tin khi nói tiếng Trung trước đám đông.'
    ],
    outcomes: [
      'Chuẩn hóa ngữ điệu, phát âm trôi chảy như người bản xứ.',
      'Tăng tốc độ ghi nhớ và thuật lại đoạn văn 300 - 400 chữ trong 2 phút.',
      'Làm chủ 20+ chủ đề thuyết trình trọng điểm của kỳ thi HSKK Cao cấp.'
    ],
    curriculum: [
      {
        phase: 'Phần 1: Kỹ năng nhắc lại câu & Nghe kể lại đoạn văn (Buổi 1 - 8)',
        topics: ['Mẹo bắt từ khóa chính (Keywords)', 'Kỹ thuật ghi chú nhanh bằng pinyin và ký hiệu viết tắt.']
      },
      {
        phase: 'Phần 2: Kỹ năng đọc diễn cảm & Thuyết trình chủ đề (Buổi 9 - 16)',
        topics: ['Cấu trúc mở bài - thân bài - kết bài cho bài nói 2 phút.', 'Các mẫu câu đệm tăng độ lưu loát và kéo dài thời gian tư duy.']
      },
      {
        phase: 'Phần 3: Thi thử mô phỏng phòng thi thật (Buổi 17 - 20)',
        topics: ['Thu âm và giáo viên chấm chữa chi tiết từng lỗi phát âm.']
      }
    ],
    textbook: 'Tài liệu luyện thi HSKK chuyên sâu độc quyền Thanhmaihsk.',
    gifts: ['Tặng bộ 50 Audio bài nghe HSKK kèm lời giải thoại.']
  },
  {
    id: 'giao-tiep-cong-so',
    category: 'giao-tiep',
    title: 'Khóa Tiếng Trung Giao Tiếp Công Sở & Thương Mại Thực Chiến',
    slug: 'tieng-trung-giao-tiep-cong-so-thuong-mai',
    badge: 'Ứng dụng cao',
    format: 'Trực tiếp & Online',
    rating: 4.9,
    reviewsCount: 195,
    studentsCount: '7.800+',
    duration: '30 buổi (2.5 tháng)',
    schedule: '3 buổi / tuần',
    classSize: '10 - 12 học viên',
    originalPrice: 4800000,
    salePrice: 3900000,
    discountPercent: 19,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
    shortDesc: 'Học tiếng Trung đàm phán, viết email, tiếp đón đối tác và báo cáo công việc cho dân văn phòng, nhà máy FDI.',
    targetAudience: [
      'Nhân viên văn phòng, trợ lý, phiên dịch viên làm việc với sếp/đối tác Trung Quốc.',
      'Người kinh doanh, nhập hàng Taobao, 1688, đi đánh hàng trực tiếp tại Quảng Châu.'
    ],
    outcomes: [
      'Giao tiếp tự nhiên trong môi trường công sở: họp hành, báo cáo, phân công công việc.',
      'Soạn thảo văn bản, email thương mại, báo giá, hợp đồng chuẩn mực.',
      'Kỹ năng đàm phán giá cả, điều khoản thanh toán và xử lý đơn hàng phát sinh.'
    ],
    curriculum: [
      {
        phase: 'Giai đoạn 1: Giao tiếp văn phòng & Tiếp đón khách hàng (Buổi 1 - 10)',
        topics: ['Chào đón khách VIP, đặt tiệc, đưa đón sân bay', 'Văn hóa xã giao trong kinh doanh Trung Hoa.']
      },
      {
        phase: 'Giai đoạn 2: Đàm phán thương mại & Đặt hàng (Buổi 11 - 20)',
        topics: ['Thương lượng giá cả, chiết khấu, phương thức giao hàng CIF/FOB.', 'Chat trao đổi trực tiếp với nhà xưởng trên 1688/Wechat.']
      },
      {
        phase: 'Giai đoạn 3: Soạn thảo hợp đồng & Xử lý khiếu nại (Buổi 21 - 30)',
        topics: ['Điều khoản bảo hành, khiếu nại hàng lỗi, thanh toán LC/TT.']
      }
    ],
    textbook: 'Giáo trình Tiếng Trung Thương mại ứng dụng.',
    gifts: ['Tặng bộ 50 mẫu Email thương mại song ngữ Trung - Việt sẵn dùng.']
  },
  {
    id: 'dao-tao-doanh-nghiep',
    category: 'doanh-nghiep',
    title: 'Khóa Đào Tạo Tiếng Trung Doanh Nghiệp (May Đo Theo Yêu Cầu)',
    slug: 'dao-tao-tieng-trung-doanh-nghiep-hang-dau',
    badge: 'B2B Doanh nghiệp',
    format: 'Tại văn phòng doanh nghiệp hoặc Online',
    rating: 5.0,
    reviewsCount: 88,
    studentsCount: '150+ Tập đoàn',
    duration: 'Tùy biến theo hợp đồng (30 - 60 buổi)',
    schedule: 'Linh hoạt theo ca làm việc',
    classSize: '15 - 30 học viên',
    originalPrice: 15000000,
    salePrice: 12000000,
    discountPercent: 20,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
    shortDesc: 'Chương trình đào tạo tiếng Trung chuyên biệt theo đặc thù ngành nghề: Sản xuất, May mặc, Điện tử, Xây dựng, Du lịch...',
    targetAudience: [
      'Các tập đoàn, doanh nghiệp có vốn đầu tư FDI Trung Quốc, Đài Loan, Hồng Kông.',
      'Doanh nghiệp Việt Nam mở rộng thị trường xuất nhập khẩu sang Trung Quốc.'
    ],
    outcomes: [
      'Nâng cao 100% năng lực giao tiếp chuyên ngành cho cán bộ nhân viên.',
      'Giảm thiểu tối đa chi phí thuê phiên dịch ngoài.',
      'Cải thiện hiệu suất trao đổi công việc giữa nhân sự Việt và chuyên gia Trung Quốc.'
    ],
    curriculum: [
      {
        phase: 'Khảo sát nhu cầu & Thiết kế giáo trình độc quyền riêng cho Doanh nghiệp',
        topics: ['Xây dựng bộ từ điển thuật ngữ nội bộ của doanh nghiệp.', 'Tập trung vào 80% thời lượng thực hành mô phỏng tình huống công việc thực tế.']
      }
    ],
    textbook: 'Giáo trình may đo độc quyền theo ngành nghề của Doanh nghiệp.',
    gifts: ['Báo cáo tiến độ và bảng điểm chuyên cần hàng tháng gửi Ban Lãnh đạo.']
  },
  {
    id: 'tieng-trung-tre-em',
    category: 'tre-em',
    title: 'Khóa Học Tiếng Trung Trẻ Em Vui Học (8 – 14 Tuổi)',
    slug: 'tieng-trung-tre-em-8-14-tuoi',
    badge: 'Phương pháp trực quan',
    format: 'Trực tiếp tại cơ sở',
    rating: 4.9,
    reviewsCount: 142,
    studentsCount: '3.600+',
    duration: '32 buổi (4 tháng)',
    schedule: '2 buổi / tuần (Cuối tuần)',
    classSize: '8 - 12 học viên',
    originalPrice: 4200000,
    salePrice: 3500000,
    discountPercent: 16,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
    shortDesc: 'Phương pháp học qua trò chơi, bài hát và hoạt hình sinh động, giúp bé yêu thích tiếng Trung tự nhiên và phát âm chuẩn ngay từ đầu.',
    targetAudience: [
      'Học sinh từ 8 đến 14 tuổi muốn bắt đầu làm quen với ngoại ngữ thứ 2.',
      'Trẻ em chuẩn bị theo học tại các trường quốc tế hoặc song ngữ.'
    ],
    outcomes: [
      'Bé phát âm chuẩn ngữ điệu pinyin tự nhiên.',
      'Giao tiếp các câu chuyện ngắn về gia đình, trường học, bạn bè, động vật, màu sắc.',
      'Hình thành phản xạ tư duy song ngữ và kích thích não bộ phát triển.'
    ],
    curriculum: [
      {
        phase: 'Chương 1: Thế giới quanh em (Buổi 1 - 10)',
        topics: ['Chữ cái vui nhộn, Số đếm sắc màu, Gia đình thân yêu.']
      },
      {
        phase: 'Chương 2: Động vật & Trường học (Buổi 11 - 20)',
        topics: ['Vườn bách thú, Đồ dùng học tập, Bài hát thiếu nhi tiếng Trung.']
      },
      {
        phase: 'Chương 3: Bé tự tin giao tiếp (Buổi 21 - 32)',
        topics: ['Đóng kịch hoạt cảnh, Kể chuyện tranh, Thuyết trình bé làm họa sĩ.']
      }
    ],
    textbook: 'Bộ Giáo trình Tiếng Trung Thiếu Nhi Easy Steps to Chinese for Kids.',
    gifts: ['Bộ Flashcard từ vựng hình ảnh sắc màu + Sổ dán sticker khen thưởng.']
  },
  {
    id: 'khoa-hoc-vip-1-1',
    category: 'vip-1-1',
    title: 'Khóa Học VIP 1 Kèm 1 / Kèm Nhóm Theo Yêu Cầu Riêng',
    slug: 'khoa-hoc-tieng-trung-vip-1-1-theo-yeu-cau',
    badge: 'Cá nhân hóa 100%',
    format: 'Trực tiếp hoặc Online Google Meet',
    rating: 5.0,
    reviewsCount: 95,
    studentsCount: '1.800+',
    duration: 'Linh hoạt (Gói 20 - 40 - 60 buổi)',
    schedule: 'Học viên tự chọn lịch học',
    classSize: '1 thầy kèm 1 trò (hoặc nhóm 2-3 bạn)',
    originalPrice: 400000,
    salePrice: 320000,
    discountPercent: 20,
    priceUnit: 'VNĐ / buổi',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
    shortDesc: 'Lộ trình thiết kế may đo 100% theo mục tiêu cá nhân: Cấp tốc phỏng vấn visa, định cư, kết hôn, luyện đề HSK 6 cấp tốc trong 1 tháng.',
    targetAudience: [
      'Người bận rộn không thể theo lịch lớp cố định.',
      'Người cần học cấp tốc để đi du học, định cư, kết hôn trong thời gian ngắn.',
      'Học viên muốn học sâu vào chuyên ngành đặc thù.'
    ],
    outcomes: [
      'Tiến độ học nhanh gấp 3 lần so với lớp đại trà.',
      'Được giáo viên kèm cặp chỉnh âm và chữa bài 100% thời lượng buổi học.',
      'Đổi lịch học linh hoạt trước 12h không bị trừ buổi.'
    ],
    curriculum: [
      {
        phase: 'Thiết kế riêng theo bài kiểm tra đầu vào và nguyện vọng học viên',
        topics: ['Linh hoạt từ Giao tiếp cơ bản đến HSK 6 chuyên sâu và Biên dịch nâng cao.']
      }
    ],
    textbook: 'Tài liệu cá nhân hóa do Giảng viên cao cấp biên soạn riêng.',
    gifts: ['Tặng tài khoản E-learning và ghi hình toàn bộ buổi học xem lại bất kỳ lúc nào.']
  },
  {
    id: 'luyen-thi-thpt-d4',
    category: 'thpt-d4',
    title: 'Khóa Luyện Thi Đại Học Tiếng Trung Tốt Nghiệp THPT (Khối D4)',
    slug: 'on-thi-dai-hoc-mon-tieng-trung-khoi-d4',
    badge: 'Chinh phục 9+ Đại học',
    format: 'Offline & Online',
    rating: 4.9,
    reviewsCount: 178,
    studentsCount: '4.500+',
    duration: '45 buổi (4 tháng)',
    schedule: '3 buổi / tuần',
    classSize: '12 - 15 học sinh',
    originalPrice: 5500000,
    salePrice: 4400000,
    discountPercent: 20,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop',
    shortDesc: 'Tổng ôn toàn bộ kiến thức ngữ pháp, từ vựng và luyện 40+ đề thi thử THPT Quốc Gia bám sát ma trận đề Bộ GD&ĐT.',
    targetAudience: [
      'Học sinh lớp 10, 11, 12 chọn môn tiếng Trung để xét tuyển đại học khối D4.',
      'Học sinh muốn dùng chứng chỉ HSK để miễn thi tốt nghiệp THPT và xét tuyển thẳng Đại học.'
    ],
    outcomes: [
      'Nắm chắc 100% dạng bài ngữ pháp, câu hỏi bẫy thường gặp trong đề thi.',
      'Chinh phục điểm số 9.0+ môn tiếng Trung kỳ thi tốt nghiệp THPTQG.',
      'Xét tuyển thẳng vào các trường ĐH Ngoại Thương, Ngoại Giao, ĐHQGHN, ĐH Hà Nội.'
    ],
    curriculum: [
      {
        phase: 'Chặng 1: Tổng ôn 18 chuyên đề Ngữ pháp trọng điểm (Buổi 1 - 18)',
        topics: ['Câu chữ Ba, Bị động, Bổ ngữ kết quả/trạng thái/khả năng, Thành ngữ thường gặp.']
      },
      {
        phase: 'Chặng 2: Luyện kỹ năng Đọc hiểu & Tìm lỗi sai (Buổi 19 - 32)',
        topics: ['Mẹo giải nhanh câu tìm lỗi sai ngữ pháp, điền từ vào đoạn văn.']
      },
      {
        phase: 'Chặng 3: Luyện 30 đề thi thử chuẩn cấu trúc Bộ GD&ĐT (Buổi 33 - 45)',
        topics: ['Rèn tâm lý phòng thi, căn chỉnh thời gian làm bài chính xác.']
      }
    ],
    textbook: 'Bộ sách Ôn Luyện Thi THPTQG Môn Tiếng Trung Khối D4 độc quyền.',
    gifts: ['Tặng cuốn Tuyển tập 30 Đề thi thử đại học môn tiếng Trung có đáp án chi tiết.']
  }
];

export const msutongBooks: MsutongBook[] = [
  {
    id: 'ms-01',
    title: 'Bộ Giáo Trình Hán Ngữ Msutong Sơ Cấp (Tập 1 + Tập 2)',
    category: 'Giáo trình tự học',
    price: 350000,
    salePrice: 280000,
    publisher: 'NXB Đại Học Ngôn Ngữ Bắc Kinh',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    desc: 'Bộ giáo trình tiếng Trung hiện đại nhất, tích hợp audio nghe chuẩn bản xứ và app quét mã QR luyện nghe nói.'
  },
  {
    id: 'ms-02',
    title: 'Bộ Giáo Trình Hán Ngữ Msutong Trung Cấp (Tập 1 + Tập 2)',
    category: 'Giáo trình trung cấp',
    price: 420000,
    salePrice: 336000,
    publisher: 'NXB Đại Học Ngôn Ngữ Bắc Kinh',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop',
    desc: 'Nâng cao vốn từ vựng và ngữ pháp HSK 4 - HSK 5 có kèm bài tập thực hành dịch thuật.'
  },
  {
    id: 'ms-03',
    title: 'Combo Bộ Sách Ôn Luyện Thi THPT Quốc Gia Môn Tiếng Trung Khối D4',
    category: 'Luyện thi Đại học',
    price: 320000,
    salePrice: 250000,
    publisher: 'Thanhmaihsk & Viện Bác Nhã',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop',
    desc: 'Tuyển tập đề thi thử có lời giải chi tiết, phân tích ma trận bẫy điểm 9+ môn tiếng Trung.'
  }
];
