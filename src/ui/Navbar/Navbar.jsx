import "./Navbar.css";

import logo from "../../assets/logo/aldoria-logo.png";

export default function Navbar() {
    return (
        <header className="navbar">

            <div className="navbar-container">

                <a href="/" className="navbar-logo">

                    <img
                        src={logo}
                        alt="Aldoria Logo"
                    />

                </a>

                <nav>

                    <a href="/">Home</a>

                    <a href="/codex">Codex</a>

                    <a href="/map">Map</a>

                    <a href="/downloads">Downloads</a>

                    <a href="/news">News</a>

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