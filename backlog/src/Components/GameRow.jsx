import React, { useState, useEffect, useRef } from 'react';
import { FaChevronUp, FaChevronDown, FaEdit } from 'react-icons/fa'; // Añadimos FaEdit
import styles from './GameRow.module.css';

const GameRow = ({ game }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef(null);

  const animationDuration = 400; // 400ms = 0.4s, debe coincidir con el CSS

  const onExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Función para manejar el clic en el botón de edición (puedes personalizarla)
  const onEdit = () => {
    console.log(`Editando el juego: ${game.title}`);
    // Aquí puedes agregar la lógica de edición, como abrir un modal
  };

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        const height = contentRef.current.scrollHeight;
        setMaxHeight(`${height}px`);
      } else {
        setMaxHeight('0px');
      }
    }
  }, [isExpanded, game]);

  return (
    <div className={styles.row}>
      {/* Contenido colapsado */}
      <div 
        className={styles.collapsedContent}
        style={{ 
          maxHeight: isExpanded ? '0px' : '50px',
          opacity: isExpanded ? 0 : 1,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease-in-out, opacity 0.4s ease-in-out'
        }}
      >
        <div className={styles.cell}>{game.title || 'N/A'}</div>
        <div className={styles.cell}>{game.genre || 'N/A'}</div>
        <div className={styles.cell}>{game.releaseDate || 'N/A'}</div>
        <div className={styles.cell}>{game.hltb || 'N/A'}</div>
        <div className={styles.cell}>{game.timePlayed || 'N/A'}</div>
        <div className={styles.cell}>{game.playedStatus || 'N/A'}</div>
        <div className={styles.cell}>{game.score || 'N/A'}</div>
        <div className={styles.expandCell}>
          <button onClick={onEdit} className={styles.editButton}>
            <FaEdit />
          </button>
          <button onClick={onExpand} className={styles.expandButton}>
            <FaChevronDown />
          </button>
        </div>
      </div>

      {/* Contenido expandido */}
      <div
        ref={contentRef}
        className={styles.expandedContent}
        style={{ 
          maxHeight,
          opacity: isExpanded ? 1 : 0,
          transition: 'max-height 0.4s ease-in-out, opacity 0.4s ease-in-out'
        }}
      >
        <div className={styles.expandedLayout}>
          <div className={styles.textSection}>
            <h2 className={styles.gameTitle}>{game.title || 'N/A'}</h2>
            <div className={styles.detailsList}>
              <p><strong>Genre:</strong> {game.genre || 'N/A'}</p>
              <p><strong>Release Date:</strong> {game.releaseDate || 'N/A'}</p>
              <p><strong>HLTB:</strong> {game.hltb || 'N/A'}</p>
              <p><strong>Time Played:</strong> {game.timePlayed || 'N/A'}</p>
              <p><strong>Played Status:</strong> {game.playedStatus || 'N/A'}</p>
              <p><strong>Score:</strong> {game.score || 'N/A'}</p>
              <p><strong>Notes:</strong> {game.notes || 'N/A'}</p>
            </div>
          </div>
          <div className={styles.imageSection}>
            <img
              src={game.image}
              alt={game.title || 'Game Image'}
              className={styles.gameImage}
            />
          </div>
          <div className={styles.expandCell}>
            <button onClick={onEdit} className={styles.editButton}>
              <FaEdit />
            </button>
            <button onClick={onExpand} className={styles.expandButton}>
              <FaChevronUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameRow;