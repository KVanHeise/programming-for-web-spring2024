import PropTypes from "prop-types";
import {useParams, Link} from "react-router-dom";
import "../css/App.css";
import Masthead from "../assets/Masthead";

export function ProjectDetail({data}) {
    const { id } = useParams();
    console.log("params", id);
    const selectedDeck = data.find((deck) => deck.id === id);
    console.log
    return(
        <div className="project-info-page">
            <Masthead/>
            <nav>
                <ul>
                <li><Link to="/" className="home">Home</Link></li>
                <li><Link to="/About" className="about">About</Link></li>
                <li><Link to="/Contact" className="about">Contact</Link></li>
                </ul>
            </nav>

            <div className="project-details">
                <h1>{selectedDeck.projectName}</h1>
                <h3>{selectedDeck.projectType}</h3>
                <p>{selectedDeck.projectDetails}</p>

                <img src={selectedDeck.image2} alt={selectedDeck.projectName} className="fullprofile-img" />

                <h3>Programs Used</h3>
                <p>{selectedDeck.programsUsed}</p>

                <img src={selectedDeck.image} alt={selectedDeck.projectName} className="fullprofile-img" />
            </div>

            <footer>
                <nav>
                    <ul>
                    <li><Link to="/" className="home">Home</Link></li>
                    <li><Link to="/About" className="about">About</Link></li>
                    <li><Link to="/Contact" className="about">Contact</Link></li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}

ProjectDetail.propTypes = { 
    data: PropTypes.array
};