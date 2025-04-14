import MainNavigation from './MainNavigation';
import {siteConfig} from "../../config/site.ts";

function Header() {
    return (
        <header className="w-full border-b">
            <nav className="container flex items-center h-16">
                <MainNavigation items={siteConfig.mainNav}/>
            </nav>
        </header>
    );
}

export default Header;