import "./Library.css";

const libraryItems = [
    {
        title: "Weapons",
        description: "Discover legendary weapons, unique abilities and powerful equipment."
    },
    {
        title: "Bosses",
        description: "Learn about fearsome bosses, mechanics and valuable rewards."
    },
    {
        title: "Items",
        description: "Browse rare materials, crafting ingredients and useful resources."
    },
    {
        title: "Enchantments",
        description: "Master custom enchantments to strengthen your adventure."
    },
    {
        title: "Lore",
        description: "Uncover the history, kingdoms and secrets of Virethia."
    },
    {
        title: "Kingdom",
        description: "Meet the factions, cities and people shaping the world."
    }
];

export default function Library() {
    return (
        <section id="library" className="library">

            <div className="library-header">

                <p className="library-pretitle">
                    ✦ GRAND LIBRARY ✦
                </p>

                <h2>Knowledge is Power</h2>

                <p className="library-description">
                    Every great adventure begins with knowledge. Explore the
                    Grand Library to discover everything Virethia has to offer.
                </p>

            </div>

            <div className="library-grid">

                {libraryItems.map((item) => (
                    <div className="library-card" key={item.title}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}

            </div>

        </section>
    );
}