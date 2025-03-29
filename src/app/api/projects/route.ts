import { DictionaryEntry } from "@/lib/dictionary";
import fs from "fs";
import path from "path";

export async function GET() {
    const projectsPath = "public/projects";
    const folders = fs.readdirSync(projectsPath)
        .filter(entry => fs.statSync(path.join(projectsPath, entry)).isDirectory());

    const projects = folders.map(folder => {
        const filesDictionary = fs.readdirSync(`public/projects/${folder}/locale`);
        const info = JSON.parse(fs.readFileSync(`public/projects/${folder}/info.json`, "utf8")?? "{}");
        const dictionary = {}
        filesDictionary.filter(file => file.endsWith(".json")).forEach(file => {
            const locale = file.split(".")[0];
                const data = JSON.parse(fs.readFileSync(`public/projects/${folder}/locale/${file}`, "utf8") ?? "{}");
                (dictionary as Record<string, DictionaryEntry>)[locale] = data as DictionaryEntry;
        });
        const files = fs.readdirSync(`public/projects/${folder}/images`);
        const images = files.filter(file => file.endsWith(".png") || file.endsWith(".jpg")).map(image => `/projects/${folder}/images/${image}`);
        
        const project = {
            name: folder,
            github: info.github,
            live: info.live,
            technologies: info.technologies,
            dictionary: dictionary,
            images: images,
        }
        return project;  
    })

    return Response.json({
        message: "ok",
        data: projects 
    })
}