import PropTypes from "prop-types";
import {useParams} from "react-router-dom";

export function DeckDetail({data}) {
    const { id } = useParams();
    console.log("params", id);
    const selectedDeck = data.find((deck) => deck.id === id);
    console.log
    return(
        <>
        <h1>{selectedDeck.charName}</h1>
        <img src={selectedDeck.image} alt={selectedDeck.charName} />
        <p>Species: {selectedDeck.species}</p>
        <p>Class {selectedDeck.powerset}</p>
        <p>Background: {selectedDeck.backstory}</p>

        </>
    )
}

DeckDetail.propTypes = { 
    data: PropTypes.array
};