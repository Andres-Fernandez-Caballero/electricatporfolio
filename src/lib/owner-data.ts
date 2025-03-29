import { serverUrl } from "@/app/config";
import { fetchAPI } from "./api-utils";

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
      const response = await fetchAPI<{ data: OwnerData }>("/api/owner_data")
      return response.data
    } catch (error) {
      // Fallback data if the API request fails
      return {
        name: "Default Name",
        company: "Default Company",
        github_projects: 0,
        technologies: ["JavaScript", "React", "Next.js"],
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        email: "example@example.com",
        position: "Developer",
        tusclases: { link: "#", rates: 5 },
      }
    }
  }
  
  