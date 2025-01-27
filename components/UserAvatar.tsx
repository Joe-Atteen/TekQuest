import { LogOut } from "lucide-react";
import Image from "next/image";
import React from "react";

import { auth, signOut } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback } from "./ui/avatar";

interface Props {
  id: string;
  name: string;
  imageUrl?: string | null;
  className?: string;
  fallbackClassName?: string;
}

const UserAvatar = async ({
  name,
  imageUrl,
  className = "h-9 w-9",
  fallbackClassName,
}: Props) => {
  const session = await auth();
  const userId = session?.user?.id;

  const initials = name
    .split(" ")
    .map((word: string) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className={className}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              className="object-cover"
              width={36}
              height={36}
              quality={100}
            />
          ) : (
            <AvatarFallback
              className={cn(
                "primary-gradient font-bold tracking-wider text-white",
                fallbackClassName
              )}
            >
              {initials}
            </AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      {userId && (
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={async () => {
              "use server";
              await signOut();
            }}
          >
            <span className="flex items-center gap-2">
              <LogOut className="size-5 text-black dark:text-white" />
              <span className="text-dark300_light900">Logout</span>
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default UserAvatar;
