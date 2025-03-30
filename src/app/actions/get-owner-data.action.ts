"use server";

import { OwnerData } from "@/contracts/domain";
import fs from "fs";
import path from "path";

const DEFAULT_OWNER_DATA: OwnerData = {
  name: "Default Name",
  company: "Default Company",
  github_projects: 0,
  technologies: ["JavaScript", "React", "Next.js"],
  github: "URL_ADDRESS.com/",
  linkedin: "URL_ADDRESS.com/",
  email: "URL_ADDRESS.com/",
  position: "Full Stack Developer",
  tusclases: { link: "#", rates: 0 }
};

export async function getOwnerData(): Promise<OwnerData> {
  try {
    const filePath = path.join(process.cwd(), "public", "projects", "owner_data.json");
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading owner data:", error);
    return DEFAULT_OWNER_DATA;
  }
}
