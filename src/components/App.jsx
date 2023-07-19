import React, { useState } from "react";

function App() {
  // part 1
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function asetaAika() {
    const uusiAika = new Date().toLocaleTimeString();
    setTime(uusiAika);
  }
  // part 2
  setInterval(asetaAika, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={asetaAika}>Get Time</button>
    </div>
  );
}

export default App;
