package com.example.capstonebackend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Dealership {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String location;



    @OneToMany(mappedBy = "dealership", cascade = CascadeType.ALL)
    private List<Car> cars;

    public Dealership() {
        // Default constructor
    }
    public Dealership(String name, String location) {
        this.name = name;
        this.location = location;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }

}