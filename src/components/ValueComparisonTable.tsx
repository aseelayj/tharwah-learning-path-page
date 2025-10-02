import type { LearningPathData } from '../types';

interface ValueComparisonTableProps {
  data: LearningPathData;
  lang?: 'en' | 'ar';
}

export default function ValueComparisonTable({ data, lang = 'en' }: ValueComparisonTableProps) {
  const copy = {
    en: {
      title: 'Pricing Comparison',
      individualPrice: 'Individual Courses',
      bundlePrice: 'Bundle',
      save: 'Save',
      getBundle: 'Enroll in Bundle'
    },
    ar: {
      title: 'مقارنة الأسعار',
      individualPrice: 'الدورات الفردية',
      bundlePrice: 'الحزمة',
      save: 'وفر',
      getBundle: 'التسجيل في الحزمة'
    }
  };

  const t = copy[lang];
  const isOnSale = data.savings > 0;

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto max-w-5xl px-4 md:px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2E3948] mb-8 md:mb-12">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">{t.individualPrice}</h3>

            <div className="space-y-3 mb-6">
              {data.courses.map((course) => (
                <div key={course.id} className="flex justify-between items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-gray-700 flex-1">{course.title}</span>
                  <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                    SAR {course.price.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t-2 border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-base font-bold text-gray-900">Total</span>
                <span className="text-2xl md:text-3xl font-bold text-gray-900">
                  SAR {data.individual_total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-[#187FD3] rounded-xl p-6 md:p-8 relative">
            {isOnSale && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#2E8B2E] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                  {data.savings_percent}% OFF
                </span>
              </div>
            )}

            <h3 className="text-lg font-semibold text-[#187FD3] mb-6 text-center">{t.bundlePrice}</h3>

            <div className="bg-white rounded-lg p-6 mb-6 text-center">
              {isOnSale && (
                <div className="text-lg line-through text-gray-400 mb-2">
                  SAR {data.individual_total.toLocaleString()}
                </div>
              )}
              <div className="text-3xl md:text-4xl font-bold text-[#187FD3] mb-2">
                SAR {data.bundle_price.toLocaleString()}
              </div>
              <p className="text-sm text-gray-600">All {data.courses.length} courses included</p>
            </div>

            {isOnSale && (
              <div className="bg-white rounded-lg p-4 mb-6 text-center border-2 border-[#2E8B2E]">
                <div className="text-sm text-gray-600 mb-1">{t.save}</div>
                <div className="text-2xl md:text-3xl font-bold text-[#2E8B2E]">
                  SAR {data.savings.toLocaleString()}
                </div>
              </div>
            )}

            <a
              href={data.cta_url}
              className="block w-full text-center bg-[#187FD3] hover:bg-[#1668A8] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {t.getBundle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
