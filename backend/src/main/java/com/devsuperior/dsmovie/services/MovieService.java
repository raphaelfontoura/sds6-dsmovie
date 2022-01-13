package com.devsuperior.dsmovie.services;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class MovieService {

    private final MovieRepository _repository;

    public MovieService(MovieRepository repository) {
        _repository = repository;
    }

    @Transactional(readOnly = true)
    public Page<MovieDTO> findAll(Pageable pageable) {
        var result = _repository.findAll(pageable);
        return result.map(MovieDTO::new);
    }

    public MovieDTO findById(Long id) {
        var result = _repository.findById(id).get();
        return new MovieDTO(result);
    }
}
