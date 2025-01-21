package com.curiNahuel.backlog_backend.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.curiNahuel.backlog_backend.DTO.GameDTO;
import com.curiNahuel.backlog_backend.Entity.Game;
import com.curiNahuel.backlog_backend.Repository.GameRepository;

@Service
public class GameService {
    @Autowired
    private GameRepository gameRepository;

    public List<GameDTO> getAllGames(){
        List<Game> games = gameRepository.findAll();
        System.out.println("Fetched games: " + games);
        return games.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private GameDTO convertToDTO(Game game){
        GameDTO gameDTO = new GameDTO();
        gameDTO.setId(game.getId());
        gameDTO.setTitle(game.getTitle());
        gameDTO.setGenre(game.getGenre());
        gameDTO.setReleaseDate(game.getReleaseDate());
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


