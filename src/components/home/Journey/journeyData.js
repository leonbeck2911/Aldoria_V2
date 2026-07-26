import {
    BookOpen,
    Compass,
    Users,
    Sparkles,
    Swords,
    Package,
    Skull,
    Map,
    Trees,
    Castle,
    MessageCircle,
    CalendarDays,
} from "lucide-react";

export const journeyData = [
    {
        id: "explore",
        title: "Explore",
        description: "Discover Aldoria's guides, mechanics, items and secrets.",
        icon: BookOpen,
        links: [
            {
                title: "Enchantments",
                icon: Sparkles,
                path: "/enchantments",
            },
            {
                title: "Weapons",
                icon: Swords,
                path: "/weapons",
            },
            {
                title: "Items",
                icon: Package,
                path: "/items",
            },
            {
                title: "Bosses",
                icon: Skull,
                path: "/bosses",
            },
        ],
    },

    {
        id: "adventure",
        title: "Adventure",
        description: "Travel across Virethia and uncover its hidden wonders.",
        icon: Compass,
        links: [
            {
                title: "World",
                icon: Map,
                path: "/world",
            },
            {
                title: "Structures",
                icon: Castle,
                path: "/structures",
            },
            {
                title: "Biomes",
                icon: Trees,
                path: "/biomes",
            },
        ],
    },

    {
        id: "community",
        title: "Community",
        description: "Join other adventurers and stay connected.",
        icon: Users,
        links: [
            {
                title: "Discord",
                icon: MessageCircle,
                path: "/discord",
            },
            {
                title: "Events",
                icon: CalendarDays,
                path: "/events",
            },
        ],
    },
];