import React, { useState } from 'react';
import './Controls.css';

const Controls = ({ onResize, speed, setSpeed }) => {
  const [newRows, setNewRows] = useState(15);
  const [newCols, setNewCols] = useState(20);

  const handleResize = () => {
    onResize(newRows, newCols);
  };

  return (
    <div className="controls">
      <div>
        <label>Rows: </label>
        <input
          type="number"
          value={newRows}
          onChange={(e) => setNewRows(Number(e.target.value))}
        />
        <label>Columns: </label>
        <input
          type="number"
          value={newCols}
          onChange={(e) => setNewCols(Number(e.target.value))}
        />
        <button onClick={handleResize}>Resize Grid</button>
      </div>
      <div>
        <label>Rain Speed (ms): </label>
        <input
          type="range"
          min="50"
          max="500"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
        <span>{speed} ms</span>
      </div>
    </div>
  );
};

export default Controls;
