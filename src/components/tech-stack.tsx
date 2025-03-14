import { Card } from "@/components/ui/card"
import { fetchRepositories, fetchUserData, getLanguagesFromRepos } from "@/lib/github";
import { use } from "react"


export function TechStack() {

    let technologies: string[] = [];
    try{
        const gitData = use(fetchUserData());
        const repos = use(fetchRepositories(gitData?.repos_url ?? ''));
        technologies = use(getLanguagesFromRepos(repos));        
    }catch( e){
        console.log(e);
        technologies = [
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'MongoDB',
            'MySQL',
            'Docker',
            'Git',
            'Linux',
            'GitHub',
            'Python',
            'PHP',
            'C',
            'C++',
            'HTML',
            'CSS',
            'Laravel',
        ];
    }finally {
        return (
            <Card className="mt-6 border-blue-500/50 bg-blue-950/20 p-6">
              <h2 className="text-xl font-bold text-white">Tech Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-blue-500/50 bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          )
    }
}

