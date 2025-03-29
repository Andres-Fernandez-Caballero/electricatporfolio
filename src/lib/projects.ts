import { serverUrl } from "@/app/config";
import { Dictionary } from "./dictionary";

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
       const res = await fetch(`${serverUrl}/api/projects`);
       if(!res.ok)
            throw new Error(`Failed to fetch projects status ERROR: ${res.status}`)
        return ((await res.json()).data as Project[]); 
    } catch (e) {
        console.log(e);
        throw new Error("Failed to fetch projects");
    }
}