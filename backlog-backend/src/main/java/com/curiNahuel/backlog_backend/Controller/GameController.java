package com.curiNahuel.backlog_backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curiNahuel.backlog_backend.Service.GameService;
import com.curiNahuel.backlog_backend.DTO.GameDTO;

@RestController
@RequestMapping("api/games")
public class GameController {
    @Autowired
    private GameService gameService;

    @GetMapping
    public List<GameDTO> getAllGames(){
        List<GameDTO> games = gameService.getAllGames();
        System.out.println("found games: " + games);
        return games;
    }
}
