import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function Row({ game, onRowClick }) {
  const handleEditClick = (e) => {
    e.stopPropagation(); // Prevents the row click event from being triggered when clicking the edit icon
    console.log('Edit icon clicked');
    // Add edit functionality here
  };

  return (
    <div className="row-container">
      <div className="row" onClick={() => onRowClick(game)}>
        <div className="gameInfo"> 
          <span>{game.title || 'Not Available'}</span>
          <span>{game.genre || 'Not Available'}</span>
          <span>{game.releaseDate || 'Not Available'}</span>
          <span>{game.hltb || 'Not Available'} hs</span>
          <span>{game.timePlayed || 'Not Available'} hs</span>
          <span>{game.gameStatus || 'Not Available'}</span>
        </div>
        <span className="score">{game.score}</span>
      </div>
      <div className="edit-icon" onClick={handleEditClick}>
        <FontAwesomeIcon icon={faEdit} />
      </div>
    </div>
  );
}

export default Row;