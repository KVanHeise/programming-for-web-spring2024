import { useState } from "react";
import "../App.css";
import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";
import { NewCharacterForm } from "../NewCharacterForm/NewCharacterForm";
import deckData from "../assets/deck-data.json";
import {nanoid} from "nanoid";


export function Home() {
    const [decks, setDecks] = useState(deckData);
  console.log(decks);

  function deleteCard(id) {
    console.log("delete me", id);
    const updatedArray = decks.filter((characterDeck) => {
      return characterDeck.id !== id; //will skip item with matching id
    })
    setDecks(updatedArray)
  }

  function duplicateCard (id) {
    console.log("duplicate me", id);
    const matchingDeck = decks.find((characterDeck) => {
      return characterDeck.id === id
    });
    const updatedDeck = {...matchingDeck, id: nanoid()}
    setDecks([...decks, updatedDeck])
  }

  function addCard(newCard) {
    const cardWithId = {
      ...newCard,
      id: nanoid()
    }
    setDecks([...decks, cardWithId])
  }

  return (
    <div className="page">
      {/* Masthead goes here */}
      <Masthead />
      <div className="collection">
        {/* card map goes here */}
        {/* use ItemCard component in Loop */}
        {decks.map((characterDeck) => {
          return (
            <ItemCard
            key={characterDeck.id}
            deleteFn={deleteCard}
            duplicateFn={duplicateCard}
            {...characterDeck}/>
          )
        })}
      </div>
      <hr />
      <h2>Add Character</h2>
      <NewCharacterForm addCardFn={addCard} />
      <footer>
      <hr />
        <p>Kyrin Van Heise  |  Programming for Web  |  Spring 2024</p>
      </footer>
    </div>
  )
}