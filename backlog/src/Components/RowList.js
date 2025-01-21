import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from './Row';
import RowFilter from './RowFilter';
import './RowList.css';
import ViewGameModal from './ViewGameModal';

function RowList() {
  const [rows, setRows] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/api/games')
      .then(response => {
        console.log(response.data);  // Verifica los datos aquí
        setRows(response.data);
      })
      .catch(error => {
        console.error('Error fetching game list:', error);
      });
  }, []);

  const handleRowClick = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedGame(null);
  };

  const handleSave = (updatedGame) => {
    // Aquí puedes agregar la lógica para guardar los cambios en la BD
    console.log('Saving game:', updatedGame);
    // Actualiza el estado local para reflejar los cambios
    setRows(rows.map(row => (row.id === updatedGame.id ? updatedGame : row)));
  };

  return (
    <div className="rowList">
      <RowFilter />
      {rows.map((row) => (
        <Row 
          key={row.id}
          game={row}
          onRowClick={handleRowClick}
        />
      ))}
      {selectedGame && (
        console.log("modal receives: ",selectedGame),
        <ViewGameModal 
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          gameData={selectedGame}
         // onSave={handleSave}
        />
      )}
    </div>
  );
}

export default RowList;
