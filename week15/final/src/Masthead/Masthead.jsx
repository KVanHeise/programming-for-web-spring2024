import mastheadImg from "../assets/masthead.png";
import "./Masthead.css";

export default function Masthead() {
    return (
        <div className="masthead">
            <img src={mastheadImg} alt="Curse of Strahd Roster Masthead" />
            <h1>Kyrin Van Heise Portfolio</h1>
        </div>
    )
}