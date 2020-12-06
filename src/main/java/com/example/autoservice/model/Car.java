package com.example.autoservice.model;

import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.List;

@Data
@DynamicUpdate
@Table(name = "cars")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;

    private String model;

    @Column(name = "issue_year")
    private Short issueYear;

    @OneToMany(mappedBy = "car",
               fetch = FetchType.LAZY)
    private List<Spare> spares;
}