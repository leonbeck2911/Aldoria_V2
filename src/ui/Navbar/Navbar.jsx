import "./Navbar.css";

import logo from "../../assets/logo/aldoria-logo.png";

export default function Navbar() {
    return (
        <header className="navbar">

            <div className="navbar-container">

                {/* Logo - Scroll to Top */}
                <a href="#hero" className="navbar-logo">

                    <img
                        src={logo}
                        alt="Aldoria Logo"
                    />

                </a>

                <nav>

                    <a href="#journey">Journey</a>

                    <a href="#world">World</a>

                    <a href="#server">Server</a>

                    <a href="#library">Library</a>

                    <a href="#updates">Updates</a>

                    <a href="#map">Map</a>

                </nav>

                <a
                    href="#"
                    className="discord-button"
                >
                    Discord
                </a>

            </div>

        </header>
    );
}