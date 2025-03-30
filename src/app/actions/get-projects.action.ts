'use server'

import { Dictionary, DictionaryEntry, Project } from "@/contracts/domain";
import fs from "fs";
import path from "path";

interface Info {
    name: string;
    github: string;
    live: string;
    technologies: string[];
}

export async function getProjects(): Promise<Project[]>  {
    const publicPath = path.join(process.cwd(), "public");
    const projectsPath = path.join(publicPath, "projects");
    const folders = fs.readdirSync(projectsPath)
        .filter(entry => fs.statSync(path.join(projectsPath, entry)).isDirectory());

    const projects = folders.map(folder => {
        const info = getInfo(projectsPath, folder);
        const dictionary = getDictionary(projectsPath, folder);
        const images = getImages(projectsPath, folder);
        
        const project: Project = {
            name: folder,
            github: info.github,
            live: info.live,
            technologies: info.technologies,
            dictionary: dictionary,
            images: images,
        }
        return project;  
    })

    return projects;
}

function getDictionary(projectsPath: string, folder: string) {
    const filesDictionary = fs.readdirSync(path.join(projectsPath,folder,'locale'));
        const dictionary = {}
        
        filesDictionary.filter(file => file.endsWith(".json")).forEach(file => {
            const locale = file.split(".")[0];
                const data = JSON.parse(fs.readFileSync(path.join(projectsPath,folder,'locale',file), "utf8") ?? "{}");
                (dictionary as Record<string, DictionaryEntry>)[locale] = data as DictionaryEntry;
        });

    return dictionary as Dictionary;
}

function getInfo(projectsPath: string, folder: string): Info {
    return JSON.parse(
        fs.readFileSync(path.join(projectsPath,folder,'info.json'), "utf8")
        ?? 
        // default case
        `{
            "name": "${folder}",
            "github": "",
            "live": "",
            "technologies": []
        }`);
}

function getImages(projectsPath: string, folder: string): string[] {
    const files = fs.readdirSync(path.join(projectsPath,folder,'images'));
        return files.filter(file => file.endsWith(".png") || file.endsWith(".jpg")).map(image => `/projects/${folder}/images/${image}`);
}

