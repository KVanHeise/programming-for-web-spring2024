function App() {

  const llamaTruth = "yes";
  const llamaFacts = [
    "llama fact 1",
    "llama fact 2",
    "llama fact 3",
    "llama fact 4",
  ];

  return (
    <>
      <div>
        <h1>Llama Facts</h1>
        <p>Here is a list of facts about llamas:</p>
        <p>{llamaTruth === "yes" ? llamaFacts[2] : llamaFacts[3]}</p>
      </div>
    </>
  )
}

export default App