import React from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                <img src="/images/logo.png" alt="Description de l'image" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Khriststephen Saba</h3>
                <p className="text-blue-400">International Education Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/237693461841"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
              >
                <span className="text-lg">📱</span>
              </a>
              <a
                href="#"
                className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-blue-800 hover:bg-blue-900 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quick')}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Programmes</a></li>
              <li><a href="#steps" className="text-gray-300 hover:text-white transition-colors">Étapes</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Galerie</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Témoignages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contact.title')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  Immeuble Murcas, Akwa<br />
                  Douala, Cameroun
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  +237 693 461 841<br />
                  +237 651 797 376
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-purple-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  info@khriststephen-education.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Khriststephen Saba International Education Services. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}




