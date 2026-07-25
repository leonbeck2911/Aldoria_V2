import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">
                    <h2>Aldoria</h2>

                    <p>
                        Forge your legend in the world of Virethia.
                        Discover ancient kingdoms, legendary bosses
                        and endless adventures.
                    </p>
                </div>

                <div className="footer-links">

                    <div>
                        <h3>Explore</h3>

                        <a href="/">Home</a>
                        <a href="/codex">Codex</a>
                        <a href="/map">Map</a>
                        <a href="/downloads">Downloads</a>
                    </div>

                    <div>
                        <h3>Community</h3>

                        <a href="#">Discord</a>
                        <a href="#">GitHub</a>
                        <a href="#">YouTube</a>
                    </div>

                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Aldoria. All Rights Reserved.
            </div>

        </footer>
    );
}