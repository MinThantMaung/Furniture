import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation.tsx";
import { siteConfig } from "../../config/site.ts";
import { ModeToggle } from "../mode-toggle.tsx";

function Header() {
  return (
    <header className="w-full border-b fixed top-0 z-50 bg-background">
      <nav className="container mx-auto flex items-center h-16">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4 mr-8 lg:mr-0">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
