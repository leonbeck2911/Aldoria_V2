import { useState } from "react";
import "./Enchantments.css";

import BackToHome from "../../ui/BackToHome/BackToHome";
import EnchantmentCard from "../../components/enchantments/EnchantmentCard";
import enchantments from "../../data/enchantments.json";

export default function Enchantments() {

    const [flippedCards, setFlippedCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleFlip = (id) => {

        setFlippedCards(previous => {

            // Already flipped? Close it.
            if (previous.includes(id)) {
                return previous.filter(cardId => cardId !== id);
            }

            // Only allow 2 cards open.
            if (previous.length === 2) {
                return [previous[1], id];
            }

            return [...previous, id];

        });

    };

    const filteredEnchantments = enchantments.filter((enchantment) => {

        return enchantment.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

    });

    return (

        <main className="library-page">

            <div className="library-overlay">

                <BackToHome />

                <section className="library-hero">

                    <span className="library-subtitle">
                        ✨ The Arcane Archives ✨
                    </span>

                    <h1 className="library-title">
                        Arcane Library
                    </h1>

                    <p className="library-description">
                        Within these ancient halls lies every magical enchantment
                        ever discovered throughout Aldoria. Forgotten spells,
                        legendary blessings, and powerful curses are preserved
                        here by the greatest mages of the kingdom.
                    </p>

                </section>

                <section className="library-hall">

                    <div className="library-hall-header">

                        <h2>Arcane Catalogue</h2>

                        <p className="enchantment-count">
                            {enchantments.length} ✦ Known Enchantments
                        </p>

                        <p className="archive-description">
                            Search through every magical enchantment ever discovered throughout Aldoria.
                        </p>

                    </div>

                    <div className="library-divider">
                        <span className="divider-rune">
                            ✦
                        </span>
                    </div>

                    <div className="library-search">

                        <span className="search-icon">
                            🔍
                        </span>

                        <input
                            type="text"
                            placeholder="Search the Archives..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                    </div>

                    <div className="library-content">

                        <div className="bookshelf">

                            {filteredEnchantments.map((enchantment) => (

                                <EnchantmentCard
                                    key={enchantment.id}
                                    enchantment={enchantment}
                                    flipped={flippedCards.includes(enchantment.id)}
                                    onFlip={() => handleFlip(enchantment.id)}
                                />

                            ))}

                        </div>

                    </div>

                </section>

            </div>

        </main>

    );

}