import { posts } from "../../data/posts"
import BlogPostList from "../../components/blogs/BlogPostList"
function Blog() {
  return (
    <div className="container mx-auto mb-4">
        <h1 className="my-8 text-2xl font-bold text-center md:text-left">Latest Blog Posts</h1>
        <BlogPostList posts={posts} />
    </div>
  )
}

export default Blog