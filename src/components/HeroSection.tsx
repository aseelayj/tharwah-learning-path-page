import type { LearningPathData } from '../types';

interface HeroSectionProps {
  data: LearningPathData;
  lang?: 'en' | 'ar';
}

export default function HeroSection({ data, lang = 'en' }: HeroSectionProps) {
  const copy = {
    en: {
      courses: 'Comprehensive Courses',
      save: 'Save',
      enrollNow: 'Enroll Now',
      learnMore: 'View Curriculum'
    },
    ar: {
      courses: 'دورات شاملة',
      save: 'وفر',
      enrollNow: 'سجل الآن',
      learnMore: 'عرض المنهج'
    }
  };

  const t = copy[lang];
  const isOnSale = data.savings > 0;

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE4N0ZEMyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto max-w-7xl px-4 md:px-5 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3948] mb-4 md:mb-5 leading-tight px-2">
            {data.title}
          </h1>

          {data.excerpt && (
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto px-2">
              {data.excerpt}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-2">
            <a
              href={data.cta_url}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#187FD3] hover:bg-[#1668A8] text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              {t.enrollNow}
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <button
              onClick={() => document.querySelector('#course-curriculum')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#2E3948] font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 border-2 border-gray-200 hover:border-[#187FD3] hover:-translate-y-0.5"
            >
              {t.learnMore}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
