import "./Library.css";
import "./LibraryCard.css";

import LibraryCard from "./LibraryCard";
import libraryData from "./libraryData";

export default function Library() {

    return (

        <section id="library" className="library">

            <div className="library-header">

                <p className="library-pretitle">
                    ✦ THE ARCHIVES ✦
                </p>

                <h2>The Library of Aldoria</h2>

                <p className="library-description">
                    Discover detailed guides, world lore and everything you need
                    before beginning your adventure.
                </p>

            </div>

            <div className="library-grid">

                {libraryData.map(card => (

                    <LibraryCard
                        key={card.title}
                        {...card}
                    />

                ))}

            </div>

        </section>

    );

}