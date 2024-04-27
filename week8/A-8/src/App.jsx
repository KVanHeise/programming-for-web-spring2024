import "./App.css";
import { ItemRow } from "./ItemRow";

function App() {
  const [decks, setDecks] = useState([
    {
      name: "Castor",
      player: "Shayne",
      species: "Human",
      powerset: "Druid, Circle of Stars",
      backstory: "Inheritor",
      isNPC: false,
      image: "castor.png",
      id: 1
    },
    {
      name: "Dante",
      player: "Eric",
      species: "Human",
      powerset: "Fighter, Battle Master",
      backstory: "Mercinary Veteran",
      isNPC: false,
      image: "dante.png",
      id: 2
    },
    {
      name: "Fluke",
      player: "Shane",
      species: "Human",
      powerset: "Wizard, School of Divination",
      backstory: "Hermit",
      isNPC: false,
      image: "fluke.png",
      id: 3
    },
    {
      name: "Ismark",
      player: "Kyrin",
      species: "Human",
      powerset: "None",
      backstory: "Barovian Noble",
      isNPC: true,
      image: "ismark.png",
      id: 4
    },
    {
      name: "Mirna",
      player: "Coley",
      species: "Half-Wood Elf",
      powerset: "Cleric, Life Domain",
      backstory: "Acolyte",
      isNPC: false,
      image: "mirna.png",
      id: 5
    },
  ]);

  return (
    <div className="page">
      {/* Masthead goes here */}
      <div className="collection">
        {/* card map goes here */}
        {/* use ItemCard component in Loop */}
      </div>
    </div>
  )
}

export default App;