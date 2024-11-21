import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAddvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h1>{advice}</h1>

      <button onClick={getAddvice}>Get advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of advice
      </p>
    </div>
  );
}

export default App;
