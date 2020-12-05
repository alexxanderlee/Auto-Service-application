package com.example.autoservice.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@EqualsAndHashCode(of = {"id"})
@DynamicUpdate
@Table(name = "spares")
public class Spare {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    private BigDecimal price;

    private String type;
}
