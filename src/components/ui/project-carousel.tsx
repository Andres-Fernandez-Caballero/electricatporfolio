"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import placeholder from "@/app/assets/placeholder.svg"

interface ProjectCarouselProps {
  images: string[]
  title: string
  autoplayInterval?: number
}

export function ProjectCarousel({ images, title, autoplayInterval = 2000 }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  // Autoplay
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      nextSlide()
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [autoplayInterval, images.length])

  // Si no hay imágenes, no mostramos el carrusel
  if (!images || images.length === 0) return null

  return (
    <div className="relative h-96 w-full rounded-md bg-blue-950/30">
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-500",
            index === currentIndex ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={image || placeholder}
            style={{ color: "white", backgroundColor: "transparent" }}
            alt={`${title} - imagen ${index + 1}`}
            fill
            className="object-contain"
            priority={index === 0}
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/70"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white/90 backdrop-blur-sm transition-colors hover:bg-black/70"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-1.5 w-6 rounded-full transition-colors",
                  index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/80",
                )}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

