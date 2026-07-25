import "./Button.css";

export default function Button({

    children,
    variant = "primary",
    onClick,
    href

}){

    if(href){

        return(

            <a

                href={href}

                className={`button ${variant}`}

            >

                {children}

            </a>

        );

    }

    return(

        <button

            className={`button ${variant}`}

            onClick={onClick}

        >

            {children}

        </button>

    );

}