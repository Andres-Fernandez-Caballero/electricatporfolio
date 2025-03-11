'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'
import { useState } from 'react'

const languages = {
  es: 'Español',
  en: 'English',
} as const

export function SpeedDial({ currentLang }: { currentLang: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLanguageChange = (newLang: string) => {
    // Reemplazar el idioma actual en la URL con el nuevo
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`)
    router.push(newPathname)
    setIsOpen(false) // Cerrar el menú después de seleccionar
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* SpeedDial Button */}
      <Button 
        variant="secondary" 
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Languages className="h-6 w-6" />
        <span className="sr-only">Cambiar idioma</span>
      </Button>

      {/* Actions */}
      <div
        className={`absolute bottom-16 right-0 flex flex-col items-end space-y-2 transition-all duration-200 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {Object.entries(languages).map(([lang, label]) => (
          <Button
            key={lang}
            variant={currentLang === lang ? "default" : "secondary"}
            className="w-32 justify-start gap-2"
            onClick={() => handleLanguageChange(lang)}
          >
            <span>{lang === 'es' ? '🇪🇸' : '🇬🇧'}</span>
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}

