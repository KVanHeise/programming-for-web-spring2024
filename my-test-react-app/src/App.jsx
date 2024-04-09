function App() {
  const happy = false;

  return (
      <div>
        <h1>Hello, world! This is my first React App!</h1>
        {happy ? (<div>I am happy</div>) : (<div>Scared is more accurate.</div>)}
      </div>
  )
}

export default App
