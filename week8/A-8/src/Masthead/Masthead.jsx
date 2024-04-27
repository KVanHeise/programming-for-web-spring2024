import mastheadImg from "../assets/masthead.png";

export default function Masthead() {
    return (
        <div className="masthead">
            <img src={mastheadImg} alt="Curse of Strahd Roster" />
            <h1>Active Character Roster</h1>
        </div>
    )
}