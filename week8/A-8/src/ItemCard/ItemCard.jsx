import propTypes from "prop-types";
import "./ItemCard.css";
import trash from "../assets/icons/delete.png";
import copy from "../assets/icons/copy.png";

export default function ItemCard({
    charName,
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
            <div className="characterName">
                {charName}
            </div>
            
            {isNPC ?
                <div className="isNPC">
                    <p>Non-Player Character</p>
                </div> :
                <div className="isNPC">
                    <p>Player Character</p>
                </div>
            }

            <div className="cardImg">
                <img src={image} alt={"characterImage"} />
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

            <div className="action">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(id)
                }}><img src={trash}/></a>
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    duplicateFn(id)
                }}><img src={copy}/></a>
            </div>

        </div>
    )
}

ItemCard.propTypes = {
    charName: propTypes.string,
    species: propTypes.string,
    powerset: propTypes.string,
    backstory: propTypes.string,
    isNPC: propTypes.bool,
    image: propTypes.string,
    id: propTypes.string,
    duplicateFn: propTypes.func,
    deleteFn: propTypes.func
}