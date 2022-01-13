package com.devsuperior.dsmovie.services;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ScoreService {

    private MovieRepository _movieRepository;
    private UserRepository _userRepository;
    private ScoreRepository _repository;

    public ScoreService(MovieRepository movieRepository,
                        UserRepository userRepository,
                        ScoreRepository repository) {
        _movieRepository = movieRepository;
        _userRepository = userRepository;
        _repository = repository;
    }

    @Transactional
    public MovieDTO saveScore(ScoreDTO dto) {
        User user = _userRepository.findByEmail(dto.getEmail());
        if (user == null) {
            user = new User();
            user.setEmail(dto.getEmail());
            user = _userRepository.saveAndFlush(user);
        }
        Movie movie = _movieRepository.findById(dto.getMovieId()).get();
        Score score = new Score();
        score.setMovie(movie);
        score.setUser(user);
        score.setValue(dto.getScore());

        score = _repository.saveAndFlush(score);

        double sum = 0.0;
        for (Score sc :
                movie.getScores()) {
            sum += sc.getValue();
        }
        double avg = sum / movie.getScores().size();

        movie.setScore(avg);
        movie.setCount(movie.getScores().size());

        movie = _movieRepository.save(movie);

        return new MovieDTO(movie);
    }
}
