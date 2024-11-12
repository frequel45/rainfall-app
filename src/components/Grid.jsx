import React, { useState, useEffect } from 'react';
import './Grid.css';

const getRandomColor = () => {
  const colors = ['#00FFFF', '#00CED1', '#1E90FF', '#4682B4', '#5F9EA0'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Grid = ({ rows, cols, speed }) => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const initialGrid = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({ color: getRandomColor(), drop: false }))
    );
    setGrid(initialGrid);
  }, [rows, cols]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row, rowIndex) =>
          row.map((cell, colIndex) => {
            const isTop = rowIndex === 0;
            const isDrop = prevGrid[rowIndex][colIndex].drop;
            const newDrop = isTop ? Math.random() < 0.1 : prevGrid[rowIndex - 1][colIndex].drop;
            return { ...cell, drop: newDrop };
          })
        );
        return newGrid;
      });
    }, speed);
    return () => clearInterval(intervalId);
  }, [speed]);

  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${cols}, 40px)`, gridTemplateRows: `repeat(${rows}, 40px)` }}
    >
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="grid-cell"
            style={{
              backgroundColor: cell.drop ? '#00BFFF' : cell.color,
              animation: cell.drop ? 'drop 1s ease-out' : 'none',
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
