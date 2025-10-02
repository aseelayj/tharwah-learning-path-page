import { Check } from 'lucide-react';
import type { Skill } from '../types';

interface SkillsSectionProps {
  skills: Skill[];
  lang?: 'en' | 'ar';
}

export default function SkillsSection({ skills, lang = 'en' }: SkillsSectionProps) {
  const copy = {
    en: {
      skillsTitle: "Skills You'll Master",
      skillsSubtitle: 'Build in-demand skills employers are looking for'
    },
    ar: {
      skillsTitle: 'المهارات التي ستتقنها',
      skillsSubtitle: 'اكتسب المهارات المطلوبة في سوق العمل'
    }
  };

  const t = copy[lang];

  if (!skills || skills.length === 0) return null;

  return (
    <section className="py-6 md:py-10">
      <div className="container mx-auto max-w-7xl px-4 md:px-5">
        <div className="text-center mb-4 md:mb-10">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#2E3948] mb-2 md:mb-3">
            {t.skillsTitle}
          </h2>
          <p className="text-xs md:text-base lg:text-lg text-gray-600">
            {t.skillsSubtitle}
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gradient-to-br from-sky-50 to-sky-100 border-2 border-sky-200 rounded-xl px-4 py-4 transition-all duration-300 hover:border-sky-400 hover:shadow-md hover:-translate-y-0.5"
            >
              {skill.skill_icon ? (
                <img
                  src={skill.skill_icon}
                  alt={skill.skill_name}
                  className="w-8 h-8 object-contain flex-shrink-0"
                />
              ) : (
                <span className="w-8 h-8 flex items-center justify-center bg-[#187FD3] text-white rounded-full flex-shrink-0">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </span>
              )}
              <span className="text-sm lg:text-base font-semibold text-gray-800 leading-snug">
                {skill.skill_name}
              </span>
            </div>
          ))}
        </div>

        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 mb-6">
          <div className="flex gap-2 pb-2" style={{ width: 'max-content' }}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gradient-to-br from-sky-50 to-sky-100 border-2 border-sky-200 rounded-lg px-2.5 py-2.5 w-[22%] min-w-[70px] max-w-[90px] flex-shrink-0"
              >
                {skill.skill_icon ? (
                  <img
                    src={skill.skill_icon}
                    alt={skill.skill_name}
                    className="w-5 h-5 object-contain flex-shrink-0"
                  />
                ) : (
                  <span className="w-5 h-5 flex items-center justify-center bg-[#187FD3] text-white rounded-full flex-shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                )}
                <span className="text-[10px] font-semibold text-gray-800 leading-tight line-clamp-2 flex-1">
                  {skill.skill_name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
