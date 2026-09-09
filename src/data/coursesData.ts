import { CourseCategory, Course, MsutongBook } from '../types';
import course01 from '../asset/courses/course01.png';
import course02 from '../asset/courses/course02.png';
import course03 from '../asset/courses/course03.png';

export const courseCategories: CourseCategory[] = [
  { id: 'all', name: 'Tất cả khóa học', count: 7 },
  { id: 'hsk', name: 'Lộ trình HSK (HSK 1 - 5)', count: 5 },
  { id: 'giao-tiep', name: 'Tiếng Trung Giao Tiếp', count: 1 },
  { id: 'tre-em', name: 'Tiếng Trung Trẻ Em', count: 1 }
];

export const coursesData: Course[] = [
  // 1. HSK 1
  {
    id: 'hsk-1',
    category: 'hsk',
    title: 'HSK 1 – Nền Tảng Tiếng Trung',
    slug: 'hsk-1-nen-tang-tieng-trung',
    badge: 'Khởi đầu vững chắc',
    classCode: 'HSK 1',
    totalSessions: '20 buổi (1,5 giờ / buổi)',
    sessionDuration: '1,5 giờ / buổi',
    format: 'Trực tiếp tại cơ sở Bắc Ninh & Online tương tác',
    rating: 5.0,
    reviewsCount: 340,
    studentsCount: '12.000+',
    duration: '20 buổi (1,5h / buổi)',
    schedule: '3 buổi / tuần (1,5h / buổi)',
    classSize: '10 - 14 học viên',
    originalPrice: 2800000,
    salePrice: 2200000,
    image: course01,
    thumbnail: course01,
    shortDesc: 'Làm quen tiếng Trung, phát âm, từ vựng và mẫu câu giao tiếp cơ bản cho người mới bắt đầu từ con số 0.',
    objectives: [
      'Làm quen với tiếng Trung và phương pháp học bài bản.',
      'Nắm chắc Pinyin, 5 thanh điệu và quy tắc viết chữ Hán.',
      'Hình thành nền tảng từ vựng và cấu trúc câu cơ bản.',
      'Có thể nghe hiểu và sử dụng những câu giao tiếp đơn giản.'
    ],
    contentTopics: [
      'Chào hỏi, giới thiệu bản thân.',
      'Gia đình, trường học, nghề nghiệp.',
      'Số đếm, ngày tháng, thời gian.',
      'Mua sắm, ăn uống, sở thích.',
      'Địa điểm, phương tiện đi lại.',
      'Các mẫu câu hỏi – đáp thông dụng.'
    ],
    skills: {
      listen: 'Hiểu câu và đoạn hội thoại ngắn trong các tình huống quen thuộc.',
      speak: 'Giới thiệu bản thân và giao tiếp cơ bản trôi chảy.',
      read: 'Đọc được câu và đoạn văn đơn giản có kèm pinyin và chữ Hán cơ bản.',
      write: 'Viết chữ Hán cơ bản đúng nét thuận và đặt câu đơn giản.'
    },
    outcomes: [
      'Học viên có thể tự giới thiệu, hỏi đáp thông tin cá nhân và giao tiếp trong những tình huống quen thuộc.',
      'Tạo nền tảng vững chắc để bước lên HSK 2.',
      'Nắm chắc 150+ từ vựng và phát âm chuẩn bản xứ.'
    ],
    curriculum: [
      {
        phase: 'Chặng 1: Làm quen ngữ âm Pinyin & Bút thuận chữ Hán (Buổi 1 - 6)',
        topics: ['Thanh mẫu, vận mẫu, thanh điệu, quy tắc biến âm pinyin', '8 nét cơ bản và các bộ thủ chữ Hán thông dụng']
      },
      {
        phase: 'Chặng 2: Từ vựng & Đàm thoại chủ đề căn bản (Buổi 7 - 14)',
        topics: ['Chào hỏi, gia đình, trường học, nghề nghiệp, số đếm, thời gian', 'Mua sắm, ăn uống, sở thích, hỏi đường và địa điểm']
      },
      {
        phase: 'Chặng 3: Tổng hợp 4 kỹ năng & Đánh giá năng lực HSK 1 (Buổi 15 - 20)',
        topics: ['Luyện nghe nói phản xạ thực chiến', 'Thi thử bài kiểm tra năng lực HSK 1 chuẩn quốc tế']
      }
    ],
    contentPhasesSummary: [
      '6 buổi nhập môn ngữ âm Pinyin & nét bút chữ Hán',
      '8 buổi từ vựng và đàm thoại chủ đề đời sống căn bản',
      '6 buổi thực hành 4 kỹ năng và đánh giá năng lực HSK 1'
    ],
    scholarshipText: 'Tặng trọn bộ giáo trình & tài liệu học tập khi đăng ký sớm',
    textbook: 'Giáo trình chuẩn MSUTONG Sơ cấp (NXB ĐH Ngôn ngữ Bắc Kinh).',
    gifts: [
      'Tặng trọn bộ giáo trình MSUTONG và vở tập viết chữ Hán độc quyền Green Ocean.',
      'Tặng tài khoản luyện nghe nói E-learning bổ trợ không giới hạn.',
      'Voucher ưu đãi 300.000đ khi đăng ký tiếp khóa HSK 2.'
    ],
    targetAudience: [
      'Người mới bắt đầu học tiếng Trung từ con số 0.',
      'Người muốn học phát âm chuẩn ngay từ đầu.',
      'Học sinh, sinh viên, người đi làm cần học ngoại ngữ thứ hai.'
    ]
  },

  // 2. HSK 2
  {
    id: 'hsk-2',
    category: 'hsk',
    title: 'HSK 2 – Củng Cố Nền Tảng',
    slug: 'hsk-2-cung-co-nen-tang',
    badge: 'Nâng cao phản xạ',
    classCode: 'HSK 2',
    totalSessions: '20 buổi (1,5 giờ / buổi)',
    sessionDuration: '1,5 giờ / buổi',
    format: 'Trực tiếp tại cơ sở Bắc Ninh & Online tương tác',
    rating: 4.9,
    reviewsCount: 280,
    studentsCount: '9.500+',
    duration: '20 buổi (1,5h / buổi)',
    schedule: '3 buổi / tuần (1,5h / buổi)',
    classSize: '10 - 14 học viên',
    originalPrice: 3200000,
    salePrice: 2500000,
    image: course02,
    thumbnail: course02,
    shortDesc: 'Mở rộng vốn từ, nắm chắc ngữ pháp và nâng cao khả năng giao tiếp trong các tình huống quen thuộc.',
    objectives: [
      'Củng cố kiến thức HSK 1 và mở rộng vốn từ vựng.',
      'Nâng cao khả năng nghe hiểu và phản xạ giao tiếp.',
      'Biết sử dụng các cấu trúc câu phổ biến trong đời sống.',
      'Có thể diễn đạt nhu cầu, suy nghĩ và hoạt động hàng ngày.'
    ],
    contentTopics: [
      'Sinh hoạt và thói quen hàng ngày.',
      'Học tập và công việc cơ bản.',
      'Sức khỏe, thời tiết.',
      'Du lịch và phương tiện giao thông.',
      'Mua sắm và giao tiếp nơi công cộng.',
      'Kế hoạch, thời gian và trải nghiệm.',
      'Các cấu trúc ngữ pháp HSK 2 quan trọng.'
    ],
    skills: {
      listen: 'Nắm được nội dung chính của hội thoại quen thuộc với tốc độ tự nhiên.',
      speak: 'Phản xạ và trả lời câu hỏi trong tình huống thực tế trôi chảy.',
      read: 'Đọc hiểu các đoạn văn ngắn và mẩu tin hàng ngày.',
      write: 'Viết câu và đoạn văn đơn giản diễn đạt ý muốn.'
    },
    outcomes: [
      'Học viên có thể giao tiếp cơ bản trong học tập, công việc và sinh hoạt hàng ngày.',
      'Đồng thời có nền tảng vững vàng để tiếp tục HSK 3.',
      'Làm chủ 300+ từ vựng và các cấu trúc ngữ pháp thông dụng.'
    ],
    curriculum: [
      {
        phase: 'Chặng 1: Mở rộng từ vựng & Sinh hoạt thường nhật (Buổi 1 - 7)',
        topics: ['Thói quen hàng ngày, học tập, công việc, sức khỏe và thời tiết']
      },
      {
        phase: 'Chặng 2: Giao tiếp xã hội & Du lịch (Buổi 8 - 14)',
        topics: ['Phương tiện giao thông, mua sắm nơi công cộng, kế hoạch và trải nghiệm']
      },
      {
        phase: 'Chặng 3: Ngữ pháp trọng điểm & Luyện đề HSK 2 (Buổi 15 - 20)',
        topics: ['Hệ thống ngữ pháp so sánh, bổ ngữ cơ bản và luyện thi HSK 2']
      }
    ],
    contentPhasesSummary: [
      '7 buổi mở rộng từ vựng sinh hoạt thường nhật',
      '7 buổi giao tiếp xã hội, du lịch và công cộng',
      '6 buổi ngữ pháp trọng điểm và luyện đề HSK 2'
    ],
    scholarshipText: 'Tặng học bổng 500.000đ khi đăng ký theo nhóm 2 người',
    textbook: 'Giáo trình chuẩn MSUTONG Sơ cấp 2 (NXB ĐH Ngôn ngữ Bắc Kinh).',
    gifts: [
      'Tặng bộ bài tập ngữ pháp và audio nghe độc quyền Green Ocean.',
      'Tài khoản ôn tập online 24/7 có trợ giảng hỗ trợ.'
    ],
    targetAudience: [
      'Học viên đã hoàn thành HSK 1 hoặc tương đương.',
      'Người đã biết phát âm và từ vựng cơ bản muốn củng cố chắc chắn.'
    ]
  },

  // 3. HSK 3
  {
    id: 'hsk-3',
    category: 'hsk',
    title: 'HSK 3 – Phát Triển Toàn Diện',
    slug: 'hsk-3-phat-trien-toan-dien',
    badge: 'Khóa học cốt lõi',
    classCode: 'HSK 3',
    totalSessions: '35 buổi (1,5 giờ / buổi)',
    sessionDuration: '1,5 giờ / buổi',
    format: 'Trực tiếp tại cơ sở Bắc Ninh & Online tương tác',
    rating: 4.9,
    reviewsCount: 420,
    studentsCount: '15.000+',
    duration: '35 buổi (1,5h / buổi)',
    schedule: '3 buổi / tuần (1,5h / buổi)',
    classSize: '10 - 14 học viên',
    originalPrice: 4800000,
    salePrice: 3800000,
    image: course03,
    thumbnail: course03,
    shortDesc: 'Tăng cường từ vựng, ngữ pháp, nghe – nói – đọc – viết; có thể giao tiếp và xử lý các tình huống thông dụng.',
    objectives: [
      'Mở rộng đáng kể vốn từ và hệ thống ngữ pháp.',
      'Phát triển đồng đều Nghe – Nói – Đọc – Viết.',
      'Tăng khả năng phản xạ và diễn đạt bằng tiếng Trung.',
      'Có thể trình bày ý kiến và kể lại sự việc bằng tiếng Trung.',
      'Bắt đầu sử dụng tiếng Trung độc lập trong nhiều tình huống.'
    ],
    contentTopics: [
      'Gia đình và các mối quan hệ.',
      'Học tập và công việc.',
      'Cuộc sống, sở thích và thói quen.',
      'Du lịch, văn hóa và xã hội.',
      'Kinh nghiệm, kế hoạch và cảm xúc.',
      'Các chủ đề giao tiếp thực tế.',
      'Ngữ pháp trọng tâm HSK 3.',
      'Luyện đọc và xử lý đoạn văn dài hơn.'
    ],
    skills: {
      listen: 'Hiểu hội thoại và nội dung có tốc độ vừa phải trong đa dạng tình huống.',
      speak: 'Diễn đạt ý kiến, kể chuyện và mô tả sự việc mạch lạc.',
      read: 'Đọc hiểu các đoạn văn có độ dài và độ khó cao hơn.',
      write: 'Viết câu, đoạn văn và trình bày ý tưởng có logic rõ ràng.'
    },
    outcomes: [
      'Học viên có thể sử dụng tiếng Trung tương đối độc lập, giao tiếp trong nhiều tình huống thực tế.',
      'Sẵn sàng bước vào chương trình HSK 4.',
      'Đạt chuẩn đầu ra đỗ chứng chỉ HSK 3 điểm cao và HSKK Sơ cấp.'
    ],
    curriculum: [
      {
        phase: 'Chặng 1: Xây dựng nền tảng từ vựng trung cấp & Xã hội (Buổi 1 - 12)',
        topics: ['Mối quan hệ xã hội, thói quen và văn hóa đời sống Trung Hoa']
      },
      {
        phase: 'Chặng 2: Giao tiếp công việc & Trình bày ý kiến (Buổi 13 - 24)',
        topics: ['Trao đổi công việc, bày tỏ kế hoạch, cảm xúc và phản biện']
      },
      {
        phase: 'Chặng 3: Đọc hiểu văn bản dài & Luyện thi New HSK 3 (Buổi 25 - 35)',
        topics: ['Kỹ năng đọc nhanh, viết đoạn văn và giải đề thi HSK 3 chuẩn định dạng']
      }
    ],
    contentPhasesSummary: [
      '12 buổi xây dựng từ vựng trung cấp & chủ đề văn hóa xã hội',
      '12 buổi giao tiếp công việc và diễn đạt quan điểm độc lập',
      '11 buổi đọc hiểu đoạn văn dài và luyện đề thi HSK 3 chuẩn'
    ],
    scholarshipText: 'Tặng học bổng 1.200.000đ khi đăng ký khóa Offline HSK 3',
    textbook: 'Giáo trình MSUTONG Sơ cấp & Trung cấp (NXB ĐH Ngôn ngữ Bắc Kinh).',
    gifts: [
      'Tặng trọn bộ sách bài học + bài tập MSUTONG bản in cao cấp.',
      'Tặng bộ đề luyện thi New HSK 3 có đáp án chi tiết.',
      'Tặng khóa bổ trợ phát âm cùng giáo viên bản ngữ.'
    ],
    targetAudience: [
      'Người đã hoàn thành HSK 2 hoặc tương đương.',
      'Người cần tiếng Trung để đi du lịch, xin việc hoặc du học.',
      'Học sinh ôn thi khối D4 hoặc thi lấy chứng chỉ HSK 3.'
    ]
  },

  // 4. HSK 4
  {
    id: 'hsk-4',
    category: 'hsk',
    title: 'HSK 4 – Nâng Cao Năng Lực Sử Dụng Tiếng Trung',
    slug: 'hsk-4-nang-cao-nang-luc',
    badge: 'Trung cấp chuyên sâu',
    classCode: 'HSK 4',
    totalSessions: '45 buổi (1,5 giờ / buổi)',
    sessionDuration: '1,5 giờ / buổi',
    format: 'Trực tiếp tại cơ sở Bắc Ninh & Online tương tác',
    rating: 4.9,
    reviewsCount: 310,
    studentsCount: '11.000+',
    duration: '45 buổi (1,5h / buổi)',
    schedule: '3 buổi / tuần (1,5h / buổi)',
    classSize: '10 - 12 học viên',
    originalPrice: 5800000,
    salePrice: 4600000,
    image: course01,
    thumbnail: course01,
    shortDesc: 'Phát triển khả năng đọc hiểu, nghe hiểu, diễn đạt và giao tiếp trong học tập, công việc và đời sống.',
    objectives: [
      'Hệ thống hóa và nâng cao toàn bộ kiến thức đã học.',
      'Mở rộng vốn từ và nâng cao khả năng sử dụng ngữ pháp.',
      'Giao tiếp tự nhiên với nhiều chủ đề khác nhau.',
      'Nâng cao khả năng đọc hiểu và diễn đạt bằng tiếng Trung.',
      'Làm quen với cấu trúc đề thi và phương pháp làm bài HSK 4.',
      'Rèn luyện kỹ năng quản lý thời gian và xử lý từng dạng câu hỏi.'
    ],
    contentTopics: [
      'Các chủ đề giao tiếp và học thuật ở trình độ trung cấp.',
      'Từ vựng và cụm từ thường gặp trong HSK 4.',
      'Hệ thống ngữ pháp trọng tâm.',
      'Luyện nghe hội thoại và bài nghe dài.',
      'Luyện đọc đoạn văn và bài đọc nâng cao.',
      'Luyện viết câu và đoạn văn.',
      'Luyện đề HSK theo từng kỹ năng.',
      'Ôn tập và kiểm tra định kỳ.'
    ],
    skills: {
      listen: 'Nắm bắt ý chính và thông tin quan trọng trong bài nghe dài.',
      speak: 'Diễn đạt tương đối tự nhiên, rõ ràng và có logic phong phú.',
      read: 'Đọc hiểu các văn bản ở trình độ trung cấp và báo chí ngắn.',
      write: 'Có khả năng viết và trình bày nội dung bài luận 100 chữ bằng tiếng Trung.'
    },
    outcomes: [
      'Học viên tự tin giao tiếp ở trình độ trung cấp, sử dụng tiếng Trung trong học tập và công việc.',
      'Được trang bị kiến thức và kỹ năng cần thiết để chinh phục kỳ thi HSK 4.',
      'Đủ điều kiện apply học bổng du học đại học tại các trường hàng đầu Trung Quốc.'
    ],
    curriculum: [
      {
        phase: 'Chặng 1: Nạp từ vựng trung cấp & Ngữ pháp liên từ phức hợp (Buổi 1 - 15)',
        topics: ['Chủ đề công việc, xã hội, công nghệ và đời sống hiện đại']
      },
      {
        phase: 'Chặng 2: Kỹ năng đọc hiểu & Kỹ thuật viết đoạn văn nhìn tranh (Buổi 16 - 30)',
        topics: ['Phương pháp skimming & scanning văn bản dài, viết đoạn văn 80 - 100 chữ']
      },
      {
        phase: 'Chặng 3: Luyện đề thực chiến New HSK 4 & HSKK Trung cấp (Buổi 31 - 45)',
        topics: ['Thi thử đề thi thật và chữa lỗi chi tiết từng kỹ năng']
      }
    ],
    contentPhasesSummary: [
      '15 buổi nạp từ vựng trung cấp & ngữ pháp liên từ phức hợp',
      '15 buổi rèn luyện kỹ năng đọc hiểu nhanh & viết đoạn văn nhìn tranh',
      '15 buổi luyện đề thi thử thực chiến New HSK 4 & HSKK Trung cấp'
    ],
    scholarshipText: 'Tặng học bổng 1.500.000đ khi đăng ký sớm khóa Offline HSK 4',
    textbook: 'Giáo trình MSUTONG Trung cấp (NXB ĐH Ngôn ngữ Bắc Kinh).',
    gifts: [
      'Tặng bộ đề thi New HSK 4 có lời giải thoại audio chi tiết.',
      'Tặng khóa luyện thi HSKK Trung cấp cấp tốc.'
    ],
    targetAudience: [
      'Người đã có trình độ HSK 3 hoặc tương đương.',
      'Người cần chứng chỉ HSK 4 để xin việc tại công ty FDI hoặc du học Đại học.',
      'Học sinh ôn thi THPT Quốc gia khối D4.'
    ]
  },

  // 5. HSK 5
  {
    id: 'hsk-5',
    category: 'hsk',
    title: 'HSK 5 – Thành Thạo Và Chuyên Sâu',
    slug: 'hsk-5-thanh-thao-chuyen-sau',
    badge: 'Cao cấp học thuật',
    classCode: 'HSK 5',
    totalSessions: '80 buổi (1,5 giờ / buổi)',
    sessionDuration: '1,5 giờ / buổi',
    format: 'Trực tiếp tại cơ sở Bắc Ninh & Online tương tác',
    rating: 5.0,
    reviewsCount: 225,
    studentsCount: '8.000+',
    duration: '80 buổi (1,5h / buổi)',
    schedule: '3 buổi / tuần (1,5h / buổi)',
    classSize: '8 - 12 học viên',
    originalPrice: 8500000,
    salePrice: 6900000,
    image: course02,
    thumbnail: course02,
    shortDesc: 'Nâng cao khả năng sử dụng tiếng Trung trong các tình huống phức tạp, học tập và môi trường chuyên nghiệp.',
    objectives: [
      'Hệ thống hóa và nâng cao toàn bộ kiến thức đã học.',
      'Mở rộng vốn từ (2.500+ từ) và nâng cao khả năng sử dụng ngữ pháp.',
      'Giao tiếp tự nhiên với nhiều chủ đề học thuật và xã hội.',
      'Nâng cao khả năng đọc hiểu và diễn đạt bằng tiếng Trung.',
      'Làm quen với cấu trúc đề thi và phương pháp làm bài HSK 5.',
      'Rèn luyện kỹ năng quản lý thời gian và xử lý từng dạng câu hỏi.'
    ],
    contentTopics: [
      'Các chủ đề giao tiếp và học thuật ở trình độ trung cấp & cao cấp.',
      'Từ vựng và cụm từ thường gặp trong HSK 5.',
      'Hệ thống ngữ pháp trọng tâm và văn phong học thuật.',
      'Luyện nghe hội thoại và bài nghe dài, phóng sự.',
      'Luyện đọc đoạn văn và bài đọc nâng cao, báo chí.',
      'Luyện viết câu và đoạn văn nghị luận 250 - 300 chữ.',
      'Luyện đề HSK theo từng kỹ năng.',
      'Ôn tập và kiểm tra định kỳ.'
    ],
    skills: {
      listen: 'Nắm bắt ý chính và thông tin quan trọng trong bài nghe dài, tin tức chuyên ngành.',
      speak: 'Diễn đạt tự nhiên, rõ ràng, có logic và chiều sâu tư duy.',
      read: 'Đọc hiểu các văn bản học thuật và báo chí ở trình độ cao cấp.',
      write: 'Có khả năng viết và trình bày bài luận chuyên sâu bằng tiếng Trung.'
    },
    outcomes: [
      'Học viên tự tin giao tiếp ở trình độ cao cấp, sử dụng tiếng Trung trong học tập và công việc chuyên môn.',
      'Được trang bị kiến thức và kỹ năng cần thiết để chinh phục kỳ thi HSK 5 điểm cao.',
      'Đủ điều kiện apply học bổng Thạc sĩ/Tiến sĩ CSC và CIS tại Trung Quốc.'
    ],
    curriculum: [
      {
        phase: 'Chặng 1: Nạp 1.300 từ vựng nâng cao, thành ngữ & hư từ (Buổi 1 - 28)',
        topics: ['Chủ đề kinh tế, văn hóa, giáo dục, môi trường và khoa học kỹ thuật']
      },
      {
        phase: 'Chặng 2: Kỹ năng đọc nhanh văn bản dài & Viết luận 300 chữ (Buổi 29 - 56)',
        topics: ['Kỹ thuật viết bài luận mạch lạc, phân tích tranh và phản biện tư duy']
      },
      {
        phase: 'Chặng 3: Luyện giải ngân hàng đề thi thực chiến HSK 5 & HSKK Cao cấp (Buổi 57 - 80)',
        topics: ['Thi thử theo thời gian thực và Tiến sĩ ngôn ngữ sửa bài 1 kèm 1']
      }
    ],
    contentPhasesSummary: [
      '28 buổi nạp từ vựng học thuật, thành ngữ & ngữ pháp nâng cao',
      '28 buổi đọc hiểu báo chí & viết bài luận nghị luận xã hội 300 chữ',
      '24 buổi luyện đề thi thử thực chiến New HSK 5 & HSKK Cao cấp'
    ],
    scholarshipText: 'Tặng gói cố vấn xin học bổng du học Thạc sĩ CSC trị giá 2.000.000đ',
    textbook: 'Giáo trình MSUTONG Cao cấp & Bộ đề thi HSK 5 độc quyền.',
    gifts: [
      'Tặng tuyển tập 100 bài luận văn mẫu HSK 5 điểm tối đa.',
      'Hỗ trợ sửa thư giới thiệu và kế hoạch học tập xin học bổng.'
    ],
    targetAudience: [
      'Học viên đã có chứng chỉ HSK 4 hoặc tương đương.',
      'Người chuẩn bị apply học bổng Thạc sĩ/Tiến sĩ tại Trung Quốc.',
      'Biên phiên dịch viên, quản lý công ty FDI.'
    ]
  },

  // 6. GIAO TIẾP CẤP TỐC
  {
    id: 'giao-tiep-cap-toc',
    category: 'giao-tiep',
    title: 'Khóa Học Giao Tiếp Cấp Tốc – Kỹ Năng Tập Trung',
    slug: 'khoa-hoc-giao-tiep-cap-toc',
    badge: 'Phản xạ thực chiến',
    classCode: 'GT-CT',
    totalSessions: '35 buổi (1,5 giờ / buổi)',
    sessionDuration: '1,5 giờ / buổi',
    format: 'Trực tiếp tại cơ sở Bắc Ninh & Online tương tác',
    rating: 4.9,
    reviewsCount: 260,
    studentsCount: '10.000+',
    duration: '35 buổi (1,5h / buổi)',
    schedule: '3 buổi / tuần (1,5h / buổi)',
    classSize: '10 - 12 học viên',
    originalPrice: 4500000,
    salePrice: 3500000,
    image: course03,
    thumbnail: course03,
    shortDesc: 'Xây dựng nền tảng phát âm và khẩu ngữ chuẩn, tập trung vào nghe – nói – phản xạ giao tiếp công việc và đời sống.',
    objectives: [
      'Nắm được Pinyin, phát âm và 4 thanh điệu cơ bản.',
      'Có thể nghe và hiểu những câu giao tiếp thường gặp tại nơi làm việc.',
      'Tự tin chào hỏi, giới thiệu bản thân, trao đổi công việc với đồng nghiệp và quản lý người Trung Quốc.',
      'Biết hỏi – đáp về công việc, thời gian, tiến độ, số lượng, sản phẩm và đơn hàng.',
      'Sử dụng được các câu giao tiếp thực tế trong văn phòng và nhà xưởng.',
      'Hình thành phản xạ nghe – nói tự nhiên.'
    ],
    contentTopics: [
      'Phát âm chuẩn Pinyin, sửa ngọng thanh điệu.',
      'Chào hỏi, giới thiệu bản thân, phòng ban và chức vụ.',
      'Trao đổi tiến độ sản xuất, số lượng, đơn hàng và chất lượng sản phẩm.',
      'Giao tiếp hành chính, xin nghỉ phép, đặt lịch họp, trao đổi công việc qua WeChat.',
      'Tiếp đón khách hàng, đối tác, văn hóa ăn uống và bàn tiệc giao thương.',
      'Đàm phán giá cả, điều khoản thanh toán, báo giá và giải quyết sự cố phát sinh.',
      'Thực hành đóng vai tình huống thực tế tại nhà máy và văn phòng FDI.'
    ],
    skills: {
      listen: 'Nghe hiểu tức thì các chỉ đạo công việc, yêu cầu của sếp và đối tác.',
      speak: 'Phản xạ nói tự nhiên, phát âm rõ ràng, chuẩn khẩu ngữ giao tiếp.',
      read: 'Đọc hiểu nhanh bảng biểu, thông số kỹ thuật và tin nhắn công việc.',
      write: 'Soạn thảo tin nhắn trao đổi công việc và biên bản đơn giản.'
    },
    outcomes: [
      'Giao tiếp lưu loát, tự tin xử lý các tình huống tại văn phòng và nhà xưởng.',
      'Tự tin làm việc với đồng nghiệp và quản lý người Trung Quốc.',
      'Hình thành phản xạ nghe – nói tức thì không cần dịch nhẩm.'
    ],
    curriculum: [
      {
        phase: 'Chặng 1: Chuẩn hóa phát âm & Khẩu ngữ đời sống căn bản (Buổi 1 - 10)',
        topics: ['Chỉnh âm pinyin, chào hỏi, làm quen và xã giao thường ngày']
      },
      {
        phase: 'Chặng 2: Giao tiếp văn phòng & Đàm thoại nhà xưởng FDI (Buổi 11 - 22)',
        topics: ['Tiến độ sản xuất, đơn hàng, kiểm tra chất lượng và trao đổi WeChat']
      },
      {
        phase: 'Chặng 3: Đàm phán thương mại & Xử lý tình huống thực chiến (Buổi 23 - 35)',
        topics: ['Đàm phán giá cả, ký hợp đồng, tiếp đón đối tác và giải quyết sự cố']
      }
    ],
    contentPhasesSummary: [
      '10 buổi chuẩn hóa phát âm Pinyin & khẩu ngữ căn bản',
      '12 buổi giao tiếp văn phòng & đàm thoại chuyên ngành nhà xưởng',
      '13 buổi đàm phán thương mại & xử lý tình huống thực tế'
    ],
    scholarshipText: 'Tặng cẩm nang từ vựng chuyên ngành sản xuất & xuất nhập khẩu độc quyền',
    textbook: 'Giáo trình khẩu ngữ thương mại & nhà xưởng thực chiến Green Ocean.',
    gifts: [
      'Tặng sổ tay 500 mẫu câu giao tiếp công xưởng thông dụng.',
      'Tặng tài khoản học nghe phản xạ trên điện thoại.'
    ],
    targetAudience: [
      'Người đi làm tại các khu công nghiệp Bắc Ninh (Quế Võ, Yên Phong, VSIP...).',
      'Nhân viên văn phòng, trợ lý, kỹ sư, quản lý cần nói tiếng Trung ngay.',
      'Người kinh doanh, nhập hàng Trung Quốc.'
    ]
  },

  // 7. TIẾNG TRUNG TRẺ EM
  {
    id: 'tieng-trung-tre-em',
    category: 'tre-em',
    title: 'Tiếng Trung Trẻ Em – Phát Triển Tư Duy, Tự Tin Giao Tiếp',
    slug: 'tieng-trung-tre-em',
    badge: 'Chuyên biệt 6-15 tuổi',
    classCode: 'KIDS',
    totalSessions: 'Theo từng độ tuổi (1,5 giờ / buổi)',
    sessionDuration: '1,5 giờ / buổi',
    format: 'Trực tiếp tại cơ sở Bắc Ninh & Online tương tác',
    rating: 5.0,
    reviewsCount: 190,
    studentsCount: '5.000+',
    duration: '24 - 40 buổi (1,5h / buổi)',
    schedule: '2 buổi / tuần (1,5h / buổi)',
    classSize: '8 - 10 học viên',
    originalPrice: 3800000,
    salePrice: 2900000,
    image: course01,
    thumbnail: course01,
    shortDesc: 'Phát triển tư duy – Tự tin giao tiếp. Lộ trình bài bản 4 giai đoạn theo từng độ tuổi từ 6 đến 15 tuổi.',
    objectives: [
      'Làm quen với tiếng Trung và văn hóa phương Đông qua hình ảnh sinh động.',
      'Phát âm chuẩn Pinyin từ nhỏ giúp trẻ nói tự nhiên như người bản xứ.',
      'Phát triển tư duy ngôn ngữ song song với việc học trên trường.',
      'Từng bước làm quen chữ Hán và hướng tới các chứng chỉ quốc tế HSK.'
    ],
    contentTopics: [
      'Gia đình, trường học, bạn bè.',
      'Màu sắc, số đếm, động vật, đồ ăn.',
      'Đồ chơi, cơ thể, thời tiết, hoạt động thường ngày.',
      'Giao tiếp mua sắm, thời gian và sở thích.',
      'Kể chuyện, bài hát và trò chơi tương tác tiếng Trung.'
    ],
    skills: {
      listen: 'Nghe hiểu các câu lệnh, bài hát và đoạn hội thoại thiếu nhi sinh động.',
      speak: 'Tự tin phát âm, chào hỏi, kể về bản thân và đồ vật xung quanh.',
      read: 'Nhận diện mặt chữ Hán qua thẻ flashcard tranh vẽ.',
      write: 'Làm quen các nét vẽ chữ Hán cơ bản bằng bút lông và bút chì.'
    },
    outcomes: [
      'Trẻ yêu thích ngôn ngữ tiếng Trung, tự tin giao tiếp các chủ đề gần gũi.',
      'Nắm vững vốn từ tương ứng từng lứa tuổi (150 - 600 từ).',
      'Tạo nền tảng vững vàng để chinh phục HSK từ nhỏ.'
    ],
    kidLevels: [
      {
        name: 'Cấp 1: LÀM QUEN TIẾNG TRUNG',
        age: '6–8 tuổi',
        duration: '24 buổi (1,5 giờ / buổi)',
        objectives: [
          'Làm quen với tiếng Trung và văn hóa Trung Quốc.',
          'Phát âm đúng Pinyin và 4 thanh điệu qua bài hát, trò chơi.',
          'Ghi nhớ từ vựng thông qua hình ảnh sinh động.',
          'Có thể chào hỏi, giới thiệu bản thân và giao tiếp những câu đơn giản.'
        ],
        topics: 'Gia đình – Trường học – Màu sắc – Số đếm – Động vật – Đồ ăn – Đồ chơi – Cơ thể – Thời tiết...',
        outcome: 'Trẻ có thể hiểu và sử dụng khoảng 150–250 từ/cụm từ cơ bản.'
      },
      {
        name: 'Cấp 2: GIAO TIẾP CƠ BẢN',
        age: '8–10 tuổi',
        duration: '30 buổi (1,5 giờ / buổi)',
        objectives: [
          'Mở rộng vốn từ và mẫu câu giao tiếp thường ngày.',
          'Nghe hiểu các đoạn hội thoại ngắn sinh động.',
          'Tự tin giao tiếp trong những tình huống quen thuộc.',
          'Bắt đầu làm quen với chữ Hán qua các câu chuyện thú vị.'
        ],
        topics: 'Bản thân – Bạn bè – Gia đình – Trường lớp – Sở thích – Hoạt động hàng ngày – Mua sắm – Ăn uống – Thời gian...',
        outcome: 'Có thể giao tiếp những tình huống cơ bản và xây dựng nền tảng tương đương HSK 1.'
      },
      {
        name: 'Cấp 3: PHÁT TRIỂN NGHE – NÓI – ĐỌC – VIẾT',
        age: '10–12 tuổi',
        duration: '36 buổi (1,5 giờ / buổi)',
        objectives: [
          'Tăng vốn từ và khả năng phản xạ nhanh.',
          'Đọc hiểu câu và đoạn văn ngắn.',
          'Viết được chữ Hán cơ bản đúng quy tắc bút thuận.',
          'Giao tiếp tự nhiên hơn với bạn bè và thầy cô.',
          'Hình thành phương pháp tự học tiếng Trung hiệu quả.'
        ],
        topics: 'Mở rộng chủ đề học tập, cuộc sống, văn hóa truyền thống Trung Hoa.',
        outcome: 'Nền tảng vững vàng tương đương HSK 2, sẵn sàng bước vào chương trình HSK chuyên sâu.'
      },
      {
        name: 'Cấp 4: TIẾNG TRUNG HỌC THUẬT – HSK',
        age: '12–15 tuổi',
        duration: '40 buổi (1,5 giờ / buổi)',
        objectives: [
          'Hệ thống hóa toàn diện từ vựng và ngữ pháp.',
          'Phát triển đồng đều 4 kỹ năng Nghe – Nói – Đọc – Viết.',
          'Làm quen với cấu trúc đề thi HSK quốc tế.',
          'Luyện kỹ năng làm bài và phản xạ giao tiếp tự tin.',
          'Hướng tới các cấp độ HSK 3 – HSK 4 – HSK 5.'
        ],
        topics: 'Chuyên đề học thuật, luyện đề thi HSK chuẩn, viết bài luận và thuyết trình chủ đề.',
        outcome: 'Có thể sử dụng tiếng Trung trong học tập, giao tiếp và từng bước chinh phục chứng chỉ HSK phục vụ thi chuyển cấp hoặc du học.'
      }
    ],
    curriculum: [
      {
        phase: 'Cấp 1: Làm quen tiếng Trung (6-8 tuổi)',
        topics: ['Ngữ âm qua bài hát, flashcards, trò chơi vận động và chào hỏi']
      },
      {
        phase: 'Cấp 2: Giao tiếp cơ bản (8-10 tuổi)',
        topics: ['Hội thoại đời sống thiếu nhi, nhận diện chữ Hán qua tranh vẽ']
      },
      {
        phase: 'Cấp 3: Phát triển 4 kỹ năng (10-12 tuổi)',
        topics: ['Đọc truyện tranh, viết chữ Hán, thuyết trình chủ đề']
      },
      {
        phase: 'Cấp 4: Tiếng Trung học thuật & HSK (12-15 tuổi)',
        topics: ['Hệ thống ngữ pháp, luyện thi chứng chỉ HSK 3 - HSK 4']
      }
    ],
    contentPhasesSummary: [
      'Giai đoạn 1: Làm quen ngữ âm qua bài hát và trò chơi (6-8 tuổi)',
      'Giai đoạn 2: Giao tiếp sinh hoạt thiếu nhi & làm quen chữ Hán (8-10 tuổi)',
      'Giai đoạn 3: Rèn luyện đồng đều 4 kỹ năng & đọc truyện (10-12 tuổi)',
      'Giai đoạn 4: Tiếng Trung học thuật chuẩn hóa & luyện thi HSK (12-15 tuổi)'
    ],
    scholarshipText: 'Tặng trọn bộ giáo trình hình ảnh và bộ thẻ Flashcard màu cho bé',
    textbook: 'Bộ giáo trình Tiếng Trung Thiếu Nhi quốc tế Kuai Le Han Yu sinh động.',
    gifts: [
      'Tặng bộ Flashcard 300 từ vựng hình ảnh màu cao cấp.',
      'Tặng tài khoản học tiếng Trung qua hoạt hình tương tác.'
    ],
    targetAudience: [
      'Trẻ em từ 6 đến 15 tuổi muốn tiếp cận tiếng Trung bài bản sớm.',
      'Phụ huynh muốn con phát triển tư duy song ngữ và phản xạ tự nhiên.'
    ]
  }
];

