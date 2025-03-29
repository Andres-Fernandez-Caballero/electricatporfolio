import { getDictionary } from "@/lib/dictionary"
import { Card } from "./ui/card"
import { use } from "react"
import Image from "next/image"
import { HaveLangProps } from "@/app/[lang]/page"

export const AboutMe = (props: HaveLangProps) => {
  const dictionary = use(getDictionary(props.lang))
  return (
    <Card className="mt-6 border-blue-500/50 bg-blue-950/20 p-6">
      <header>
        <h2 id="about" className="text-xl font-bold text-white">
          Acerca de mi
        </h2>
      </header>
      <div className="mt-4 flex flex-col sm:flex-row gap-4 items-start">
        <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 border-blue-500 bg-black">
          <Image
            src="/imgs/foto_perfil.jpg"
            alt="black cat"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-blue-400">{dictionary["bio"]}</p>
      </div>
    </Card>
  )
}

