import { getProjects } from "@/app/actions/get-projects.action";
import { Project } from "@/contracts/domain";

export async function GET() {
  const projects: Project[] = await getProjects();
  return Response.json({
    message: "ok",
    data: projects,
  });
}
