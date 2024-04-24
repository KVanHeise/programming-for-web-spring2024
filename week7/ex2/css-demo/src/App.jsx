import "./styles.css"

function App() {
  const isKenOld = "yes";
  return (
    <h1 className={isKenOld === "yes" ? "blue" : "red"}>CSS Demo</h1>
  )
}

export default App
