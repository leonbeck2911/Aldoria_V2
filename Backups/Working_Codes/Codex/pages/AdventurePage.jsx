export default function AdventurePage() {
    return (
        <>
            <div className="page-header">

                <h2 className="page-title">
                    Adventure
                </h2>

                <p className="page-description">
                    Prepare for your journey. Discover powerful weapons,
                    dangerous bosses, magical items and ancient enchantments.
                </p>

            </div>

            <div className="codex-divider"></div>

            <div className="page-links">

                <button className="page-link">

                    <div className="page-link-left">

                        <span className="page-link-icon">⚔️</span>

                        <div className="page-link-text">
                            <h3>Weapons</h3>
                            <p>Browse every weapon found in Aldoria.</p>
                        </div>

                    </div>

                    <span className="page-link-arrow">→</span>

                </button>

                <button className="page-link">

                    <div className="page-link-left">

                        <span className="page-link-icon">👹</span>

                        <div className="page-link-text">
                            <h3>Bosses</h3>
                            <p>Face legendary enemies and world bosses.</p>
                        </div>

                    </div>

                    <span className="page-link-arrow">→</span>

                </button>

                <button className="page-link">

                    <div className="page-link-left">

                        <span className="page-link-icon">🎒</span>

                        <div className="page-link-text">
                            <h3>Items</h3>
                            <p>View rare materials, relics and equipment.</p>
                        </div>

                    </div>

                    <span className="page-link-arrow">→</span>

                </button>

                <button className="page-link">

                    <div className="page-link-left">

                        <span className="page-link-icon">✨</span>

                        <div className="page-link-text">
                            <h3>Enchantments</h3>
                            <p>Empower your gear with magical abilities.</p>
                        </div>

                    </div>

                    <span className="page-link-arrow">→</span>

                </button>

            </div>
        </>
    );
}