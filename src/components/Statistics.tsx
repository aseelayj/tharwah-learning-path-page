import { useEffect, useRef, useState } from 'react';

interface StatisticsProps {
  lang?: 'en' | 'ar';
}

export default function Statistics({ lang = 'en' }: StatisticsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const copy = {
    en: {
      subtitle: 'Tharwah Academy in Numbers',
      title: 'Explore, Learn and get the right direction to grow your career',
      description: 'Start your journey toward a successful and fulfilling career with confidence.',
      clientSatisfaction: 'Client Satisfaction',
      clientsServed: 'Clients Served',
      yearsExperience: 'Years of Experience',
      peopleTrained: 'People Trained',
      coachingHours: 'Coaching Hours'
    },
    ar: {
      subtitle: 'أكاديمية ثروة بالأرقام',
      title: 'استكشف وتعلم واحصل على التوجيه الصحيح لتطوير حياتك المهنية',
      description: 'ابدأ رحلتك نحو مسيرة مهنية ناجحة ومرضية بثقة.',
      clientSatisfaction: 'رضا العملاء',
      clientsServed: 'العملاء المخدومين',
      yearsExperience: 'سنوات الخبرة',
      peopleTrained: 'المتدربين',
      coachingHours: 'ساعات التدريب'
    }
  };

  const t = copy[lang];

  const stats = [
    { target: 94, suffix: '%', label: t.clientSatisfaction },
    { target: 350, suffix: '+', label: t.clientsServed },
    { target: 12, suffix: '+', label: t.yearsExperience },
    { target: 9500, suffix: '+', label: t.peopleTrained },
    { target: 650, suffix: '+', label: t.coachingHours, isWide: true }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mb-6 md:mb-10">
      <div className="container mx-auto max-w-7xl px-4 md:px-5">
        <div className="flex flex-wrap gap-6 md:gap-8">
          <div className="flex-1 min-w-[300px] pr-0 md:pr-5">
            <h3 className="text-xs md:text-base font-normal text-[#187FD3] mb-2 md:mb-4 leading-tight">
              {t.subtitle}
            </h3>
            <h2 className="text-xl md:text-4xl font-light text-[#2E3948] mb-3 md:mb-5 leading-tight">
              {t.title}
            </h2>
            <p className="text-sm md:text-xl font-normal leading-relaxed text-[#424546]">
              {t.description}
            </p>
          </div>

          <div className="flex-[2] min-w-[300px]">
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-[#ECF5FF] rounded-[18px] p-4 md:p-6 flex flex-col ${
                    stat.isWide ? 'col-span-2' : ''
                  }`}
                >
                  <AnimatedNumber
                    target={stat.target}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                  <div className="text-xs md:text-[22px] text-[#1B3B68] font-normal leading-tight mt-1 md:mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  target,
  suffix,
  isVisible
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className="text-3xl md:text-[55px] font-light text-[#187FD3] leading-tight">
      {count}
      {suffix}
    </div>
  );
}
