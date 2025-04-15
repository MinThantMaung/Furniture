import {createBrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import BlogDetails from './pages/blogs/BlogDetails';
import Blog from './pages/blogs/Blog';
import RootLayout from './pages/RootLayout';
import BlogRootLayout from "./pages/blogs/BlogRootLayout";
import Error from './pages/Error';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            {index: true, element: <Home />},
            {path: "about",element: <About /> },
            {path: "blogs",element: <BlogRootLayout /> ,children:[
                {index: true,element: <Blog />},
                {path: ":postId",element: <BlogDetails /> }
            ]},
            
        ]
    },
]);