import { React, useState, useEffect } from "react";
import "./GeneratedQuote.css";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <main>
      <section>
        <button onClick={getNewQuote} className="btn">New Quote</button>
        <h3 className="QuoteText">
          <span>“</span>
          {quote?.text}<span>"</span></h3>
        <i>- {quote?.author}</i>
      </section>
    </main>
  );
}
