import React, { useState } from 'react';
import Grid from './components/Grid';
import Controls from './components/Controls';
import './App.css';

const App = () => {
  const [rows, setRows] = useState(15);
  const [cols, setCols] = useState(20);
  const [speed, setSpeed] = useState(100);

  const handleGridResize = (newRows, newCols) => {
    setRows(newRows);
    setCols(newCols);
  };

  return (
    <div className="app-container">
      <h1>Dynamic Rainfall Grid</h1>
      <Controls onResize={handleGridResize} speed={speed} setSpeed={setSpeed} />
      <Grid rows={rows} cols={cols} speed={speed} />
    </div>
  );
};

export default App;
