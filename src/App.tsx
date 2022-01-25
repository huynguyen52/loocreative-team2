import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import React from 'react';
import { initReactI18next } from 'react-i18next';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import RoutesWrapper from './Components/Pages/Routers/Router';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    fallbackLng: "en",
    detection: {
      order: ['localStorage', 'cookie','htmlTag', 'localStorage','path', 'subdomain'],
      caches: ['localStorage','cookie'], 
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react:{
      useSuspense: false
    }
  });

function App() {
  return (
    <BrowserRouter>
      <div >
        <Route path="/" component={RoutesWrapper} />
      </div>
    </BrowserRouter>
  );
}

export default App;
