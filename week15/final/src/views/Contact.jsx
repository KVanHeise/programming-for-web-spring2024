import {Link} from "react-router-dom";
import "../css/App.css";
import "../css/ContactForm.css";
import Masthead from "../assets/Masthead/Masthead";

export function Contact() {
    return(
        <div className="contact-page">
            <Masthead />
                
            <nav>
                <ul>
                    <li><Link to="/" className="home">Home</Link></li>
                    <li><Link to="/About" className="about">About</Link></li>
                    <li><Link to="/Contact" className="about">Contact</Link></li>
                </ul>
            </nav>

            <h1>Contact Me</h1>

            <div className="contact-form-wrapper">
                <form className="contact-form">
                    <label htmlFor="fname"> First Name</label>
                        <input
                            type="text"
                            name="fname"
                            id="fname"
                            value=""
                        />

                    <label htmlFor="lname"> Last Name</label>
                        <input
                            type="text"
                            name="lname"
                            id="lname"
                            value=""
                        />

                    <label htmlFor="email"> Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value=""
                        />
                    <label htmlFor="phone"> Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value=""
                        />
                </form>

                <button type="submit">
                        Submit
                    </button>

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