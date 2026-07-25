import "./SectionHeader.css";

export default function SectionHeader({

    pretitle,
    title,
    description,
    align = "center"

}){

    return(

        <div className={`section-header ${align}`}>

            {pretitle &&

                <p className="section-pretitle">

                    {pretitle}

                </p>

            }

            <h2 className="section-title">

                {title}

            </h2>

            {description &&

                <p className="section-description">

                    {description}

                </p>

            }

        </div>

    );

}