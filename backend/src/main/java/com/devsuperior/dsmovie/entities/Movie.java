package com.devsuperior.dsmovie.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "tb_movie")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Double score;
    private Integer count;
    private String image;
}
