import React from 'react';
import { GraduationCap, BookOpen, Award, Languages, Users, Briefcase, ClipboardCheck as ChalkboardTeacher } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export function Programs() {
  const { t } = useTranslation();

  const programs = [
    {
      icon: GraduationCap,
      title: 'programs.license',
      description: 'programs.license.desc',
      color: 'bg-blue-500',
      image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Award,
      title: 'programs.master',
      description: 'programs.master.desc',
      color: 'bg-green-500',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: BookOpen,
      title: 'programs.doctorate',
      description: 'programs.doctorate.desc',
      color: 'bg-purple-500',
      image: 'https://images.pexels.com/photos/5940855/pexels-photo-5940855.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Languages,
      title: 'programs.chinese',
      description: 'programs.chinese.desc',
      color: 'bg-red-500',
      image: 'https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Users,
      title: 'programs.prep',
      description: 'programs.prep.desc',
      color: 'bg-yellow-500',
      image: 'https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Briefcase,
      title: 'programs.internship',
      description: 'programs.internship.desc',
      color: 'bg-indigo-500',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: ChalkboardTeacher,
      title: 'programs.teacher',
      description: 'programs.teacher.desc',
      color: 'bg-pink-500',
      image: 'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('programs.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('programs.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={t(program.title)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className={`${program.color} p-3 rounded-lg`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(program.title)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t(program.description)}
                </p>
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  En savoir plus
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Country Flags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Destinations Disponibles</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-3 bg-gray-50 px-6 py-4 rounded-lg">
              <span className="text-4xl">🇨🇳</span>
              <span className="font-medium text-gray-800">Chine</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 px-6 py-4 rounded-lg">
              <span className="text-4xl">🇨🇦</span>
              <span className="font-medium text-gray-800">Canada</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 px-6 py-4 rounded-lg">
              <span className="text-4xl">🇩🇪</span>
              <span className="font-medium text-gray-800">Allemagne</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 px-6 py-4 rounded-lg">
              <span className="text-4xl">🇫🇷</span>
              <span className="font-medium text-gray-800">France</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 px-6 py-4 rounded-lg">
              <span className="text-4xl">🇺🇸</span>
              <span className="font-medium text-gray-800">États-Unis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}