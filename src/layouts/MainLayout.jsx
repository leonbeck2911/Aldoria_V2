import { Outlet } from "react-router-dom";

import Navbar from "../ui/Navbar/Navbar";
import Codex from "../components/layout/Codex/Codex";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <Codex />

            <main>
                <Outlet />
            </main>
        </>
    );
}