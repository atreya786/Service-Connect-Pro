import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-36 w-64 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-64" />
        <div className="flex gap-8">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>
    </div>
  );
}