export const msutongBooks: MsutongBook[] = [
  {
    id: 'ms-01',
    title: 'Bộ Giáo Trình Hán Ngữ Msutong Sơ Cấp (Trọn Bộ 4 Tập)',
    category: 'Giáo trình Sơ cấp',
    price: 480000,
    salePrice: 385000,
    publisher: 'Đại Học Ngôn Ngữ Bắc Kinh',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop',
    desc: 'Giáo trình độc quyền chuẩn New HSK 3.0 tích hợp ứng dụng đa phương tiện giúp người mới bắt đầu phát âm chuẩn và giao tiếp nhanh.'
  },
  {
    id: 'ms-02',
    title: 'Bộ Giáo Trình Hán Ngữ Msutong Trung Cấp (Trọn Bộ 4 Tập)',
    category: 'Giáo trình Trung cấp',
    price: 540000,
    salePrice: 430000,
    publisher: 'Đại Học Ngôn Ngữ Bắc Kinh',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop',
    desc: 'Nâng cao vốn từ vựng và ngữ pháp HSK 4 - HSK 5 có kèm bài tập thực hành dịch thuật.'
  },
  {
    id: 'ms-03',
    title: 'Combo Bộ Sách Ôn Luyện Thi THPT Quốc Gia Môn Tiếng Trung Khối D4',
    category: 'Luyện thi Đại học',
    price: 320000,
    salePrice: 250000,
    publisher: 'Green Ocean & Viện Bác Nhã',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop',
    desc: 'Tuyển tập đề thi thử có lời giải chi tiết, phân tích ma trận bẫy điểm 9+ môn tiếng Trung.'
  }
];
