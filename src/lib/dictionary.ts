export type Locale = 'en' | 'es';
export type DictionaryEntry = {
    title: string,
    description: string,
}

export type Dictionary = {
    en: DictionaryEntry,
    es: DictionaryEntry,
}

export const getDictionary = async (locale: string) => {
    try {
        const dictionary = await import(`../locales/${locale}.json`);
        return dictionary.default;
    } catch (error) {
        console.error(`Error loading locale: ${locale}`, error);
        throw new Error ('locale must have es.json and en.json files');
    }
}