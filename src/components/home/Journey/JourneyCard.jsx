import "./JourneyCard.css";

export default function JourneyCard({ card, active, onClick }) {
    const CardIcon = card.icon;

    return (
        <div className="journey-card">

            <div
                className={`journey-card-inner ${active ? "active" : ""}`}
                onClick={onClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onClick();
                    }
                }}
            >

                {/* FRONT */}

                <div className="journey-face journey-front">

                    <div className="journey-front-content">

                        <div className="journey-icon-circle">
                            <CardIcon
                                className="journey-icon"
                                strokeWidth={1.8}
                            />
                        </div>

                        <h3>{card.title}</h3>

                        <p>{card.description}</p>

                    </div>

                    <div className="journey-footer">
                        <span>Click to Explore</span>
                    </div>

                </div>

                {/* BACK */}

                <div className="journey-face journey-back">

                    <div className="journey-back-header">

                        <CardIcon
                            className="journey-back-icon"
                            strokeWidth={1.8}
                        />

                        <h3>{card.title}</h3>

                    </div>

                    <div className="journey-links">

                        {card.links.map((link) => {

                            const LinkIcon = link.icon;

                            return (

                                <a
                                    key={link.title}
                                    href={link.path}
                                    className="journey-link"
                                    onClick={(e) => e.stopPropagation()}
                                >

                                    <div className="journey-link-content">

                                        <LinkIcon
                                            className="journey-link-icon"
                                            strokeWidth={1.8}
                                        />

                                        <span>{link.title}</span>

                                    </div>

                                    <span className="journey-arrow">
                                        →
                                    </span>

                                </a>

                            );

                        })}

                    </div>

                    <div className="journey-footer">
                        <span>Click to Close</span>
                    </div>

                </div>

            </div>

        </div>
    );
}