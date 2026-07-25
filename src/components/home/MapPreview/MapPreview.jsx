import "./MapPreview.css";

export default function MapPreview() {
    return (
        <section id="map" className="map-preview">

            <div className="map-content">

                <p className="map-pretitle">
                    ✦ EXPLORE THE WORLD ✦
                </p>

                <h2>Interactive World Map</h2>

                <p className="map-description">
                    Explore Virethia before you even join the adventure.
                    Discover kingdoms, landmarks, settlements and hidden
                    locations through our interactive live world map.
                </p>

                <a
                    href="#"
                    className="map-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open Interactive Map →
                </a>

            </div>

            <div className="map-image">

                <div className="map-placeholder">
                    Map Preview
                </div>

            </div>

        </section>
    );
}