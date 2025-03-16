package com.curiNahuel.backlog_backend.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.curiNahuel.backlog_backend.DTO.GameDTO;
import com.curiNahuel.backlog_backend.Entity.Game;
import com.curiNahuel.backlog_backend.Repository.GameRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class GameService {
    @Autowired
    private GameRepository gameRepository;
     private final ObjectMapper objectMapper = new ObjectMapper();

    public List<GameDTO> getAllGames(){
        List<Game> games = gameRepository.findAll();
        System.out.println("Fetched games: " + games);
        return games.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public GameDTO updateGame(String gameStr, MultipartFile image) throws Exception{
        try {
            // Convertir el string JSON a GameDTO
            GameDTO gameDTO = objectMapper.readValue(gameStr, GameDTO.class);

            // Buscar el juego existente
            Game gameToModify = gameRepository.findById(gameDTO.getId())
                    .orElseThrow(() -> new Exception("El juego no existe"));

            // Usar ObjectMapper para mapear GameDTO a Game
            objectMapper.updateValue(gameToModify, gameDTO);

            // Manejar la imagen si se proporciona una nueva
            // if (image != null && !image.isEmpty()) {
            //     String imagePath = imageService.saveImage(image);
            //     gameToModify.setImagePath(imagePath);
            // }

            // Guardar los cambios (esto realiza el UPDATE)
            gameRepository.save(gameToModify);

            // Convertir el Game actualizado a GameDTO usando ObjectMapper
            return objectMapper.convertValue(gameToModify, GameDTO.class);

        } catch (Exception e) {
            throw new Exception("Error al modificar el juego: " + e.getMessage(), e);
        }
    }

    private GameDTO convertToDTO(Game game){
        GameDTO gameDTO = new GameDTO();
        gameDTO.setId(game.getId());
        gameDTO.setTitle(game.getTitle());
        gameDTO.setGenre(game.getGenre());
        gameDTO.setTimePlayed(game.getTimePlayed());
        gameDTO.setHltb(game.getHltb());
        gameDTO.setScore(game.getScore());
        gameDTO.setImage(game.getImage());
        gameDTO.setNotes(game.getNotes());
        gameDTO.setGameStatus(game.getGameStatus());

        System.out.println("Converted dto to game");
        return gameDTO;
    }
}


