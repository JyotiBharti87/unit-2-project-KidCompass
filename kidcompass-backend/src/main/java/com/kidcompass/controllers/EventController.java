package com.kidcompass.controllers;

import com.kidcompass.models.Event;
import com.kidcompass.models.Parent;
import com.kidcompass.repositories.EventRepository;
import com.kidcompass.repositories.ParentRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventRepository eventRepository;
    private final ParentRepository parentRepository;

    //constructor injection for the EventRepository and ParentRepository
    public EventController(EventRepository eventRepository, ParentRepository parentRepository) {
        this.eventRepository = eventRepository;
        this.parentRepository = parentRepository;
    }

    //Returns a list of all events in the database.
    @GetMapping
    public List<Event>getAllEvents() {
        return eventRepository.findAll();
    }

    //Return single event by id.
    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id) {
        return eventRepository.findById(id).orElse(null);
    }

    //Create a new Event and connect it to a Parent by parentId.
    @PostMapping("/parent/{parentId}")
    public Event createEvent(@PathVariable Long parentId, @RequestBody Event event) {
        Parent parent = parentRepository.findById(parentId).orElse(null);
        if (parent == null) {
            return null;
        }
        event.setParent(parent);
        return eventRepository.save(event);
    }

}
