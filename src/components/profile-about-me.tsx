import { Card } from "./ui/card";

interface AboutMeProps {
    bio: string
}
export const AboutMe = (props: AboutMeProps) => (
    <Card className="mt-6 border-blue-500/50 bg-blue-950/20 p-6">
      <h2 id="about" className="text-xl font-bold text-white">Acerca de mi</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        <p className="text-blue-400">
            {props.bio}   
        </p>
      </div>
    </Card>
)