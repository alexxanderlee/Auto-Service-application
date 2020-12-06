package com.example.autoservice.model;

import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Data
@DynamicUpdate
@Table(name = "services")
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private BigDecimal price;

    @OneToMany(mappedBy = "service",
               fetch = FetchType.LAZY)
    private List<Purchase> purchases;
}