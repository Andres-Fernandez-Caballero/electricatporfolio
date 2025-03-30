import { Project } from "@/contracts/domain";
import { getProjects } from "@/app/actions/get-projects.action";

export async function fetchProjects(): Promise<Project[]> {
  try {
    return await getProjects();
  } catch (error) {
    console.error("Error fetching projects", error);
    return [];
  }
}
