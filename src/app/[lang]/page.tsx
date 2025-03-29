import { ProfileHeader } from "@/components/profile-header"
import { ProjectGrid } from "@/components/project-grid"
import { AboutMe } from "@/components/profile-about-me"
import { Suspense } from "react"
import { ProfileStats } from "@/components/profile-stats"
import { TechStack } from "@/components/tech-stack"
import Loading from "./loading"
import { SpeedDial } from "@/components/ui/speed-dial"
import { Locale } from "@/lib/dictionary"

export type HaveLangProps = {
    lang: Locale
}

// eslint-disable-next-line 
export default async function ProfilePage({ params }: any) {
    const { lang } = params

    return (
        <>
            <Suspense fallback={<Loading />}>
                <ProfileHeader {...params}/>
            </Suspense>
            
            <Suspense fallback={<Loading />}>
                <AboutMe {...params} />
            </Suspense>
            
            <Suspense fallback={<Loading />}>
                <ProfileStats />
            </Suspense>
            
            <Suspense fallback={<Loading />}>
                <TechStack />
            </Suspense>
            
            <Suspense fallback={<Loading />}>
                <ProjectGrid {...params} />
            </Suspense>
             
            <SpeedDial currentLang={lang} /> 
        </>
    )
}