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
  const [color, setColor] = useState(randomColor());
  console.log(typeof color);
  function generateColorWithButton() {
    setColor(randomColor());
  }
  return (
    <>
      <h1
        style={{
          textAlign: 'center',
          width: 400,
          margin: 'auto',
          padding: '20px',
          fontFamily: 'system-ui',
        }}
      >
        Random Color Generator
      </h1>
      <div
        style={{
          backgroundColor: color,
          inlineHeight: 10,
          width: '400px',
          padding: '50px',
          margin: 'auto',
          textAlign: 'center',
          fontSize: 25,
          fontFamily: 'system-ui',
        }}
      >
        Generated Color: {color}
      </div>
      <br />
      <button
        onClick={generateColorWithButton}
        style={{
          width: '120px',
          height: '50px',
          display: 'block',
          marginTop: 0,
          marginBottom: 0,
          marginRight: 'auto',
          marginLeft: 'auto',
          borderRadius: '7px',
          backgroundColor: 'black',
          textAlign: 'center',
          fontFamily: 'system-ui',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        GENERATE
      </button>
    </>
  );
}
