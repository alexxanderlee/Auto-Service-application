package com.example.autoservice.model;

import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Data
@DynamicUpdate
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    private Integer quantity;

    private BigDecimal amount;

    @Column(name = "employee_id")
    private String employeeId;
}