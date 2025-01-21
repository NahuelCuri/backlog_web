import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './EditGameModal.css';

Modal.setAppElement('#root');  // To prevent accessibility issues with screen readers

function EditGameModal({ isOpen, onRequestClose, gameData, onSave }) {
  const [editedGame, setEditedGame] = useState(gameData);

  useEffect(() => {
    setEditedGame(gameData);
  }, [gameData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedGame({ ...editedGame, [name]: value });
  };

  const handleSave = () => {
    onSave(editedGame);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Game"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Edit Game</h2>
      <form className="edit-game-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={editedGame.title}
            onChange={handleChange}
            className="rounded-input"
          />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={editedGame.genre}
            onChange={handleChange}
            className="rounded-input"
          />
        </div>
        <div className="form-group">
          <label>Release Date:</label>
          <input
            type="date"
            name="releaseDate"
            value={editedGame.releaseDate}
            onChange={handleChange}
            className="rounded-input"
          />
        </div>
        <div className="form-group">
          <label>Time Played:</label>
          <input
            type="number"
            name="timePlayed"
            value={editedGame.timePlayed}
            onChange={handleChange}
            className="rounded-input"
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <input
            type="text"
            name="gameStatus"
            value={editedGame.gameStatus}
            onChange={handleChange}
            className="rounded-input"
          />
        </div>
        <div className="form-group">
          <label>Score:</label>
          <input
            type="number"
            name="score"
            value={editedGame.score}
            onChange={handleChange}
            className="rounded-input"
          />
        </div>
        <div className="form-group">
          <label>HLTB:</label>
          <input
            type="number"
            name="hltb"
            value={editedGame.hltb}
            onChange={handleChange}
            className="rounded-input"
          />
        </div>
        <button type="button" onClick={handleSave} className="save-button">
          Save
        </button>
        <button type="button" onClick={onRequestClose} className="cancel-button">
          Cancel
        </button>
      </form>
    </Modal>
  );
}

export default EditGameModal;
