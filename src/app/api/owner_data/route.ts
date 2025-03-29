import fs from "fs";
import path from "path";

export async function GET() {
  const publicPath = path.join(process.cwd(), "public");
  const projectsPath = path.join(publicPath, "projects");
  const data = fs.readFileSync(path.join(projectsPath,"owner_data.json"), "utf-8");
  const jsonData = JSON.parse(data);
  
  return Response.json({
    message: "ok",
    data: jsonData
  })
}