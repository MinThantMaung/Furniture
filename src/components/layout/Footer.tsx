import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";
import { Icons } from "../icons";

function Footer() {
  return (
    <footer className="w-full botder-t">
      <div className="container mx-auto">
        <section className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <section className="">
            <Link to="/" className="flex items-center space-x-2">
            <Icons.logo className="size-6" aria-hidden="true"/>
            <span className="font-bold">{siteConfig.name}</span>
            <span className="sr-only">Home</span>
            </Link>
          </section>
          <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4"></section>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
