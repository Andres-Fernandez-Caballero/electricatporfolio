export interface OwnerData {
    name: string,
    company: string,
    github_projects: number,
    technologies: string[],
    github: string,
    linkedin: string,
    email: string,
    position: string,
    tusclases: {link: string, rates: number}
}

export type Project = {
    name: string,
    technologies: string[],
    live: string,
    github: string,
    dictionary: Dictionary,
    images: string[], 
}

export type Locale = 'en' | 'es';

export type DictionaryEntry = {
    title: string,
    description: string,
}

export type Dictionary = {
    en: DictionaryEntry,
    es: DictionaryEntry,
}

