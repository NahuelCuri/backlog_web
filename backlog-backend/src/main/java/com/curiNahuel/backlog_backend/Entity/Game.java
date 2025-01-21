package com.curiNahuel.backlog_backend.Entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Game")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String genre;
    private LocalDate releaseDate;
    private int timePlayed;
    private int score;
    private String image;
    private String notes;
    private String gameStatus;
    private int hltb;
}