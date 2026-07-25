import "./ServerInfo.css";

const serverStats = [
    {
        title: "Version",
        value: "Minecraft 1.21.11+"
    },
    {
        title: "Gameplay",
        value: "Survival MMORPG"
    },
    {
        title: "Progression",
        value: "Level 1 → 60"
    },
    {
        title: "World",
        value: "Custom Adventure"
    },
    {
        title: "PvP",
        value: "Optional"
    },
    {
        title: "Classes",
        value: "Unique Progression"
    }
];

export default function ServerInfo() {
    return (
        <section id="server" className="server-info">

            <div className="server-header">
                <p className="server-pretitle">
                    ✦ SERVER INFORMATION ✦
                </p>

                <h2>Everything You Need to Know</h2>

                <p className="server-description">
                    Aldoria combines RPG progression, exploration and survival
                    into one connected adventure. Here's a quick overview before
                    you begin your journey.
                </p>
            </div>

            <div className="server-grid">
                {serverStats.map((stat) => (
                    <div className="server-card" key={stat.title}>
                        <h3>{stat.title}</h3>
                        <p>{stat.value}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}