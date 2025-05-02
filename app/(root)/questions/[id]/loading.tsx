import React from "react";

const Loading = () => {
  return (
    <div className="flex h-[calc(100dvh-200px)] items-center justify-center">
      <div className="size-14 animate-spin rounded-full border-t-4 border-orange-600"></div>
    </div>
  );
};

export default Loading;
