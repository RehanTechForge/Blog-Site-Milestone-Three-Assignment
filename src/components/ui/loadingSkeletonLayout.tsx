import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function LoadingSkeletonLayout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-12 w-3/4 mb-6" />
      {[...Array(3)].map((_, i) => (
        <Card key={i} className="overflow-hidden my-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <AspectRatio ratio={3 / 4}>
                <Skeleton className="h-full w-full" />
              </AspectRatio>
            </div>
            <CardContent className="md:col-span-8 flex flex-col justify-between p-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-24" />
                </div>
                <Skeleton className="h-8 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
              </div>
              <Skeleton className="h-10 w-32" />
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
