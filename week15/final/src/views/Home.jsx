import { useState } from "react";
import {Link} from "react-router-dom";
import "../css/App.css";
import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";
import deckData from "../assets/deck-data.json";


export function Home() {
    const [decks] = useState(deckData);

  return (
    <div className="page">
      {/* Masthead goes here */}
      <Masthead />
      <nav>
        <ul>
          <li><Link to="/" className="home">Home</Link></li>
          <li><Link to="/About" className="about">About</Link></li>
          <li><Link to="/Contact" className="about">Contact</Link></li>
        </ul>
      </nav>

      <div className="collection">
        {/* card map goes here */}
        {/* use ItemCard component in Loop */}
        {decks.map((characterDeck) => {
          return (
            <ItemCard
            key={characterDeck.id}
            {...characterDeck}/>
          )
        })}
      </div>

      <footer>
      <hr />
        <p>Kyrin Van Heise  |  Programming for Web  |  Spring 2024</p>
      </footer>
    </div>
  );
}