package com.curiNahuel.backlog_backend.Controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/database")
public class DatabaseController {

    @Value("${spring.datasource.url}")
    private String datasourceUrl;

    @Value("${spring.datasource.username}")
    private String datasourceUsername;

    @GetMapping("/info")
    public String getDatabaseInfo() {
        return String.format("Connected to database: %s with user: %s", datasourceUrl, datasourceUsername);
    }
}
