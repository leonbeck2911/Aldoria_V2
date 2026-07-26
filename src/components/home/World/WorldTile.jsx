export default function WorldTile({ title, image }) {

    return (

        <div className="world-tile">

            <div
                className="world-tile-image"
                style={{
                    backgroundImage: `url(${image})`
                }}
            />

            <div className="world-tile-overlay">

                <h3>{title}</h3>

            </div>

        </div>

    );

}