import { useState, createContext, useContext, ReactNode } from 'react';

interface TranslationContextType {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.programs': 'Programmes',
    'nav.steps': 'Étapes',
    'nav.gallery': 'Galerie',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Votre Passerelle vers l\'Excellence Académique Mondiale',
    'hero.subtitle': 'Obtenez des bourses d\'études partielles ou totales vers la Chine, le Canada, l\'Allemagne et bien d\'autres destinations prestigieuses.',
    'hero.cta': 'Postulez Maintenant',
    'hero.learn': 'En Savoir Plus',
    
    // About Section
    'about.title': 'À Propos de Nous',
    'about.subtitle': 'Votre partenaire de confiance pour l\'éducation internationale',
    'about.description': 'Khriststephen Saba International Education Services est une entreprise camerounaise spécialisée dans l\'accompagnement des étudiants africains vers l\'excellence académique internationale. Nous facilitons l\'obtention de bourses d\'études partielles ou totales vers des destinations prestigieuses.',
    'about.mission': 'Notre Mission',
    'about.mission.text': 'Démocratiser l\'accès à l\'éducation internationale de qualité pour tous les étudiants africains méritants.',
    'about.vision': 'Notre Vision',
    'about.vision.text': 'Être le leader africain dans l\'accompagnement éducatif international et former la prochaine génération de leaders africains.',
    
    // Programs Section
    'programs.title': 'Nos Programmes',
    'programs.subtitle': 'Des opportunités d\'excellence pour tous les niveaux',
    'programs.license': 'Licence',
    'programs.license.desc': 'Programmes de premier cycle dans diverses disciplines',
    'programs.master': 'Maîtrise',
    'programs.master.desc': 'Programmes de deuxième cycle spécialisés',
    'programs.doctorate': 'Doctorat',
    'programs.doctorate.desc': 'Programmes de recherche avancée',
    'programs.chinese': 'Langue Chinoise',
    'programs.chinese.desc': 'Apprentissage intensif du mandarin',
    'programs.prep': 'Prépa Licence',
    'programs.prep.desc': 'Préparation aux études supérieures',
    'programs.internship': 'Stage Académique',
    'programs.internship.desc': 'Expérience pratique internationale',
    'programs.teacher': 'Bourse Professeur de Chinois',
    'programs.teacher.desc': 'Formation pour enseignants de chinois',
    
    // Steps Section
    'steps.title': 'Comment Procéder',
    'steps.subtitle': 'Votre parcours vers le succès en 4 étapes simples',
    'steps.consultation': 'Consultation Gratuite',
    'steps.consultation.desc': 'Évaluation de votre profil et orientation personnalisée',
    'steps.preparation': 'Préparation du Dossier',
    'steps.preparation.desc': 'Constitution et optimisation de votre candidature',
    'steps.application': 'Candidature',
    'steps.application.desc': 'Soumission aux universités partenaires',
    'steps.success': 'Succès',
    'steps.success.desc': 'Obtention de votre bourse et départ',
    
    // Testimonials
    'testimonials.title': 'Témoignages',
    'testimonials.subtitle': 'Ce que disent nos étudiants',
    
    // Partners
    'partners.title': 'Nos Partenaires',
    'partners.subtitle': 'Des collaborations de confiance',
    
    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Prêt à commencer votre aventure académique ?',
    'contact.name': 'Nom complet',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.program': 'Programme d\'intérêt',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    'contact.address': 'Adresse',
    'contact.ceo': 'Consultant / CEO',
    
    // Footer
    'footer.description': 'Votre partenaire de confiance pour l\'éducation internationale de qualité.',
    'footer.quick': 'Liens Rapides',
    'footer.programs.title': 'Programmes',
    'footer.contact.title': 'Contact',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.steps': 'Steps',
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Your Gateway to Global Academic Excellence',
    'hero.subtitle': 'Get partial or full scholarships to China, Canada, Germany and other prestigious destinations.',
    'hero.cta': 'Apply Now',
    'hero.learn': 'Learn More',
    
    // About Section
    'about.title': 'About Us',
    'about.subtitle': 'Your trusted partner for international education',
    'about.description': 'Khriststephen Saba International Education Services is a Cameroonian company specialized in guiding African students towards international academic excellence. We facilitate obtaining partial or full scholarships to prestigious destinations.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'Democratize access to quality international education for all deserving African students.',
    'about.vision': 'Our Vision',
    'about.vision.text': 'To be the African leader in international educational guidance and train the next generation of African leaders.',
    
    // Programs Section
    'programs.title': 'Our Programs',
    'programs.subtitle': 'Excellence opportunities for all levels',
    'programs.license': 'Bachelor\'s',
    'programs.license.desc': 'Undergraduate programs in various disciplines',
    'programs.master': 'Master\'s',
    'programs.master.desc': 'Specialized graduate programs',
    'programs.doctorate': 'Doctorate',
    'programs.doctorate.desc': 'Advanced research programs',
    'programs.chinese': 'Chinese Language',
    'programs.chinese.desc': 'Intensive Mandarin learning',
    'programs.prep': 'Pre-Bachelor',
    'programs.prep.desc': 'Preparation for higher education',
    'programs.internship': 'Academic Internship',
    'programs.internship.desc': 'International practical experience',
    'programs.teacher': 'Chinese Teacher Scholarship',
    'programs.teacher.desc': 'Training for Chinese language teachers',
    
    // Steps Section
    'steps.title': 'How to Proceed',
    'steps.subtitle': 'Your path to success in 4 simple steps',
    'steps.consultation': 'Free Consultation',
    'steps.consultation.desc': 'Profile evaluation and personalized guidance',
    'steps.preparation': 'File Preparation',
    'steps.preparation.desc': 'Building and optimizing your application',
    'steps.application': 'Application',
    'steps.application.desc': 'Submission to partner universities',
    'steps.success': 'Success',
    'steps.success.desc': 'Getting your scholarship and departure',
    
    // Testimonials
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'What our students say',
    
    // Partners
    'partners.title': 'Our Partners',
    'partners.subtitle': 'Trusted collaborations',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to start your academic adventure?',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.program': 'Program of Interest',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.address': 'Address',
    'contact.ceo': 'Consultant / CEO',
    
    // Footer
    'footer.description': 'Your trusted partner for quality international education.',
    'footer.quick': 'Quick Links',
    'footer.programs.title': 'Programs',
    'footer.contact.title': 'Contact',
    'footer.rights': 'All rights reserved.',
  }
};

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };
  
  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}