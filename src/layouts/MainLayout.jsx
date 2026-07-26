import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../ui/Navbar/Navbar";

export default function MainLayout() {
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return (
        <>
            {isHomePage && <Navbar />}

            <main>
                <Outlet />
            </main>
        </>
    );
}