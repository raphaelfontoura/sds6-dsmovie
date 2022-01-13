package com.devsuperior.dsmovie.controllers;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.services.MovieService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {

    private final MovieService _service;

    public MovieController(MovieService service) {
        _service = service;
    }

    @GetMapping
    public ResponseEntity<Page<MovieDTO>> getAll(Pageable pageable) {
        return ResponseEntity.ok(_service.findAll(pageable));
    }

}
