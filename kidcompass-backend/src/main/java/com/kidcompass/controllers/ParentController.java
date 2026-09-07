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

    @GetMapping
    public List<Parent> getAllParents() {
        return parentRepository.findAll();
    }

    @PostMapping
    public Parent createParent(@RequestBody Parent parent){
        return parentRepository.save(parent);
    }

}
