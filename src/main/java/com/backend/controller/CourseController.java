package com.backend.controller;

import com.backend.model.Course;
import com.backend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/courses")
@CrossOrigin("*")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping()
    public ResponseEntity<Iterable<Course>> getAllCourse() {
        List<Course> courses = (List<Course>) courseService.findAll();

        if (courses.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(courses, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Course> saveCustomer(@RequestBody Course course) {
        return new ResponseEntity<>(courseService.save(course), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Course> updateCustomer(@PathVariable Integer id, @RequestBody Course course) {
        Optional<Course> courseOptional = courseService.findById(id);
        if (!courseOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        course.setId(id);
        return new ResponseEntity<>(courseService.save(course), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Course> deleteCustomer(@PathVariable Integer id) {
        Optional<Course> courseOptional = courseService.findById(id);
        if (!courseOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        courseService.deleteById(id);
        return new ResponseEntity<>(courseOptional.get(), HttpStatus.NO_CONTENT);
    }
}
