import { Outlet } from "react-router-dom";

import Codex from "../components/layout/Codex/Codex";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

export default function MainLayout() {
    return (
        <>
            <Codex />
            
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}