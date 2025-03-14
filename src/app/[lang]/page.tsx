import { ProfileHeader } from "@/components/profile-header"
import { ProjectGrid } from "@/components/project-grid"
import { AboutMe } from "@/components/profile-about-me"
import { getDictionary } from "@/lib/dictionary"
import { Suspense } from "react"
import { ProfileStats } from "@/components/profile-stats"
import { TechStack } from "@/components/tech-stack"
import Loading from "./loading"
import { SpeedDial } from "@/components/ui/speed-dial"

// eslint-disable-next-line 
export default async function ProfilePage({ params }: any) {
    const { lang } = params
    const dictionary = await getDictionary(lang)

    return (
        <>
            <Suspense fallback={<Loading />}>
                <ProfileHeader {...params}/>
            </Suspense>
            
            <AboutMe bio={dictionary["bio"]} />
            
            <Suspense fallback={<Loading />}>
                <ProfileStats />
            </Suspense>

            <Suspense fallback={<Loading />}>
                <TechStack />
            </Suspense>
            
            <ProjectGrid dictionary={dictionary} />
            
            <SpeedDial currentLang={lang} />
        </>
    )
}