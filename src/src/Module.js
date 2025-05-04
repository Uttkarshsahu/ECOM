// File: src/App.js
import React from 'react';

function App() {
  const fruits = ["apple", "banana", "cherry"];

  return (
    <div>
      <h1>MY MODULE</h1>
      <p>{fruits.join(", ")}</p>
    </div>
  );
}

export default App;
