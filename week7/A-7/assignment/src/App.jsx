
function App() {
  const collectionItems = [
    {
      name: "Item Name 1",
      colors: ["blue", "green", "black"],
      theme: "Item Theme 1",
      hasWon: true,
      mainGroup: true,
      image: "/image1.png"
    },
    {
      name: "Item Name 2",
      colors: ["blue", "green", "white"],
      theme: "Item Theme 1",
      hasWon: false,
      mainGroup: false,
      image: "/image2.png"
    },
    {
      name: "Item Name 3",
      colors: ["red", "purple", "black", "blue", "silver"],
      theme: "Item Theme 3",
      hasWon: true,
      mainGroup: true,
      image: "/image3.png"
    },
    {
      name: "Item Name 4",
      colors: ["red", "purple", "black", "blue", "silver"],
      theme: "Item Theme 4",
      hasWon: true,
      mainGroup: true,
      image: "/image4.png"
    },
    {
      name: "Item Name 5",
      colors: ["red", "purple", "black", "blue", "silver"],
      theme: "Item Theme 5",
      hasWon: true,
      mainGroup: true,
      image: "/image5.png"
    },
    {
      name: "Item Name 6",
      colors: ["red", "purple", "black", "blue", "silver"],
      theme: "Item Theme 6",
      hasWon: true,
      mainGroup: true,
      image: "/image6.png"
    },
    {
      name: "Item Name 7",
      colors: ["red", "purple", "black", "blue", "silver"],
      theme: "Item Theme 7",
      hasWon: true,
      mainGroup: true,
      image: "/image7.png"
    },
  ]

  return (
    <>
      <h1>My Collection</h1>
      <p>Show decks here.</p>
      <ul>
        {collectionItems.map((item, index) => {
          return <li key={item}>{item.name}</li>
        })}
      </ul>
    </>
  )
}

export default App;