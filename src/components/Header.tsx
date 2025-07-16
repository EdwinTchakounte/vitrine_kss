import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  const navigation = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.programs', href: '#programs' },
    { key: 'nav.steps', href: '#steps' },
    { key: 'nav.gallery', href: '#gallery' },
    { key: 'nav.testimonials', href: '#testimonials' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-2 flex-shrink-0 min-w-0">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
              <img src="/images/logo.png" alt="Description de l'image" />
            </div>
            <div className="hidden lg:block min-w-0">
              <h1 className="text-xl font-bold text-gray-800 leading-tight">
                Khriststephen Saba
                <br />
                <span className="text-base font-medium text-blue-600">International Education Services</span>
              </h1>
            </div>
            <div className="lg:hidden min-w-0 flex-1">
              <h1 className="text-base font-bold text-gray-800 leading-tight truncate">
                Khriststephen Saba
                <br />
                <span className="text-xs font-medium text-blue-600">Education Services</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Language Selector and Mobile Menu */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 px-2 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white rounded-lg shadow-lg border z-50">
                  <button
                    onClick={() => {
                      setLanguage('fr');
                      setIsLangOpen(false);
                    }}
                    className="w-full px-2 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-1"
                  >
                    <span>🇫🇷</span>
                    <span>FR</span>
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsLangOpen(false);
                    }}
                    className="w-full px-2 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-1"
                  >
                    <span>🇬🇧</span>
                    <span>EN</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 flex-shrink-0"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}