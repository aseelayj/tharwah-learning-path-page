import { FileText, Clock, Briefcase, Users, Download, RotateCw } from 'lucide-react';

interface WhatsIncludedProps {
  content?: string;
  lang?: 'en' | 'ar';
}

export default function WhatsIncluded({ content, lang = 'en' }: WhatsIncludedProps) {
  const copy = {
    en: {
      overviewTitle: "What's Included in This Learning Path",
      overviewSubtitle: 'Everything you need to master the skills and advance your career',
      certificateTitle: 'Professional Certificate',
      certificateDesc: 'Earn a verified certificate upon completion',
      lifetimeAccess: 'Lifetime Access',
      lifetimeAccessDesc: 'Learn at your own pace with unlimited access',
      practicalProjects: 'Hands-on Projects',
      practicalProjectsDesc: 'Apply your skills with real-world projects',
      expertSupport: 'Expert Support',
      expertSupportDesc: 'Get help from instructors and community',
      downloadableResources: 'Downloadable Resources',
      downloadableResourcesDesc: 'Access course materials offline',
      regularUpdates: 'Regular Updates',
      regularUpdatesDesc: 'Content updated to match industry standards'
    },
    ar: {
      overviewTitle: 'ما المشمول في هذا المسار التعليمي',
      overviewSubtitle: 'كل ما تحتاجه لإتقان المهارات والتقدم في حياتك المهنية',
      certificateTitle: 'شهادة احترافية',
      certificateDesc: 'احصل على شهادة معتمدة عند الإكمال',
      lifetimeAccess: 'وصول مدى الحياة',
      lifetimeAccessDesc: 'تعلم بالسرعة التي تناسبك مع وصول غير محدود',
      practicalProjects: 'مشاريع عملية',
      practicalProjectsDesc: 'طبق مهاراتك في مشاريع واقعية',
      expertSupport: 'دعم الخبراء',
      expertSupportDesc: 'احصل على المساعدة من المدربين والمجتمع',
      downloadableResources: 'موارد قابلة للتنزيل',
      downloadableResourcesDesc: 'الوصول إلى مواد الدورة دون اتصال',
      regularUpdates: 'تحديثات منتظمة',
      regularUpdatesDesc: 'محتوى محدث ليتوافق مع معايير الصناعة'
    }
  };

  const t = copy[lang];

  const defaultFeatures = [
    { icon: FileText, title: t.certificateTitle, desc: t.certificateDesc },
    { icon: Clock, title: t.lifetimeAccess, desc: t.lifetimeAccessDesc },
    { icon: Briefcase, title: t.practicalProjects, desc: t.practicalProjectsDesc },
    { icon: Users, title: t.expertSupport, desc: t.expertSupportDesc },
    { icon: Download, title: t.downloadableResources, desc: t.downloadableResourcesDesc },
    { icon: RotateCw, title: t.regularUpdates, desc: t.regularUpdatesDesc }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-[#FAFBFC]">
      <div className="container mx-auto max-w-7xl px-4 md:px-5">
        <div className="text-center mb-6 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E3948] mb-3 md:mb-4 leading-tight">
            {t.overviewTitle}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600">
            {t.overviewSubtitle}
          </p>
        </div>

        {content ? (
          <div className="bg-white p-5 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border border-gray-200 text-sm md:text-base leading-relaxed text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {defaultFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#187FD3] group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#187FD3] to-[#2A9FE1] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>

                <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mx-auto mb-4 md:mb-5 bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#187FD3] group-hover:to-[#2A9FE1]">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#187FD3] transition-all duration-300 group-hover:text-white group-hover:scale-110" strokeWidth={1.5} />
                </div>

                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-[#2E3948] mb-2 md:mb-3 leading-tight">
                  {feature.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
