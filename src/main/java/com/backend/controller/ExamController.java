package com.backend.controller;

import com.backend.model.Exam;
import com.backend.model.Question;
import com.backend.model.User;
import com.backend.service.ExamService;
import com.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exams")
public class ExamController {
    @Autowired
    private ExamService examService;
    @Autowired
    private UserService userService;

    @GetMapping("/rank/{roomId}")
    public ResponseEntity<Iterable<User>> getRankByRoomId(@PathVariable Integer roomId) {
        List<User> users = userService.getRankByRoomId(roomId);
        if(users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else return new ResponseEntity<>(users, HttpStatus.OK);
    }
}
