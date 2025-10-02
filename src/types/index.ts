export interface Course {
  id: string;
  title: string;
  duration: string;
  thumbnail?: string;
  price: number;
}

export interface Skill {
  skill_name: string;
  skill_icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  text: string;
  author_name: string;
  author_position: string;
  author_image?: string;
}

export interface LearningPathData {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  what_included?: string;
  bundle_price: number;
  individual_total: number;
  savings: number;
  savings_percent: number;
  total_duration: string;
  courses: Course[];
  skills?: Skill[];
  cta_url: string;
  faq_list?: FAQ[];
  testimonials?: Testimonial[];
  enrolled_students?: string;
  language_available?: string;
  learning_method?: string;
}

export interface Language {
  en: Record<string, string>;
  ar: Record<string, string>;
}
