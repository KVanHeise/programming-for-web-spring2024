import {Link} from "react-router-dom";
import "../App.css";

export function About() {
    return(
        <div className="about-page">

        <h1>About the Artist</h1>

        <div className="artist-details">
            <img src="/headshot.jpg" alt="artist-headshot" className="headshot" />
            
                <div className="artist-details-text">
                <h3>My name is Kyrin Van Heise.</h3>

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
                    <li>Photos</li>
                    <li>Presentations</li>
                </ul>
                </div>
        </div>

        <Link to="/" className="return-to-home">Return to Home</Link>

        </div>
    )
}