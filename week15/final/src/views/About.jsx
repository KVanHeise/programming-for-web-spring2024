import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "../App.css";

export function About() {
    return(
        <div className="about-page">

        <h1>About the Artist</h1>

        <img src="/headshot.jpg" alt="artist-headshot" className="fullprofile-img" />
        
        <p>My name is Kyrin Van Heise.</p>

        <p>I am a graphic designer from the Pacific North West.</p>

        <p>I have my Associates and Bachelors Degree in Design from Lake Washington Institute of Technology.</p>

        <Link to="/" className="return-to-home">Return to Home</Link>

        </div>
    )
}

About.propTypes = { 
    data: PropTypes.array
};