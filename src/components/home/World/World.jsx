import "./World.css";
import "./WorldTile.css";

import WorldTile from "./WorldTile";
import worldData from "./worldData";

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
                    a handcrafted fantasy world filled with ancient ruins,
                    forgotten kingdoms, dangerous creatures and hidden secrets
                    waiting to be uncovered.
                </p>

            </div>

            <div className="world-grid">

                {worldData.map(tile => (

                    <WorldTile
                        key={tile.title}
                        {...tile}
                    />

                ))}

            </div>

            <div className="world-footer">

                <button className="world-button">

                    Explore the World →

                </button>

            </div>

        </section>

    );

}