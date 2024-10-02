import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import the language files
import enNavbar from './locales/en/navbar.json';
import enLanding from './locales/en/landing.json';
import enAbout from './locales/en/about.json';
import enAboutAsterki from './locales/en/aboutasterki.json';
import enSkills from './locales/en/skills.json';
import enContact from './locales/en/contact.json';
import enProjects from './locales/en/projects.json';
// import fr from './locales/fr.json';

const resources = {
    en: {
        navbar: enNavbar,
        landing: enLanding,
        about: enAbout,
        aboutAsterki: enAboutAsterki,
        skills: enSkills,
        contact: enContact,
        projects: enProjects,
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        fallbackLng: 'en',
        lng: navigator.language, // Detect the browser language
    });

export default i18n;
