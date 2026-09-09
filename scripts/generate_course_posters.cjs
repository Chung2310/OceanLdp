const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, '../src/asset/courses');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Convert logo to base64
const logoPath = path.join(__dirname, '../public/logo.jpg');
const logoBase64 = fs.existsSync(logoPath) 
  ? `data:image/jpeg;base64,${fs.readFileSync(logoPath).toString('base64')}` 
  : '';

// Crop helper from banner images to get student / classroom clips
async function getAssetClips() {
  const banner4Path = path.join(__dirname, '../src/asset/banner/banner4.png');
  const banner2Path = path.join(__dirname, '../src/asset/banner/banner2.png');
  const banner1Path = path.join(__dirname, '../src/asset/banner/banner1.png');

  let clip1Base64 = '';
  let clip2Base64 = '';

  try {
    if (fs.existsSync(banner4Path)) {
      const buf = await sharp(banner4Path)
        .resize(360, 260, { fit: 'cover', position: 'center' })
        .toFormat('jpeg', { quality: 90 })
        .toBuffer();
      clip1Base64 = `data:image/jpeg;base64,${buf.toString('base64')}`;
    }
  } catch (e) {
    console.error('Error cropping banner4', e);
  }

  try {
    if (fs.existsSync(banner2Path)) {
      const buf = await sharp(banner2Path)
        .resize(360, 260, { fit: 'cover', position: 'center' })
        .toFormat('jpeg', { quality: 90 })
        .toBuffer();
      clip2Base64 = `data:image/jpeg;base64,${buf.toString('base64')}`;
    }
  } catch (e) {
    console.error('Error cropping banner2', e);
  }

  return { clip1Base64, clip2Base64 };
}

const courses = [
  {
    id: '01',
    title: 'HÁN NGỮ TÍCH HỢP 3.0',
    titleLine1: 'HÁN NGỮ TÍCH HỢP 3.0',
    titleLine2: '',
    tag: 'ĐÀO TẠO TOÀN DIỆN 4 KỸ NĂNG',
    desc: 'Đào tạo bài bản 4 kỹ năng nghe – nói, đọc – viết đạt chuẩn đầu ra theo tiêu chuẩn 3.0',
    iconText: 'TRỰC TIẾP TẠI CƠ SỞ'
  },
  {
    id: '02',
    title: 'HÁN NGỮ TÍCH HỢP 3.0 TRỰC TUYẾN',
    titleLine1: 'HÁN NGỮ TÍCH HỢP 3.0',
    titleLine2: 'TRỰC TUYẾN',
    tag: 'TƯƠNG TÁC TRỰC TUYẾN 2 CHIỀU',
    desc: 'Học trực tuyến từ xa trên nền tảng hiện đại, cam kết chuẩn đầu ra như các lớp Offline',
    iconText: 'ONLINE TOÀN QUỐC'
  },
  {
    id: '03',
    title: 'KHÓA LUYỆN THI HSK/ HSKK',
    titleLine1: 'KHÓA LUYỆN THI',
    titleLine2: 'HSK / HSKK',
    tag: 'CHUẨN KHẢO THÍ QUỐC TẾ',
    desc: 'Lộ trình luyện thi chinh phục HSK sau 1 khóa học, cam kết chuẩn đầu ra điểm số cao',
    iconText: 'CAM KẾT ĐẦU RA'
  },
  {
    id: '04',
    title: 'TIẾNG TRUNG GIAO TIẾP THỰC CHIẾN',
    titleLine1: 'TIẾNG TRUNG GIAO TIẾP',
    titleLine2: 'THỰC CHIẾN',
    tag: 'PHẢN XẠ ỨNG DỤNG CAO',
    desc: 'Tối ưu 70% thời lượng phản xạ nghe nói, tự tin giao tiếp đời sống và công việc',
    iconText: 'HỌC ĐƯỢC – DÙNG NGAY'
  },
  {
    id: '05',
    title: 'KHÓA DOANH NGHIỆP',
    titleLine1: 'TIẾNG TRUNG',
    titleLine2: 'DOANH NGHIỆP',
    tag: 'THIẾT KẾ THEO NHU CẦU',
    desc: 'Khóa tiếng Trung với lộ trình học thiết kế riêng theo nhu cầu và lĩnh vực của Doanh nghiệp',
    iconText: 'ĐÀO TẠO DOANH NGHIỆP'
  },
  {
    id: '06',
    title: 'KHÓA HỌC 1 KÈM 1 THEO YÊU CẦU',
    titleLine1: 'KHÓA HỌC 1 KÈM 1',
    titleLine2: 'THEO YÊU CẦU',
    tag: 'LỘ TRÌNH CÁ NHÂN HÓA',
    desc: 'Lộ trình học tập cá nhân hóa 1 kèm 1, thời gian biểu linh hoạt tối đa cho học viên',
    iconText: 'LỊCH HỌC LINH HOẠT'
  }
];

