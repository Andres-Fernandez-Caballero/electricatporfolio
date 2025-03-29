import fs from "fs";

export async function GET() {
  
  const data = fs.readFileSync("public/projects/owner_data.json", "utf-8");
  const jsonData = JSON.parse(data);
  
  return Response.json({
    message: "ok",
    data: jsonData
  })
}