const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, '../src/asset/reasons');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Convert logo to base64
const logoPath = path.join(__dirname, '../public/logo.jpg');
const logoBase64 = fs.existsSync(logoPath) 
  ? `data:image/jpeg;base64,${fs.readFileSync(logoPath).toString('base64')}` 
  : '';

const slides = [
  {
    num: '01',
    title: '01. HÀNH TRÌNH 6 NĂM PHÁT TRIỂN BỀN VỮNG',
    subtitle: 'Thành lập từ 07/2020 đến 2026',
    nodes: [
      { label: '07/2020', desc: 'Thành lập Trung tâm, định hướng đào tạo thực chất và ứng dụng.' },
      { label: '5.000+', desc: 'Hơn 5.000 học viên đã đồng hành và đạt chuẩn đầu ra vững chắc.' },
      { label: '01/2026', desc: 'Đổi tên Green Ocean, nâng tầm quy mô và chuẩn hóa toàn diện.' }
    ],
    quote1: 'Hành trình 6 năm kiến tạo giá trị bền vững từ ngôn ngữ.',
    quote2: 'Lấy sự tiến bộ và thành công của học viên làm trọng tâm phát triển.'
  },
  {
    num: '02',
    title: '02. ĐỘI NGŨ GV 15+ NĂM KINH NGHIỆM',
    subtitle: '100% tốt nghiệp ĐH hàng đầu Hà Nội',
    nodes: [
      { label: 'Trình độ', desc: '100% tốt nghiệp ĐH Ngoại ngữ ĐHQGHN, ĐH Hà Nội.' },
      { label: '15+ năm KN', desc: 'Đội ngũ 6 giáo viên nòng cốt dày dặn kinh nghiệm thực tế.' },
      { label: 'Tận tâm', desc: 'Phương pháp sư phạm hiện đại, bám sát và truyền cảm hứng.' }
    ],
    quote1: 'Giảng viên giàu kinh nghiệm, nghiệp vụ sư phạm vững vàng.',
    quote2: 'Giúp học viên học đúng bản chất, nhớ lâu và tự tin phản xạ.'
  },
  {
    num: '03',
    title: '03. PHƯƠNG PHÁP PHẢN XẠ THỰC CHIẾN',
    subtitle: 'Học thực chất – Ứng dụng ngay',
    nodes: [
      { label: 'THỰC CHẤT', desc: 'Nội dung bám sát tình huống giao tiếp đời sống và công việc.' },
      { label: 'ỨNG DỤNG', desc: 'Tối ưu 70% thời lượng luyện nghe nói phản xạ trực tiếp trên lớp.' },
      { label: 'HIỆU QUẢ', desc: 'Học được là dùng được ngay, tạo ra giá trị thiết thực.' }
    ],
    quote1: 'Phương pháp đào tạo ứng dụng cao: Học được – Dùng ngay.',
    quote2: 'Rèn luyện phản xạ ngôn ngữ tự nhiên như người bản xứ.'
  },
  {
    num: '04',
    title: '04. LỘ TRÌNH NEW HSK CHUẨN KHẢO THÍ',
    subtitle: 'Bám sát khung năng lực HSK quốc tế',
    nodes: [
      { label: 'HSK 1 - 2', desc: 'Nền tảng phát âm chuẩn Pinyin, cấu trúc câu và từ vựng cơ bản.' },
      { label: 'HSK 3 - 4', desc: 'Giao tiếp chủ động, đọc hiểu văn bản, đủ chuẩn du học và việc làm.' },
      { label: 'HSK 5 - 6', desc: 'Thành thạo chuyên sâu thương mại, biên phiên dịch cao cấp.' }
    ],
    quote1: 'Lộ trình bài bản, phát triển đồng đều cả 4 kỹ năng Nghe - Nói - Đọc - Viết.',
    quote2: 'Luyện đề thực chiến bám sát kỳ thi, cam kết chuẩn đầu ra.'
  },
  {
    num: '05',
    title: '05. CHĂM SÓC HỌC VIÊN 1:1 TẬN TÂM',
    subtitle: 'Đồng hành xuyên suốt khóa học',
    nodes: [
      { label: 'Lộ trình 1:1', desc: 'Tư vấn kế hoạch học tập cá nhân hóa theo mục tiêu học viên.' },
      { label: 'Hỗ trợ 24/7', desc: 'Trợ giảng sửa phát âm, chấm bài và giải đáp thắc mắc liên tục.' },
      { label: 'Linh hoạt', desc: 'Chính sách bảo lưu và hỗ trợ học bù chu đáo cho học viên.' }
    ],
    quote1: 'Đội ngũ hỗ trợ tận tâm, theo sát tiến độ từng buổi học.',
    quote2: 'Đảm bảo mỗi học viên đều tiến bộ vững vàng sau mỗi bài học.'
  },
  {
    num: '06',
    title: '06. CƠ SỞ VẬT CHẤT &amp; MÔI TRƯỜNG HIỆN ĐẠI',
    subtitle: 'Không gian học tập chuyên nghiệp',
    nodes: [
      { label: 'Tiện nghi', desc: 'Phòng học thoáng mát, trang thiết bị máy lạnh và bàn ghế hiện đại.' },
      { label: 'Trực quan', desc: 'Màn hình chiếu sắc nét, hệ thống âm thanh chuẩn luyện nghe.' },
      { label: 'Học liệu', desc: 'Bộ giáo trình chuẩn hóa độc quyền, kho bài tập và audio online.' }
    ],
    quote1: 'Không gian học tập thân thiện, hiện đại và tạo cảm hứng.',
    quote2: 'Môi trường lý tưởng để phát triển năng lực ngôn ngữ toàn diện.'
  }
];

