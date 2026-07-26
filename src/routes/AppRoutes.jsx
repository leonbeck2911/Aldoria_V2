import { Routes, Route } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Kingdom from "../pages/Kingdom/Kingdom";
import Lore from "../pages/Lore/Lore";
import Citizens from "../pages/Citizens/Citizens";
import Wiki from "../pages/Wiki/Wiki";
import Weapons from "../pages/Weapons/Weapons";
import Enchantments from "../pages/Enchantments/Enchantments";
import Bosses from "../pages/Bosses/Bosses";
import Items from "../pages/Items/Items";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {
    return (
        <>
            <ScrollToTop />

            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/kingdom" element={<Kingdom />} />
                    <Route path="/lore" element={<Lore />} />
                    <Route path="/citizens" element={<Citizens />} />
                    <Route path="/wiki" element={<Wiki />} />
                    <Route path="/weapons" element={<Weapons />} />
                    <Route path="/enchantments" element={<Enchantments />} />
                    <Route path="/bosses" element={<Bosses />} />
                    <Route path="/items" element={<Items />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}