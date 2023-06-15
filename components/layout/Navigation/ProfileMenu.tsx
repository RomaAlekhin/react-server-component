import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LogOut, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const ProfileMenu = () => {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="max-w-xs rounded-full bg-gray-800 cursor-pointer"
          aria-haspopup="true"
        >
          <span className="sr-only">Open menu</span>
          {session?.user?.image ? (
            <Image
              className="h-8 w-8 rounded-full"
              src={session.user.image}
              alt={session.user.name ?? ""}
              width={64}
              height={64}
              quality={75}
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
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>

        <DropdownMenuLabel className="font-medium">
          {session?.user?.email}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/profile" title="Profile">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/settings" title="Settings">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
