import { Dictionary } from "./dictionary";
import { fetchAPI } from "./api-utils";

type Project = {
    name: string,
    technologies: string[],
    live: string,
    github: string,
    dictionary: Dictionary,
    images: string[], 
}

export async function fetchProjects(): Promise<Project[]> {
    try {
       const response = await fetchAPI<{ data: Project[] }>("/api/projects")
       return response.data; 
    } catch (error) {
        return []
    }
}