import React, { useState, useEffect } from 'react';
import { HelpCircle, CheckCircle2, ArrowRight, RotateCcw, Award, PhoneCall, Volume2, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { leadService } from '../services/leadService';

interface QuizQuestion {
  id: number;
  type: 'vocab' | 'audio' | 'grammar' | 'reading';
  question: string;
  chineseAudioText?: string;
  options: { text: string; isCorrect: boolean }[];
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    type: 'audio',
    question: 'Bấm biểu tượng loa để nghe và chọn nghĩa tiếng Việt chính xác của cụm từ:',
    chineseAudioText: '你好，很高兴认识你',
    options: [
      { text: 'Tạm biệt, hẹn gặp lại ngày mai', isCorrect: false },
      { text: 'Xin chào, rất vui được làm quen với bạn', isCorrect: true },
      { text: 'Cảm ơn bạn đã giúp đỡ tôi rất nhiều', isCorrect: false },
      { text: 'Xin lỗi, tôi không hiểu bạn đang nói gì', isCorrect: false }
    ],
    explanation: '你好，很高兴认识你 (Nǐ hǎo, hěn gāoxìng rènshi nǐ) là mẫu câu kinh điển khi làm quen và kết bạn.'
  },
  {
    id: 2,
    type: 'vocab',
    question: 'Thanh điệu thứ 1 (Thanh 1) trong Pinyin tiếng Trung được phát âm chuẩn như thế nào?',
    options: [
      { text: 'Đọc cao và đều giọng (độ cao 5-5 ngang)', isCorrect: true },
      { text: 'Đọc đi từ thấp lên cao như dấu sắc tiếng Việt (3-5)', isCorrect: false },
      { text: 'Đọc xuống rồi lên như dấu hỏi tiếng Việt (2-1-4)', isCorrect: false },
      { text: 'Đọc rơi dứt khoát từ cao xuống thấp như dấu nặng (5-1)', isCorrect: false }
    ],
    explanation: 'Thanh 1 (ký hiệu như ā) là âm bổng, đọc ở cao độ 5-5 giữ nguyên độ vang.'
  },
  {
    id: 3,
    type: 'grammar',
    question: 'Trong câu "我是越南人" (Wǒ shì Yuènán rén), từ "是" (shì) đóng vai trò gì trong cấu trúc ngữ pháp?',
    options: [
      { text: 'Tính từ chỉ quốc tịch', isCorrect: false },
      { text: 'Phó từ phủ định', isCorrect: false },
      { text: 'Động từ phán đoán mang nghĩa "Là"', isCorrect: true },
      { text: 'Trợ từ ngữ khí cuối câu', isCorrect: false }
    ],
    explanation: '"是" tương đương với động từ "to be" trong tiếng Anh hoặc "là" trong tiếng Việt.'
  },
  {
    id: 4,
    type: 'audio',
    question: 'Nghe phát âm và chọn số tiền chính xác được nhắc đến:',
    chineseAudioText: '这件衣服多少钱？一百五十块。',
    options: [
      { text: '50 tệ', isCorrect: false },
      { text: '105 tệ', isCorrect: false },
      { text: '150 tệ', isCorrect: true },
      { text: '500 tệ', isCorrect: false }
    ],
    explanation: '一百五十块 (Yībǎi wǔshí kuài) = 150 đồng/tệ.'
  },
  {
    id: 5,
    type: 'vocab',
    question: 'Chữ Hán "休" (nghỉ ngơi) gồm 2 bộ phận ghép lại là "人" (Người) và "木" (Cây) thuộc loại chữ gì?',
    options: [
      { text: 'Chữ Tượng hình (vẽ lại hình dáng)', isCorrect: false },
      { text: 'Chữ Hội ý (kết hợp ý nghĩa hai chữ biểu thị người tựa gốc cây nghỉ)', isCorrect: true },
      { text: 'Chữ Hình thanh', isCorrect: false },
      { text: 'Chữ Chỉ sự', isCorrect: false }
    ],
    explanation: 'Chữ 休 (xiū) là chữ Hội ý kinh điển: Một người (亻) tựa lưng vào gốc cây (木) để nghỉ ngơi.'
  },
  {
    id: 6,
    type: 'grammar',
    question: 'Điền liên từ thích hợp vào chỗ trống: "虽然汉语很难，___ 很有意思。" (Tuy tiếng Hán khó, ___ rất thú vị).',
    options: [
      { text: '但是 (dànshì) - nhưng', isCorrect: true },
      { text: '因为 (yīnwèi) - bởi vì', isCorrect: false },
      { text: '所以 (suǒyǐ) - cho nên', isCorrect: false },
      { text: '如果 (rúguǒ) - nếu như', isCorrect: false }
    ],
    explanation: 'Cặp liên từ biểu thị quan hệ chuyển ngoặt kinh điển trong HSK 3: 虽然...但是... (Tuy... nhưng...).'
  },
  {
    id: 7,
    type: 'reading',
    question: 'Đọc đoạn ngắn: "明天天气很好，我们一起去公园骑自行车吧。" Họ dự định làm gì vào ngày mai?',
    options: [
      { text: 'Ở nhà xem phim vì trời mưa', isCorrect: false },
      { text: 'Cùng nhau đi công viên đạp xe đạp', isCorrect: true },
      { text: 'Đi siêu thị mua sắm quần áo', isCorrect: false },
      { text: 'Đến trường học tiếng Trung', isCorrect: false }
    ],
    explanation: '"去公园骑自行车" = Đi công viên đạp xe đạp.'
  },
  {
    id: 8,
    type: 'vocab',
    question: 'Kỳ thi HSK 3.0 hiện nay kết hợp thi chung với kỳ thi HSKK để đánh giá kỹ năng gì?',
    options: [
      { text: 'Kỹ năng Viết luận văn chữ Hán', isCorrect: false },
      { text: 'Kỹ năng Khẩu ngữ (Nói và Phản xạ đàm thoại)', isCorrect: true },
      { text: 'Kỹ năng Đọc hiểu văn bản cổ', isCorrect: false },
      { text: 'Kỹ năng Đánh máy Pinyin', isCorrect: false }
    ],
    explanation: 'HSKK (Hànyǔ Shuǐpíng Kǒuyǔ Kǎoshì) là kỳ thi quốc tế kiểm tra năng lực Khẩu ngữ tiếng Trung bắt buộc khi thi HSK.'
  }
];

