/* eslint-disable react/prop-types */
import "./ItemRow.css";

export function ItemRow({name, colors, theme, hasFinished, achievementsDone, image, odd}) {
    return (
        <tr className={odd && "odd"}>
            <td style={{fontWeight: hasFinished ? "bold" : "normal"}}>{name}</td>
            <td>{colors.join(", ")}</td>
            <td>{theme}</td>
            <td>{hasFinished ? "yes" : "no"}</td>
            <td>{achievementsDone ? "yes" : "no"}</td>
            <td><img src={image} alt={name}></img></td>
        </tr>
    )
}