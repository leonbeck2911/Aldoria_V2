import "./EnchantmentCard.css";

const icons = {
    weapon: "⚔️",
    armor: "🛡️",
    tool: "⛏️",
    treasure: "💎",
    curse: "☠️",
    fishing: "🎣",
    bow: "🏹"
};

export default function EnchantmentCard({
    enchantment,
    flipped,
    onFlip
}) {

    return (

        <div
            className={`archive-card ${enchantment.frame} ${flipped ? "flipped" : ""}`}
            onClick={onFlip}
        >

            <div className="archive-card-inner">

                {/* ================= FRONT ================= */}

                <div className="archive-card-front">

                    <div className="archive-card-border">

                        {/* Header */}

                        <div className="archive-header">
                            <span>THE GRAND ARCHIVE</span>
                        </div>

                        {/* Corners */}

                        <div className="archive-corner top-left">
                            <span></span>
                            <span></span>
                        </div>

                        <div className="archive-corner top-right">
                            <span></span>
                            <span></span>
                        </div>

                        <div className="archive-corner bottom-left">
                            <span></span>
                            <span></span>
                        </div>

                        <div className="archive-corner bottom-right">
                            <span></span>
                            <span></span>
                        </div>

                        {/* Magical Seal */}

                        <div className={`archive-seal ${enchantment.frame}`}>

                            <div className="seal-glow"></div>

                            <div className="archive-icon">
                                {icons[enchantment.frame] ?? "✨"}
                            </div>

                        </div>

                        {/* Name */}

                        <h2 className="archive-title">
                            {enchantment.name}
                        </h2>

                        {/* Category */}

                        <p className="archive-category">
                            {enchantment.category}
                        </p>

                        {/* Divider */}

                        <div className="archive-divider">
                        </div>

                        {/* Rarity */}

                        <div className={`archive-rarity ${enchantment.rarity.toLowerCase()}`}>
                            ✦ {enchantment.rarity} ✦
                        </div>

                    </div>

                </div>

                {/* ================= BACK ================= */}

                <div className="archive-card-back">

                    <div className="archive-card-border">

                        <div className="archive-header">
                            <span>THE GRAND ARCHIVE</span>
                        </div>

                        <div className="archive-back-content">

                            <div className="archive-record">

                                {/* Description */}

                                <div className="archive-description-block">

                                    <div className="archive-record-title">
                                        DESCRIPTION
                                    </div>

                                    <p className="archive-record-description">
                                        {enchantment.description}
                                    </p>

                                </div>

                                <div className="archive-record-divider"></div>

                                <div className="archive-facts">

                                    <div className="archive-fact">

                                        <span className="archive-fact-label">
                                            Levels
                                        </span>
                            
                                        <span className="archive-fact-value">

                                            {enchantment.levels
                                                .map(level => level.roman)
                                                .join(" • ")}

                                        </span>

                                    </div>

                                    <div className="archive-fact">

                                        <span className="archive-fact-label">
                                            Applies To
                                        </span>

                                        <span className="archive-fact-value">

                                            {enchantment.appliesTo
                                                .map(item => item.name)
                                                .join(" • ")}

                                        </span>

                                    </div>

                                    <div className="archive-fact">

                                        <span className="archive-fact-label">
                                            Obtain From
                                        </span>

                                        <span className="archive-fact-value">

                                            {[
                                                enchantment.obtainFrom.treasure && "Treasure",
                                                enchantment.obtainFrom.enchantingTable && "Enchanting Table",
                                                enchantment.obtainFrom.villagers && "Villagers",
                                                enchantment.obtainFrom.loot && "Loot",
                                                enchantment.obtainFrom.mobEquipment && "Mob Equipment"
                                            ]
                                                .filter(Boolean)
                                                .join(" • ")}

                                        </span>

                                    </div>

                                    <div className="archive-fact">

                                        <span className="archive-fact-label">
                                            Incompatible
                                        </span>

                                        <span className="archive-fact-value">

                                            {enchantment.incompatibleWith.length
                                                ? enchantment.incompatibleWith
                                                    .map(item =>
                                                        item
                                                            .split(":")
                                                            .pop()
                                                            .replace(/_/g, " ")
                                                            .replace(/\b\w/g, c => c.toUpperCase())
                                                    )
                                                    .join(" • ")
                                                : "None"}

                                        </span>

                                    </div>

                                </div>

                                <div className="archive-record-divider"></div>

                                <div className="archive-watermark">

                                    ✦ GRAND ARCHIVE ✦

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}