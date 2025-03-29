import { Github, Linkedin, Download } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { LinkButton } from './ui/link-button'
import Link from 'next/link'
import Image from 'next/image';
import electricatImage from '@/app/assets/electricat_logo-min.jpeg';
import { use } from 'react';
import { fetchOwnerData } from '@/lib/owner-data';
import { HaveLangProps } from '@/app/[lang]/page';

export function ProfileHeader(prop: HaveLangProps) {
    const ownerData = use(fetchOwnerData());

    return (
        <Card className="relative overflow-hidden border-blue-500/50 bg-gradient-to-br from-black to-blue-950">
            <div className="absolute inset-0 bg-grid-white/5" />
            <div className="relative p-4 sm:p-6 lg:p-8">
                {/* Contenedor principal */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    {/* Avatar */}
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-lg border-2 border-blue-500 bg-black">
                        {/* <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-blue-500 to-blue-600 opacity-90" /> */}
                        <Image src={electricatImage} alt='black cat' className="h-full w-full object-cover" />
                    </div>

                    {/* Información del perfil */}
                    <div className="flex-1 space-y-1 sm:space-y-2">
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                            {ownerData.company}
                        </h1>
                        <p className="text-base sm:text-lg text-blue-400">
                            {ownerData.position}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <LinkButton
                                href={`https://github.com/${process.env.GITHUB_USER}`}
                                target="_blank"
                                className="gap-2"
                            >
                                <Github className="h-4 w-4" />
                                GitHub
                            </LinkButton>

                            <LinkButton
                                href={process.env.LINKEDIN_URL ?? '#'}
                                target="_blank"
                                className="gap-2"
                            >
                                <Linkedin className="h-4 w-4" />
                                Linkedin
                            </LinkButton>
                        </div>
                    </div>

                    <div className="w-full lg:w-auto lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 mt-4 lg:mt-0">
                        <div className="grid grid-cols-5 rounded-lg overflow-hidden">
                            <Link
                                href={`assets/cv-Andres-Fernandez-${prop.lang}.pdf`}
                                target="_blank"
                                download
                                className="col-span-3 flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition border-r border-white"
                            >
                                <Download className="h-4 w-4" />
                                Download CV
                            </Link>
                            <div className="col-span-2 flex items-center justify-center bg-blue-600 px-2 py-2 text-white hover:bg-blue-700 transition">
                                <p className="uppercase font-medium">{prop.lang}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About me */}
                <div className="mt-6">
                    <Link href="#about">
                        <h2 className="text-lg sm:text-xl font-bold tracking-tighter text-white hover:text-blue-400">
                            {ownerData?.name}
                        </h2>
                    </Link>
                </div>
            </div>
        </Card>
    )
}
