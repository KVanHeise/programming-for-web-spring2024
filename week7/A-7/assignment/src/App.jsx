import "./App.css";
import { ItemRow } from "./ItemRow";

function App() {
  const collectionItems = [
    {
      name: "Item Name 1",
      colors: ["blue", "green", "black"],
      theme: "Fancy",
      hasFinished: true,
      achievementsDone: false,
      image: "/image1.png"
    },
    {
      name: "Item Name 2",
      colors: ["blue", "green", "white"],
      theme: "Crazy",
      hasFinished: false,
      achievementsDone: true,
      image: "/image2.png"
    },
    {
      name: "Item Name 3",
      colors: ["red", "purple", "black", "blue", "silver"],
      theme: "Lacey",
      hasFinished: true,
      achievementsDone: true,
      image: "/image3.png"
    },
    {
      name: "Item Name 4",
      colors: ["red", "purple", "black", "blue", "silver"],
      theme: "Wacky",
      hasFinished: false,
      achievementsDone: true,
      image: "/image4.png"
    },
    {
      name: "Item Name 5",
      colors: ["red", "purple", "black", "blue", "lavender", "silver"],
      theme: "Romance",
      hasFinished: false,
      achievementsDone: true,
      image: "/image5.png"
    },
    {
      name: "Item Name 6",
      colors: ["red", "purple", "black", "blue", "silver"],
      theme: "Horror",
      hasFinished: true,
      achievementsDone: false,
      image: "/image6.png"
    },
    {
      name: "Item Name 7",
      colors: ["red", "purple", "black", "blue", "silver"],
      theme: "Comedy",
      hasFinished: true,
      achievementsDone: true,
      image: "/image7.png"
    },
  ]

  return (
    <>
      <h1>My Collection</h1>
      <p>Show decks here.</p>
      <table className="item-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Colors</th>
            <th>Theme</th>
            <th>Has Won?</th>
            <th>Achievements</th>
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
            colors={item.colors}
            image={item.image}
            theme={item.theme}
            hasFinished={item.hasFinished}
            achievementsDone={item.achievementsDone}
            />)
          })}
        </tbody>
      </table>
    </>
  )
}

export default App;