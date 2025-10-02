import type { LearningPathData } from '../types';

interface CourseCurriculumProps {
  data: LearningPathData;
  lang?: 'en' | 'ar';
}

export default function CourseCurriculum({ data, lang = 'en' }: CourseCurriculumProps) {
  const copy = {
    en: {
      sectionTitle: 'Learning Path Curriculum',
      sectionSubtitle: 'A structured journey through comprehensive modules designed to build your expertise',
      module: 'Module',
      course: 'COURSE',
      learners: 'learners',
      value: 'Value:',
      viewDetails: 'View Details',
      by: 'By:',
      updated: 'Updated',
      providerName: 'Tharwah Academy Expert'
    },
    ar: {
      sectionTitle: 'منهج المسار التعليمي',
      sectionSubtitle: 'رحلة منظمة عبر وحدات شاملة مصممة لبناء خبرتك',
      module: 'الوحدة',
      course: 'دورة',
      learners: 'متعلم',
      value: 'القيمة:',
      viewDetails: 'عرض التفاصيل',
      by: 'بواسطة:',
      updated: 'تحديث',
      providerName: 'خبير أكاديمية ثروة'
    }
  };

  const t = copy[lang];

  const coursesWithDetails = data.courses.map((course, index) => ({
    ...course,
    moduleNumber: index + 1,
    thumbnail: 'https://academy.tharwah.net/mystaging01/wp-content/uploads/2025/05/Certificate-in-Generative-AI-in-HR-1-1-300x300.png',
    providerLogo: 'https://academy.tharwah.net/mystaging01/wp-content/uploads/2025/08/Frame-3.svg',
    instructor: t.providerName,
    lastUpdate: 'Oct 2025',
    description: 'A high-impact training experience designed to equip professionals with cutting-edge tools to enhance efficiency, decision-making, and innovation in their field.',
    learnersCount: '5,757',
    price: Math.round(data.individual_total / data.courses.length),
    url: '#course-' + course.id
  }));

  return (
    <section id="course-curriculum" className="mb-8 md:mb-12">
      <div className="mb-6 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2E3948] mb-2 md:mb-3">
          {t.sectionTitle}
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          {t.sectionSubtitle}
        </p>
      </div>

      <div className="space-y-3 md:space-y-4">
        {coursesWithDetails.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 transition-all duration-300 hover:shadow-md hover:border-[#187FD3] relative"
            >
              <div className="hidden md:block absolute top-5 right-5 h-10">
                <img
                  src={course.providerLogo}
                  alt="Provider"
                  className="h-10 w-auto max-w-[120px] object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>

              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-5">
                <span className="bg-sky-50 text-[#187FD3] px-2 md:px-3 py-1 rounded-md text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                  {t.module} {course.moduleNumber}
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 ml-auto md:mr-36">
                  {t.course}
                </span>
              </div>

              <div className="flex md:grid md:grid-cols-[160px_1fr] gap-3 md:gap-5 items-start flex-col md:flex-row">
                <div className="w-full md:w-40 h-[180px] md:h-[100px] rounded-lg overflow-hidden bg-gray-100 relative flex-shrink-0">
                  <a href={course.url}>
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                </div>

                <div className="flex-1 w-full">
                  <h3 className="text-base md:text-lg font-semibold mb-2 leading-snug text-[#2E3948] pr-0 md:pr-32">
                    <a
                      href={course.url}
                      className="text-[#2E3948] hover:text-[#187FD3] transition-colors duration-200"
                    >
                      {course.title}
                    </a>
                  </h3>

                  <div className="text-[11px] md:text-xs text-gray-600 mb-2 md:mb-3 flex items-center gap-2 md:gap-3 flex-wrap">
                    <span>{t.by} {course.instructor}</span>
                    <span className="pl-2 md:pl-3 border-l border-gray-300">
                      {t.updated} {course.lastUpdate}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-3 line-clamp-2 md:line-clamp-none">
                    {course.description}
                  </p>

                  <div className="flex gap-3 md:gap-5 items-center flex-wrap pt-2 md:pt-3 border-t border-gray-100">
                    <span className="text-[10px] md:text-xs text-gray-600 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="md:w-[14px] md:h-[14px]">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {course.learnersCount} {t.learners}
                    </span>

                    <span className="text-[10px] md:text-xs text-gray-600">
                      {t.value}
                      <strong className="text-[#187FD3] text-sm md:text-base ml-1">
                        {course.price} SAR
                      </strong>
                    </span>

                    <a
                      href={course.url}
                      className="ml-auto text-[#187FD3] text-[10px] md:text-xs font-medium transition-all duration-200 inline-flex items-center gap-1 hover:gap-2 hover:text-[#1668A8]"
                    >
                      {t.viewDetails}
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[14px] md:h-[14px]">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
