import "./Home.css";

import Hero from "../../components/home/Hero/Hero";
import Journey from "../../components/home/Journey/Journey";

// We'll add these one by one as we restore them.
import World from "../../components/home/World/World";
import ServerInfo from "../../components/home/ServerInfo/ServerInfo";
import Updates from "../../components/home/Updates/Updates";
import Library from "../../components/home/Library/Library";
import MapPreview from "../../components/home/MapPreview/MapPreview";
import Footer from "../../components/layout/Footer/Footer";

export default function Home() {
    return (
        <div className="home-background">
            <Hero />

            <Journey />

            <World />

            <ServerInfo />

            <Library />

            <Updates />

            <MapPreview />

            <Footer />

        </div>
    );
}