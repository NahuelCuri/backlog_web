import React, { useRef, useEffect, useState } from 'react';
import styles from './GameRow.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function GameRow({ game, isExpanded, onExpand }) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        const height = contentRef.current.scrollHeight;
        setMaxHeight(`${height}px`);
      } else {
        setMaxHeight('0px');
      }
    }
  }, [isExpanded]);

  return (
    <div className={styles.row}>
      {/* Contenido cerrado */}
      {!isExpanded && (
        <div className={styles.collapsedContent}>
          <div className={styles.cell}>{game.title || 'N/A'}</div>
          <div className={styles.cell}>{game.genre || 'N/A'}</div>
          <div className={styles.cell}>{game.releaseDate || 'N/A'}</div>
          <div className={styles.cell}>{game.hltb || 'N/A'}</div>
          <div className={styles.cell}>{game.timePlayed || 'N/A'}</div>
          <div className={styles.cell}>{game.gameStatus || 'N/A'}</div>
          <div className={styles.cell}>{game.score || 'N/A'}</div>
          <div className={styles.expandCell}>
            <button
              onClick={onExpand}
              className={`${styles.expandButton} ${isExpanded ? styles.expandedChevron : ''}`}
              aria-label={isExpanded ? "Collapse row" : "Expand row"}
            >
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </div>
      )}

      {/* Contenido expandido con animación */}
      <div
        ref={contentRef}
        className={styles.expandedContent}
        style={{ maxHeight: isExpanded ? maxHeight : '0px' }}
      >
        {isExpanded && (
          <div className={styles.expandedLayout}>
            <div className={styles.textSection}>
              <h2 className={styles.gameTitle}>{game.title || "N/A"}</h2>
              <div className={styles.detailsList}>
                <p><strong>Release Date:</strong> {game.releaseDate || "N/A"}</p>
                <p><strong>HLTB:</strong> {game.hltb || "N/A"}</p>
                <p><strong>Time Played:</strong> {game.timePlayed || "N/A"}</p>
                <p><strong>Played Status:</strong> {game.gameStatus || "N/A"}</p>
                <p><strong>Score:</strong> {game.score || "N/A"}</p>
                <p><strong>Thoughts:</strong> {game.thoughts || "N/A"}</p>
              </div>
            </div>
            <div className={styles.imageSection}>
              <img src={game.image} alt={game.title || "Game Image"} className={styles.gameImage} />
            </div>
          </div>
        )}
        <div className={styles.expandCell}>
          <button
            onClick={onExpand}
            className={`${styles.expandButton} ${isExpanded ? styles.expandedChevron : ''}`}
            aria-label={isExpanded ? "Collapse row" : "Expand row"}
          >
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameRow;
