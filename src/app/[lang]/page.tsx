import { ProfileHeader } from "@/components/profile-header"
import { ProjectGrid } from "@/components/project-grid"
import { AboutMe } from "@/components/profile-about-me"
import { Suspense } from "react"
import { ProfileStats } from "@/components/profile-stats"
import { TechStack } from "@/components/tech-stack"
import Loading from "./loading"
import { SpeedDial } from "@/components/ui/speed-dial"
import { Locale } from "@/lib/dictionary"
import { notFound } from "next/navigation"

export type HaveLangProps = {
    lang: Locale
}

export default async function ProfilePage({ 
  params 
}: { 
  params: Promise<{ lang: Locale }> 
}) {
    // Await the params object before using it
    const { lang } = await params
    
    if (!lang) {
      notFound()
    }

    // Create an object with the awaited lang value to pass to components
    const langProps = { lang }

    return (
        <>
            <Suspense fallback={<Loading />}>
                <ProfileHeader {...langProps} />
            </Suspense>
            
            <Suspense fallback={<Loading />}>
                <AboutMe {...langProps} />
            </Suspense>
            
            <Suspense fallback={<Loading />}>
                <ProfileStats />
            </Suspense>
            
            <Suspense fallback={<Loading />}>
                <TechStack />
            </Suspense>
            
            <Suspense fallback={<Loading />}>
                <ProjectGrid {...langProps} />
            </Suspense>
             
            <SpeedDial currentLang={lang} /> 
        </>
    )
}