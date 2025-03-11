import { ProfileHeader } from "@/components/profile-header"
import { ProjectGrid } from "@/components/project-grid"
import { AboutMe } from "@/components/profile-about-me"
import { getDictionary } from "@/lib/dictionary"
import { Suspense } from "react"
import { ProfileStats } from "@/components/profile-stats"
import { TechStack } from "@/components/tech-stack"
import Loading from "./loading"
import { SpeedDial } from "@/components/ui/speed-dial"
import ErrorBoundary from "@/components/error-boundary"


type PageProps = {
  params: { lang: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export default async function ProfilePage({ params }: PageProps) {
  const { lang } = params
  const dictionary = await getDictionary(lang)

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProfileHeader />
      </Suspense>
      <AboutMe bio={dictionary["bio"]} />
      <Suspense fallback={<Loading />}>
        <ProfileStats />
      </Suspense>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <TechStack />
        </Suspense>
      </ErrorBoundary>
      <ProjectGrid dictionary={dictionary} />
      <SpeedDial currentLang={lang} />
    </>
  )
}
