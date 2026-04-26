import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';
import Button from '../ui/Button';
import { COMPANY, CATEGORIES } from '../../data';

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    phone: '',
    productInterest: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const isAr = lang === 'ar';
    const text = isAr 
      ? `طلب تسعير / استفسار جديد:
الاسم: ${formData.name}
الشركة: ${formData.company}
البريد: ${formData.email}
البلد: ${formData.country}
الهاتف: ${formData.phone}
المنتج المهتم به: ${formData.productInterest}
الرسالة: ${formData.message}`
      : `New Inquiry/Quote Request:
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Country: ${formData.country}
Phone: ${formData.phone}
Interest: ${formData.productInterest}
Message: ${formData.message}`;

    const waNumber = COMPANY.whatsappNumber.replace('+', '');
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-brand-white">
      <h2 className="text-3xl font-bold text-brand-charcoal mb-8">
        {t('contact.title')}
      </h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-2">
              {t('contact.form.name')} *
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-bone border border-brand-border focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-brand-charcoal mb-2">
              {t('contact.form.company')}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-bone border border-brand-border focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-2">
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-bone border border-brand-border focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
              dir="ltr"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-charcoal mb-2">
              {t('contact.form.phone')} *
            </label>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-bone border border-brand-border focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
              dir="ltr"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-brand-charcoal mb-2">
              {t('contact.form.country')} *
            </label>
            <input
              required
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-bone border border-brand-border focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="productInterest" className="block text-sm font-medium text-brand-charcoal mb-2">
              {t('contact.form.productInterest')}
            </label>
            <select
              id="productInterest"
              name="productInterest"
              value={formData.productInterest}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-bone border border-brand-border focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors appearance-none"
            >
              <option value="">--</option>
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.name[lang]}>
                  {cat.name[lang]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-2">
            {t('contact.form.message')} *
          </label>
          <textarea
            required
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-bone border border-brand-border focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-colors resize-y"
          ></textarea>
        </div>

        <Button type="submit" className="w-full sm:w-auto">
          <MessageCircle size={20} className="me-2" />
          {t('contact.form.submit')}
        </Button>
      </div>
    </form>
  );
}
