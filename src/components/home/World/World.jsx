import "./World.css";

export default function World() {
    return (
        <section id="world" className="world">

            <div className="world-header">

                <p className="world-pretitle">
                    ✦ THE WORLD AWAITS ✦
                </p>

                <h2>The World of Virethia</h2>

                <p className="world-description">
                    Beyond the safety of the capital lies Virethia —
                    a handcrafted fantasy world filled with ancient
                    ruins, forgotten kingdoms, dangerous creatures,
                    and hidden secrets waiting to be uncovered.
                </p>

            </div>

            <div className="world-grid">

                <div className="world-card">
                    <h3>🏰 Capital City</h3>
                    <p>
                        Begin your adventure in Aldoria's capital,
                        where NPCs guide your first steps into the world.
                    </p>
                </div>

                <div className="world-card">
                    <h3>🌲 Explore</h3>
                    <p>
                        Venture through handcrafted forests, mountains,
                        ruins and mysterious locations.
                    </p>
                </div>

                <div className="world-card">
                    <h3>⚔ Epic Encounters</h3>
                    <p>
                        Face powerful bosses, hidden enemies and
                        dangerous challenges scattered across Virethia.
                    </p>
                </div>

                <div className="world-card">
                    <h3>🌀 Portal Pool</h3>
                    <p>
                        Reach Level 60 and unlock the gateway to
                        the Survival World where your real journey begins.
                    </p>
                </div>

            </div>

        </section>
    );
}