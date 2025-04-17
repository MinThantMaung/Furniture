import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer";

function RootLayout() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>

    );
}

export default RootLayout;