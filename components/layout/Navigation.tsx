"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Home, Info, Newspaper, Clapperboard } from "lucide-react";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image";

interface Link {
  name: string;
  href: string;
  icon: ReactNode;
}

const links: Link[] = [
  {
    name: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    name: "About",
    href: "/about",
    icon: <Info />,
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

const profileLinks: Omit<Link, "icon">[] = [
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "/signout" },
];

const getIsActiveLink = (href: string, pathname: string) => {
  if (href === "/") return pathname === href;
  return pathname.startsWith(href);
};

const ProfileMenu = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="ml-4 flex items-center md:ml-6">
      {/* <!-- Profile dropdown --> */}
      <div className="relative ml-3">
        <div>
          <button
            type="button"
            className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span className="sr-only">Open user menu</span>
            {session?.user?.image ? (
              <Image
                className="h-8 w-8 rounded-full"
                src={session.user.image}
                alt={session.user.name ?? ""}
              />
            ) : (
              <Image
                className="h-8 w-8 rounded-full"
                width={64}
                height={64}
                quality={75}
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=64&h=64&q=75"
                alt="empty user profile image"
              />
            )}
          </button>
        </div>

        {/* <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
        <div
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          {profileLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={classNames(
                "block px-4 py-2 text-sm text-gray-700",
                getIsActiveLink(link.href, pathname) ? "bg-gray-100" : ""
              )}
              title={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const DesktopNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="ml-10 flex items-baseline space-x-4">
      {links.map((link) => (
        <Link
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

const MobileNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-card-foreground">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {links.map((link) => (
          <Link
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

export const Navigation = () => {
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
              <DesktopNavigation />
            </div>
          </div>

          {session ? (
            <ProfileMenu />
          ) : (
            <Button asChild variant="secondary">
              <Link href="/signin">Sign in</Link>
            </Button>
          )}
        </div>
      </div>

      <div className="md:hidden">
        <MobileNavigation />
      </div>
    </nav>
  );
};
