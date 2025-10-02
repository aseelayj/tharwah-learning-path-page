import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '../types';

interface FAQSectionProps {
  faqs: FAQ[];
  lang?: 'en' | 'ar';
}

export default function FAQSection({ faqs, lang = 'en' }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const copy = {
    en: {
      title: 'Frequently Asked Questions'
    },
    ar: {
      title: 'الأسئلة الشائعة'
    }
  };

  const t = copy[lang];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20 bg-[#F8FBFE]" id="faq">
      <div className="container mx-auto max-w-5xl px-5">
        <h2 className="text-center mb-12 text-5xl font-light leading-tight text-[#2E3948]">
          {lang === 'en' ? (
            <>Frequently <span className="text-[#187FD3] font-normal">Asked Questions</span></>
          ) : (
            <>الأسئلة <span className="text-[#187FD3] font-normal">الشائعة</span></>
          )}
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#187FD3] hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-all duration-300 hover:bg-[#F8FBFE]"
              >
                <span className="text-lg font-medium text-[#2E3948] pr-5 flex-1">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#187FD3] transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-base leading-relaxed text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
