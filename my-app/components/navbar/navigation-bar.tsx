import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";

import Link from "next/link";
import { ModeToggle } from "@/components/modetoggle";
import {SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import { Menu as MenuIcon } from 'lucide-react';
  

export function NavigationBar() {
    return (
        
        <NavigationMenu className="list-none h-16 justify-between min-w-full sticky h-16 top-0 p-5 backdrop-blur">
            <div className="md:flex md:flex-row hidden">
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/quiz" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Quiz
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/aboutme" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About me
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            </div>

            <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[200px]">
                    <div className="flex flex-row items-start">
                    <SheetHeader>
                    <SheetTitle>Navigation Menu</SheetTitle>
                    <Button asChild>
                        <Link href="/">Home</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/quiz">Quiz</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/aboutme">About Me</Link>
                    </Button>
                    </SheetHeader>
                    </div>
                </SheetContent>
            </Sheet>

            </div>

            <div className=" flex flex-row">
                <div className="mx-2">
                    <ModeToggle/>
                </div>
                <div className="mx-2 my-1">
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </NavigationMenu>
    )
};