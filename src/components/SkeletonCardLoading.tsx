const SkeletonCardLoading = () => {
  return (
    <div className=" m-auto flex max-w-5xl animate-pulse flex-col rounded-2xl border border-youtube-light-border-color bg-youtube-light-button-color p-3 dark:border-none dark:bg-youtube-dark-button-color">
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 pt-4 pb-8 @sm:flex-row">
        <div className="h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="flex items-center justify-center pb-2">
        <div className="h-7 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="flex items-center justify-center gap-2 pb-4">
        <div className="h-10 w-10 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className=" h-5 w-16 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="flex flex-col items-center justify-between gap-8">
        <div className=" h-12 w-16 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="flex flex-col gap-2 pb-2 @md:flex-row @md:gap-4">
          <div className="flex items-center justify-start gap-1 font-light">
            <div className="h-10 w-10 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className=" h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-start gap-1 font-light">
            <div className="h-10 w-10 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className=" h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-start gap-1 font-light">
            <div className="h-10 w-10 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className=" h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCardLoading;
