import Image from "next/image";
import Link from "next/link";
import React from "react";

import { auth } from "@/auth";
import GlobalSearch from "@/components/search/GlobalSearch";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
import ROUTES from "@/constants/routes";

import MobileNavigation from "./MobileNavigation";
import Theme from "./Theme";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow Logo"
        />

        <p className="h2-bold text-dark-100 dark:text-light-900 max-sm:hidden">
          Tek<span className="text-primary-500">Quest</span>
        </p>
      </Link>

      <GlobalSearch />

      <div className="flex-between gap-4">
        <Theme />
        {session?.user?.id ? (
          <UserAvatar
            id={session.user.id}
            name={session.user.name!}
            imageUrl={session.user?.image}
          />
        ) : (
          <Button
            className="body-medium btn-secondary min-h-[41px] w-full rounded-lg px-1 py-0 shadow-none sm:px-4"
            asChild
          >
            <Link href={ROUTES.SIGN_IN}>
              <Image
                src="/icons/account.svg"
                alt="Account"
                width={20}
                height={20}
                className="invert-colors sm:hidden"
              />
              <span className="primary-text-gradient max-sm:hidden">Login</span>
            </Link>
          </Button>
        )}
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