interface PlacementTestPageProps {
  onOpenLeadModal: (courseTitle?: string) => void;
}

export default function PlacementTestPage({ onOpenLeadModal }: PlacementTestPageProps): JSX.Element {
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes timer
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', email: '', branch: '' });
  const [leadSent, setLeadSent] = useState<boolean>(false);

  // Timer countdown
  useEffect(() => {
    if (showResult) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [showResult]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const playChineseAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.85; // slightly slower for learners
      window.speechSynthesis.speak(utterance);
    } else {
      alert(`Phát âm: ${text}`);
    }
  };

  const currentQ = quizQuestions[currentQIndex];

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    setAnswers({ ...answers, [currentQIndex]: idx });
  };

  const handleNext = () => {
    if (selectedOption === null) {
      alert('Vui lòng chọn 1 đáp án để tiếp tục!');
      return;
    }

    if (currentQIndex < quizQuestions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
      setSelectedOption(answers[currentQIndex + 1] ?? null);
    } else {
      handleFinishTest();
    }
  };

  const handleFinishTest = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
    setShowResult(true);
  };

  const handleRestart = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setAnswers({});
    setShowResult(false);
    setTimeLeft(600);
    setLeadSent(false);
  };

  const calculateScore = () => {
    let count = 0;
    quizQuestions.forEach((q, i) => {
      if (q.options[answers[i]]?.isCorrect) count++;
    });
    return Math.round((count / quizQuestions.length) * 100);
  };

  const score100 = calculateScore();
  const getLevelAssessment = (score: number) => {
    if (score <= 30) return { level: 'Newbie (Bắt đầu từ số 0)', course: 'Khóa Học Tiếng Trung Cơ Bản HSK 1 - 3 (3.0)', desc: 'Bạn cần xây dựng nền tảng từ đầu: Phát âm Pinyin chuẩn giọng Bắc Kinh và 214 Bộ thủ thông dụng.' };
    if (score <= 65) return { level: 'Sơ - Trung Cấp (HSK 3 - 4)', course: 'Khóa Hán Ngữ Tích Hợp HSK 4 & HSKK Trung Cấp', desc: 'Bạn đã có nền tảng ngữ pháp cơ bản, cần rèn luyện phản xạ đàm thoại nhanh và mở rộng vốn từ vựng chuyên ngành.' };
    return { level: 'Trung - Cao Cấp (HSK 5 - 6)', course: 'Khóa Luyện Thi New HSK 5 - 6 & Săn Học Bổng', desc: 'Trình độ của bạn rất tốt! Lộ trình nâng cao này sẽ giúp bạn chinh phục HSK 6 điểm số 270+ và săn học bổng du học toàn phần.' };
  };

  const assessment = getLevelAssessment(score100);

  const handleSendResultLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) {
      alert('Vui lòng nhập họ tên và số điện thoại!');
      return;
    }

    leadService.saveLead({
      name: leadForm.name,
      phone: leadForm.phone,
      email: leadForm.email,
      branch: leadForm.branch || 'Toàn quốc',
      course: `Test HSK (${score100}đ): ${assessment.course}`,
      source: 'placement_test',
      score: score100,
      level: assessment.level,
      note: `Kết quả test: ${score100}/100đ. Đề xuất: ${assessment.level}`
    });

    setLeadSent(true);
  };

  return (
    <div className="placement-test-page" style={{ backgroundColor: '#f8fafc', minHeight: '90vh', paddingBottom: '60px' }}>
      {/* Hero Banner */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #1E293B 0%, #1B7E45 100%)',
          color: '#ffffff',
          padding: '50px 20px',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(255, 255, 255, 0.15)', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '14px' }}>
            <Sparkles size={16} color="#f59e0b" /> ĐÁNH GIÁ NĂNG LỰC TRỰC TUYẾN CHUẨN KHẢO THÍ HÁN BAN
          </span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, margin: '0 0 12px 0' }}>
            KIỂM TRA TRÌNH ĐỘ TIẾNG TRUNG MIỄN PHÍ
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#e2e8f0', margin: 0, lineHeight: '1.6' }}>
            Bài kiểm tra toàn diện 4 kỹ năng: Phát âm Pinyin, Chữ Hán, Ngữ pháp và Đọc hiểu. Hệ thống tự động chấm điểm và đề xuất lộ trình tối ưu chỉ sau 5 phút!
          </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '850px', marginTop: '-30px' }}>
        <div 
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(15, 41, 66, 0.1)',
            padding: '36px',
            border: '1px solid #e2e8f0'
          }}
        >
          {showResult ? (
            /* Kết quả bài kiểm tra */
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#EAF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <Award size={46} color="#1B7E45" />
              </div>

              <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#1E293B', margin: '0 0 10px 0' }}>
                KẾT QUẢ ĐẠT ĐƯỢC: <span style={{ color: '#1B7E45' }}>{score100} / 100 ĐIỂM</span>
              </h2>

              <div 
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '24px',
                  margin: '24px 0',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'inline-block', backgroundColor: '#EAF5EE', color: '#1B7E45', fontWeight: 700, fontSize: '0.85rem', padding: '4px 12px', borderRadius: '6px', marginBottom: '8px' }}>
                  🎯 Đánh giá trình độ: {assessment.level}
                </div>
                <h3 style={{ margin: '6px 0 10px 0', fontSize: '1.3rem', color: '#1E293B' }}>
                  Khóa học đề xuất: <span style={{ color: '#1B7E45' }}>{assessment.course}</span>
                </h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.98rem', lineHeight: '1.6' }}>
                  {assessment.desc}
                </p>
              </div>

              {/* Form gửi kết quả về Zalo */}
              {leadSent ? (
                <div style={{ backgroundColor: '#EAF5EE', color: '#1B7E45', padding: '20px', borderRadius: '12px', fontWeight: 600, marginBottom: '20px' }}>
                  <CheckCircle2 size={32} style={{ margin: '0 auto 8px auto', display: 'block' }} />
                  Đã gửi chi tiết bảng phân tích năng lực về số Zalo {leadForm.phone}! Chuyên viên học vụ Thanhmaihsk sẽ kết nối hỗ trợ bạn ngay.
                </div>
              ) : (
                <form onSubmit={handleSendResultLead} style={{ backgroundColor: '#fff', border: '1px solid rgba(243, 112, 33, 0.3)', borderRadius: '14px', padding: '20px', marginBottom: '24px', textAlign: 'left' }}>
                  <h4 style={{ margin: '0 0 8px 0', color: '#F37021', fontSize: '1.05rem', fontWeight: 700 }}>
                    🎁 Nhận Bảng Phân Tích Lỗi Sai & Giáo Trình Msutong (PDF):
                  </h4>
                  <p style={{ margin: '0 0 16px 0', color: '#64748b', fontSize: '0.88rem' }}>
                    Để lại thông tin để nhận báo cáo chi tiết các câu sai và lộ trình tự học tiếng Trung tại nhà:
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '14px' }}>
                    <input
                      type="text"
                      required
                      placeholder="Họ và tên *"
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại (Zalo) *"
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1' }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      backgroundColor: '#1B7E45',
                      color: '#ffffff',
                      border: 'none',
                      padding: '12px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontSize: '0.95rem'
                    }}
                  >
                    Gửi Báo Cáo Phân Tích Chi Tiết Qua Zalo
                  </button>
                </form>
              )}

              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  onClick={handleRestart}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '8px', border: '1.5px solid #cbd5e1', backgroundColor: '#fff', fontWeight: 600, cursor: 'pointer' }}
                >
                  <RotateCcw size={16} /> Làm lại bài test
                </button>
                <button 
                  onClick={() => onOpenLeadModal(`Tư vấn lộ trình sau bài test (${score100}đ)`)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', borderRadius: '8px', border: 'none', backgroundColor: '#1B7E45', color: '#fff', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 14px rgba(27, 126, 69, 0.3)' }}
                >
                  <PhoneCall size={18} /> Đăng Ký Tư Vấn Khóa Học Này
                </button>
              </div>
            </div>
          ) : (
            /* Trắc nghiệm đang diễn ra */
            <div>
              {/* Header thanh thời gian & tiến độ */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F37021', fontWeight: 700, fontSize: '0.95rem' }}>
                  <Clock size={18} /> {formatTimer(timeLeft)}
                </div>
                <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>
                  Câu {currentQIndex + 1} / {quizQuestions.length} ({Math.round(((currentQIndex + 1) / quizQuestions.length) * 100)}%)
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', marginBottom: '28px' }}>
                <div 
                  style={{
                    height: '100%',
                    backgroundColor: '#1B7E45',
                    width: `${((currentQIndex + 1) / quizQuestions.length) * 100}%`,
                    transition: 'width 0.3s ease'
                  }}
                ></div>
              </div>

              {/* Câu hỏi */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span style={{ backgroundColor: '#EAF5EE', color: '#1B7E45', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                    {currentQ.type === 'audio' ? 'Kỹ năng Nghe' : currentQ.type === 'grammar' ? 'Ngữ pháp' : currentQ.type === 'reading' ? 'Đọc hiểu' : 'Từ vựng'}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#1E293B', fontWeight: 700, lineHeight: '1.6', margin: '0 0 16px 0' }}>
                  {currentQ.question}
                </h3>

                {/* Loa phát âm nếu là câu audio */}
                {currentQ.chineseAudioText && (
                  <div 
                    onClick={() => playChineseAudio(currentQ.chineseAudioText!)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      backgroundColor: '#EAF5EE',
                      color: '#1B7E45',
                      border: '1.5px solid rgba(27, 126, 69, 0.3)',
                      padding: '10px 18px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontWeight: 700,
                      marginBottom: '20px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Volume2 size={22} className="animate-pulse" /> Bấm để nghe phát âm tiếng Trung chuẩn
                  </div>
                )}

                {/* Options List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        style={{
                          padding: '16px 20px',
                          borderRadius: '12px',
                          border: `2px solid ${isSelected ? '#1B7E45' : '#e2e8f0'}`,
                          backgroundColor: isSelected ? '#EAF5EE' : '#ffffff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div 
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            border: `2px solid ${isSelected ? '#1B7E45' : '#cbd5e1'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: isSelected ? '#1B7E45' : 'transparent',
                            color: '#fff',
                            fontSize: '0.8rem',
                            fontWeight: 700
                          }}
                        >
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span style={{ fontSize: '1rem', color: isSelected ? '#1E293B' : '#334155', fontWeight: isSelected ? 600 : 400 }}>
                          {opt.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Nút Tiếp tục */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                <button
                  onClick={handleNext}
                  style={{
                    backgroundColor: '#1B7E45',
                    color: '#ffffff',
                    border: 'none',
                    padding: '12px 32px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(27, 126, 69, 0.3)'
                  }}
                >
                  {currentQIndex === quizQuestions.length - 1 ? 'Hoàn Thành Bài Test' : 'Câu Tiếp Theo'} <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
