import {Link} from "react-router-dom";
import "../App.css";

export function About() {
    return(
        <div className="contact-page">

        <nav>
            <ul>
                <li><Link to="/" className="home">Home</Link></li>
                <li><Link to="/About" className="about">About</Link></li>
                <li><Link to="/Contact" className="about">Contact</Link></li>
            </ul>
        </nav>

        <h1>Contact Me</h1>

        <div className="contact-form">
            <form>
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
            <input type="submit" value="Submit"/>
            </form>
        </div>

        <footer>
            <hr />
            <p>Kyrin Van Heise  |  Programming for Web  |  Spring 2024</p>
        </footer>

        </div>
    )
}