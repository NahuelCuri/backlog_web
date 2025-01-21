import React from 'react';
import './Row.css';
import './RowFilter.css';

function RowFilter() {
  return (
    <div className="rowFilter">
      <div className="gameInfo"> 
        <span>title</span>
        <span>genre</span>
        <span>releaseDate</span>
        <span>hltb</span>
        <span>timePlayed</span>
        <span>status</span>
      </div>
      <span className="score">score</span>
    </div>
  );
}

export default RowFilter;
