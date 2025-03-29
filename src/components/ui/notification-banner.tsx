import type { FC } from "react"

const NotificationBanner: FC = () => {
  return (
    <div className="w-full bg-amber-500/10 border-b border-amber-500/30 text-amber-200">
      <div className="max-w-5xl mx-auto py-3 px-4 flex items-start gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-0.5 flex-shrink-0"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <div>
          <h2 className="text-lg font-medium mb-1">¡Hey! 🚀 Este proyecto aún está en construcción, ¡así que no te asustes si ves algún error! 😄🔧</h2>
          <p className="text-amber-200/90">
          Sí, hay detalles por pulir 🛠️, pero poco a poco los voy solucionando en mis ratos libres. ¡Gracias por tu paciencia! 💪✨
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotificationBanner

