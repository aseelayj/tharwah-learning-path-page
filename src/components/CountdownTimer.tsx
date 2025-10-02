import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  endDate?: Date;
  lang?: 'en' | 'ar';
}

export default function CountdownTimer({ endDate, lang = 'en' }: CountdownTimerProps) {
  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() + 7);

  const targetDate = endDate || defaultEndDate;

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const copy = {
    en: {
      title: 'Limited Time Offer',
      subtitle: 'Special pricing ends in',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      expired: 'Offer has ended',
      enrollNow: 'Enroll Now'
    },
    ar: {
      title: 'عرض لفترة محدودة',
      subtitle: 'ينتهي السعر الخاص خلال',
      days: 'أيام',
      hours: 'ساعات',
      minutes: 'دقائق',
      seconds: 'ثواني',
      expired: 'انتهى العرض',
      enrollNow: 'سجل الآن'
    }
  };

  const t = copy[lang];

  if (timeLeft.expired) {
    return null;
  }

  const timeBlocks = [
    { value: timeLeft.days, label: t.days },
    { value: timeLeft.hours, label: t.hours },
    { value: timeLeft.minutes, label: t.minutes },
    { value: timeLeft.seconds, label: t.seconds }
  ];

  return (
    <section className="py-2 md:py-3 bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 md:px-5">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
            <span className="text-xs md:text-sm text-gray-600">{t.subtitle}</span>
          </div>

          <div className="flex items-center gap-1.5 md:gap-2">
            {timeBlocks.map((block, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="text-base md:text-lg font-semibold text-gray-900 tabular-nums">
                    {String(block.value).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-wide">
                    {block.label}
                  </div>
                </div>
                {index < timeBlocks.length - 1 && (
                  <div className="text-gray-300 mx-1 md:mx-1.5">:</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
