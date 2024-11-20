import { ReactNode } from "react";

import LeftSidebar from "@/components/navigation/LeftSideBar";
import Navbar from "@/components/navigation/navbar";
import RightSidebar from "@/components/navigation/RightSIdeBar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />

      <div className="">
        <LeftSidebar />

        <section className="no-scrollbar flex h-[calc(100dvh-1px)] flex-1 flex-col overflow-y-auto px-6 pb-6 pt-28 max-md:pb-14 sm:pe-14 sm:ps-40 sm:pt-36 lg:pe-14 lg:ps-80 xl:pe-[25rem]">
          <div className="mx-auto w-full max-w-4xl ">{children}</div>
        </section>

        <RightSidebar />
      </div>
    </main>
  );
};

export default RootLayout;
