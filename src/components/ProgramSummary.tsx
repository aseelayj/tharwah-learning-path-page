import type { LearningPathData } from '../types';

interface ProgramSummaryProps {
  data: LearningPathData;
  lang?: 'en' | 'ar';
}

export default function ProgramSummary({ data, lang = 'en' }: ProgramSummaryProps) {
  const copy = {
    en: {
      duration: 'Duration',
      language: 'Language',
      enrolledStudents: 'Enrolled Students',
      learningMethod: 'Learning Method'
    },
    ar: {
      duration: 'المدة',
      language: 'اللغة',
      enrolledStudents: 'الطلاب المسجلون',
      learningMethod: 'طريقة التعلم'
    }
  };

  const t = copy[lang];

  const enrolledStudents = data.enrolled_students || '1,200+';
  const languageAvailable = data.language_available || (lang === 'en' ? 'English / Arabic' : 'الإنجليزية / العربية');
  const learningMethod = data.learning_method || (lang === 'en' ? 'Onsite / Online' : 'حضوري / عن بُعد');
  const durationDisplay = data.total_duration || (lang === 'en' ? 'Self-paced' : 'ذاتي');

  const cards = [
    {
      icon: 'https://academy.tharwah.net/wp-content/uploads/2025/07/Duration-1.svg',
      title: t.duration,
      value: durationDisplay
    },
    {
      icon: 'https://academy.tharwah.net/wp-content/uploads/2025/07/Language-1.svg',
      title: t.language,
      value: languageAvailable
    },
    {
      icon: 'https://academy.tharwah.net/wp-content/uploads/2025/07/Enrolled-Students-1.svg',
      title: t.enrolledStudents,
      value: enrolledStudents
    },
    {
      icon: 'https://academy.tharwah.net/wp-content/uploads/2025/07/Learning-Method-1.svg',
      title: t.learningMethod,
      value: learningMethod
    }
  ];

  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-5">
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 flex items-start gap-3 min-h-[85px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[#187FD3]"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <img src={card.icon} alt={card.title} className="w-10 h-10 object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h6 className="text-xs font-normal text-gray-600 mb-1 leading-tight">
                  {card.title}
                </h6>
                <p className="text-base font-semibold text-[#2E3948] leading-tight break-words">
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
          <div className="flex gap-3 pb-2" style={{ width: 'max-content' }}>
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-3 flex items-start gap-2.5 min-h-[75px] w-[75%] flex-shrink-0 snap-start"
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <img src={card.icon} alt={card.title} className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h6 className="text-[10px] font-normal text-gray-600 mb-1 leading-tight">
                    {card.title}
                  </h6>
                  <p className="text-xs font-semibold text-[#2E3948] leading-tight break-words">
                    {card.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
