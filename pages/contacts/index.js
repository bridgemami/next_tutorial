import React, { useState } from "react";

export default function Home() {
  const [number, setNumbers] = useState(0);
  return (
    <section>
      <p>Name is Me.</p>
      <div>{number}</div>
      <button
        onClick={() => {
          setNumbers(number - 10);
        }}
      >
        -10
      </button>
      <br />
      <button
        onClick={() => {
          setNumbers(number + 10);
        }}
      >
        +10
      </button>
    </section>
  );
}
