interface LMSBannerProps {
  lang?: 'en' | 'ar';
}

export default function LMSBanner({ lang = 'en' }: LMSBannerProps) {
  const copy = {
    en: {
      lmsTitle: 'Tharwah Learning Management System',
      lmsHeading: 'Get ready for a world-class learning journey!'
    },
    ar: {
      lmsTitle: 'نظام إدارة التعلم ثروة',
      lmsHeading: 'استعد لرحلة تعليمية عالمية المستوى!'
    }
  };

  const t = copy[lang];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-[1300px] px-10">
        <div className="grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-xl min-h-[400px]">
          <div
            className="relative bg-[#F5F8FA] p-8 flex flex-col justify-start items-start"
            style={{
              backgroundImage: "url('https://academy.tharwah.net/wp-content/uploads/2025/07/LMS-1.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-lg">
              <svg className="w-[89px] h-[46px] fill-[#187FD3]" viewBox="0 0 89 46">
                <text x="5" y="30" fontSize="24" fontWeight="bold" fill="#187FD3">Tharwah</text>
              </svg>
            </div>
          </div>

          <div className="relative bg-[#0f69b4] p-10 flex flex-col justify-center overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
                {t.lmsTitle}
              </h3>
              <h2 className="text-4xl font-bold text-white leading-tight">
                {t.lmsHeading}
              </h2>
            </div>

            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "url('https://academy.tharwah.net/wp-content/uploads/2025/07/Clip-path-group-1.svg')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '-59% 145%'
              }}
            ></div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "url('https://academy.tharwah.net/wp-content/uploads/2025/07/Clip-path-group-1.svg')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '146% -37%'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
