import "./App.css";
import { ItemRow } from "./ItemRow";

function App() {
  const collectionItems = [
    {
      name: "Castor",
      player: "Shayne",
      species: "Human",
      powerset: "Druid, Circle of Stars",
      backstory: "Inheritor",
      isNPC: false,
      image: "/castor.png"
    },
    {
      name: "Dante",
      player: "Eric",
      species: "Human",
      powerset: "Fighter, Battle Master",
      backstory: "Mercinary Veteran",
      isNPC: false,
      image: "/dante.png"
    },
    {
      name: "Fluke",
      player: "Shane",
      species: "Human",
      powerset: "Wizard, School of Divination",
      backstory: "Hermit",
      isNPC: false,
      image: "/fluke.png"
    },
    {
      name: "Ismark",
      player: "Kyrin",
      species: "Human",
      powerset: "None",
      backstory: "Barovian Noble",
      isNPC: true,
      image: "/ismark.png"
    },
    {
      name: "Mirna",
      player: "Coley",
      species: "Half-Wood Elf",
      powerset: "Cleric, Life Domain",
      backstory: "Acolyte",
      isNPC: false,
      image: "/mirna.png"
    },
  ]

  return (
    <>
      <h1>Curse of Strahd</h1>
      <div className="page-wrap">
        <h2>Active Character Roster</h2>
        <table className="character-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Species</th>
              <th>Class</th>
              <th>Backstory</th>
              <th>NPC?</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {collectionItems.map((item, index) => {
              return (
              <ItemRow
              key={item.image}
              odd={index % 2 === 0}
              name={item.name}
              species={item.species}
              powerset={item.powerset}
              backstory={item.backstory}
              isNPC={item.isNPC}
              image={item.image}
              />)
            })}
          </tbody>
        </table>
    </div>
    </>
  )
}

export default App;