import { useState } from 'react';
import { Download, Mail, User, Loader } from 'lucide-react';
import type { LearningPathData } from '../types';

interface SyllabusDownloadProps {
  data: LearningPathData;
  lang?: 'en' | 'ar';
}

export default function SyllabusDownload({ data, lang = 'en' }: SyllabusDownloadProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const copy = {
    en: {
      title: 'Download Full Syllabus',
      buttonText: 'Get Syllabus',
      namePlaceholder: 'Name',
      emailPlaceholder: 'Email Address',
      successMessage: 'Check your email for the syllabus!',
      errorMessage: 'Error. Please try again.'
    },
    ar: {
      title: 'تنزيل المنهج الكامل',
      buttonText: 'احصل على المنهج',
      namePlaceholder: 'الاسم',
      emailPlaceholder: 'البريد الإلكتروني',
      successMessage: 'تحقق من بريدك الإلكتروني للحصول على المنهج!',
      errorMessage: 'خطأ. يرجى المحاولة مرة أخرى.'
    }
  };

  const t = copy[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/capture-lead`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          lead_type: 'syllabus_download',
          course_title: data.title,
          course_id: data.slug
        })
      });

      if (!response.ok) throw new Error('Failed to submit');

      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setEmail('');
        setName('');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-green-800 text-center">{t.successMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex items-center gap-2 mb-3">
          <Download className="w-4 h-4 text-gray-600" strokeWidth={2} />
          <h3 className="text-sm font-semibold text-gray-900">{t.title}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder={t.namePlaceholder}
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#187FD3] focus:ring-1 focus:ring-[#187FD3]"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={t.emailPlaceholder}
              className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#187FD3] focus:ring-1 focus:ring-[#187FD3]"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-[#187FD3] hover:bg-[#1668A8] text-white font-medium px-4 py-2 rounded-lg text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              {t.buttonText}
            </>
          )}
        </button>

        {status === 'error' && (
          <p className="text-xs text-red-600 text-center">{t.errorMessage}</p>
        )}
      </form>
    </div>
  );
}
