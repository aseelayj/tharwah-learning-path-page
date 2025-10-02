import type { LearningPathData } from '../types';

export const mockLearningPathData: LearningPathData = {
  id: '1',
  title: 'Professional Digital Marketing Mastery',
  excerpt: 'Master the complete digital marketing ecosystem with hands-on projects and industry-recognized certification',
  content: '',
  bundle_price: 7500,
  individual_total: 10500,
  savings: 3000,
  savings_percent: 29,
  total_duration: '120 hours / 15 days',
  cta_url: '#enroll',
  courses: [
    {
      id: '1',
      title: 'Digital Marketing Fundamentals',
      duration: '30 hours',
      price: 2500
    },
    {
      id: '2',
      title: 'SEO & Content Marketing',
      duration: '25 hours',
      price: 2800
    },
    {
      id: '3',
      title: 'Social Media Marketing',
      duration: '35 hours',
      price: 3200
    },
    {
      id: '4',
      title: 'Email Marketing & Automation',
      duration: '30 hours',
      price: 2000
    }
  ],
  skills: [
    { skill_name: 'Search Engine Optimization' },
    { skill_name: 'Content Strategy' },
    { skill_name: 'Social Media Management' },
    { skill_name: 'Google Analytics' },
    { skill_name: 'Email Marketing' },
    { skill_name: 'Marketing Automation' },
    { skill_name: 'Facebook Ads' },
    { skill_name: 'Google Ads' },
    { skill_name: 'Conversion Optimization' },
    { skill_name: 'Marketing Analytics' }
  ],
  faq_list: [
    {
      question: 'What is included in this learning path?',
      answer: 'This learning path includes all the courses listed above, comprehensive study materials, hands-on projects, quizzes, and a professional certificate upon completion. You will have lifetime access to all course content and future updates.'
    },
    {
      question: 'How long do I have access to the courses?',
      answer: 'You get lifetime access to all courses in this learning path. This means you can learn at your own pace and revisit the materials whenever you need to refresh your knowledge.'
    },
    {
      question: 'Can I take the courses in any order?',
      answer: 'While you have the flexibility to access all courses immediately, we recommend following the suggested order as each course builds upon the knowledge from the previous one for optimal learning outcomes.'
    },
    {
      question: 'Do I get a certificate for completing the learning path?',
      answer: 'Yes, upon successful completion of all courses in the learning path, you will receive a professional certificate that you can add to your resume and LinkedIn profile.'
    },
    {
      question: 'Is there any support available if I have questions?',
      answer: 'Yes, you will have access to our support team and community forums where you can ask questions, get help from instructors, and connect with fellow learners.'
    }
  ],
  testimonials: [
    {
      text: 'At the National eLearning Center, we worked with Tharwah on an essential project which was the Organizational Transformation Strategy. During our engagement with Tharwah, we had an excellent experience as the project team and leadership from Tharwah pushed beyond the limits to meet our requirements and needs. Tharwah uses best-fit global practices and methodologies in carrying out their consultancy work. What we liked the most is their flexibility, attention to details, and passion to deliver high quality which exceeded the expectations.',
      author_name: 'Dr. Rami I. Alsakran',
      author_position: 'Deputy Director General for Planning & Development | National eLearning Center'
    }
  ],
  enrolled_students: '1,200+',
  language_available: 'English / Arabic',
  learning_method: 'Onsite / Online'
};
