import { Card } from "@/components/ui/card";
import { fetchOwnerData } from "@/lib/owner-data";
import { use } from "react";

export function TechStack() {
  const ownerData = use(fetchOwnerData());

  return (
    <Card className="mt-6 border-blue-500/50 bg-blue-950/20 p-6">
      <h2 className="text-xl font-bold text-white">Tech Stack</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {ownerData.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full border border-blue-500/50 bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </Card>
  );
}
