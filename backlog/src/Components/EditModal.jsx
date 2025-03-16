import React, { useState } from 'react';
import styles from './EditModal.module.css';

const EditModal = ({ game, onClose }) => {
  const [formData, setFormData] = useState({
    id: game.id,
    title: game.title || '',
    genre: game.genre || '',
    hltb: game.hltb || 0,
    timePlayed: game.timePlayed || 0,
    gameStatus: game.gameStatus || 'N/A',
    score: game.score || 0,
    notes: game.notes || '',
    image: game.image || '',
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('game', JSON.stringify(formData));
    if (imageFile) {
      formDataToSend.append('image', imageFile);
    }

    try {
      const response = await fetch('http://localhost:8080/api/games/update', {
        method: 'PUT',
        body: formDataToSend,
      });
      if (response.ok) {
        const updatedGame = await response.json();
        console.log('Juego actualizado:', updatedGame);
        onClose();
      } else {
        console.error('Error al actualizar el juego');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Edit Game</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formContainer}>
            <div className={styles.formColumns}>
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label htmlFor="title">Game Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="genre">Genre</label>
                  <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="hltb">HLTB (hours)</label>
                  <input
                    type="number"
                    id="hltb"
                    name="hltb"
                    value={formData.hltb}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.formColumn}>
                <div className={styles.formGroup}>
                  <label htmlFor="timePlayed">Time Played (hours)</label>
                  <input
                    type="number"
                    id="timePlayed"
                    name="timePlayed"
                    value={formData.timePlayed}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="playedStatus">Played Status</label>
                  <select
                    id="playedStatus"
                    name="playedStatus"
                    value={formData.playedStatus}
                    onChange={handleChange}
                  >
                    <option value="N/A">N/A</option>
                    <option value="Played">Played</option>
                    <option value="Not Played">Not Played</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="score">Score (0-100)</label>
                  <input
                    type="number"
                    id="score"
                    name="score"
                    min="0"
                    max="100"
                    value={formData.score}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="image">Upload New Image</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>
            <div className={styles.imageColumn}>
              <img
                src={game.image || 'https://via.placeholder.com/200'}
                alt={`${game.title} Image`}
                className={styles.gameImage}
              />
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.saveButton}>
              Save
            </button>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;