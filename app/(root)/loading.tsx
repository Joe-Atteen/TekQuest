import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Skeleton className="h-12 w-32" />
      </section>

      <section className="mt-11">
        <Skeleton className="h-14 flex-1" />

        <div className="mt-9 flex gap-3 max-sm:flex-col sm:items-center">
          <Skeleton className="h-9 w-28" />
          <Skeleton className="h-9 w-28" />
          <Skeleton className="h-9 w-28" />
          <Skeleton className="h-9 w-28" />
        </div>
      </section>

      <section>
        <div className="mt-10 flex flex-wrap gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Skeleton
              key={item}
              className="h-48 w-full rounded-xl"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Loading;
