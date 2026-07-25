import { useNavigate } from "react-router-dom";

export default function AdventurePage({ closeCodex }) {

    const navigate = useNavigate();

    const openPage = (path) => {
        closeCodex();
        navigate(path);
    };

    return (
        <>
            <div className="page-header">

                <h2 className="page-title">
                    Adventure
                </h2>

                <p className="page-description">
                    Discover weapons, enchantments,
                    bosses and items throughout Aldoria.
                </p>

            </div>

            <div className="codex-divider"></div>

            <div className="page-links">

                <button
                    className="page-link"
                    onClick={() => openPage("/weapons")}
                >

                    <div className="page-link-left">

                        <span className="page-link-icon">
                            ⚔️
                        </span>

                        <div className="page-link-text">

                            <h3>Weapons</h3>

                            <p>
                                Discover every weapon and their unique abilities.
                            </p>

                        </div>

                    </div>

                    <span className="page-link-arrow">
                        →
                    </span>

                </button>

                <button
                    className="page-link"
                    onClick={() => openPage("/enchantments")}
                >

                    <div className="page-link-left">

                        <span className="page-link-icon">
                            ✨
                        </span>

                        <div className="page-link-text">

                            <h3>Enchantments</h3>

                            <p>
                                Browse magical enchantments and their effects.
                            </p>

                        </div>

                    </div>

                    <span className="page-link-arrow">
                        →
                    </span>

                </button>

                <button
                    className="page-link"
                    onClick={() => openPage("/bosses")}
                >

                    <div className="page-link-left">

                        <span className="page-link-icon">
                            👹
                        </span>

                        <div className="page-link-text">

                            <h3>Bosses</h3>

                            <p>
                                Learn about powerful bosses and the rewards they drop.
                            </p>

                        </div>

                    </div>

                    <span className="page-link-arrow">
                        →
                    </span>

                </button>

                <button
                    className="page-link"
                    onClick={() => openPage("/items")}
                >

                    <div className="page-link-left">

                        <span className="page-link-icon">
                            🎒
                        </span>

                        <div className="page-link-text">

                            <h3>Items</h3>

                            <p>
                                Explore consumables, materials, relics and rare treasures.
                            </p>

                        </div>

                    </div>

                    <span className="page-link-arrow">
                        →
                    </span>

                </button>

            </div>
        </>
    );
}