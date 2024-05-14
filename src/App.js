// # Goals
// - A button with the exact text `Generate` will cause a new color to be generated when it is clicked
// - Once a color is generated, update the background color of a div which contains the exact text `Generated Color: <background color hex code>` (the background color and the hex code must match)

// # Import libraries
// import chalk from 'chalk';
import randomColor from 'randomcolor';
import { useState } from 'react';

// # Actual code
export default function App() {
  // 1. STEP: Create a state
  const [color, setColor] = useState(randomColor()); // I have to use the color property, I think.
  console.log(typeof color);
  function generateColorWithButton() {
    setColor(randomColor());
  }
  return (
    <>
      <h1>Random Color Generator</h1>
      <div
        style={{
          backgroundColor: color,
          inlineHeight: 10,
          width: '300px',
          padding: '50px',
          margin: '20px',
          textAlign: 'center',
        }}
      >
        Generated Color: {color}
      </div>
      <br />
      <button onClick={generateColorWithButton}>Generate</button>
    </>
  );
}