async function generate() {
  const { clip1Base64, clip2Base64 } = await getAssetClips();

  for (let i = 0; i < courses.length; i++) {
    const c = courses[i];
    const clip = (i % 2 === 0 && clip1Base64) ? clip1Base64 : (clip2Base64 || clip1Base64);

    const svg = `
    <svg width="720" height="500" viewBox="0 0 720 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1B7E45"/>
          <stop offset="60%" stop-color="#145A32"/>
          <stop offset="100%" stop-color="#0E3D22"/>
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FDE047"/>
          <stop offset="100%" stop-color="#F59E0B"/>
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F37021"/>
          <stop offset="100%" stop-color="#C2410C"/>
        </linearGradient>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
        </pattern>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000000" flood-opacity="0.25"/>
        </filter>
        <clipPath id="cardClip">
          <rect width="720" height="500" rx="28"/>
        </clipPath>
        <clipPath id="innerImgClip">
          <rect x="0" y="0" width="640" height="240" rx="18"/>
        </clipPath>
      </defs>

      <!-- Background with Rounded Card -->
      <g clip-path="url(#cardClip)">
        <rect width="720" height="500" fill="url(#bgGrad)"/>
        <rect width="720" height="500" fill="url(#grid)"/>

        <!-- Subtle Top Glow Circles -->
        <circle cx="360" cy="80" r="220" fill="#ffffff" fill-opacity="0.06"/>
        <circle cx="680" cy="40" r="140" fill="#F37021" fill-opacity="0.15"/>

        <!-- Top Header Bar: Logo & Brand Name -->
        <g transform="translate(360, 42)">
          <text x="0" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="800" fill="#EAF5EE" text-anchor="middle" letter-spacing="1.5">
            TRUNG TÂM NGOẠI NGỮ GREEN OCEAN
          </text>
          <text x="0" y="16" font-family="'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="600" fill="#86EFAC" text-anchor="middle" letter-spacing="0.5">
            HỆ THỐNG ĐÀO TẠO NĂNG LỰC TIẾNG TRUNG TOÀN DIỆN
          </text>
        </g>

        <!-- Big Bold Title with Glow -->
        <g transform="translate(360, 110)">
          ${c.titleLine2 ? `
            <text x="0" y="0" font-family="'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="0.5" filter="url(#shadow)">
              ${c.titleLine1}
            </text>
            <text x="0" y="38" font-family="'Segoe UI', Roboto, sans-serif" font-size="32" font-weight="900" fill="#FDE047" text-anchor="middle" letter-spacing="0.5" filter="url(#shadow)">
              ${c.titleLine2}
            </text>
          ` : `
            <text x="0" y="18" font-family="'Segoe UI', Roboto, sans-serif" font-size="36" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="0.5" filter="url(#shadow)">
              ${c.titleLine1}
            </text>
          `}
        </g>

        <!-- Bottom Showcase Container with Image / Classroom Visual -->
        <g transform="translate(40, 200)">
          <rect x="0" y="0" width="640" height="255" rx="20" fill="#ffffff" fill-opacity="0.96" filter="url(#shadow)"/>
          
          <g clip-path="url(#innerImgClip)">
            ${clip ? `
              <image href="${clip}" x="0" y="0" width="640" height="255" preserveAspectRatio="xMidYMid slice"/>
              <!-- Subtle gradient overlay on bottom of image -->
              <rect x="0" y="180" width="640" height="75" fill="url(#bgGrad)" fill-opacity="0.75"/>
            ` : `
              <rect width="640" height="255" fill="#f1f5f9"/>
            `}
          </g>

          <!-- Inner Badge on top left of image -->
          <g transform="translate(16, 14)">
            <rect x="0" y="0" width="195" height="30" rx="15" fill="#1B7E45" filter="url(#shadow)"/>
            <text x="97.5" y="20" font-family="'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
              ${c.tag}
            </text>
          </g>

          <!-- Inner Badge on bottom right of image -->
          <g transform="translate(450, 210)">
            <rect x="0" y="0" width="174" height="30" rx="15" fill="#F37021" filter="url(#shadow)"/>
            <text x="87" y="20" font-family="'Segoe UI', Roboto, sans-serif" font-size="10.5" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
              ${c.iconText}
            </text>
          </g>
        </g>

        <!-- Subtle Outer Border -->
        <rect x="1.5" y="1.5" width="717" height="497" rx="26.5" fill="none" stroke="#ffffff" stroke-opacity="0.25" stroke-width="3"/>
      </g>
    </svg>
    `;

    const dest = path.join(outputDir, `course${c.id}.png`);
    await sharp(Buffer.from(svg))
      .png({ quality: 95 })
      .toFile(dest);
    console.log(`Generated ${dest}`);
  }
}

generate().catch(console.error);
