export default function CommunityPage() {
    return (
        <>
            <div className="page-header">

                <h2 className="page-title">
                    Community
                </h2>

                <p className="page-description">
                    Discover the kingdoms, forgotten lore,
                    citizens and history that shaped Aldoria.
                </p>

            </div>

            <div className="codex-divider"></div>

            <div className="page-links">

                <button className="page-link">

                    <div className="page-link-left">

                        <span className="page-link-icon">
                            🏰
                        </span>

                        <div className="page-link-text">

                            <h3>Kingdom</h3>

                            <p>
                                Explore every region of Aldoria.
                            </p>

                        </div>

                    </div>

                    <span className="page-link-arrow">
                        →
                    </span>

                </button>

                <button className="page-link">

                    <div className="page-link-left">

                        <span className="page-link-icon">
                            📜
                        </span>

                        <div className="page-link-text">

                            <h3>Lore</h3>

                            <p>
                                Ancient stories and forgotten myths.
                            </p>

                        </div>

                    </div>

                    <span className="page-link-arrow">
                        →
                    </span>

                </button>

                <button className="page-link">

                    <div className="page-link-left">

                        <span className="page-link-icon">
                            👥
                        </span>

                        <div className="page-link-text">

                            <h3>Citizens</h3>

                            <p>
                                Meet the people who inhabit Aldoria.
                            </p>

                        </div>

                    </div>

                    <span className="page-link-arrow">
                        →
                    </span>

                </button>

                <button className="page-link">

                    <div className="page-link-left">

                        <span className="page-link-icon">
                            📚
                        </span>

                        <div className="page-link-text">

                            <h3>Wiki</h3>

                            <p>
                                General knowledge and references.
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