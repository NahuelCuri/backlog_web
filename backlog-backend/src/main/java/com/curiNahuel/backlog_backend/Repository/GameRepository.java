package com.curiNahuel.backlog_backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.curiNahuel.backlog_backend.Entity.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long>{
    
}
