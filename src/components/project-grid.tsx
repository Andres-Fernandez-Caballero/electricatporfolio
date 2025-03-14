import { Card } from "@/components/ui/card"
import { Zap } from "lucide-react"
import { ProjectCarousel } from "./ui/project-carousel"
import h1 from "@/app/assets/projects/hidra/h1.jpeg"
import h2 from "@/app/assets/projects/hidra/h2.png"
import h3 from "@/app/assets/projects/hidra/h3.png"

import cap1 from "@/app/assets/projects/cap/cap1.png"
import cap2 from "@/app/assets/projects/cap/cap2.png"
import cap3 from "@/app/assets/projects/cap/cap3.png"

import turn1 from "@/app/assets/projects/turnera/turn1.png"
import turn2 from "@/app/assets/projects/turnera/turn2.png"
import turn3 from "@/app/assets/projects/turnera/turn3.png"

interface ProjectGridProps {
  dictionary: { [key: string]: string }
}

export function ProjectGrid(props: ProjectGridProps) {
  const projects = [
    {
      images: [h1, h2, h3],
      title: props.dictionary["projects.hidra.title"],
      description: props.dictionary["projects.hidra.description"],
      tech: ["Nextjs", "Tailwind", "Node.js", "NGINX"],
      github: "https://github.com/Andres-Fernandez-Caballero/hidrasport-v2",
    },
    {
      images: [cap1, cap2, cap3],
      title: props.dictionary["projects.cap.title"],
      description: props.dictionary["projects.cap.description"],
      tech: ["PHP", "Laravel", "Mercado Pago", "MySQL"],
      github: "https://github.com/Andres-Fernandez-Caballero/CAP-skate",
    },
    {
      images: [turn1, turn2, turn3],
      title: props.dictionary["projects.turnera.title"],
      description: props.dictionary["projects.turnera.description"],
      tech: ["React Native", "Laravel", "TypeScript", "Mercado Pago"],
      github: "https://github.com/PabloGabrielDonato/app-pista",
    },
  ]

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-white">Featured Projects</h2>
      <div className="mt-4 flex flex-col gap-6">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="group relative overflow-hidden border-blue-500/50 bg-blue-950/20 p-6 transition-colors hover:bg-blue-900/20"
          >
            <div className="absolute right-2 top-2 opacity-50 transition-opacity group-hover:opacity-100">
              <Zap className="h-4 w-4 text-yellow-400" />
            </div>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image Column */}
              <div className={`${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                {project.images && project.images.length > 0 && (
                  <ProjectCarousel images={project.images} title={project.title} />
                )}
              </div>

              {/* Content Column */}
              <div className={`${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                <h3 className="font-bold text-white text-xl">{project.title}</h3>
                <p className="mt-3 text-blue-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 text-xs text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-white hover:text-blue-300 transition-colors bg-blue-800/30 hover:bg-blue-700/40 rounded-md px-4 py-2"
                  >
                    Repositorio Github
                  </a>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

