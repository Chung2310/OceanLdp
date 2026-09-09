import { BranchRegion, Branch } from '../types';

export const branchRegions: BranchRegion[] = [
  { id: 'bac-ninh', name: 'Cơ Sở Bắc Ninh (2 Cơ sở)' },
  { id: 'online', name: 'Đào Tạo Trực Tuyến Toàn Quốc' }
];

export const branchesData: Branch[] = [
  {
    id: 'han-thuyen-bac-ninh',
    slug: 'han-thuyen-bac-ninh',
    region: 'bac-ninh',
    name: 'Cơ sở 1: Hàn Thuyên – Đại Phúc',
    shortName: 'Cơ sở Hàn Thuyên',
    city: 'Bắc Ninh',
    area: 'đường Hàn Thuyên, P. Đại Phúc',
    address: 'Số 567 đường Hàn Thuyên, P. Đại Phúc, TP. Bắc Ninh',
    hotline: '0961.556.677',
    email: 'contact@greenocean.edu.vn',
    hours: '08:00 - 21:30 (Thứ 2 - Chủ Nhật)',
    mapUrl: 'https://maps.google.com/?q=567+Han+Thuyen+Dai+Phuc+Bac+Ninh',
    format: 'Học trực tiếp tại cơ sở',
    targetAudience: 'Người mới bắt đầu, người học nâng cao năng lực tiếng Trung, học viên có mục tiêu HSK và HSKK',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    facilities: [
      'Phòng học máy lạnh tiêu chuẩn hiện đại',
      'Bảng tương tác & thiết bị nghe nhìn chuyên sâu',
      'Thư viện giáo trình HSK 3.0 & Tiếng Trung thương mại',
      'Bãi đỗ xe rộng rãi, thuận tiện di chuyển'
    ],
    introText: 'Lựa chọn một địa điểm học thuận tiện giúp người học duy trì lịch học đều đặn và hạn chế thời gian di chuyển, đặc biệt với những người đang học tập, sinh sống hoặc làm việc tại khu vực trung tâm TP. Bắc Ninh. Trung tâm tiếng Trung Green Ocean cơ sở Hàn Thuyên là một trong những địa điểm đào tạo trực tiếp nòng cốt thuộc hệ thống Green Ocean tại Bắc Ninh, đặt tại số 567 đường Hàn Thuyên, P. Đại Phúc. Cơ sở hướng đến nhiều nhóm học viên với nhu cầu khác nhau, từ người bắt đầu học tiếng Trung từ con số 0, người muốn phát triển khả năng sử dụng ngôn ngữ đến học viên có mục tiêu luyện thi HSK, HSKK. Việc tìm hiểu trước thông tin cơ sở, môi trường học và lộ trình đào tạo sẽ giúp người học dễ dàng lựa chọn chương trình phù hợp hơn.',
    environmentTitle: 'Không gian học tập phục vụ hình thức học trực tiếp',
    environmentText: [
      'Đây cũng là yếu tố đáng cân nhắc với những người có lịch học hoặc lịch làm việc tương đối cố định. Một khóa tiếng Trung thường cần duy trì trong một khoảng thời gian nhất định, vì vậy khoảng cách di chuyển thuận tiện có thể hỗ trợ người học duy trì lịch học ổn định hơn.',
      'Với những người vẫn đang trong giai đoạn khảo sát và muốn so sánh thêm địa điểm, có thể tham khảo danh sách hệ thống cơ sở tiếng Trung Green Ocean tại Bắc Ninh để có góc nhìn rộng hơn trước khi lựa chọn cơ sở phù hợp.',
      'Một trong những điểm người học quan tâm khi lựa chọn cơ sở là trải nghiệm học trực tiếp. Khác với hình thức học online, lớp học tại trung tâm tạo điều kiện để học viên tương tác trực tiếp với giáo viên, luyện phản xạ ngôn ngữ và tham gia các hoạt động trên lớp cùng những người học khác.',
      'Không gian lớp học tại cơ sở Hàn Thuyên được sử dụng cho quá trình giảng dạy trực tiếp, nơi học viên có thể theo dõi bài giảng, ghi chép, thực hành và trao đổi ngay trong buổi học. Với tiếng Trung, việc được nghe phát âm, sửa lỗi và thực hành thường xuyên đặc biệt quan trọng trong giai đoạn đầu. Những lỗi về thanh mẫu, vận mẫu hoặc thanh điệu nếu được phát hiện sớm sẽ giúp người học hạn chế hình thành thói quen phát âm sai về sau.',
      'Môi trường lớp học cũng tạo thêm tính kỷ luật cho quá trình học. Khi có lịch học cụ thể, nội dung bài được triển khai theo từng giai đoạn và có sự tương tác với giáo viên, học viên dễ theo dõi tiến độ hơn so với việc tự học hoàn toàn mà không có lộ trình rõ ràng.',
      'Đối với người đang sinh sống hoặc làm việc quanh khu vực nút giao Đại Phúc, hệ thống Green Ocean còn có Cơ sở 2 Ngã 6 Đại Phúc, tạo thêm sự linh hoạt cho người học lựa chọn vị trí gần mình nhất.'
    ],
    curriculumTitle: 'Giảng dạy theo lộ trình thay vì học rời rạc từng nội dung',
    curriculumText: [
      'Một vấn đề phổ biến của người mới học tiếng Trung là tiếp cận kiến thức theo kiểu rời rạc. Người học có thể biết một số từ vựng, mẫu câu hoặc chữ Hán nhưng lại chưa hình thành được hệ thống kiến thức để sử dụng ngôn ngữ trong những tình huống cụ thể.',
      'Tại Trung tâm tiếng Trung Green Ocean cơ sở Hàn Thuyên, việc học nên được nhìn theo một lộ trình gồm nhiều giai đoạn liên tiếp. Với người bắt đầu từ con số 0, bước đầu tiên là xây dựng nền tảng phát âm, làm quen với chữ Hán, từ vựng và các cấu trúc ngữ pháp cơ bản. Khi nền tảng dần ổn định, người học tiếp tục mở rộng vốn từ, tăng khả năng nghe hiểu, đọc hiểu và sử dụng câu trong giao tiếp.',
      'Việc học theo lộ trình cũng giúp học viên xác định được mình đang ở giai đoạn nào. Người mới bắt đầu không cần học ngay những cấu trúc quá phức tạp, trong khi người đã có kiến thức nền lại có thể tập trung nhiều hơn vào kỹ năng còn yếu.',
      'HSKK lại tập trung nhiều hơn vào khả năng sử dụng tiếng Trung bằng lời nói. Vì vậy, ngoài kiến thức ngôn ngữ, người học cần luyện phát âm, phản xạ và khả năng diễn đạt nội dung bằng câu tương đối hoàn chỉnh. Đây cũng là lý do quá trình thực hành và được chỉnh sửa trực tiếp có ý nghĩa với người đang chuẩn bị cho phần đánh giá khẩu ngữ.',
      'Tuy nhiên, lựa chọn lớp không nên chỉ dựa trên mong muốn đạt một cấp độ nhất định. Nếu nền tảng hiện tại còn cách khá xa mục tiêu, người học có thể cần một giai đoạn củng cố trước khi chuyển sang luyện thi chuyên sâu. Xác định đúng trình độ ban đầu sẽ giúp lộ trình thực tế hơn và hạn chế tình trạng chạy theo cấp độ nhưng thiếu kiến thức nền cần thiết.'
    ],
    adviceTitle: 'Lựa chọn lớp và đăng ký học tại cơ sở Hàn Thuyên – Đại Phúc',
    adviceText: [
      'Trước khi đăng ký tại Trung tâm tiếng Trung Green Ocean cơ sở Hàn Thuyên, người học có thể cân nhắc đồng thời ba yếu tố gồm trình độ hiện tại, mục tiêu sử dụng tiếng Trung và thời gian có thể dành cho việc học. Đây là những yếu tố trực tiếp ảnh hưởng đến việc lựa chọn chương trình và khả năng duy trì tiến độ trong thời gian dài.',
      'Người mới học nên ưu tiên xây dựng nền tảng thay vì đặt mục tiêu cấp độ quá nhanh. Người đã có kiến thức có thể xác định rõ phần kỹ năng còn yếu để lựa chọn chương trình phù hợp hơn. Với học viên cần HSK hoặc HSKK cho kế hoạch học tập, công việc hay những mục tiêu cá nhân khác, việc xác định thời điểm cần chứng chỉ cũng giúp chủ động hơn khi xây dựng kế hoạch học.'
    ]
  },
  {
    id: 'nga-6-dai-phuc',
    slug: 'nga-6-dai-phuc',
    region: 'bac-ninh',
    name: 'Cơ sở 2: Ngã 6 Phường Đại Phúc',
    shortName: 'Cơ sở Ngã 6 Đại Phúc',
    city: 'Bắc Ninh',
    area: 'Ngã 6 Phường Đại Phúc',
    address: 'Ngã 6 Phường Đại Phúc, TP. Bắc Ninh',
    hotline: '0961.556.677',
    email: 'contact@greenocean.edu.vn',
    hours: '08:00 - 21:30 (Thứ 2 - Chủ Nhật)',
    mapUrl: 'https://maps.google.com/?q=Nga+6+Dai+Phuc+Bac+Ninh',
    format: 'Học trực tiếp tại cơ sở',
    targetAudience: 'Người mới bắt đầu, người đi làm tại KCN Quế Võ, VSIP, Tiên Sơn, Yên Phong, sinh viên và người luyện thi HSK',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
    facilities: [
      'Vị trí đắc địa tại nút giao thông trung tâm TP. Bắc Ninh',
      'Không gian học tập chuẩn sư phạm bài bản',
      'Thuận tiện cho học sinh, sinh viên và người đi làm tại KCN Quế Võ, VSIP, Yên Phong',
      'Đội ngũ giáo vụ hỗ trợ 24/7'
    ],
    introText: 'Lựa chọn một địa điểm học thuận tiện giúp người học duy trì lịch học đều đặn và hạn chế thời gian di chuyển, đặc biệt với những người đang học tập, sinh sống hoặc làm việc tại các trục đường huyết mạch TP. Bắc Ninh và các khu công nghiệp phụ cận. Trung tâm tiếng Trung Green Ocean cơ sở Ngã 6 Đại Phúc sở hữu vị trí giao thông chiến lược ngay cửa ngõ thành phố. Cơ sở hướng đến nhiều nhóm học viên với nhu cầu khác nhau, từ người bắt đầu học tiếng Trung từ con số 0, người muốn phát triển khả năng sử dụng ngôn ngữ đến học viên có mục tiêu luyện thi HSK, HSKK. Việc tìm hiểu trước thông tin cơ sở, môi trường học và lộ trình đào tạo sẽ giúp người học dễ dàng lựa chọn chương trình phù hợp hơn.',
    environmentTitle: 'Không gian học tập phục vụ hình thức học trực tiếp',
    environmentText: [
      'Khoảng cách di chuyển thuận tiện là điểm cộng vượt trội của cơ sở Ngã 6 Đại Phúc, giúp học viên dễ dàng đi học ngay sau giờ làm việc tại các khu công nghiệp lớn như Quế Võ, VSIP hay Yên Phong mà không lo tắc đường hay trễ giờ.',
      'Với những người vẫn đang trong giai đoạn khảo sát và muốn so sánh thêm địa điểm, có thể tham khảo thêm Cơ sở 1 Hàn Thuyên hoặc lớp học trực tuyến của Green Ocean để cân đối lịch trình tối ưu nhất.',
      'Trải nghiệm học trực tiếp tại trung tâm mang lại sự tập trung tối đa. Phòng học cách âm chuẩn, trang bị máy lạnh, ánh sáng tự nhiên và bảng thông minh hỗ trợ việc tiếp thu bài giảng nhanh chóng.',
      'Học viên được giáo viên trực tiếp uốn nắn từng thanh điệu, thanh mẫu, vận mẫu, đồng thời tham gia các hoạt động đóng vai giao tiếp tình huống thực tế ngay trên lớp.',
      'Kỷ luật học tập nghiêm túc cùng sự đồng hành của giáo vụ giúp học viên giải đáp thắc mắc bài tập về nhà và đạt điểm số cam kết trong từng kỳ thi HSK.'
    ],
    curriculumTitle: 'Giảng dạy theo lộ trình thay vì học rời rạc từng nội dung',
    curriculumText: [
      'Học tiếng Trung hiệu quả đòi hỏi một khung chương trình có hệ thống chặt chẽ, tránh việc nhớ trước quên sau hoặc chỉ học ngữ pháp thụ động.',
      'Tại Green Ocean cơ sở Ngã 6 Đại Phúc, lộ trình Hán ngữ Tích hợp 3.0 được thiết kế chuyên biệt cho từng chặng đường: từ phát âm chuẩn Pinyin, bộ thủ, ngữ pháp câu đến luyện phản xạ 4 kỹ năng Nghe - Nói - Đọc - Viết.',
      'Học viên đi làm được trang bị thêm kỹ năng giao tiếp công sở, từ vựng chuyên ngành sản xuất, thương mại và xuất nhập khẩu.',
      'Chương trình luyện thi HSK và HSKK định hướng cấu trúc đề thi mới nhất, rèn luyện kỹ năng dịch nói và dịch viết trực tiếp để đạt điểm số tối đa.'
    ],
    adviceTitle: 'Lựa chọn lớp và đăng ký học tại cơ sở Ngã 6 Đại Phúc',
    adviceText: [
      'Trước khi đăng ký, bạn sẽ được làm bài kiểm tra năng lực đầu vào miễn phí để xác định chính xác trình độ và nhận tư vấn ca học phù hợp nhất (ca tối trong tuần hoặc các lớp thứ 7, Chủ Nhật).',
      'Trung tâm luôn có chính sách hỗ trợ học bù linh hoạt và ưu đãi học phí hấp dẫn cho học viên đăng ký sớm hoặc theo nhóm.'
    ]
  },
  {
    id: 'online-nationwide',
    slug: 'online-nationwide',
    region: 'online',
    name: 'Cơ sở Đào Tạo Trực Tuyến Toàn Quốc',
    shortName: 'Lớp Trực Tuyến Toàn Quốc',
    city: 'Toàn Quốc',
    area: 'Lớp học tương tác 2 chiều (Google Meet)',
    address: 'Nền tảng học trực tuyến tương tác 2 chiều (Học viên 63 tỉnh thành & Quốc tế)',
    hotline: '0961.556.677',
    email: 'contact@greenocean.edu.vn',
    hours: '08:00 - 22:00 (Linh hoạt nhiều khung giờ)',
    mapUrl: 'https://greenocean.edu.vn',
    format: 'Học trực tuyến tương tác 2 chiều (Google Meet)',
    targetAudience: 'Học viên 63 tỉnh thành, du học sinh, người đi làm bận rộn, người ở xa không có điều kiện đến lớp trực tiếp',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    facilities: [
      'Tương tác trực tiếp 100% cùng Giảng viên Thạc sĩ nòng cốt',
      'Video bài giảng lưu trữ xem lại trọn đời không giới hạn',
      'Giáo vụ theo sát tiến độ, chấm bài & chữa lỗi chi tiết từng buổi',
      'Cam kết chuẩn đầu ra HSK bằng văn bản'
    ],
    introText: 'Không bị giới hạn bởi khoảng cách địa lý, Cơ sở Đào Tạo Trực Tuyến Toàn Quốc của Green Ocean mang lại giải pháp học tiếng Trung chất lượng cao cho hàng nghìn học viên tại khắp 63 tỉnh thành cũng như kiều bào và du học sinh ở nước ngoài. Lớp học được tổ chức trực tiếp qua Google Meet với tương tác hai chiều 100% cùng Giảng viên Thạc sĩ, sĩ số giới hạn chỉ từ 12-15 học viên, đảm bảo mọi học viên đều được giáo viên gọi phát biểu và sửa lỗi chi tiết trong từng buổi học.',
    environmentTitle: 'Môi trường học trực tuyến tương tác hai chiều chất lượng tương đương Offline',
    environmentText: [
      'Nhiều người e ngại học online sẽ thiếu tập trung hoặc thụ động xem video quay sẵn. Tại Green Ocean, 100% thời lượng là học trực tiếp cùng giảng viên theo thời gian thực.',
      'Giảng viên sử dụng giáo án điện tử sinh động, bảng viết cảm ứng và các công cụ tương tác nhóm giúp lớp học luôn sôi nổi, hào hứng.',
      'Toàn bộ buổi học đều được ghi hình (Record) tự động với chất lượng HD để học viên dễ dàng xem lại bài giảng bất cứ lúc nào, không lo bị mất bài khi có việc bận.',
      'Đội ngũ trợ giảng và giáo vụ chuyên trách theo sát từng buổi học, chữa bài tập ghi âm phát âm, chấm bài tập viết chữ Hán và đôn đốc tiến độ 24/7.'
    ],
    curriculumTitle: 'Lộ trình chuẩn New HSK 3.0 & Phát triển phản xạ đàm thoại',
    curriculumText: [
      'Chương trình học trực tuyến tuân thủ nghiêm ngặt chuẩn giáo trình Msutong bản quyền và khung đánh giá New HSK 3.0.',
      'Học viên được rèn luyện phản xạ giao tiếp tự nhiên qua các tình huống đàm thoại thực tế: giao thương hàng hóa, đàm phán hợp đồng, phỏng vấn xin việc và du lịch.',
      'Luyện đề thi HSK/HSKK trên nền tảng thi thử online sát với kỳ thi thực tế trên máy tính của Hanban.'
    ],
    adviceTitle: 'Đăng ký và nhận tài khoản học trực tuyến tại Green Ocean',
    adviceText: [
      'Chỉ cần máy tính hoặc điện thoại có kết nối Internet, bạn đã có thể tham gia lớp học chất lượng cao cùng các Giảng viên hàng đầu của Green Ocean.',
      'Đăng ký ngay hôm nay để nhận trọn bộ Ebook giáo trình Msutong bản quyền, phần mềm luyện viết chữ Hán và học bổng ưu đãi dành riêng cho lớp Online.'
    ]
  }
];
