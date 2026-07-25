import { useEffect, useState } from "react";

import "./Codex.css";

import CodexBookmark from "./CodexBookmark";
import CodexBook from "./CodexBook";
import CodexPages from "./CodexPages";

import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import AdventurePage from "./pages/AdventurePage";
import CommunityPage from "./pages/CommunityPage";

export default function Codex() {

    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState("home");

    const openCodex = () => {
        setIsOpen(true);
    };

    const closeCodex = () => {
        setPage("home");
        setIsOpen(false);
    };

    useEffect(() => {

        document.body.style.overflow = isOpen
            ? "hidden"
            : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };

    }, [isOpen]);

    useEffect(() => {

        const handleKey = (e) => {

            if (e.key === "Escape")
                closeCodex();

        };

        window.addEventListener("keydown", handleKey);

        return () =>
            window.removeEventListener("keydown", handleKey);

    }, []);

    const renderPage = () => {

        switch (page) {

            case "explore":
                return <ExplorePage />;

            case "adventure":
                return (
                    <AdventurePage
                        closeCodex={closeCodex}
        />
    );

            case "community":
                return <CommunityPage />;

            default:
                return <HomePage setPage={setPage} />;

        }

    };

    return (
        <>
            {!isOpen && (
                <CodexBookmark
                    onOpen={openCodex}
                />
            )}

            <CodexBook
                isOpen={isOpen}
                onClose={closeCodex}
            >
                <div className="codex-panel">

                    <button
                        className="codex-close"
                        onClick={() => {

                            if (page === "home")
                                closeCodex();
                            else
                                setPage("home");

                        }}
                    >
                        ❮
                    </button>

                    <CodexPages page={page}>

                        {renderPage()}

                    </CodexPages>

                </div>

            </CodexBook>

        </>
    );

}