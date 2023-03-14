import './App.css';
import GeneratedQuote from "./GeneratedQuote.js"

function App() {
  return (
    <div className="App">
       <h1 className="Heading">
Daily Wisdom
       </h1>
       <div className="container">
        <GeneratedQuote />
       </div>
    </div>
  );
}

export default App;
