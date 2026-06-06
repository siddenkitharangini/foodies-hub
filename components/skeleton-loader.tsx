export function DishSkeleton() {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border animate-pulse">
      {/* Image Skeleton */}
      <div className="relative h-48 sm:h-56 bg-foreground/10 shimmer" />
      
      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-5 bg-foreground/10 rounded shimmer w-3/4" />
        <div className="h-4 bg-foreground/10 rounded shimmer w-full" />
        <div className="h-4 bg-foreground/10 rounded shimmer w-5/6" />
        <div className="pt-2">
          <div className="h-10 bg-primary/10 rounded-lg shimmer w-full" />
        </div>
      </div>
    </div>
  )
}

export function MenuItemSkeleton() {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border animate-pulse">
      <div className="relative h-40 bg-foreground/10 shimmer" />
      <div className="p-3 space-y-2">
        <div className="h-4 bg-foreground/10 rounded shimmer w-2/3" />
        <div className="h-3 bg-foreground/10 rounded shimmer w-full" />
        <div className="pt-2">
          <div className="h-8 bg-primary/10 rounded shimmer w-full" />
        </div>
      </div>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border animate-pulse">
      <div className="h-48 bg-foreground/10 shimmer" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-foreground/10 rounded shimmer w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-foreground/10 rounded shimmer" />
          <div className="h-4 bg-foreground/10 rounded shimmer w-5/6" />
        </div>
        <div className="h-10 bg-primary/10 rounded-lg shimmer w-full" />
      </div>
    </div>
  )
}
