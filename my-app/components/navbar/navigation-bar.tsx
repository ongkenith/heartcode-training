import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";

import Link from "next/link";
import { ModeToggle } from "@/components/modetoggle";

export function NavigationBar() {
    return (
        <NavigationMenu className="list-none h-16 justify-between min-w-full sticky h-16 top-0 p-5 backdrop-blur">
            <div className="flex flex-row">
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
            <div>
                <ModeToggle/>
            </div>
        </NavigationMenu>
    )
};