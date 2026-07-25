import "./InfoCard.css";

export default function InfoCard({ icon, title, value, button }) {
    return (
        <div className="info-card">

            <div className="info-icon">
                {icon}
            </div>

            <h3>{title}</h3>

            <p>{value}</p>

            {button && (
                <button className="info-button">
                    {button}
                </button>
            )}

        </div>
    );
}