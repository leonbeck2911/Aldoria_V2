import "./Features.css";
import "../HomeLayout.css";

export default function Features() {

    return (

        <section className="home-section features">

            <div className="home-container">

                <div className="section-header">

                    <p className="section-pretitle">
                        ✦ WHAT AWAITS YOU ✦
                    </p>

                    <h2 className="section-title">
                        Everything You Need
                        <br />
                        For Your Adventure
                    </h2>

                    <p className="section-description">
                        Aldoria is more than a Minecraft server. It is a world
                        built around progression, exploration and adventure.
                    </p>

                </div>

                <div className="features-grid">

                    <div className="feature-card">

                        <h3>Custom Progression</h3>

                        <p>
                            Level your character through unique systems,
                            classes and powerful equipment.
                        </p>

                    </div>

                    <div className="feature-card">

                        <h3>Powerful Enchantments</h3>

                        <p>
                            Discover handcrafted enchantments that change
                            the way you fight and explore.
                        </p>

                    </div>

                    <div className="feature-card">

                        <h3>Epic Bosses</h3>

                        <p>
                            Face dangerous enemies with unique mechanics
                            and rewarding loot.
                        </p>

                    </div>

                    <div className="feature-card">

                        <h3>Rich Lore</h3>

                        <p>
                            Uncover the history, kingdoms and mysteries
                            hidden throughout Aldoria.
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}