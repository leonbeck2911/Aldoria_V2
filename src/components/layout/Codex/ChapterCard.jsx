export default function ChapterCard({
    icon,
    title,
    description,
    onClick,
}) {
    return (
        <button
            className="chapter-card"
            onClick={onClick}
        >
            <div className="chapter-glow"></div>

            <div className="chapter-top">

                <div className="chapter-icon">
                    {icon}
                </div>

                <div className="chapter-info">

                    <span className="chapter-label">
                        CHAPTER
                    </span>

                    <h3>{title}</h3>

                </div>

                <span className="chapter-arrow">
                    ❯
                </span>

            </div>

            <div className="chapter-line"></div>

            <p>
                {description}
            </p>

        </button>
    );
}