package com.example.autoservice.model;

import lombok.Data;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.List;

@Data
@DynamicUpdate
@Table(name = "clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String surname;

    private String phone;

    private String email;

    private Short pswd;

    @OneToMany(mappedBy = "client",
               fetch = FetchType.LAZY)
    private List<Order> orders;

    @OneToMany(mappedBy = "client",
               fetch = FetchType.LAZY)
    private List<Purchase> purchases;
}