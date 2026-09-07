package com.kidcompass.controllers;

import com.kidcompass.models.Parent;
import com.kidcompass.repositories.ParentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/parents")
public class ParentController {

    private final ParentRepository parentRepository;

    public ParentController(ParentRepository parentRepository) {
        this.parentRepository = parentRepository;
    }

    // Endpoint to get all parents from the database
    @GetMapping
    public List<Parent> getAllParents() {
        return parentRepository.findAll();
    }

    @PostMapping
    public Parent createParent(@RequestBody Parent parent){
        return parentRepository.save(parent);
    }

    // Return a parent profile by ID
    @GetMapping("/{id}")
    public Parent getParentById(@PathVariable Long id) {
        return parentRepository.findById(id).orElse(null);}

    //Delete a parent profile by ID
    @DeleteMapping("/{id}")
    public void deleteParentById(@PathVariable Long id) {
        parentRepository.deleteById(id);
    }

}
