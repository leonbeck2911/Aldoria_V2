import "./World.css";

import worldBackground from "../../../assets/backgrounds/world.webp";

export default function World({ children }) {

    return (

        <div className="world">

            <img
                src={worldBackground}
                alt=""
                className="world-image"
            />

            <div className="world-content">

                {children}

            </div>

        </div>

    );

}