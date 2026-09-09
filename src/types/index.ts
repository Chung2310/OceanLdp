export interface CourseCategory {
  id: string;
  name: string;
  count: number;
}

export interface CurriculumPhase {
  phase: string;
  topics: string[];
}

export interface Course {
  id: string;
  category: string;
  title: string;
  slug: string;
  badge?: string;
  format: string;
  rating: number;
  reviewsCount: number;
  studentsCount: string;
  duration: string;
  schedule: string;
  classSize: string;
  originalPrice: number;
  salePrice: number;
  discountPercent?: number;
  priceUnit?: string;
  image: string;
  thumbnail: string;
  shortDesc: string;
  targetAudience: string[];
  outcomes: string[];
  curriculum: CurriculumPhase[];
  textbook: string;
  gifts: string[];
  classCode?: string;
  totalSessions?: string;
  sessionDuration?: string;
  contentPhasesSummary?: string[];
  scholarshipText?: string;
  benefits?: string[];
  objectives?: string[];
  contentTopics?: string[];
  skills?: {
    listen: string;
    speak: string;
    read: string;
    write: string;
  };
  kidLevels?: Array<{
    name: string;
    age: string;
    duration: string;
    objectives: string[];
    topics: string;
    outcome: string;
  }>;
}

export interface MsutongBook {
  id: string;
  title: string;
  category: string;
  price: number;
  salePrice: number;
  publisher: string;
  image: string;
  desc: string;
}

export interface ScheduleItem {
  id: string;
  courseName: string;
  courseId: string;
  branch: string;
  branchId: string;
  days: string;
  time: string;
  timeSlot: 'sang' | 'chieu' | 'toi';
  startDate: string;
  format: string;
  teacher: string;
  fee: number;
  originalFee: number;
  status: string;
  statusType: 'available' | 'filling' | 'full';
  seatsLeft?: number;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  degree: string;
  university: string;
  certificates: string;
  experience: string;
  image: string;
  quote: string;
  bio: string;
  courses: string[];
  rating: number;
  videoUrl?: string;
}

export interface BranchRegion {
  id: string;
  name: string;
}

export interface Branch {
  id: string;
  region: string;
  name: string;
  address: string;
  hotline: string;
  email: string;
  hours: string;
  mapUrl: string;
  image: string;
  facilities: string[];
  slug?: string;
  shortName?: string;
  city?: string;
  area?: string;
  format?: string;
  targetAudience?: string;
  introText?: string;
  environmentTitle?: string;
  environmentText?: string[];
  curriculumTitle?: string;
  curriculumText?: string[];
  adviceTitle?: string;
  adviceText?: string[];
  storefrontImage?: string;
  classroomImage?: string;
  teachingImage?: string;
}

export interface StudyAbroadProgram {
  id: string;
  title: string;
  badge: string;
  type: string;
  stipend: string;
  benefits: string[];
  requirements: string[];
  universities: string[];
  deadline: string;
  image: string;
  desc: string;
}

export interface ResourceItem {
  id: string;
  category: string;
  title: string;
  format: string;
  size: string;
  downloads: string;
  author: string;
  image: string;
  desc: string;
}

export interface NewsPost {
  id: string;
  category: string;
  categoryName: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  views: string;
  image: string;
  excerpt: string;
  content: string;
  day?: string;
  month?: string;
  layoutType?: 'standard' | 'text-only';
  infographicImage?: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}
