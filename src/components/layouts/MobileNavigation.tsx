import {MainNavItem} from "../../types";
import {Icons} from '../icons.tsx';
import {siteConfig} from "../../config/site.ts";
import {Link} from "react-router-dom";
import {
    Sheet,
    SheetClose,
    SheetContent, SheetTitle,
    SheetTrigger,
} from "../ui/sheet.tsx"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion.tsx"
import {Button} from "../ui/button.tsx";
import {ScrollArea} from "../ui/scroll-area.tsx"
import {useEffect, useState} from "react";

interface MainNavigationProps {
    items?: MainNavItem[];
}

function MobileNavigation({items}: MainNavigationProps) {
    const [isDesktop, setIsDesktop] = useState(false);
    const query = "(min-width:1024px)";

    useEffect(() => {
        function onChange(event: MediaQueryListEvent){
            setIsDesktop(event.matches);
        }
        const result = matchMedia(query);
        result.addEventListener("change",onChange);
        return () => result.removeEventListener("change",onChange);
    }, [query]);

    if (isDesktop){
        return null;
    }

    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="ml-4 size-5">
                        <Icons.menu aria-hidden="true"/>
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pt-9 px-4">
                    <SheetTitle className="sr-only">{siteConfig.name}</SheetTitle>
                    <SheetClose asChild>
                        <Link to="/" className="flex items-center">
                            <Icons.logo className="size-4 mr-2" aria-hidden="true"/>
                            <span className="font-bold">{siteConfig.name}</span>
                            <span className="sr-only">Home</span>
                        </Link>
                    </SheetClose>
                    <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-8">
                        <Accordion type="multiple" className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>{items?.[0].title}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col space-y-2 pl-2">
                                        {items?.[0].card.map((item) => (
                                            <SheetClose asChild key={item.title}>
                                                <Link to={String(item.href)} className="text-foreground/70">
                                                    {item.title}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className="flex flex-col space-y-2 mt-4">
                            {items?.[0]?.menu.map((item) => (
                                <SheetClose asChild key={item.title}>
                                    <Link to={String(item.href)}>
                                        {item.title}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default MobileNavigation;