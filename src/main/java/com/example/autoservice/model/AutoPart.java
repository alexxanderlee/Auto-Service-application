package com.example.autoservice.model;

import org.hibernate.annotations.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AutoPart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int price;
    private int idCars;
    private int idTypesOfAutoParts;
    private int idMaker;

    public AutoPart(int id, String name, int price, int idCars, int idTypesOfAutoParts, int idMaker) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.idCars = idCars;
        this.idTypesOfAutoParts = idTypesOfAutoParts;
        this.idMaker = idMaker;
    }

    public AutoPart() {

    }


    public void setId(int id) {
        this.id = id;
    }


    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getIdCars() {
        return idCars;
    }

    public void setIdCars(int idCars) {
        this.idCars = idCars;
    }

    public int getIdTypesOfAutoParts() {
        return idTypesOfAutoParts;
    }

    public void setIdTypesOfAutoParts(int idTypesOfAutoParts) {
        this.idTypesOfAutoParts = idTypesOfAutoParts;
    }

    public int getIdMaker() {
        return idMaker;
    }

    public void setIdMaker(int idMaker) {
        this.idMaker = idMaker;
    }
}
