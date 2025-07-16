import React from 'react';
import { MessageCircle, FileText, Send, Trophy } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export function Steps() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: MessageCircle,
      title: 'steps.consultation',
      description: 'steps.consultation.desc',
      color: 'bg-blue-500',
      step: '01'
    },
    {
      icon: FileText,
      title: 'steps.preparation',
      description: 'steps.preparation.desc',
      color: 'bg-green-500',
      step: '02'
    },
    {
      icon: Send,
      title: 'steps.application',
      description: 'steps.application.desc',
      color: 'bg-purple-500',
      step: '03'
    },
    {
      icon: Trophy,
      title: 'steps.success',
      description: 'steps.success.desc',
      color: 'bg-yellow-500',
      step: '04'
    }
  ];

  return (
    <section id="steps" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('steps.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('steps.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gray-300 z-0">
                  <div className="w-0 h-full bg-blue-500 animate-pulse"></div>
                </div>
              )}
              
              <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="relative mb-6">
                  <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t(step.title)}
                </h3>
                
                <p className="text-gray-600">
                  {t(step.description)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à commencer votre parcours ?
            </h3>
            <p className="text-gray-600 mb-6">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et personnalisée.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Commencer maintenant
              <Trophy className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}