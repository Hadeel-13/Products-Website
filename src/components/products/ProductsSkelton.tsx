import { Layout } from "../shared/Layout";
import { Skeleton } from "../ui/skeleton";

export default function ProductsSkelton({ num = 4 }: { num?: number }) {
  return (
    <Layout variant={"products"}>
      {Array.from(Array(num))?.map((_, idx) => (
        <div
          key={idx}
          className="flex w-full flex-col space-y-3 rounded-lg border shadow-sm p-3 bg-white"
        >
          <div className="space-y-2">
            <Skeleton className="h-4 w-[50px]" />
            <Skeleton className="h-4 w-full" />
          </div>
          <Skeleton className="h-[200px] w-full rounded-xl aspect-square" />
          <Skeleton className="h-4 w-[100px] rounded-xl" />
          <Skeleton className="h-4 w-[150px] rounded-xl" />
          <Skeleton className="h-4 w-[200px] rounded-xl" />
          <div className="flex flex-row flex-wrap items-center justify-between gap-3">
            <Skeleton className="h-8 w-full rounded-lg" />
          </div>
        </div>
      ))}
    </Layout>
  );
}
