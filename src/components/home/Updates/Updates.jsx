import "./Updates.css";

const updates = [
    {
        version: "Development",
        title: "The World is Expanding",
        description:
            "New regions, structures and points of interest are continuously being added across Virethia."
    },
    {
        version: "Progress",
        title: "Classes & Progression",
        description:
            "The progression system is being built around meaningful choices, unique classes and long-term character growth."
    },
    {
        version: "Coming Soon",
        title: "Epic Boss Encounters",
        description:
            "Prepare for powerful boss fights with unique mechanics, valuable rewards and memorable battles."
    }
];

export default function Updates() {
    return (
        <section id="updates" className="updates">

            <div className="updates-header">
                <p className="updates-pretitle">
                    ✦ LATEST DEVELOPMENT ✦
                </p>

                <h2>Building the Future of Aldoria</h2>

                <p className="updates-description">
                    Follow the latest progress as new features,
                    systems and adventures are added to the world.
                </p>
            </div>

            <div className="updates-grid">
                {updates.map((update) => (
                    <div className="update-card" key={update.title}>
                        <span>{update.version}</span>
                        <h3>{update.title}</h3>
                        <p>{update.description}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}