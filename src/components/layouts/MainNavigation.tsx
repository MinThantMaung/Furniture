import {Link} from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '../ui/navigation-menu.tsx'
import {cn} from "../../lib/utils.ts";
import React from "react";
import {MainNavItem} from "../../types";
import {Icons} from '../icons.tsx';
import {siteConfig} from "../../config/site.ts";

interface MainNavigationProps {
    items?: MainNavItem[];
}

export default function MainNavigation({items}: MainNavigationProps) {
    return (
        <div className="hidden gap-6 lg:flex">
            <Link to="/" className="space-x-2 flex items-center">
                <Icons.logo className="size-7" aria-hidden="true"/>
                <span className="font-bold inline-block">{siteConfig.name}</span>
                <span className="sr-only">Home</span>
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    {items?.[0]?.card && (
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>{items[0].title}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                to="/products"
                                            >
                                                <Icons.logo className="size-6" aria-hidden="true"/>
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    {siteConfig.name}
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    {siteConfig.description}
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    {items[0].card.map((item) => (
                                        <ListItem key={item.title} href={item.href} title={item.title}>
                                            {item.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )}
                    {items?.[0]?.menu && items[0].menu.map((item) => (
                        <NavigationMenuItem key={item.title}>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                <Link to={item.href}>
                                    {item.title}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, href, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    to={String(href)}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
