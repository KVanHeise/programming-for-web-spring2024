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

        <h1>{selectedDeck.charName}</h1>

        <img src={selectedDeck.image} alt={selectedDeck.charName} className="fullprofile-img" />

        <div className="character-details">
            <p>Species: {selectedDeck.species}</p>

            <p>Class {selectedDeck.powerset}</p>

            <p>Background: {selectedDeck.backstory}</p>
        </div>
        
        <Link to="/" className="return-to-home">Return to Home</Link>

        </div>
    )
}

DeckDetail.propTypes = { 
    data: PropTypes.array
};