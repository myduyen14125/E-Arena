package com.backend.controller;

import com.backend.model.Course;
import com.backend.model.Topic;
import com.backend.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/topics")
@CrossOrigin("http://localhost:3000")
public class TopicController {
    @Autowired
    private TopicService topicService;

    @GetMapping()
    public ResponseEntity<Iterable<Topic>> getAllCourse() {
        List<Topic> topics = (List<Topic>) topicService.findAll();

        if (topics.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(topics, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Topic> getTopicById(@PathVariable Integer id) {
        Optional<Topic> topicOptional = topicService.findById(id);

        if(!topicOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<Topic>(topicOptional.get(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Topic> saveCustomer(@RequestBody Topic topic) {
        return new ResponseEntity<>(topicService.save(topic), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Topic> updateCustomer(@PathVariable Integer id, @RequestBody Topic topic) {
        Optional<Topic> topicOptional = topicService.findById(id);
        if (!topicOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        topic.setId(id);
        return new ResponseEntity<>(topicService.save(topic), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Topic> deleteCustomer(@PathVariable Integer id) {
        Optional<Topic> topicOptional = topicService.findById(id);
        if (!topicOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        topicService.deleteById(id);
        return new ResponseEntity<>(topicOptional.get(), HttpStatus.NO_CONTENT);
    }
}
