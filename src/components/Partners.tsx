import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

export function Partners() {
  const { t } = useTranslation();

  const partners = [
    {
      name: 'MURCAS',
      logo: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Partenaire stratégique pour l\'éducation'
    },
    {
      name: 'FASAS',
      logo: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Collaboration pour l\'excellence académique'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('partners.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('partners.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* University Partners */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Universités Partenaires</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🇨🇳</div>
              <h4 className="font-semibold text-gray-800">Universités Chinoises</h4>
              <p className="text-sm text-gray-600">20+ Partenaires</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🇨🇦</div>
              <h4 className="font-semibold text-gray-800">Universités Canadiennes</h4>
              <p className="text-sm text-gray-600">15+ Partenaires</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🇩🇪</div>
              <h4 className="font-semibold text-gray-800">Universités Allemandes</h4>
              <p className="text-sm text-gray-600">10+ Partenaires</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🇫🇷</div>
              <h4 className="font-semibold text-gray-800">Universités Françaises</h4>
              <p className="text-sm text-gray-600">8+ Partenaires</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}