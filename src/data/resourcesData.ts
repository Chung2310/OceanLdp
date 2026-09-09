import { ResourceItem } from '../types';

import thumbThoiTiet from '../asset/library/thumb_thoi_tiet.png';
import thumbNguPhapHsk1 from '../asset/library/thumb_ngu_phap_hsk1.png';
import thumb214BoThu from '../asset/library/thumb_214_bo_thu.png';
import thumbQuyTacViet from '../asset/library/thumb_quy_tac_viet.png';
import photoThienTai from '../asset/library/photo_thien_tai.png';
import photoDongChi from '../asset/library/photo_dong_chi.png';

export const resourceCategories = [
  { 
    id: 'all', 
    name: 'Tất cả tài liệu',
    description: 'Kho thư viện tài liệu, từ vựng theo chủ đề, cẩm nang ngữ pháp và giáo trình học tiếng Trung miễn phí được biên soạn bởi Ban Chuyên Môn Green Ocean.'
  },
  { 
    id: 'tu-vung', 
    name: 'Từ Vựng Tiếng Trung',
    description: 'Tổng hợp từ vựng tiếng Trung theo các chủ đề thông dụng đời sống, công sở, thương mại kèm phiên âm Pinyin, giải nghĩa và ví dụ thực tế.'
  },
  { 
    id: 'ngu-phap', 
    name: 'Ngữ Pháp Tiếng Trung',
    description: 'Hệ thống hóa toàn bộ các điểm ngữ pháp trọng điểm từ HSK 1 đến HSK 6, cấu trúc câu đặc biệt và bài tập củng cố có đáp án.'
  },
  { 
    id: 'bo-thu', 
    name: 'Bộ Thủ & Quy Tắc Viết',
    description: 'Trọn bộ 214 bộ thủ chữ Hán, quy tắc bút thuận và phương pháp ghi nhớ chữ Hán qua hình ảnh và câu chuyện trực quan.'
  },
  { 
    id: 'hsk', 
    name: 'HSK & HSKK',
    description: 'Đề thi thử New HSK 3.0, tài liệu luyện thi khẩu ngữ HSKK và bí quyết phân bổ thời gian làm bài đạt điểm tối đa.'
  }
];

