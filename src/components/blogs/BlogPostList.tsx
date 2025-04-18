import React from "react";
import type { Post } from "../../types";
import { Link } from "react-router-dom";

interface PostProps {
  posts: Post[];
}

function BlogPostList({ posts }: PostProps) {
  return (
    <div className="grid grid-cols-1 gap-16 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-0">
      {posts.map((post) => (
        <Link to={`/blogs/${post.id}`} key={post.id}>
          <img
            src={post.image}
            alt="Blog Post"
            className="w-full rounded-xl mb-4"
          />
          <h2 className="line-clamp-1 text-xl font-extrabold">{post.title}</h2>
          <h3 className="line-clamp-3 my-2 text-base font-[400]">{post.content}</h3>
          <div className="text-sm">
            <span className="">
              by <span className="font-[600]">{post.author}</span> on
              <span className="font-[600]"> {post.update_at}</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogPostList;
