package com.example.autoservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@DynamicUpdate
@Table(name = "producers")
public class Producer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String address;

    private String phone;

    @OneToMany(mappedBy = "producer",
               fetch = FetchType.LAZY)
    private List<Spare> spares;
}