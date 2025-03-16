package com.curiNahuel.backlog_backend.DTO;

import lombok.Data;

@Data
public class GameDTO {
    private Long id;

    private String title;
    private String genre;
    private int timePlayed;
    private int hltb;
    private int score;
    private String image;
    private String notes;
    private String gameStatus;
}
