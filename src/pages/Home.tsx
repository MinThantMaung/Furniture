import { Link } from "react-router-dom";
import Couch from "../data/images/couch.png";
import { Button } from "../components/ui/button.tsx";
import CarouselCard from "../components/products/CarouselCard.tsx";
import { products } from "../data/product.ts";
import { posts } from "../data/posts.ts";
import BlogCard from "../components/blogs/blogCard.tsx";

const samplePosts = posts.slice(0,3)

function Home() {
  const Title = ({
    title,
    href,
    sideText,
  }: {
    title: string;
    href: string;
    sideText: string;
  }) => (
    <div className="mt-28 mb-10 flex flex-col md:flex-row md:justify-between px-4 md:px-0">
      <h2 className="text-2xl font-bold mb-4 md:mb-0">{title}</h2>
      <Link to={href} className="text-muted-foreground font-semibold underline">
        {sideText}
      </Link>
    </div>
  );
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between mb-6">
        {/*Text Section*/}
        <div className="text-center lg:text-left my-8 lg:mt-20 lg:mb-0 lg:w-2/5">
          <h1 className="text-4xl font-extrabold mb-4 lg:mb-8 lg:text-6xl text-[#3b5d50]">
            Modern Interior Design Studio
          </h1>
          <p className="mb-6 lg:mb-8">
            Furniture is an essential component of any living space,providing
            functionality, comfort, and aesthetic appeal
          </p>
          <div>
            <Button
              asChild
              className="mr-2 rounded-full bg-orange-300 px-8 py-6 text-base font-bold"
            >
              <Link to="#">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-bold text-[#3b5d50]"
            >
              <Link to="#">Explore</Link>
            </Button>
          </div>
        </div>
        {/*Image Section*/}
        <img src={Couch} alt="Couch" className="w-full lg:w-3/5" />
      </div>
      <CarouselCard products={products} />
      <Title title="Recent Blog" href="/blogs" sideText="View All Posts" />
      <BlogCard posts={samplePosts}/>
    </div>
  );
}

export default Home;
