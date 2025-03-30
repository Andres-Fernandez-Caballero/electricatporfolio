import { Card } from "@/components/ui/card"
import { Zap } from "lucide-react"
import { ProjectCarousel } from "./ui/project-carousel"
import { use } from "react"
import { fetchProjects } from "@/lib/projects"
import { HaveLangProps } from "@/app/[lang]/page"
import { Locale } from "@/contracts/domain"

export function ProjectGrid(props: HaveLangProps) {
  const projects = use(fetchProjects());
  const  lang  = props.lang as Locale;
  
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-white">Featured Projects</h2>
      <div className="mt-4 flex flex-col gap-6">
        
        {
        // @ts-ignore
        projects.map((project, index) => (
          <Card
            key={project.name}
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
                  <ProjectCarousel images={project.images} title={project.name} />
                )}
              </div>

              {/* Content Column */}
              <div className={`${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                <h3 className="font-bold text-white text-xl">{project.dictionary[lang as keyof typeof project.dictionary].title ?? 'No Title'}</h3>
                <p className="mt-3 text-blue-400">{project.dictionary[lang].description ?? 'No Description'}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {
                  project.technologies.map(tech => (
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
        ))
        }
      </div>
    </div>
  )
}

