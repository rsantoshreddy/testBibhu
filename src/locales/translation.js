import en from './en.json'
import fr from './fr.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Initialization of i18next
i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: { translation: en },
            fr: { translation: fr },
        },
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language if translation is missing
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })

export default i18n
