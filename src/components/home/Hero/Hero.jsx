import "./Hero.css";

import logo from "../../../assets/logo/aldoria-logo.png";

export default function Hero() {
    return (
        <section id="hero" className="hero">

            <div className="hero-content">

                <img
                    src={logo}
                    alt="Aldoria"
                    className="hero-logo"
                />

                <h1>VIRETHIA</h1>

                <p className="hero-description">
                    Forge your legend in a handcrafted Minecraft Survival RPG
                    where exploration, professions, dangerous dungeons and
                    forgotten kingdoms shape every adventure.
                </p>

                <div className="hero-buttons">

                    <a href="#journey" className="primary-button">
                        Start Adventure
                    </a>

                    <a href="#library" className="secondary-button">
                        Browse Library
                    </a>

                </div>

                <a href="#journey" className="scroll-indicator">
                    <span>⌄</span>
                    <p>Scroll</p>
                </a>

            </div>

        </section>
    );
}