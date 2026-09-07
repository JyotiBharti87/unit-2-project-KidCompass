package com.kidcompass.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Parent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String city;
    private String state;
    private String country;
    private String kidName;
    private Integer kidAge;
    private String kidGender;
    private String kidBio;

    public Parent() {}


}
