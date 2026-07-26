export default function LibraryCard({

    title,
    description,
    button,
    icon: Icon

}) {

    return (

        <div className="library-card">

            <div className="library-icon">

                <Icon size={26} />

            </div>

            <h3>{title}</h3>

            <p>{description}</p>

            <button>
                {button}
                <span>→</span>
            </button>

        </div>

    );

}