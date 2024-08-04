// # Goals
// - A button with the exact text `Generate` will cause a new color to be generated when it is clicked
// - Once a color is generated, update the background color of a div which contains the exact text `Generated Color: <background color hex code>` (the background color and the hex code must match)

// # Import libraries
import randomColor from 'randomcolor';
import { useState } from 'react';
import styles from './App.module.scss';

// # Actual code
export default function App() {
  // 1. STEP: Create a state
  const [color, setColor] = useState(randomColor());

  function generateColorWithButton() {
    setColor(randomColor());
  }
  return (
    <>
      <h1 className={styles.h1}>Random Color Generator</h1>
      <div className={styles.colorBox} style={{ backgroundColor: color }}>
        Generated Color: {color}
      </div>
      <br />
      <button className={styles.button} onClick={generateColorWithButton}>
        Generate
      </button>
    </>
  );
}
