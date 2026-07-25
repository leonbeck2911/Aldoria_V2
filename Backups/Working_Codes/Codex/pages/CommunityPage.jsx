export default function CommunityPage() {
    return (
        <>
            <div className="page-header">

                <h2 className="page-title">
                    Community
                </h2>

                <p className="page-description">
                    Stay connected with fellow adventurers. Read the latest
                    updates and become part of the Aldoria community.
                </p>

            </div>

            <div className="codex-divider"></div>

            <div className="page-links">

                <button className="page-link">

                    <div className="page-link-left">

                        <span className="page-link-icon">📢</span>

                        <div className="page-link-text">
                            <h3>News</h3>
                            <p>Read the latest announcements.</p>
                        </div>

                    </div>

                    <span className="page-link-arrow">→</span>

                </button>

                <button className="page-link">

                    <div className="page-link-left">

                        <span className="page-link-icon">💬</span>

                        <div className="page-link-text">
                            <h3>Discord</h3>
                            <p>Join the official Aldoria community.</p>
                        </div>

                    </div>

                    <span className="page-link-arrow">→</span>

                </button>

                <button className="page-link">

                    <div className="page-link-left">

                        <span className="page-link-icon">🛠️</span>

                        <div className="page-link-text">
                            <h3>Patch Notes</h3>
                            <p>See what's new in every update.</p>
                        </div>

                    </div>

                    <span className="page-link-arrow">→</span>

                </button>

                <button className="page-link">

                    <div className="page-link-left">

                        <span className="page-link-icon">❓</span>

                        <div className="page-link-text">
                            <h3>FAQ</h3>
                            <p>Frequently asked questions and guides.</p>
                        </div>

                    </div>

                    <span className="page-link-arrow">→</span>

                </button>

            </div>
        </>
    );
}