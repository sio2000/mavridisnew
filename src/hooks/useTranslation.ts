import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationKeys = NestedKeyOf<typeof translations.el>;

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKeys) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value[k] === undefined) {
        console.warn(`Translation key "${key}" not found`);
        return key;
      }
      value = value[k];
    }
    
    return value;
  };

  return { t };
}; 