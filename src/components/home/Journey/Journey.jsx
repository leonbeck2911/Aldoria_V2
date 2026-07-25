import "./Journey.css";

import JourneyCard from "./JourneyCard";

export default function Journey() {

    return (

        <section id="journey" className="journey">

            <div className="journey-header">

                <p className="journey-pretitle">

                    ✦ BEGIN YOUR JOURNEY ✦

                </p>

                <h2>

                    Choose Your Path

                </h2>

                <p>

                    Every great adventure begins with knowledge.
                    Explore the many paths that await you
                    throughout Aldoria.

                </p>

            </div>

            <div className="journey-grid">

                <JourneyCard
                    icon="📖"
                    title="Arcane Archives"
                    description="Discover every enchantment and magical blessing found throughout Aldoria."
                    button="Explore"
                    link="/enchantments"
                />

                <JourneyCard
                    icon="👹"
                    title="Legendary Bosses"
                    description="Prepare for dangerous encounters and learn every boss mechanic."
                    button="View Bosses"
                    link="/bosses"
                />

                <JourneyCard
                    icon="🏰"
                    title="The Kingdom"
                    description="Learn about the world, lore and citizens of Aldoria."
                    button="Discover"
                    link="/kingdom"
                />

            </div>

        </section>

    );

}