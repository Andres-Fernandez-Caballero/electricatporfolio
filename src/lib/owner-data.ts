interface OwnerData {
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

export async function fetchOwnerData(): Promise<OwnerData> {
    try {
        const res = await fetch("http://localhost:3000/api/owner_data");
        if(!res.ok) 
            throw new Error(`Failed to fetch owner data status ERROR: ${res.status}`);
        return ((await res.json()).data as OwnerData)
    } catch (e) {
        console.log(e);
        throw new Error("Failed to fetch owner data"); 
    }
}