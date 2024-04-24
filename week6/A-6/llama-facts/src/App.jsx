import "./index.css"

function App() {

  const llamaTruth = "yes";
  const llamaFacts = [
    "Llamas are members of the camelid family meaning they're pretty closely related to vicuñas and camels.",
    "Llamas were first domesticated and used as pack animals 4,000 to 5,000 years ago in the Peruvian highlands.",
    "Llamas can grow as much as 6 feet tall though the average llama between 5 feet 6 inches and 5 feet 9 inches tall.",
    "Llamas are smart and easy to train.",
    "Llama poop has almost no odor.",
    "It makes for a great, eco-friendly fertilizer.",
  ];

  return (
    <>
      <div>
        <h1>Llama Facts</h1>
          <p>Here is a list of facts about llamas:</p>
            <ul>
              <li>{llamaFacts[0]}</li>
              <li>{llamaFacts[1]}</li>
              <li>{llamaFacts[2]}</li>
              <li>{llamaFacts[3]}</li>
              <li>{llamaTruth === "yes" ? llamaFacts[4] : llamaFacts[5]}</li>
              <li>{llamaTruth === "yes" ? llamaFacts[5] : llamaFacts[4]}</li>
            </ul>
      </div>
    </>
  )
}

export default App