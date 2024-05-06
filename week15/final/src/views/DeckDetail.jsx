import PropTypes from "prop-types";
import {useParams, Link} from "react-router-dom";
import "../App.css";

export function DeckDetail({data}) {
    const { id } = useParams();
    console.log("params", id);
    const selectedDeck = data.find((deck) => deck.id === id);
    console.log
    return(
        <div className="project-info-page">

        <h1>{selectedDeck.projectName}</h1>

        <img src={selectedDeck.image} alt={selectedDeck.projectName} className="fullprofile-img" />

        <img src={selectedDeck.image2} alt={selectedDeck.projectName} className="fullprofile-img" />

        <div className="project-details">

            <p>{selectedDeck.projectType}</p>

            </div>

        <Link to="/" className="return-to-home">Return to Home</Link>

        </div>
    )
}

DeckDetail.propTypes = { 
    data: PropTypes.array
};