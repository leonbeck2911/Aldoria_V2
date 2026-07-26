import "./MapPreview.css";
import bluemapPreview from "../../../assets/images/bluemap-preview.webp";

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
                    href="http://88.211.228.198:9677/#playworld:29:0:215:759:0:0:0:1:flat"
                    className="map-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open Interactive Map →
                </a>

            </div>

            <div className="map-image">

                <a
                    href="http://88.211.228.198:9677/#playworld:29:0:215:759:0:0:0:1:flat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-card"
                >

                    <img
                        src={bluemapPreview}
                        alt="BlueMap Preview"
                    />

                    <div className="map-overlay">

                        <h3>Explore Virethia</h3>

                        <p>Open the live interactive map</p>

                    </div>

                </a>

            </div>

        </section>
    );
}