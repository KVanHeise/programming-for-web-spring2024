import PropTypes from "prop-types";
import {useParams, Link} from "react-router-dom";
import "../index.css";

export function DeckDetail({data}) {
    const { id } = useParams();
    console.log("params", id);
    const selectedDeck = data.find((deck) => deck.id === id);
    console.log
    return(
        <div className="card-info-page">

        <h1>{selectedDeck.projectName}</h1>

        <img src={selectedDeck.image} alt={selectedDeck.projectName} className="fullprofile-img" />

        <div className="character-details">
            <p>{selectedDeck.species}</p>

            <p>{selectedDeck.powerset}</p>

            <p>{selectedDeck.backstory}</p>
            </div>
            
            <p><strong>Played by:</strong> {selectedDeck.player}</p>

        <Link to="/" className="return-to-home">Return to Home</Link>

        </div>
    )
}

DeckDetail.propTypes = { 
    data: PropTypes.array
};