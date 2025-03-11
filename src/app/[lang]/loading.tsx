import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <Card className="mt-6 border-blue-500/50 bg-blue-950/20 p-6">
            <div className="space-y-6">
                <div className="space-y-2">
                    <Skeleton className="h-[1.25rem]" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-[1.25rem]" />
                    <Skeleton className="h-[1rem]" />
                    <Skeleton className="h-[1.25rem]" />
                    <Skeleton className=" h-[1rem]" />
                </div>
               
            </div>
        </Card>
    )
}