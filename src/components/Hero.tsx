import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, BookOpen } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

// const slides = [
//   {
//     image: 'https://drive.google.com/file/d/1soRF4ft6M4vz0669ijrdm22p5ELgEdV3/view?usp=drive_link',
//     title: 'hero.title',
//     subtitle: 'hero.subtitle'
//   },
//   {
//     image: 'https://drive.google.com/file/d/1BJpqNDhOV0mtx14-o7Z0_ufdxp-kAEg6/view?usp=drive_link',
//     title: 'hero.title',
//     subtitle: 'hero.subtitle'
//   },
//   {
//     image: 'https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&cs=tinysrgb&w=1200',
//     title: 'hero.title',
//     subtitle: 'hero.subtitle'
//   }
// ];

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?ixid=MnwzODMwNDR8MHwxfGFsbHwyfHx8fHx8fHwxNjkxNjc3MTM4&ixlib=rb-4.0.3',
    title: 'hero.title',
    subtitle: 'hero.subtitle'
  },
  {
    image: 'https://drive.google.com/uc?export=view&id=1BJpqNDhOV0mtx14-o7Z0_ufdxp-kAEg6',
    title: 'hero.title',
    subtitle: 'hero.subtitle'
  },
  {
    image: 'https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'hero.title',
    subtitle: 'hero.subtitle'
  }
];


export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}

      {/* African Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="african-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10,0 L20,10 L10,20 L0,10 Z" fill="#84c450" />
              <circle cx="10" cy="10" r="3" fill="#f59e0b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#african-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <BookOpen className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
            >
              {t('hero.learn')}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}