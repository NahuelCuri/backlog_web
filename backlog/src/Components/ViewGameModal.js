// ViewGameModal.jsx
import React from 'react';
import Modal from 'react-modal';
import './ViewGameModal.css';

Modal.setAppElement('#root');  // To prevent accessibility issues with screen readers

function ViewGameModal({ isOpen, onRequestClose, gameData }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="View Game"
      className="view-modal"
      overlayClassName="overlay"
    >
      <h2>{gameData.title}</h2>
      <div className="game-info-container">
        <div className="game-info">
          <p><strong>Genre:</strong> {gameData.genre || 'Not Available'}</p>
          <p><strong>Release Date:</strong> {gameData.releaseDate || 'Not Available'}</p>
          <p><strong>Time Played:</strong> {gameData.timePlayed || 'Not Available'} hours</p>
          <p><strong>Status:</strong> {gameData.gameStatus || 'Not Available'}</p>
          <p><strong>Score:</strong> {gameData.score || 'Not Available'}/100</p>
          <p><strong>HLTB:</strong> {gameData.hltb  || 'Not Available'} </p>
        </div>
        <div className="game-review">
          <h3>Review:</h3>
          <p>{gameData.notes || 'No review available.'}</p>
        </div>
      </div>
      <button type="button" onClick={onRequestClose} className="close-button">
        Close
      </button>
    </Modal>
  );
}

export default ViewGameModal;