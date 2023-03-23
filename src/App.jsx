import { useState } from 'react';
import './App.css';

function App() {
  const [itemsInCart, setItems] = useState(0);
  const [lines, setLines] = useState([[2, 6, 4], [1], [2], [3], [4]]);

  const addPersonToLine = (e) => {
    e.preventDefault();
    console.log(e);
    let leastNumberAccount = 100000000;
    let lineWithLeast;
    for (let line of lines) {
      const totalInLines = line.reduce((sum, current) => sum + current, 0);
      if (totalInLines < leastNumberAccount) {
        leastNumberAccount = totalInLines;
        lineWithLeast = line;
      }
      if (!lineWithLeast) return;
    }

    setLines((prev) =>
      prev.map((line) => {
        if (line === lineWithLeast) {
          return [...line, Number(itemsInCart)];
        } else {
          return line;
        }
      })
    );
  };

  console.log('lines', lines);
  return (
    <div className="App">
      <form onSubmit={addPersonToLine}>
        <input
          value={itemsInCart}
          type="number"
          onChange={(e) => setItems(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
      <div className="lines">
        {lines.map((line) => (
          <div className="line">
            {line.map((items) => (
              <div>{items}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
