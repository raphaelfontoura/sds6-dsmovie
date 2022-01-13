package com.devsuperior.dsmovie.controllers;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.services.ScoreService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    private final ScoreService _service;

    public ScoreController(ScoreService service) {
        _service = service;
    }

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO dto) {
        return _service.saveScore(dto);
    }
}
