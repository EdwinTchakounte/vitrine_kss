import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Linkedin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 lg:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Informations de Contact</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{t('contact.address')}</h4>
                    <p className="text-sm sm:text-base text-gray-600">
                      Immeuble Murcas, Akwa<br />
                      Douala, Cameroun
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Phone className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Téléphone</h4>
                    <p className="text-sm sm:text-base text-gray-600 break-all sm:break-normal">
                      +237 693 461 841<br />
                      +237 651 797 376
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Mail className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-sm sm:text-base text-gray-600 break-all sm:break-normal">info@khriststephen-education.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CEO Information */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                <img
                  src="https://images.pexels.com/photos/5940855/pexels-photo-5940855.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Christian Rodrigue BAONGLA"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 break-words">Christian Rodrigue BAONGLA</h3>
                  <p className="text-sm sm:text-base text-blue-600 font-medium">{t('contact.ceo')}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <a
                  href="https://wa.me/237693461841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm sm:text-base"
                >
                  <span>📱</span>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  {t('contact.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  {t('contact.program')}
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base"
                >
                  <option value="">Sélectionnez un programme</option>
                  <option value="licence">Licence</option>
                  <option value="master">Maîtrise</option>
                  <option value="doctorate">Doctorat</option>
                  <option value="chinese">Langue Chinoise</option>
                  <option value="prep">Prépa Licence</option>
                  <option value="internship">Stage Académique</option>
                  <option value="teacher">Bourse Professeur de Chinois</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm sm:text-base resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                {t('contact.send')}
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}