async function generate() {
  for (const slide of slides) {
    const svg = `
    <svg width="700" height="700" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="60%" stop-color="#f8fcf9"/>
          <stop offset="100%" stop-color="#edf7f1"/>
        </linearGradient>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1B7E45"/>
          <stop offset="100%" stop-color="#145A32"/>
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F37021"/>
          <stop offset="100%" stop-color="#D9530F"/>
        </linearGradient>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.06"/>
        </filter>
      </defs>

      <!-- Card Background -->
      <rect width="700" height="700" rx="36" fill="url(#bgGrad)"/>
      <rect x="1.5" y="1.5" width="697" height="697" rx="34.5" fill="none" stroke="#1B7E45" stroke-opacity="0.18" stroke-width="3"/>

      <!-- Header Bar -->
      <g transform="translate(36, 32)">
        <!-- Logo circle / image -->
        <circle cx="28" cy="28" r="26" fill="#1B7E45" fill-opacity="0.08" stroke="#1B7E45" stroke-width="1.5"/>
        ${logoBase64 ? `<clipPath id="logoClip"><circle cx="28" cy="28" r="24"/></clipPath><image href="${logoBase64}" x="4" y="4" width="48" height="48" clip-path="url(#logoClip)"/>` : `<text x="28" y="34" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="900" fill="#1B7E45" text-anchor="middle">GO</text>`}
        
        <text x="68" y="24" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="900" fill="#1B7E45" letter-spacing="0.5">TRUNG TÂM NGOẠI NGỮ GREEN OCEAN</text>
        <text x="68" y="44" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#64748B" letter-spacing="0.2">HỆ THỐNG ĐÀO TẠO TIẾNG TRUNG ỨNG DỤNG THỰC CHẤT</text>

        <!-- Right Badge Stamp -->
        <g transform="translate(560, 2)">
          <circle cx="30" cy="26" r="26" fill="#ffffff" stroke="#1B7E45" stroke-width="1.5" stroke-dasharray="3,2"/>
          <circle cx="30" cy="26" r="22" fill="#EAF5EE"/>
          <text x="30" y="22" font-family="'Segoe UI', Roboto, sans-serif" font-size="8" font-weight="900" fill="#1B7E45" text-anchor="middle">TIÊU CHUẨN</text>
          <text x="30" y="32" font-family="'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="900" fill="#F37021" text-anchor="middle">ĐẦU RA</text>
          <text x="30" y="41" font-family="'Segoe UI', Roboto, sans-serif" font-size="8" font-weight="700" fill="#1B7E45" text-anchor="middle">★★★★★</text>
        </g>
      </g>

      <!-- Main Reason Title -->
      <g transform="translate(36, 120)">
        <rect x="0" y="0" width="628" height="60" rx="16" fill="#ffffff" stroke="#1B7E45" stroke-opacity="0.15" filter="url(#shadow)"/>
        <text x="314" y="38" font-family="'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="900" fill="#1B7E45" text-anchor="middle" letter-spacing="-0.3">
          ${slide.title}
        </text>
      </g>

      <!-- Center Diagram Showcase Box -->
      <g transform="translate(36, 196)">
        <rect x="0" y="0" width="628" height="340" rx="24" fill="#ffffff" stroke="#E2E8F0" stroke-width="1.5" filter="url(#shadow)"/>
        
        <!-- Inner subtle header of diagram -->
        <rect x="1" y="1" width="626" height="42" rx="23" fill="#f8fafc"/>
        <text x="314" y="27" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" fill="#475569" text-anchor="middle" letter-spacing="0.5">
          ${slide.subtitle.toUpperCase()}
        </text>
        <line x1="20" y1="43" x2="608" y2="43" stroke="#E2E8F0" stroke-width="1"/>

        <!-- 3 Nodes Stack / Layout -->
        ${slide.nodes.map((node, idx) => {
          const y = 62 + idx * 88;
          return `
            <g transform="translate(24, ${y})">
              <!-- Node pill card -->
              <rect x="0" y="0" width="580" height="74" rx="16" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1"/>
              
              <!-- Node Badge circle -->
              <rect x="14" y="14" width="110" height="46" rx="12" fill="url(#greenGrad)"/>
              <text x="69" y="42" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">
                ${node.label}
              </text>

              <!-- Node description text -->
              <text x="138" y="42" font-family="'Segoe UI', Roboto, sans-serif" font-size="13.5" font-weight="600" fill="#1E293B">
                ${node.desc}
              </text>
            </g>
          `;
        }).join('')}
      </g>

      <!-- Bottom Decorative Curve & Taglines -->
      <!-- Green swoosh -->
      <path d="M 0 620 Q 220 570, 420 630 T 700 610 L 700 700 L 0 700 Z" fill="url(#greenGrad)"/>
      <!-- Orange wave accent -->
      <path d="M 400 650 Q 550 610, 700 630 L 700 700 L 400 700 Z" fill="url(#orangeGrad)" fill-opacity="0.9"/>

      <!-- Quotes text on bottom -->
      <g transform="translate(46, 642)">
        <text x="0" y="16" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#ffffff">
          » ${slide.quote1}
        </text>
        <text x="0" y="38" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#FEF08A">
          » ${slide.quote2}
        </text>
      </g>
    </svg>
    `;

    const dest = path.join(outputDir, `reason${slide.num}.png`);
    await sharp(Buffer.from(svg))
      .png({ quality: 95 })
      .toFile(dest);
    console.log(`Generated ${dest}`);
  }
}

generate().catch(console.error);
