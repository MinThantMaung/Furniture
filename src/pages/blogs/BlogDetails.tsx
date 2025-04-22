import { useParams, Link } from "react-router-dom";
import { posts } from "../../data/posts";
import { Icons } from "../../components/icons";
import { Button } from "../../components/ui/button";
import RichTextRenderer from "../../components/blogs/RichTextRenderer";

function BlogDetails() {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === postId);

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <section className="flex flex-col lg:flex-row">
        <section className="w-full lg:w-3/4 lg:pr-16">
          <Button variant="outline" asChild className="mb-6 mt-8">
            <Link to="/blogs">
              <Icons.arrowLeft />
              All Posts
            </Link>
          </Button>
          {post ? (
            <>
              <h2 className="text-3xl font-extrabold mb-3">{post.title}</h2>
              <div className="text-sm">
                <span>
                  by <span className="font-[600]">{post.author}</span> on
                  <span className="font-[600]"> {post.updated_at}</span>
                </span>
              </div>
              <h3 className="text-base font-[400] my-6">{post.content}</h3>
              <img
                src={post.image}
                alt={post.title}
                className="w-full rounded-xl"
              />
              <RichTextRenderer content={post.body} className="my-8" />
              <div className="mb-12 space-x-2">
                {post.tags.map((tag) => (
                  <Button variant="secondary">{tag}</Button>
                ))}
              </div>
            </>
          ) : (
            <p className="mb-16 mt-8 text-center text-xl font-bold text-muted-foreground lg:mt-24">
              No post found
            </p>
          )}
        </section>
        <section className="w-full lg:w-1/4 lg:mt-24">
          <div className="flex mb-8 items-center gap-2 text-base font-semibold">
            <Icons.layer />
            <h3 className="">Other Blog Posts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            {posts.map((post) => (
              <Link to={`/blogs/${post.id}`} className="mb-6 flex items-start gap-2">
                <img src={post.image} alt="blog post" className="w-1/4 rounded" />
                <div className="w-3/4 text-sm font-[500] text-muted-foreground">
                  <p className="line-clamp-2">{post.content}</p>
                  <i>...see more</i>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogDetails;
