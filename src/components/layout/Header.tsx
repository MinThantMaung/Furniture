import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation.tsx";
import { siteConfig } from "../../config/site.ts";
import { ModeToggle } from "../mode-toggle.tsx";

function Header() {
  return (
    <header className="w-full border-b">
      <nav className="container flex items-center h-16 lg:pl-32">
        <MainNavigation items={siteConfig.mainNav} />
        <MobileNavigation items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4 mr-8 lg:mr-32">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
