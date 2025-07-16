import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Marie KAMENI',
      program: 'Master en Informatique - Chine',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Grâce à Khriststephen Saba, j\'ai obtenu une bourse complète pour étudier en Chine. L\'accompagnement a été exceptionnel du début à la fin.',
      rating: 5,
      year: '2023'
    },
    {
      name: 'Paul MBARGA',
      program: 'Doctorat en Médecine - Canada',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'L\'équipe m\'a aidé à réaliser mon rêve d\'étudier au Canada. Leur expertise et leur soutien ont été déterminants pour ma réussite.',
      rating: 5,
      year: '2023'
    },
    {
      name: 'Sarah NDONGO',
      program: 'Licence en Ingénierie - Allemagne',
      image: 'https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Un service professionnel remarquable. Ils ont transformé mon rêve d\'étudier en Europe en réalité. Je recommande vivement !',
      rating: 5,
      year: '2022'
    },
    {
      name: 'Jean FOTSO',
      program: 'Master en Business - Canada',
      image: 'https://images.pexels.com/photos/5940855/pexels-photo-5940855.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Excellent accompagnement personnalisé. L\'équipe comprend vraiment les besoins des étudiants africains.',
      rating: 5,
      year: '2023'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.program}</p>
                  <p className="text-xs text-gray-500">{testimonial.year}</p>
                </div>
                <Quote className="w-8 h-8 text-blue-300" />
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Success Statistics */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl p-8 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-blue-100">Étudiants Satisfaits</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-blue-100">Taux de Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">4.9/5</h3>
              <p className="text-blue-100">Note Moyenne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}