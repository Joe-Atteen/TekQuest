const Loading = () => {
  return (
    <section>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>

      <div className="flex h-[calc(100dvh-400px)] items-center justify-center">
        <div className="size-14 animate-spin rounded-full border-t-4 border-orange-600"></div>
      </div>
    </section>
  );
};

export default Loading;
