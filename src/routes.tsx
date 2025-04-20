import {createBrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import BlogDetails from './pages/blogs/BlogDetails';
import Blog from './pages/blogs/Blog';
import RootLayout from './pages/RootLayout';
import BlogRootLayout from "./pages/blogs/BlogRootLayout";
import Error from './pages/Error';
import ProductRootLayout from "./pages/products/ProductRootLayout.tsx";
import Product from "./pages/products/Product.tsx";
import ProductDetail from "./pages/products/ProductDetail.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <Error/>,
        children: [
            {index: true, element: <Home/>},
            {path: "about", element: <About/>},
            {
                path: "blogs", element: <BlogRootLayout/>, children: [
                    {index: true, element: <Blog/>},
                    {path: ":postId", element: <BlogDetails/>}
                ]
            },
            {
                path: "products", element: <ProductRootLayout/>, children: [
                    {index: true, element: <Product/>},
                    {path: ":productId", element: <ProductDetail/>}
                ]
            },
        ]
    },
]);