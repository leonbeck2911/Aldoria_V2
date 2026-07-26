import "./UpdateCard.css";

export default function UpdateCard({ update }) {

    const Icon = update.icon;

    return (

        <article
            className={`update-card ${update.color}`}
            onClick={() => window.open(update.link, "_blank")}
        >

            <div className="update-top">

                <div className="update-category">

                    <Icon size={18} />

                    <span>{update.category}</span>

                </div>

                <span className="update-date">

                    {update.date}

                </span>

            </div>

            <h3>

                {update.title}

            </h3>

            <p>

                {update.description}

            </p>

        </article>

    );

}