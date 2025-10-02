import { useState } from 'react';
import { CheckCircle, Circle, Mail, User, Loader, Award, TrendingUp } from 'lucide-react';

interface SkillsAssessmentProps {
  lang?: 'en' | 'ar';
}

interface Question {
  id: number;
  question: string;
  options: string[];
}

export default function SkillsAssessment({ lang = 'en' }: SkillsAssessmentProps) {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'contact' | 'results'>('intro');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const copy = {
    en: {
      title: 'Free Skills Assessment',
      subtitle: 'Discover your current skill level and get personalized course recommendations',
      startButton: 'Start Assessment',
      question: 'Question',
      of: 'of',
      next: 'Next',
      previous: 'Previous',
      submit: 'Submit',
      contactTitle: 'Get Your Results',
      contactSubtitle: 'Enter your details to receive your personalized assessment report',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      getResults: 'Get Results',
      resultsTitle: 'Your Assessment Results',
      score: 'Your Score',
      beginner: 'Beginner Level',
      intermediate: 'Intermediate Level',
      advanced: 'Advanced Level',
      recommendationTitle: 'Recommended Path',
      beginnerRec: 'We recommend starting with our foundational courses to build a strong base.',
      intermediateRec: 'You have a solid foundation. Our intermediate modules will take you to the next level.',
      advancedRec: 'You\'re ready for advanced concepts. Our expert-level courses are perfect for you.',
      enrollNow: 'Enroll in Recommended Path',
      restartQuiz: 'Retake Assessment',
      errorMessage: 'Something went wrong. Please try again.',
      questions: [
        {
          question: 'How would you rate your current knowledge in this field?',
          options: [
            'I\'m completely new to this',
            'I have basic understanding',
            'I have intermediate knowledge',
            'I\'m experienced and looking to advance'
          ]
        },
        {
          question: 'Have you completed any related courses or certifications?',
          options: [
            'No, this would be my first',
            'I\'ve completed 1-2 courses',
            'I\'ve completed 3-5 courses',
            'I\'ve completed more than 5 courses'
          ]
        },
        {
          question: 'How much time can you dedicate to learning per week?',
          options: [
            'Less than 2 hours',
            '2-5 hours',
            '5-10 hours',
            'More than 10 hours'
          ]
        },
        {
          question: 'What is your primary learning goal?',
          options: [
            'Career change or entry into the field',
            'Skill enhancement for current role',
            'Professional certification',
            'Personal interest and growth'
          ]
        },
        {
          question: 'How do you prefer to learn?',
          options: [
            'Video lectures and demonstrations',
            'Hands-on projects and practice',
            'Reading materials and documentation',
            'Mix of all approaches'
          ]
        }
      ]
    },
    ar: {
      title: 'تقييم المهارات المجاني',
      subtitle: 'اكتشف مستوى مهاراتك الحالي واحصل على توصيات مخصصة للدورات',
      startButton: 'ابدأ التقييم',
      question: 'سؤال',
      of: 'من',
      next: 'التالي',
      previous: 'السابق',
      submit: 'إرسال',
      contactTitle: 'احصل على نتائجك',
      contactSubtitle: 'أدخل بياناتك لتلقي تقرير التقييم المخصص',
      namePlaceholder: 'اسمك',
      emailPlaceholder: 'بريدك الإلكتروني',
      getResults: 'احصل على النتائج',
      resultsTitle: 'نتائج التقييم',
      score: 'نتيجتك',
      beginner: 'مستوى مبتدئ',
      intermediate: 'مستوى متوسط ​​',
      advanced: 'مستوى متقدم',
      recommendationTitle: 'المسار الموصى به',
      beginnerRec: 'نوصي بالبدء بدوراتنا التأسيسية لبناء قاعدة قوية.',
      intermediateRec: 'لديك أساس قوي. ستأخذك وحداتنا المتوسطة إلى المستوى التالي.',
      advancedRec: 'أنت مستعد للمفاهيم المتقدمة. دوراتنا للخبراء مثالية لك.',
      enrollNow: 'التسجيل في المسار الموصى به',
      restartQuiz: 'إعادة التقييم',
      errorMessage: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
      questions: [
        {
          question: 'كيف تقيم معرفتك الحالية في هذا المجال؟',
          options: [
            'أنا جديد تمامًا على هذا',
            'لدي فهم أساسي',
            'لدي معرفة متوسطة',
            'أنا ذو خبرة وأتطلع للتقدم'
          ]
        },
        {
          question: 'هل أكملت أي دورات أو شهادات ذات صلة؟',
          options: [
            'لا، هذه ستكون أول دورة لي',
            'أكملت 1-2 دورة',
            'أكملت 3-5 دورات',
            'أكملت أكثر من 5 دورات'
          ]
        },
        {
          question: 'كم من الوقت يمكنك تخصيصه للتعلم أسبوعيًا؟',
          options: [
            'أقل من ساعتين',
            '2-5 ساعات',
            '5-10 ساعات',
            'أكثر من 10 ساعات'
          ]
        },
        {
          question: 'ما هو هدفك التعليمي الأساسي؟',
          options: [
            'تغيير المهنة أو الدخول إلى المجال',
            'تحسين المهارات للدور الحالي',
            'الحصول على شهادة مهنية',
            'الاهتمام الشخصي والنمو'
          ]
        },
        {
          question: 'كيف تفضل التعلم؟',
          options: [
            'محاضرات الفيديو والعروض التوضيحية',
            'مشاريع عملية وممارسة',
            'مواد القراءة والوثائق',
            'مزيج من جميع الأساليب'
          ]
        }
      ]
    }
  };

  const t = copy[lang];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions: Question[] = t.questions.map((q, i) => ({
    id: i,
    question: q.question,
    options: q.options
  }));

  const handleAnswer = (questionId: number, optionIndex: number) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep('contact');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    const totalPoints = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const maxPoints = questions.length * 3;
    return Math.round((totalPoints / maxPoints) * 100);
  };

  const getLevel = (score: number) => {
    if (score < 33) return 'beginner';
    if (score < 67) return 'intermediate';
    return 'advanced';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const score = calculateScore();
      const level = getLevel(score);

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/capture-lead`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          lead_type: 'skills_assessment',
          assessment_score: score,
          assessment_level: level,
          assessment_answers: answers
        })
      });

      if (!response.ok) throw new Error('Failed to submit');

      setStatus('idle');
      setCurrentStep('results');
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const renderIntro = () => (
    <div className="text-center max-w-2xl mx-auto">
      <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Award className="w-10 h-10 md:w-12 md:h-12 text-[#187FD3]" strokeWidth={1.5} />
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2E3948] mb-4">
        {t.title}
      </h2>
      <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
        {t.subtitle}
      </p>
      <button
        onClick={() => setCurrentStep('quiz')}
        className="bg-[#187FD3] hover:bg-[#1668A8] text-white font-semibold px-8 md:px-12 py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
      >
        {t.startButton}
      </button>
    </div>
  );

  const renderQuiz = () => {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-600">
              {t.question} {currentQuestion + 1} {t.of} {questions.length}
            </span>
            <span className="text-sm font-semibold text-[#187FD3]">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#187FD3] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-[#2E3948] mb-6 leading-relaxed">
            {question.question}
          </h3>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(question.id, index)}
                className={`w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all duration-300 flex items-center gap-4 ${
                  answers[question.id] === index
                    ? 'border-[#187FD3] bg-sky-50 shadow-md'
                    : 'border-gray-200 hover:border-[#187FD3] hover:bg-gray-50'
                }`}
              >
                {answers[question.id] === index ? (
                  <CheckCircle className="w-6 h-6 text-[#187FD3] flex-shrink-0" strokeWidth={2} />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300 flex-shrink-0" strokeWidth={2} />
                )}
                <span className="text-sm md:text-base text-[#2E3948]">{option}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-6 py-3 text-[#187FD3] font-semibold rounded-lg transition-all duration-300 hover:bg-sky-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t.previous}
          </button>
          <button
            onClick={handleNext}
            disabled={answers[question.id] === undefined}
            className="px-8 py-3 bg-[#187FD3] hover:bg-[#1668A8] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentQuestion === questions.length - 1 ? t.submit : t.next}
          </button>
        </div>
      </div>
    );
  };

  const renderContact = () => (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-[#2E3948] mb-3">
          {t.contactTitle}
        </h3>
        <p className="text-base text-gray-600">
          {t.contactSubtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg space-y-5">
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-[#2E3948] mb-2">
            <User className="w-4 h-4" />
            {t.namePlaceholder}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder={t.namePlaceholder}
            className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-[#187FD3] focus:ring-3 focus:ring-[#187FD3]/10"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-[#2E3948] mb-2">
            <Mail className="w-4 h-4" />
            {t.emailPlaceholder}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder={t.emailPlaceholder}
            className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-[#187FD3] focus:ring-3 focus:ring-[#187FD3]/10"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#187FD3] hover:bg-[#1668A8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <TrendingUp className="w-5 h-5" />
              {t.getResults}
            </>
          )}
        </button>

        {status === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm text-center">
            {t.errorMessage}
          </div>
        )}
      </form>
    </div>
  );

  const renderResults = () => {
    const score = calculateScore();
    const level = getLevel(score);
    const levelText = level === 'beginner' ? t.beginner : level === 'intermediate' ? t.intermediate : t.advanced;
    const recommendation = level === 'beginner' ? t.beginnerRec : level === 'intermediate' ? t.intermediateRec : t.advancedRec;

    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#187FD3] to-[#0f69b4] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Award className="w-12 h-12 md:w-16 md:h-16 text-white" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#2E3948] mb-3">
            {t.resultsTitle}
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-xl mb-6">
          <div className="text-center mb-8">
            <div className="text-5xl md:text-6xl font-bold text-[#187FD3] mb-2">{score}%</div>
            <div className="text-lg md:text-xl text-gray-600">{t.score}</div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#187FD3]" />
              <h4 className="text-lg font-semibold text-[#2E3948]">{levelText}</h4>
            </div>
            <h5 className="font-semibold text-[#2E3948] mb-2">{t.recommendationTitle}</h5>
            <p className="text-gray-700 leading-relaxed">{recommendation}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              setCurrentStep('intro');
              setCurrentQuestion(0);
              setAnswers({});
              setName('');
              setEmail('');
            }}
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg transition-all duration-300 hover:border-[#187FD3] hover:text-[#187FD3]"
          >
            {t.restartQuiz}
          </button>
          <a
            href="#enrollment"
            className="px-8 py-3 bg-[#187FD3] hover:bg-[#1668A8] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
          >
            {t.enrollNow}
          </a>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50">
      <div className="container mx-auto max-w-6xl px-4 md:px-5">
        {currentStep === 'intro' && renderIntro()}
        {currentStep === 'quiz' && renderQuiz()}
        {currentStep === 'contact' && renderContact()}
        {currentStep === 'results' && renderResults()}
      </div>
    </section>
  );
}