export const resourcesData: ResourceItem[] = [
  {
    id: 'tu-vung-tieng-trung-ve-thoi-tiet-va-cac-mua',
    category: 'tu-vung',
    categoryName: 'Từ Vựng Tiếng Trung',
    title: 'Từ vựng tiếng Trung về thời tiết và các mùa: Pinyin và hội thoại thực tế',
    slug: 'tu-vung-tieng-trung-ve-thoi-tiet-va-cac-mua',
    day: '15',
    month: 'Th8',
    date: '15/08/2025',
    author: 'Ban Chuyên Môn Green Ocean',
    views: '24.180',
    format: 'PDF Ebook (Màu)',
    size: '12 MB',
    downloads: '18.400+',
    image: thumbThoiTiet,
    desc: 'Trong bất kỳ ngôn ngữ nào, thời tiết luôn là chủ đề phổ biến và gần gũi trong các cuộc hội thoại hằng ngày. Nắm vững từ vựng về thời tiết giúp bạn tự tin giao tiếp...',
    content: `
      <p class="text-slate-700 leading-relaxed mb-4">
        Đại đa số khu vực Trung Quốc nằm ở Ôn Đới, khí hậu ôn hòa, thời tiết 4 mùa phân rõ, phù hợp với cuộc sống cũng như sinh hoạt của nhân dân. Khí hậu Trung Quốc có 2 đặc điểm chính: thời tiết ở Đại Lục rõ rệt và loại hình thời tiết đa dạng, phức tạp.
      </p>

      <h2 class="text-lg sm:text-xl font-black text-slate-800 tracking-tight mt-6 mb-4">
        1. Bảng từ vựng tiếng Trung về thời tiết thông dụng
      </h2>

      <div class="overflow-x-auto border border-slate-300 rounded-md shadow-2xs mb-8 bg-white">
        <table class="w-full text-xs sm:text-sm border-collapse text-left">
          <thead>
            <tr class="bg-slate-100 border-b border-slate-300">
              <th class="p-3 font-bold text-slate-800 w-1/3 border-r border-slate-300">Tiếng Việt</th>
              <th class="p-3 font-bold text-slate-800 w-1/3 border-r border-slate-300">Tiếng Trung</th>
              <th class="p-3 font-bold text-slate-800">Phiên âm</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Thời tiết</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">天气</td><td class="p-2.5 text-slate-600">tiānqì</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Khí hậu</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">气候</td><td class="p-2.5 text-slate-600">qìhòu</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Dự báo thời tiết</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">天气预报</td><td class="p-2.5 text-slate-600">tiānqìyùbào</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Nhiệt độ ... Độ<br/><span class="text-[11px] text-slate-500">VD: 23 độ C / Âm 5 độ C</span></td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">温度 / 气温 ....度<br/><span class="text-[11px] text-slate-500">VD: 23度 / 零下五度: -5°C</span></td><td class="p-2.5 text-slate-600">wēndù / qìwēn ....dù</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Trời nắng / trời quang</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">晴天</td><td class="p-2.5 text-slate-600">qíngtiān</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Trời âm u</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">阴天</td><td class="p-2.5 text-slate-600">yīntiān</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Mưa</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">下雨</td><td class="p-2.5 text-slate-600">xiàyǔ</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Tuyết rơi</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">下雪</td><td class="p-2.5 text-slate-600">xiàxuě</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Trời nắng</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">出太阳</td><td class="p-2.5 text-slate-600">chūtài yáng</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Có sấm</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">打雷</td><td class="p-2.5 text-slate-600">dǎléi</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Khô hanh</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">干燥</td><td class="p-2.5 text-slate-600">gānzào</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Ẩm ướt</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">潮湿</td><td class="p-2.5 text-slate-600">cháoshī</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Mát mẻ</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">凉</td><td class="p-2.5 text-slate-600">liáng</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Lạnh</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">冷</td><td class="p-2.5 text-slate-600">lěng</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Nóng</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">热</td><td class="p-2.5 text-slate-600">rè</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Oi bức</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">闷</td><td class="p-2.5 text-slate-600">mèn</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Ấm áp</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">暖和</td><td class="p-2.5 text-slate-600">nuǎnhuo</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Sương mù</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">雾</td><td class="p-2.5 text-slate-600">wù</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Chớp</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">闪电</td><td class="p-2.5 text-slate-600">shǎndiàn</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Gió</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">风</td><td class="p-2.5 text-slate-600">fēng</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Gió lốc / gió xoáy</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">龙卷风</td><td class="p-2.5 text-slate-600">lóngjuǎnfēng</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Mưa phùn</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">毛毛雨</td><td class="p-2.5 text-slate-600">máomaoyǔ</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Mưa rào</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">阵雨</td><td class="p-2.5 text-slate-600">zhènyǔ</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Mưa bóng mây</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">太阳雨</td><td class="p-2.5 text-slate-600">tàiyángyǔ</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Cầu vồng</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">彩虹</td><td class="p-2.5 text-slate-600">cǎihóng</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-lg sm:text-xl font-black text-slate-800 tracking-tight mt-8 mb-4">
        2. Từ vựng tiếng Trung về thiên tai
      </h2>
      <p class="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed">
        Tổng hợp các từ vựng tiếng Trung về thiên tai thường gặp trong tin tức thời sự và đời sống:
      </p>

      <div class="my-6 rounded-md overflow-hidden border border-slate-200 shadow-2xs max-w-lg mx-auto">
        <img src="${photoThienTai}" alt="Từ vựng tiếng Trung về thiên tai" class="w-full h-auto object-cover" />
      </div>

      <div class="overflow-x-auto border border-slate-300 rounded-md shadow-2xs mb-8 bg-white">
        <table class="w-full text-xs sm:text-sm border-collapse text-left">
          <thead>
            <tr class="bg-slate-100 border-b border-slate-300">
              <th class="p-3 font-bold text-slate-800 w-1/3 border-r border-slate-300">Tiếng Việt</th>
              <th class="p-3 font-bold text-slate-800 w-1/3 border-r border-slate-300">Tiếng Trung</th>
              <th class="p-3 font-bold text-slate-800">Phiên âm</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Thời tiết</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">天气</td><td class="p-2.5 text-slate-600">tiānqì</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Thiên tai</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">天灾 / 灾害</td><td class="p-2.5 text-slate-600">tiānzāi / zāihài</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Mưa đá</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">冰雹</td><td class="p-2.5 text-slate-600">bīngbáo</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Bão tố</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">暴风雨</td><td class="p-2.5 text-slate-600">bàofēngyǔ</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Lũ lụt</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">洪水 / 洪涝</td><td class="p-2.5 text-slate-600">hóngshuǐ / hónglào</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Thảm họa thủy triều / Thủy triều đỏ</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">潮灾 / 赤潮</td><td class="p-2.5 text-slate-600">cháozāi / chìcháo</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Hạn hán</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">干旱</td><td class="p-2.5 text-slate-600">gānhàn</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Động đất</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">地震</td><td class="p-2.5 text-slate-600">dìzhèn</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Sóng thần</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">海啸</td><td class="p-2.5 text-slate-600">hǎixiào</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Phun trào núi lửa</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">火山爆发 / 火山喷发</td><td class="p-2.5 text-slate-600">huǒshān bàofā / huǒshān pēnfā</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Xoáy nước</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">涡流</td><td class="p-2.5 text-slate-600">wōxuán</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Lở đất / Lũ quét bùn đất</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">滑坡 / 泥石流</td><td class="p-2.5 text-slate-600">huápō / níshíliú</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Cháy rừng</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">森林火灾</td><td class="p-2.5 text-slate-600">sēnlín huǒzāi</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Băng tan</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">融凝冰柱</td><td class="p-2.5 text-slate-600">róng níng bīng zhù</td></tr>
            <tr><td class="p-2.5 font-medium border-r border-slate-200">Vòi rồng / Vòi rồng lửa / Cột siêu không khí</td><td class="p-2.5 font-bold text-[#1B7E45] border-r border-slate-200">龙卷 / 火焰龙卷 / 超级气流柱</td><td class="p-2.5 text-slate-600">lóng juǎn / huǒyàn lóng juǎn / chāojí qìliú zhù</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-lg sm:text-xl font-black text-slate-800 tracking-tight mt-8 mb-2">
        3. Ngày Đông Chí và Hạ Chí là gì?
      </h2>
      <h3 class="text-base font-bold text-[#1B7E45] mb-4">
        Ngày Đông Chí: 冬至节 Dōngzhì jié
      </h3>

      <p class="text-slate-700 leading-relaxed mb-4">
        Tiết Đông chí, theo lịch Trung Quốc cổ đại, là một trong 24 tiết khí quan trọng trong lịch âm, và nó cũng là một lễ hội truyền thống lớn của Trung Quốc, được gọi với cái tên "Lễ hội mùa đông".
      </p>
      <p class="text-slate-700 leading-relaxed mb-6">
        Do văn hóa phương Đông và phương Tây có sự khác biệt to lớn nên với phương Tây Đông Chí là ngày đầu tiên bắt đầu mùa đông còn phương Đông là ngày giữa mùa đông.
      </p>

      <div class="my-6 rounded-md overflow-hidden border border-slate-200 shadow-2xs max-w-lg mx-auto">
        <img src="${photoDongChi}" alt="Lễ hội Đông Chí trong văn hóa Trung Hoa" class="w-full h-auto object-cover" />
      </div>

      <p class="text-slate-700 leading-relaxed mb-4">
        Chữ "Chí" trong cụm từ "Đông Chí" có nghĩa là cực điểm, đỉnh điểm. Nhưng đỉnh điểm ở đây không phải là lạnh đến cực điểm mà là chỉ vị trí Trái đất xoay quanh Mặt trời, đến tiết Đông Chí, người dân sống ở Bắc bán cầu trong ngày Đông Chí sẽ thấy ban ngày có thời gian rất ngắn, đến sau Đông Chí thì ngày mới bắt đầu dài dần ra và ngược lại người dân ở Nam bán cầu sẽ có ngày rất dài.
      </p>
      <p class="text-slate-700 leading-relaxed mb-4">
        Thời gian tiết đông chí bắt đầu từ khoảng ngày 21-23/12 dương lịch hàng năm và kết thúc vào ngày 5-6/1 năm sau. Vào ngày này, người miền Bắc Trung Quốc có phong tục ăn sủi cảo (chẻo), còn người miền Nam ăn chè trôi nước (thang viên - 汤圆) mang ý nghĩa đoàn viên sum vầy.
      </p>
    `
  },
  {
    id: 'tong-hop-ngu-phap-tieng-trung-hsk1',
    category: 'ngu-phap',
    categoryName: 'Ngữ Pháp Tiếng Trung',
    title: 'Tổng hợp ngữ pháp tiếng Trung HSK1 kèm file PDF',
    slug: 'tong-hop-ngu-phap-tieng-trung-hsk1',
    day: '30',
    month: 'Th7',
    date: '30/07/2025',
    author: 'Ban Chuyên Môn Green Ocean',
    views: '31.200',
    format: 'PDF Ebook (Màu)',
    size: '15 MB',
    downloads: '26.800+',
    image: thumbNguPhapHsk1,
    desc: 'Ngữ pháp HSK 1 là nền tảng quan trọng đối với người mới bắt đầu. Nắm vững trật tự từ, câu chữ 是, câu nghi vấn 吗...',
    content: `
      <p class="text-slate-700 leading-relaxed mb-4">
        Ngữ pháp HSK 1 tuy đơn giản nhưng lại là nền tảng sống còn quyết định bạn có thể nói đúng ngữ pháp tiếng Trung sau này hay không. Trong bài viết này, Green Ocean tổng hợp toàn bộ các cấu trúc câu trọng điểm xuất hiện trong kỳ thi HSK 1.
      </p>
      <h2 class="text-lg sm:text-xl font-black text-slate-800 tracking-tight mt-6 mb-3">1. Cấu trúc câu trần thuật cơ bản: Chủ ngữ + Vị ngữ</h2>
      <p class="text-slate-700 leading-relaxed mb-3">Tương tự tiếng Việt, trật tự câu khẳng định trong tiếng Trung là S + V + O:</p>
      <ul class="list-disc pl-5 space-y-1 text-slate-700 mb-6">
        <li><strong>我学汉语。</strong> (Wǒ xué hànyǔ) – Tôi học tiếng Trung.</li>
        <li><strong>他是老师。</strong> (Tā shì lǎoshī) – Anh ấy là giáo viên.</li>
      </ul>
      <h2 class="text-lg sm:text-xl font-black text-slate-800 tracking-tight mt-6 mb-3">2. Câu nghi vấn dùng trợ từ "吗" (ma)</h2>
      <p class="text-slate-700 leading-relaxed mb-3">Để tạo câu hỏi Có/Không, chỉ cần thêm chữ 吗 vào cuối câu trần thuật:</p>
      <ul class="list-disc pl-5 space-y-1 text-slate-700 mb-6">
        <li><strong>你好吗？</strong> (Nǐ hǎo ma?) – Bạn khỏe không?</li>
        <li><strong>你是中国人吗？</strong> (Nǐ shì zhōngguó rén ma?) – Bạn là người Trung Quốc phải không?</li>
      </ul>
    `
  },
  {
    id: 'full-214-bo-thu-tieng-trung',
    category: 'bo-thu',
    categoryName: 'Bộ Thủ & Quy Tắc Viết',
    title: 'Full 214 Bộ thủ tiếng Trung: Ý nghĩa chi tiết từng bộ thủ và cách học',
    slug: 'full-214-bo-thu-tieng-trung',
    day: '30',
    month: 'Th7',
    date: '30/07/2025',
    author: 'TS. Trần Thị Hoàng Anh',
    views: '45.800',
    format: 'PDF Ebook (Màu)',
    size: '28 MB',
    downloads: '45.200+',
    image: thumb214BoThu,
    desc: '214 bộ thủ là hệ thống thường được sử dụng để phân loại, tra cứu và giải nghĩa chữ Hán từ cổ chí kim...',
    content: `
      <p class="text-slate-700 leading-relaxed mb-4">
        214 bộ thủ Khang Hy là hệ thống phân loại chữ Hán chuẩn mực được sử dụng rộng rãi nhất. Việc học bộ thủ không chỉ giúp bạn tra từ điển nhanh chóng mà còn là chìa khóa giải mã ý nghĩa và câu chuyện đằng sau mỗi ký tự chữ Hán.
      </p>
      <h2 class="text-lg sm:text-xl font-black text-slate-800 tracking-tight mt-6 mb-3">Tại sao người mới học bắt buộc phải học bộ thủ?</h2>
      <ul class="list-disc pl-5 space-y-2 text-slate-700 mb-6">
        <li><strong>Phán đoán ý nghĩa chữ Hán:</strong> Chữ có bộ Thủy (氵) thường liên quan đến nước (hồ, biển, sông, tắm); chữ có bộ Mộc (木) liên quan đến cây cối...</li>
        <li><strong>Nhớ chữ nhanh gấp 3 lần:</strong> Thay vì nhớ 10-15 nét rời rạc, bạn chỉ cần ghép 2-3 bộ thủ lại với nhau theo một câu chuyện gợi nhớ.</li>
        <li><strong>Tra từ điển chính xác:</strong> Dù dùng từ điển giấy hay từ điển điện tử Pleco, tra theo bộ thủ luôn là kỹ năng cơ bản của người học tiếng Trung.</li>
      </ul>
    `
  },
  {
    id: 'quy-tac-viet-chu-han-8-nguyen-tac',
    category: 'bo-thu',
    categoryName: 'Bộ Thủ & Quy Tắc Viết',
    title: 'Quy Tắc Viết Chữ Hán Và 8 Nguyên Tắc Cơ Bản Cần Nhớ',
    slug: 'quy-tac-viet-chu-han-va-8-nguyen-tac-co-ban',
    day: '30',
    month: 'Th7',
    date: '30/07/2025',
    author: 'Ban Chuyên Môn Green Ocean',
    views: '28.900',
    format: 'PDF Ebook',
    size: '8 MB',
    downloads: '21.500+',
    image: thumbQuyTacViet,
    desc: 'Chữ Hán được hình thành từ nhiều nét cơ bản kết hợp theo một cấu trúc chặt chẽ. Nắm vững 8 quy tắc viết thuận bút giúp bạn viết đẹp và nhớ lâu...',
    content: `
      <p class="text-slate-700 leading-relaxed mb-4">
        Quy tắc bút thuận (trật tự viết nét chữ Hán) là nguyên tắc cốt lõi giúp các nét chữ Hán cân đối, vuông vắn và đạt tốc độ viết tự nhiên nhất.
      </p>
      <h2 class="text-lg sm:text-xl font-black text-slate-800 tracking-tight mt-6 mb-3">8 Quy tắc thuận bút vàng trong tiếng Trung:</h2>
      <ol class="list-decimal pl-5 space-y-2 text-slate-700 mb-6">
        <li><strong>Ngang trước sổ sau:</strong> Viết nét ngang trước rồi mới kéo nét sổ (VD: Chữ Thập 十).</li>
        <li><strong>Phẩy trước mác sau:</strong> Nét xiên trái trước, nét xiên phải sau (VD: Chữ Nhân 人, Bát 八).</li>
        <li><strong>Trên trước dưới sau:</strong> Viết từ phần đỉnh xuống phần đáy (VD: Chữ Nhị 二, Tam 三).</li>
        <li><strong>Trái trước phải sau:</strong> Viết từ mảng bên trái sang bên phải (VD: Chữ Minh 明, Hảo 好).</li>
        <li><strong>Ngoài trước trong sau:</strong> Viết khung bao quanh trước, viết ruột bên trong sau (VD: Chữ Nguyệt 月).</li>
        <li><strong>Vào trước đóng sau:</strong> Viết ruột xong rồi mới khóa đáy hộp (VD: Chữ Quốc 国, Nhật 日).</li>
        <li><strong>Giữa trước hai bên sau:</strong> Nét trục chính giữa viết trước, hai nét hai bên viết sau (VD: Chữ Tiểu 小, Thủy 水).</li>
        <li><strong>Nét bao quanh đáy viết sau cùng:</strong> Bộ Quai xước (辶) hoặc Dẫn (廴) luôn viết cuối cùng (VD: Chữ Tiến 进, Quá 过).</li>
      </ol>
    `
  }
];
