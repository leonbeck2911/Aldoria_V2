import "./Hero.css";

import logo from "../../../assets/logo/aldoria-logo.png";

export default function Hero() {
    return (
        <section id="hero" className="hero">

            <div className="hero-overlay"></div>

            <div className="hero-content">

                <img
                    src={logo}
                    alt="Aldoria"
                    className="hero-logo"
                />

                <p className="hero-pretitle">
                    JOURNEY THROUGH
                </p>

                <h1>VIRETHIA</h1>

                <p className="hero-description">
                    A handcrafted Minecraft Survival RPG where
                    exploration, progression and player freedom
                    define every adventure.
                </p>

                <div className="hero-buttons">

                    <button className="primary">
                        Begin Your Journey
                    </button>

                    <button className="secondary">
                        Open Codex
                    </button>

                </div>

            </div>

        </section>
    );
}