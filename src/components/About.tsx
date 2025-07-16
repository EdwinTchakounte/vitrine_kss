import React from 'react';
import { Target, Eye, MapPin, Users, Award, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('about.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">{t('about.mission')}</h3>
                </div>
                <p className="text-gray-600">{t('about.mission.text')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">{t('about.vision')}</h3>
                </div>
                <p className="text-gray-600">{t('about.vision.text')}</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="African students studying"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Étudiants Accompagnés</p>
          </div>
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
            <p className="text-gray-600">Taux de Réussite</p>
          </div>
          <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <Globe className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
            <p className="text-gray-600">Pays Partenaires</p>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">{t('contact.address')}</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                Immeuble Murcas, Akwa<br />
                Douala, Cameroun
              </p>
              <a
                href="https://www.google.com/maps?q=Immeuble+Murcas,+Akwa,+Douala,+Cameroun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Voir sur Google Maps
                <MapPin className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8743842665893!2d9.6984!3d4.0511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnMDQuMCJOIDnCsDQxJzU0LjIiRQ!5e0!3m2!1sen!2scm!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}