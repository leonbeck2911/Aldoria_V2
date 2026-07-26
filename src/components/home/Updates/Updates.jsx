import "./Updates.css";
import updateData from "./updateData";
import UpdateCard from "./UpdateCard";

export default function Update() {

    return (

        <section id="updates" className="update">

            <div className="update-container">

                <div className="update-header">

                    <p className="update-pretitle">
                        ✦ THE CHRONICLES ✦
                    </p>

                    <h2>
                        The Chronicles of Aldoria
                    </h2>

                    <p className="update-description">
                        Stay up to date with the latest kingdoms, bosses,
                        events and development news from across the realm.
                    </p>

                </div>

                <div className="update-grid">

                    {updateData.map((update, index) => (

                        <UpdateCard
                            key={index}
                            update={update}
                        />

                    ))}

                </div>

                <div className="update-footer">

                    <a
                        href="https://discord.gg/YOUR_INVITE"
                        target="_blank"
                        rel="noreferrer"
                        className="discord-button"
                    >
                        Read Full Announcements on Discord →
                    </a>

                </div>

            </div>

        </section>

    );

}