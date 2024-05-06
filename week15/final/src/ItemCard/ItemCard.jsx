import propTypes from "prop-types";
import {Link} from "react-router-dom";
import "./ItemCard.css";
// import trash from "../assets/icons/delete.png";
// import copy from "../assets/icons/copy.png";

export default function ItemCard({
    projectName,
    projectType,
    // backstory,
    image,
    id,
    // deleteFn,
    // duplicateFn
})  {
    return (
        <div className="projectCard">
            <Link to={`${id}`}>
                <div className="cardImg">
                    <img src={image} alt={"projectImage"} />
                </div>
            </Link>

                <div className="projectName">
                    <Link to={`${id}`}>{projectName}</Link>
                </div>

                <div className="projectClass">
                    <p>{projectType}</p>
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
    image: propTypes.string,
    id: propTypes.string,
    // duplicateFn: propTypes.func,
    // deleteFn: propTypes.func
}