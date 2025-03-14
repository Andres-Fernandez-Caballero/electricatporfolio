import { Card } from "@/components/ui/card"
import { fetchUserData } from "@/lib/github";
import { Code2, Star, Zap } from 'lucide-react'
import { use } from "react";

export function ProfileStats() {
  const gitData = use(fetchUserData()) ;
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="border-blue-500/50 bg-blue-950/20 p-6">
        <div className="flex items-center gap-4">
          <Code2 className="h-8 w-8 text-blue-400" />
          <div>
            <h3 className="text-sm font-medium text-blue-400">Github Projects</h3>
            <p className="text-xs font-light italic text-white">Datos obtenidos desde github</p>
            <p className="text-2xl font-bold text-white">{gitData?.public_repos ?? 0}</p>
          </div>
        </div>
      </Card>
      <Card className="border-blue-500/50 bg-blue-950/20 p-6">
        <div className="flex items-center gap-4">
          <Star className="h-8 w-8 text-yellow-400" />
          <div>
            <h3 className="text-sm font-medium text-blue-400">Calificaciones positivas</h3>
            <p className="text-xs font-bold text-white">Como profesor en tus <a href="https://www.tusclases.com.ar/profesores-programacion-online/clases-programacion-personalizadas-online-1063348.aspx"  className="text-blue-300 font-bold underline">tusClases.com.ar</a></p> 
            <p className="text-2xl font-bold text-white">39</p>
          </div>
        </div>
      </Card>
      <Card className="border-blue-500/50 bg-blue-950/20 p-6 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-4">
          <Zap className="h-8 w-8 text-blue-400" />
          <div>
            <h3 className="text-sm font-medium text-blue-400">Contributions</h3>
            <p className="text-2xl font-bold text-white">3.4k</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

