import ChapterCard from "../ChapterCard";
import CodexHeader from "../CodexHeader";

export default function HomePage({ setPage }) {
    return (
        <>
            <CodexHeader />

            <h3 className="section-title">
                Choose a Chapter
            </h3>

            <ChapterCard
                icon="🏰"
                title="Explore"
                description="Learn about the kingdom, lore and the people of Aldoria."
                onClick={() => setPage("explore")}
            />

            <ChapterCard
                icon="⚔️"
                title="Adventure"
                description="Weapons, bosses, items and enchantments."
                onClick={() => setPage("adventure")}
            />

            <ChapterCard
                icon="👥"
                title="Community"
                description="Updates, Discord and the community."
                onClick={() => setPage("community")}
            />
        </>
    );
}