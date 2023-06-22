"use client";

import Link from "next/link";
import { FC, ReactNode } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Home, Newspaper, Clapperboard } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { ProfileMenu } from "./ProfileMenu";
import { getIsActiveLink } from "./helper";
import { Button } from "@/components/ui/button";

interface Link {
  name: string;
  href: string;
  icon: ReactNode;
}

interface NavigationProps {
  pathname: string;
}

const links: Link[] = [
  {
    name: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    name: "Posts",
    href: "/posts",
    icon: <Newspaper />,
  },
  {
    name: "Movies",
    href: "/movies",
    icon: <Clapperboard />,
  },
];

const DesktopNavigation: FC<NavigationProps> = ({ pathname }) => {
  return (
    <div className="ml-10 flex items-baseline space-x-4">
      {links.map((link) => (
        <Link
          key={link.name}
          className={classNames(
            "rounded-md px-3 py-2 text-sm font-medium",
            getIsActiveLink(link.href, pathname)
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          )}
          href={link.href}
          title={link.name}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

const MobileNavigation: FC<NavigationProps> = ({ pathname }) => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-card-foreground">
      <div className="grid h-full max-w-lg grid-flow-col mx-auto font-medium">
        {links.map((link) => (
          <Link
            key={link.name}
            className={classNames(
              "px-3 py-2 m-auto text-base font-medium h-full w-full flex items-center justify-center transition-colors",
              getIsActiveLink(link.href, pathname)
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            )}
            href={link.href}
            title={link.name}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const Navigation: FC = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <nav className="bg-card-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden md:block">
              <DesktopNavigation pathname={pathname} />
            </div>
          </div>

          {session ? (
            <ProfileMenu />
          ) : (
            <Button variant="secondary" onClick={() => signIn()}>
              <Link href="/signin">Sign in</Link>
            </Button>
          )}
        </div>
      </div>

      <div className="md:hidden">
        <MobileNavigation pathname={pathname} />
      </div>
    </nav>
  );
};
