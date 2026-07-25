import "./ServerInfo.css";
import "../HomeLayout.css";

import InfoCard from "./InfoCard";

export default function ServerInfo() {

    return (

        <section className="home-section server-info">

            <div className="home-container">

                <div className="section-header">

                    <p className="section-pretitle">
                        ✦ SERVER INFORMATION ✦
                    </p>

                    <h2 className="section-title">
                        Prepare For Your Adventure
                    </h2>

                    <p className="section-description">
                        Everything you need before stepping into the world of Aldoria.
                    </p>

                </div>

                <div className="server-grid">

                    <InfoCard
                        icon="👥"
                        title="Adventurers"
                        value="Coming Soon"
                    />

                    <InfoCard
                        icon="🎮"
                        title="Current Version"
                        value="Minecraft 1.21.x"
                    />

                    <InfoCard
                        icon="🌍"
                        title="Server IP"
                        value="Coming Soon"
                    />

                    <InfoCard
                        icon="💬"
                        title="Discord"
                        value="Join our community"
                        button="Join"
                    />

                    <InfoCard
                        icon="🛒"
                        title="Store"
                        value="Opening Soon"
                    />

                    <InfoCard
                        icon="🟢"
                        title="Kingdom Status"
                        value="Online"
                    />

                </div>

            </div>

        </section>

    );

}