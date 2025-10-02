import { useState } from 'react';
import HeroSection from './components/HeroSection';
import ProgramSummary from './components/ProgramSummary';
import CourseCurriculum from './components/CourseCurriculum';
import SkillsSection from './components/SkillsSection';
import Statistics from './components/Statistics';
import LMSBanner from './components/LMSBanner';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import EnrollmentSidebar from './components/EnrollmentSidebar';
import CountdownTimer from './components/CountdownTimer';
import ValueComparisonTable from './components/ValueComparisonTable';
import SyllabusDownload from './components/SyllabusDownload';
import SkillsAssessment from './components/SkillsAssessment';
import { mockLearningPathData } from './data/mockData';

function App() {
  const [lang] = useState<'en' | 'ar'>('en');
  const data = mockLearningPathData;

  return (
    <div className="min-h-screen bg-white">
      <CountdownTimer lang={lang} />

      <HeroSection data={data} lang={lang} />

      <ProgramSummary data={data} lang={lang} />

      <div className="container mx-auto max-w-7xl px-4 md:px-5 py-4 md:py-10">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <main className="flex-1 min-w-0 order-2 lg:order-1">
            <CourseCurriculum data={data} lang={lang} />

            <SyllabusDownload data={data} lang={lang} />

            {data.testimonials && data.testimonials.length > 0 && (
              <Testimonials testimonials={data.testimonials} lang={lang} />
            )}

            {data.skills && data.skills.length > 0 && (
              <SkillsSection skills={data.skills} lang={lang} />
            )}

            <Statistics lang={lang} />

            <LMSBanner lang={lang} />
          </main>

          <aside className="lg:w-auto order-1 lg:order-2" id="enrollment">
            <EnrollmentSidebar data={data} lang={lang} />
          </aside>
        </div>
      </div>

      <ValueComparisonTable data={data} lang={lang} />

      <SkillsAssessment lang={lang} />

      <div className="container mx-auto max-w-7xl px-4 md:px-5">
        {data.faq_list && data.faq_list.length > 0 && (
          <FAQSection faqs={data.faq_list} lang={lang} />
        )}

        <ContactForm lang={lang} />
      </div>

      <footer className="bg-gray-900 text-white py-8 md:py-12 mt-10 md:mt-20 mb-16 lg:mb-0">
        <div className="container mx-auto max-w-7xl px-4 md:px-5 text-center">
          <p className="text-xs md:text-sm text-gray-400">
            © 2025 Tharwah Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
