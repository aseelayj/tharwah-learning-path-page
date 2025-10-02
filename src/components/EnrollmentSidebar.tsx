import { Check } from 'lucide-react';
import type { LearningPathData } from '../types';

interface EnrollmentSidebarProps {
  data: LearningPathData;
  lang?: 'en' | 'ar';
}

export default function EnrollmentSidebar({ data, lang = 'en' }: EnrollmentSidebarProps) {
  const copy = {
    en: {
      enrollNow: 'Enroll Now',
      enrollToday: 'Start Learning Today!',
      priceLabel: 'Price:',
      orSplit: 'Or split into',
      payments: 'payments',
      month: 'month',
      noInterest: '0% interest • No hidden fees',
      coursesIncluded: 'Courses Included',
      totalDuration: 'Total Duration',
      certificate: 'Professional Certificate',
      lifetimeAccess: 'Lifetime Access',
      youSave: '✨ You save SAR',
      onThisBundle: 'on this bundle!',
      save: 'Save'
    },
    ar: {
      enrollNow: 'سجل الآن',
      enrollToday: 'ابدأ التعلم اليوم!',
      priceLabel: 'السعر:',
      orSplit: 'أو قسّط على',
      payments: 'دفعات',
      month: 'شهر',
      noInterest: 'بدون فوائد • بدون رسوم خفية',
      coursesIncluded: 'الدورات المشمولة',
      totalDuration: 'المدة الإجمالية',
      certificate: 'شهادة احترافية',
      lifetimeAccess: 'وصول مدى الحياة',
      youSave: '✨ وفر',
      onThisBundle: 'ر.س على هذه الحزمة!',
      save: 'وفر'
    }
  };

  const t = copy[lang];
  const isOnSale = data.savings > 0;
  const installmentMonths = data.bundle_price < 5000 ? 4 : 12;
  const monthlyPayment = Math.round(data.bundle_price / installmentMonths);

  return (
    <>
      <section className="hidden lg:block w-full max-w-[480px] lg:min-w-[400px] lg:sticky lg:top-24">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-8 shadow-sm">
        <div className="mb-5 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-[#2E3948] mb-2">{t.enrollNow}</h2>
          <p className="text-xs md:text-sm text-gray-600">{t.enrollToday}</p>
        </div>

        <div className="flex items-center gap-2 text-base md:text-xl my-3 md:my-4">
          {isOnSale ? (
            <>
              <span className="text-[#4b5563] font-bold text-base md:text-lg">{t.priceLabel}</span>
              <div className="flex items-center gap-1 flex-1 justify-between">
                <div className="flex items-center gap-1">
                  <span className="line-through text-gray-400 opacity-70 text-sm md:text-base relative -top-0.5">
                    {data.individual_total.toLocaleString()}
                  </span>
                  <span className="text-[#187FD3] font-bold text-xl md:text-2xl flex items-center">
                    <span>{data.bundle_price.toLocaleString()}</span>
                    <span className="ml-1 text-xs md:text-sm">SAR</span>
                  </span>
                </div>
                <span className="bg-[#2E8B2E] text-white px-2 md:px-2.5 py-1 rounded-lg text-[10px] md:text-xs font-semibold whitespace-nowrap ml-auto">
                  {t.save} {data.savings_percent}%
                </span>
              </div>
            </>
          ) : (
            <>
              <span className="text-[#4b5563] font-bold text-base md:text-lg">{t.priceLabel}</span>
              <span className="text-[#187FD3] font-bold text-xl md:text-2xl flex items-center">
                <span>{data.bundle_price.toLocaleString()}</span>
                <span className="ml-1 text-xs md:text-sm">SAR</span>
              </span>
            </>
          )}
        </div>

        {isOnSale && (
          <p className="bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-400 rounded-lg p-2.5 md:p-3 my-3 md:my-4 flex items-center gap-2.5">
            <span className="text-xs md:text-sm text-sky-900">
              {t.youSave} {data.savings.toLocaleString()} {t.onThisBundle}
            </span>
          </p>
        )}

        <div className="bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-400 rounded-lg p-2.5 md:p-3 my-3 md:my-4 flex items-center gap-2.5">
          <img
            src={data.bundle_price >= 5000
              ? "https://academy.tharwah.net/wp-content/uploads/2025/08/Frame-2.svg"
              : "https://academy.tharwah.net/wp-content/uploads/2025/08/Frame-8-1.svg"
            }
            className="w-14 h-14 md:w-18 md:h-18 flex-shrink-0"
            alt="Installment"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs md:text-sm text-sky-800 font-semibold mb-0.5">
              {t.orSplit} {installmentMonths} {t.payments}
            </p>
            <p className="text-base md:text-lg text-sky-900 font-bold mb-0.5">
              SAR {monthlyPayment.toLocaleString()}/{t.month}
            </p>
            <p className="text-[10px] md:text-xs text-gray-600">{t.noInterest}</p>
          </div>
        </div>

        <div className="my-4 md:my-5">
          <ul className="space-y-1.5 md:space-y-2">
            <li className="flex items-center gap-2 py-1.5 md:py-2">
              <Check className="w-4 h-4 text-[#2E8B2E] flex-shrink-0" strokeWidth={2} />
              <span className="text-xs md:text-sm">{data.courses.length} {t.coursesIncluded}</span>
            </li>
            {data.total_duration && (
              <li className="flex items-center gap-2 py-1.5 md:py-2">
                <Check className="w-4 h-4 text-[#2E8B2E] flex-shrink-0" strokeWidth={2} />
                <span className="text-xs md:text-sm">{t.totalDuration}: {data.total_duration}</span>
              </li>
            )}
            <li className="flex items-center gap-2 py-1.5 md:py-2">
              <Check className="w-4 h-4 text-[#2E8B2E] flex-shrink-0" strokeWidth={2} />
              <span className="text-xs md:text-sm">{t.certificate}</span>
            </li>
            <li className="flex items-center gap-2 py-1.5 md:py-2">
              <Check className="w-4 h-4 text-[#2E8B2E] flex-shrink-0" strokeWidth={2} />
              <span className="text-xs md:text-sm">{t.lifetimeAccess}</span>
            </li>
          </ul>
        </div>

        <div className="mt-4 md:mt-5">
          <a
            href={data.cta_url}
            className="w-full block text-center bg-[#187FD3] text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold uppercase border-2 border-[#187FD3] transition-all duration-300 hover:bg-[#1566a8] hover:border-[#1566a8] hover:-translate-y-0.5 hover:shadow-lg"
          >
            {t.enrollNow}
          </a>
        </div>
      </div>
    </section>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-50 py-2 px-3">
        <div className="flex items-center justify-between gap-2 max-w-7xl mx-auto">
          <div className="flex-1 min-w-0">
            {isOnSale ? (
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="line-through text-gray-400 text-xs">
                  {data.individual_total.toLocaleString()}
                </span>
                <span className="text-[#187FD3] font-bold text-base whitespace-nowrap">
                  {data.bundle_price.toLocaleString()} <span className="text-xs">SAR</span>
                </span>
                <span className="bg-[#2E8B2E] text-white px-1.5 py-0.5 rounded text-[9px] font-semibold">
                  {data.savings_percent}% OFF
                </span>
              </div>
            ) : (
              <span className="text-[#187FD3] font-bold text-base whitespace-nowrap">
                {data.bundle_price.toLocaleString()} <span className="text-xs">SAR</span>
              </span>
            )}
            <p className="text-[10px] text-gray-600 mt-0.5">
              {data.courses.length} {t.coursesIncluded}
            </p>
          </div>
          <a
            href={data.cta_url}
            className="bg-[#187FD3] hover:bg-[#1566a8] text-white font-semibold px-4 py-2 rounded-full text-xs uppercase transition-all duration-300 shadow-lg whitespace-nowrap"
          >
            {t.enrollNow}
          </a>
        </div>
      </div>
    </>
  );
}
