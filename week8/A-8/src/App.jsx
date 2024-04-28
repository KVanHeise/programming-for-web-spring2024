import { useState } from "react";

import "./App.css";
import Masthead from "./Masthead/Masthead";
import ItemCard from "./ItemCard/ItemCard";

function App() {
  const [decks, setDecks] = useState([
    {
      charName: "Castor",
      player: "Shayne",
      species: "Human",
      powerset: "Druid, Circle of Stars",
      backstory: "Inheritor",
      isNPC: false,
      image: "castor.png",
      id: "1"
    },
    {
      charName: "Dante",
      player: "Eric",
      species: "Human",
      powerset: "Fighter, Battle Master",
      backstory: "Mercinary Veteran",
      isNPC: false,
      image: "dante.png",
      id: "2"
    },
    {
      charName: "Fluke",
      player: "Shane",
      species: "Human",
      powerset: "Wizard, School of Divination",
      backstory: "Hermit",
      isNPC: false,
      image: "fluke.png",
      id: "3"
    },
    {
      charName: "Ismark",
      player: "Kyrin",
      species: "Human",
      powerset: "None",
      backstory: "Barovian Noble",
      isNPC: true,
      image: "ismark.png",
      id: "4"
    },
    {
      charName: "Mirna",
      player: "Coley",
      species: "Half-Wood Elf",
      powerset: "Cleric, Life Domain",
      backstory: "Acolyte",
      isNPC: false,
      image: "mirna.png",
      id: "5"
    },
  ]);

  function deleteCard() {
    console.log("delete me");
  };

  function duplicateCard () {
    console.log("duplicate me");
  };

  return (
    <div className="page">
      {/* Masthead goes here */}
      <Masthead />
      <div className="collection">
        {/* card map goes here */}
        {/* use ItemCard component in Loop */}
        {decks.map((characterProfile) => {
          return (
            <ItemCard
            key={characterProfile.id}
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}
            {...characterProfile}/>
          )
        })}
      </div>
    </div>
  )
}

export default App;