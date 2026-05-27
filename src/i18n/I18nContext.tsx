import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { translations, type Language } from "./translations";

interface I18nContextType {
  lang: Language;
  t: (typeof translations)["tr"];
  setLang: (lang: Language) => void;
  dir: "ltr" | "rtl";
}

const supportedLanguages = Object.keys(translations) as Language[];

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "tr";
  const firstPathSegment = window.location.pathname.split("/").filter(Boolean)[0] as Language | undefined;
  if (firstPathSegment && supportedLanguages.includes(firstPathSegment)) return firstPathSegment;
  const saved = localStorage.getItem("lang") as Language | null;
  if (saved && supportedLanguages.includes(saved)) return saved;
  const browserLang = navigator.language.slice(0, 2) as Language;
  return supportedLanguages.includes(browserLang) ? browserLang : "tr";
};

const I18nContext = createContext<I18nContextType>({
  lang: "tr",
  t: translations.tr,
  setLang: () => {},
  dir: "ltr",
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = translations[newLang].dir;

    const nextPath = `/${newLang}/`;
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;
  }, [lang]);

  const t = translations[lang];
  const dir = t.dir as "ltr" | "rtl";

  return <I18nContext.Provider value={{ lang, t, setLang, dir }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
