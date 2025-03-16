// src/components/GameTable.jsx
import React, { useState, useEffect } from 'react';
import GameRow from './GameRow';
import styles from './GameTable.module.css';

function GameTable() {
  const [games, setGames] = useState([]); // State to store game data
  const [expandedRow, setExpandedRow] = useState(null); // State for expandable rows
  const [loading, setLoading] = useState(true); // Optional: Track loading state
  const [error, setError] = useState(null); // Optional: Track errors

  // Fetch game data from the backend when the component mounts
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/games');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchGames();
  }, []); 

  if (loading) {
    return <div className={styles.loading}>Loading games...</div>; // Optional loading state
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>; // Optional error state
  }

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.table}>
        {/*  <div className={styles.cell}>Release Date</div> 
            <div className={styles.cell}>{game.releaseDate || 'N/A'}</div>
        */}
        <div className={styles.header}>
          <div className={styles.cell}>Game Title</div>
          <div className={styles.cell}>Genre</div>
          <div className={styles.cell}>HLTB</div>
          <div className={styles.cell}>Time Played</div>
          <div className={styles.cell}>Played Status</div>
          <div className={styles.cell}>Score</div>
          <div className={styles.emptyDiv}></div> {/* Empty cell to match the chevron */}
          <div className={styles.emptyDiv}></div>
          
        </div>
        {/* Data Rows */}
        <div className={styles.body}>
          {games.map((game) => (
            <GameRow
              key={game.id} // Use the game's unique id as the key
              game={game}
              isExpanded={expandedRow === game.id} // Use id for expanded state
              onExpand={() => setExpandedRow(expandedRow === game.id ? null : game.id)} // Use id for toggle
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameTable;