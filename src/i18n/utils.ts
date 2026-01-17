import type { Language, LocalizedString } from '../types';
import ui from './ui.json';

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'th', name: 'Thai', nativeName: 'ไทย' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
];

export const defaultLang: Language = 'th';

export function getLangFromUrl(url: URL): Language {
  const pathParts = url.pathname.split('/').filter(Boolean);
  const firstPart = pathParts[0];

  if (firstPart && isValidLanguage(firstPart)) {
    return firstPart;
  }
  return defaultLang;
}

export function isValidLanguage(lang: string): lang is Language {
  return languages.some((l) => l.code === lang);
}

export function getLocalizedText(
  content: LocalizedString | undefined,
  lang: Language
): string {
  if (!content) return '';
  return content[lang] || content[defaultLang] || content['en'] || '';
}

type UIKeys = typeof ui;

export function useTranslations(lang: Language) {
  return function t(
    section: keyof UIKeys,
    key: string,
    subkey?: string
  ): string {
    const sectionData = ui[section] as Record<string, unknown>;
    if (!sectionData) return key;

    const keyData = sectionData[key] as LocalizedString | Record<string, LocalizedString>;
    if (!keyData) return key;

    if (subkey) {
      const subData = (keyData as Record<string, LocalizedString>)[subkey];
      if (!subData) return subkey;
      return subData[lang] || subData[defaultLang] || subkey;
    }

    const localizedData = keyData as LocalizedString;
    return localizedData[lang] || localizedData[defaultLang] || key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove leading slash and any existing language prefix
  const cleanPath = path.replace(/^\//, '').replace(/^(th|en|zh|es|fr|it|ru)\//, '');

  // Default language doesn't need prefix
  if (lang === defaultLang) {
    return '/' + cleanPath || '/';
  }

  // Add language prefix
  return `/${lang}/${cleanPath}`.replace(/\/$/, '') || `/${lang}`;
}

export function buildLocalizedUrl(
  currentUrl: URL,
  newLang: Language
): string {
  // Get path without language prefix
  const pathParts = currentUrl.pathname.split('/').filter(Boolean);
  const firstPart = pathParts[0];

  let pathWithoutLang: string;
  if (firstPart && isValidLanguage(firstPart)) {
    pathWithoutLang = '/' + pathParts.slice(1).join('/');
  } else {
    pathWithoutLang = currentUrl.pathname;
  }

  return getLocalizedPath(pathWithoutLang, newLang);
}

export function getLanguageName(code: Language): string {
  const lang = languages.find((l) => l.code === code);
  return lang?.nativeName || code;
}
