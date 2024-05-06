import propTypes from "prop-types";
import {Link} from "react-router-dom";
import "./ItemCard.css";
// import trash from "../assets/icons/delete.png";
// import copy from "../assets/icons/copy.png";

export default function ItemCard({
    projectName,
    projectType,
    // backstory,
    thumbnailImage,
    id,
    // deleteFn,
    // duplicateFn
})  {
    return (
        <div className="projectCard">
            <div className="projectName">
                <Link to={`${id}`}>{projectName}</Link>
            </div>

            <div className="cardImg">
                <img src={thumbnailImage} alt={"projectImage"} />
            </div>

            <div className="projectClass">
                {projectType}
            </div>

            {/* <div className="backstory">
                {backstory}
            </div> */}

            {/* <div className="action">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(id)
                }}><img src={trash}/></a>
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    duplicateFn(id)
                }}><img src={copy}/></a>
            </div> */}

        </div>
    )
}

ItemCard.propTypes = {
    projectName: propTypes.string,
    projectType: propTypes.string,
    backstory: propTypes.string,
    thumbnailImage: propTypes.string,
    id: propTypes.string,
    // duplicateFn: propTypes.func,
    // deleteFn: propTypes.func
}