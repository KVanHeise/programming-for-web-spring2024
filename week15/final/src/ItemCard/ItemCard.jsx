import propTypes from "prop-types";
import {Link} from "react-router-dom";
import "./ItemCard.css";

export default function ItemCard({
    projectName,
    projectType,
    image,
    id,
})  {
    return (
        <div className="projectCard">
            <div className="projectName">
                <Link to={`${id}`}>{projectName}</Link>
            </div>
            
            <Link to={`${id}`}>
                <div className="cardImg">
                    <img src={image} alt={"projectImage"} />
                </div>
            </Link>

                <div className="projectClass">
                    <p>{projectType}</p>
                </div>
        </div>
    )
}

ItemCard.propTypes = {
    projectName: propTypes.string,
    projectType: propTypes.string,
    backstory: propTypes.string,
    image: propTypes.string,
    id: propTypes.string,
}