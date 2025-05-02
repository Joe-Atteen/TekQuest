import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <>
      <section className="flex flex-col-reverse items-start justify-between sm:flex-row">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <Skeleton className="size-[140px] rounded-full object-cover" />

          <div className="mt-3">
            <Skeleton className="h-7 w-32" />
            <Skeleton className="mt-1 h-5 w-32" />
            <Skeleton className="mt-5 h-5 w-32" />
          </div>
        </div>

        <div className="flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3">
          <Skeleton className="h-12 w-40" />
        </div>
      </section>

      <section>
        <div className="mt-10">
          <h4 className="h3-semibold text-dark200_light900">
            Stats{" "}
            <span className="small-semibold primary-text-gradient">0</span>
          </h4>

          <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
            <Skeleton className="h-[105px] w-full rounded-lg" />

            <Skeleton className="h-[105px] w-full rounded-lg" />

            <Skeleton className="h-[105px] w-full rounded-lg" />

            <Skeleton className="h-[105px] w-full rounded-lg" />
          </div>
        </div>
      </section>

      <section className="mt-10 flex gap-10">
        <div className="w-full">
          <Skeleton className="h-10 w-40" />

          <div className="mt-5 flex flex-wrap gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <Skeleton key={item} className="h-[11.5rem] w-full rounded-xl" />
            ))}
          </div>
        </div>

        <div className="flex w-full min-w-[250px] flex-1 flex-col max-lg:hidden">
          <h3 className="h3-bold text-dark200_light900">Top Tags</h3>

          <div className="mt-8 flex flex-wrap gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Skeleton key={item} className="h-8 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Loading;
