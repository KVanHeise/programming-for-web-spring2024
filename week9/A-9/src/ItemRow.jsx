/* eslint-disable react/prop-types */
import "./ItemRow.css";

export function ItemRow({charName, player, species, powerset, backstory, isNPC, image, odd}) {
    return (
        <tr className={odd && "odd"}>
            <td style={{fontWeight: isNPC ? "normal" : "bold"}}>{charName}</td>
            <td>{player}</td>
            <td>{species}</td>
            <td>{powerset}</td>
            <td>{backstory}</td>
            <td style={{fontWeight: isNPC ? "bold" : "normal", color: isNPC ? "white" : "black"}}>{isNPC ? "Yes" : "No"}</td>
            <td><img src={image} alt={"Character Token"}></img></td>
        </tr>
    )
}