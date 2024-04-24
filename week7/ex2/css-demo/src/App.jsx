import "./styles.css"

function App() {
  const isKenOld = "yes";
  const paragraphStyleObj = {
    color: "green",
    fontSize: "36px",
    margin: "20px auto",
    width: "600px"
  }

  return (
    <>
      <h1 className={isKenOld === "yes" ? "blue" : "red"}>CSS Demo</h1>
      <p style={paragraphStyleObj}>This is a random test</p>
    </>
  )
}

export default App
