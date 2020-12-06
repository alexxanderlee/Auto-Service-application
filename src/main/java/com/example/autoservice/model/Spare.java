package com.example.autoservice.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Data
@DynamicUpdate
@Table(name = "spares")
public class Spare {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private BigDecimal price;

    private String type;

    @ManyToOne(fetch = FetchType.LAZY)
    private Car car;

    @ManyToOne(fetch = FetchType.LAZY)
    private Producer producer;

    @OneToMany(fetch = FetchType.LAZY,
               mappedBy = "spare")
    private List<Order> orders;
}
