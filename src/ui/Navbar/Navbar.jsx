import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">

                <a href="#hero" className="navbar-brand">
                    ALDORIA
                </a>

                <nav className="navbar-nav">
                    <a href="#journey">Journey</a>
                    <a href="#world">World</a>
                    <a href="#library">Library</a>
                    <a href="#server">Server</a>
                    <a href="#updates">Updates</a>
                    <a href="#map">Map</a>
                </nav>

            </div>
        </header>
    );
}