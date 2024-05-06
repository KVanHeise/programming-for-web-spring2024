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
        <nav>
            <ul>
            <li><Link to="/" className="home">Home</Link></li>
            <li><Link to="/About" className="about">About</Link></li>
            <li><Link to="/Contact" className="about">Contact</Link></li>
            </ul>
        </nav>

        <h1>{selectedDeck.projectName}</h1>

        <img src={selectedDeck.image} alt={selectedDeck.projectName} className="fullprofile-img" />

        <img src={selectedDeck.image2} alt={selectedDeck.projectName} className="fullprofile-img" />

        <div className="project-details">

            <p>{selectedDeck.projectType}</p>

            </div>

        <footer>
        <hr />
        <p>Kyrin Van Heise  |  Programming for Web  |  Spring 2024</p>
        </footer>
        </div>
    )
}

DeckDetail.propTypes = { 
    data: PropTypes.array
};