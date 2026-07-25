import "./JourneyCard.css";
import { Link } from "react-router-dom";

export default function JourneyCard({
    title,
    description,
    icon,
    button,
    link,
}) {
    return (
        <div className="journey-card">

            <div className="journey-icon">
                {icon}
            </div>

            <h3>{title}</h3>

            <p>{description}</p>

            <Link
                className="journey-button"
                to={link}
            >
                {button} →
            </Link>

        </div>
    );
}