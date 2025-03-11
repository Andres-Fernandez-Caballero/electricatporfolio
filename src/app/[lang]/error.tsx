'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex h-[50vh] flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Algo salió mal!</h2>
      <p className="text-muted-foreground">
        {error.message || 'Ha ocurrido un error inesperado'}
      </p>
      <Button
        variant="outline"
        className='text-black'
        onClick={reset}
      >
        Intentar de nuevo
      </Button>
    </div>
  )
}

