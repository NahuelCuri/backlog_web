package com.curiNahuel.backlog_backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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

    @PutMapping(value = "/update", consumes = { "multipart/form-data" })
    public ResponseEntity<GameDTO> updateGame(@RequestParam("game") String gameStr, @RequestParam(value = "image", required = false) MultipartFile image) throws Exception{
        GameDTO updatedGame = gameService.updateGame(gameStr, image);
        return ResponseEntity.ok(updatedGame);
    }
}
