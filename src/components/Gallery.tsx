import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useTranslation();

  const images = [
    'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5940855/pexels-photo-5940855.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5427671/pexels-photo-5427671.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5940694/pexels-photo-5940694.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  const videos = [
    {
      title: 'Témoignage Étudiant - Chine',
      thumbnail: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoId: 'dQw4w9WgXcQ' // Placeholder YouTube ID
    },
    {
      title: 'Cérémonie de Remise de Bourses',
      thumbnail: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600',
      videoId: 'dQw4w9WgXcQ'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galerie</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les moments forts de notre accompagnement et les succès de nos étudiants
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Vidéos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative group cursor-pointer">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-opacity-100 transition-all duration-300">
                      <Play className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}