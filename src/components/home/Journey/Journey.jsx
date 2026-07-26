import { useState } from "react";
import "./Journey.css";

import JourneyCard from "./JourneyCard";
import { journeyData } from "./journeyData";

export default function Journey() {
    const [activeCard, setActiveCard] = useState(null);

    const toggleCard = (id) => {
        setActiveCard((current) =>
            current === id ? null : id
        );
    };

    return (
        <section className="journey" id="journey">

            <div className="journey-container">

                <div className="journey-header">

                    <span className="journey-subtitle">
                        Begin Your Journey
                    </span>

                    <h2 className="journey-title">
                        Choose Your Path
                    </h2>

                    <p className="journey-description">
                        Every great adventure starts with a choice.
                        Learn the mechanics of Aldoria, explore the
                        world of Virethia, or become part of our
                        growing community.
                    </p>

                </div>

                <div className="journey-grid">

                    {journeyData.map((card) => (
                        <JourneyCard
                            key={card.id}
                            card={card}
                            active={activeCard === card.id}
                            onClick={() => toggleCard(card.id)}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}