import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import ProductRootLayout from "./pages/products/ProductRootLayout.tsx";
import Product from "./pages/products/Product.tsx";
import ProductDetail from "./pages/products/ProductDetail.tsx";
import LoginPage from "./pages/auth/Login.tsx";
import RegisterPage from "./pages/auth/Register.tsx";

const BlogRootLayout = lazy(() => import("./pages/blogs/BlogRootLayout"));
const Blog = lazy(() => import("./pages/blogs/Blog"));
const BlogDetails = lazy(() => import("./pages/blogs/BlogDetails"));

// eslint-disable-next-line react-refresh/only-export-components
const SuspenseFallback = () => <div className="text-center">Loading...</div>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "blogs",
        element: (
          <Suspense fallback={<SuspenseFallback />}>
            <BlogRootLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<SuspenseFallback />}>
                <Blog />
              </Suspense>
            ),
          },
          {
            path: ":postId",
            element: (
              <Suspense fallback={<SuspenseFallback />}>
                <BlogDetails />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "products",
        element: <ProductRootLayout />,
        children: [
          { index: true, element: <Product /> },
          { path: ":productId", element: <ProductDetail /> },
        ],
      },
    ],
  },
  {
    path: "/login", element: <LoginPage />
  },
  {
    path: "/register", element: <RegisterPage />
  }
]);
