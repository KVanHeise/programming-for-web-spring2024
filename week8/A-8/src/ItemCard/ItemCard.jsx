import propTypes from "prop-types";
import "./ItemCard.css";

export default function ItemCard({

    charName,
    player,
    species,
    powerset,
    backstory,
    isNPC,
    image,
    id,
    deleteFn,
    duplicateFn
})  {
    return (
        <div className="characterCard">

            <div className="cardImg">
                <img src={image} alt={"characterImage"} />
            </div>

            <div className="characterName">
                {charName}
            </div>

            <div className="species">
                {species}
            </div>

            <div className="characterClass">
                {powerset}
            </div>

            <div className="backstory">
                {backstory}
            </div>

            {isNPC && <div className="isNPC">
                <p>This character is an NPC.</p>
            </div>}

            <div className="playerName">
                Played by: {player}
            </div>

            <div className="action"><a href=""><img/></a><a href=""><img/></a></div>

        </div>
    )
}

ItemCard.propTypes = {
    charName: propTypes.string,
    player: propTypes.string,
    species: propTypes.string,
    powerset: propTypes.string,
    backstory: propTypes.string,
    isNPC: propTypes.bool,
    image: propTypes.string,
    id: propTypes.string,
}