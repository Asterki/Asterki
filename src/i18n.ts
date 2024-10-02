import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import the english language files
import enNavbar from './locales/en/navbar.json';
import enLanding from './locales/en/landing.json';
import enAbout from './locales/en/about.json';
import enAboutAsterki from './locales/en/aboutasterki.json';
import enSkills from './locales/en/skills.json';
import enContact from './locales/en/contact.json';
import enProjects from './locales/en/projects.json';

// Spanish language files
import esNavbar from './locales/es/navbar.json';
import esLanding from './locales/es/landing.json';
import esAbout from './locales/es/about.json';
import esAboutAsterki from './locales/es/aboutasterki.json';
import esSkills from './locales/es/skills.json';
import esContact from './locales/es/contact.json';
import esProjects from './locales/es/projects.json';

// German 
import deNavbar from './locales/de/navbar.json';
import deLanding from './locales/de/landing.json';
import deAbout from './locales/de/about.json';
import deAboutAsterki from './locales/de/aboutasterki.json';
import deSkills from './locales/de/skills.json';
import deContact from './locales/de/contact.json';
import deProjects from './locales/de/projects.json';

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
    es: {
        navbar: esNavbar,
        landing: esLanding,
        about: esAbout,
        aboutAsterki: esAboutAsterki,
        skills: esSkills,
        contact: esContact,
        projects: esProjects,
    },
    de: {
        navbar: deNavbar,
        landing: deLanding,
        about: deAbout,
        aboutAsterki: deAboutAsterki,
        skills: deSkills,
        contact: deContact,
        projects: deProjects,
    }
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
