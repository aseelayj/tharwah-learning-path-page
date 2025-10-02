import { useState } from 'react';

interface ContactFormProps {
  lang?: 'en' | 'ar';
}

export default function ContactForm({ lang = 'en' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const copy = {
    en: {
      title: 'Need help? Just fill out the form',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'SEND MESSAGE',
      successMessage: 'Thank you! Your message has been sent successfully.',
      errorMessage: 'Something went wrong. Please try again.'
    },
    ar: {
      title: 'هل تحتاج إلى مساعدة؟',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      message: 'الرسالة',
      submit: 'إرسال الرسالة',
      successMessage: 'شكراً! تم إرسال رسالتك بنجاح.',
      errorMessage: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.'
    }
  };

  const t = copy[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-5xl px-5">
        <h4 className="text-3xl md:text-4xl font-light text-[#2E3948] text-center mb-10">
          {t.title}
        </h4>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium text-[#2E3948] mb-2">
                {t.name} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-[#187FD3] focus:ring-3 focus:ring-[#187FD3]/10"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#2E3948] mb-2">
                {t.email} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-[#187FD3] focus:ring-3 focus:ring-[#187FD3]/10"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-[#2E3948] mb-2">
              {t.phone}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-[#187FD3] focus:ring-3 focus:ring-[#187FD3]/10"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-[#2E3948] mb-2">
              {t.message} <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-base transition-all duration-300 focus:outline-none focus:border-[#187FD3] focus:ring-3 focus:ring-[#187FD3]/10 resize-y min-h-[120px]"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-[#187FD3] text-white px-12 py-4 rounded-full text-base font-semibold uppercase transition-all duration-300 hover:bg-[#1566a8] hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (lang === 'en' ? 'SENDING...' : 'جاري الإرسال...') : t.submit}
          </button>

          {status === 'success' && (
            <div className="mt-5 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
              {t.successMessage}
            </div>
          )}

          {status === 'error' && (
            <div className="mt-5 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {t.errorMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
