import { useState } from "react";
import { Copy, Check } from "lucide-react";
import "./Server.css";

export default function Server() {

    const [copied, setCopied] = useState(false);

    const copyServerIP = async () => {

        try {

            await navigator.clipboard.writeText("88.211.228.198:25576");

            setCopied(true);

            setTimeout(() => {

                setCopied(false);

            }, 2000);

        } catch (err) {

            console.error("Failed to copy server IP:", err);

        }

    };

    return (

        <section id="server" className="server">

            <div className="server-container">

                {/* Left Side */}

                <div className="server-content">

                    <p className="server-pretitle">
                        ✦ JOIN THE ADVENTURE ✦
                    </p>

                    <h2>Play on the Aldoria Server</h2>

                    <p className="server-description">
                        Experience a handcrafted fantasy RPG world filled with
                        custom progression, dangerous dungeons, powerful magic,
                        and unforgettable adventures.
                    </p>

                    <div className="server-buttons">

                        <button className="join-btn">
                            Join the Adventure →
                        </button>

                    </div>

                </div>

                {/* Right Side */}

                <div className="server-panel">

                    <h3>Server Status</h3>

                    <div className="server-row">

                        <span>📊 Status</span>

                        <div className="online">

                            <div className="online-dot"></div>

                            Online

                        </div>

                    </div>

                    <div className="server-row">

                        <span>📦 Minecraft Version</span>

                        <strong>1.21.11+</strong>

                    </div>

                    <div className="server-row">

                        <span>💻 Edition</span>

                        <strong>Java Edition</strong>

                    </div>

                    <div className="server-row">

                        <span>👥 Players</span>

                        <strong>0 / 10</strong>

                    </div>

                    <div className="server-row">

                        <span>🌐 Server IP</span>

                        <strong>88.211.228.198:25576</strong>

                    </div>

                    <button
                        className={`copy-ip ${copied ? "copied" : ""}`}
                        onClick={copyServerIP}
                    >
                        {copied ? (
                            <>
                                <Check size={18} />
                                Copied!
                            </>
                        ) : (
                            <>
                                <Copy size={18} />
                                Copy Server IP
                            </>
                        )}
                    </button>

                </div>

            </div>

        </section>

    );

}