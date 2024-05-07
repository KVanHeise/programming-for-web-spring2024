import {Link} from "react-router-dom";
import "../css/App.css";
import Masthead from "../assets/Masthead/Masthead";

export function About() {
    return(
        <div className="about-page">
            <Masthead/>

            <nav>
                <ul>
                <li><Link to="/" className="home">Home</Link></li>
                <li><Link to="/About" className="about">About</Link></li>
                <li><Link to="/Contact" className="about">Contact</Link></li>
                </ul>
            </nav>

            <h1>About the Artist</h1>

            <div className="artist-details">
                <img src="/headshot.jpg" alt="artist-headshot" className="headshot" />
                
                    <div className="artist-details-text">
                        <p>I am a graphic designer from the Pacific North West.</p>

                        <p>I have two undergrad degrees in Graphic Design.</p>

                        <p>I am actively working toward my Masters in Graphic and Web design!</p>

                        <h4>My areas of expertise include:</h4>

                        <ul>
                            <li>Branding</li>
                            <li>Cover Art</li>
                            <li>Graphics</li>
                            <li>Illustration</li>
                            <li>Logos</li>
                            <li>Packaging</li>
                            <li>Photography & Photo Editing</li>
                            <li>Presentations</li>
                        </ul>
                    </div>
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