package com.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserExam {
    @EmbeddedId
    UserExamKey id;

    @ManyToOne
    @JsonBackReference
    @MapsId("examId")
    @JoinColumn(name = "exam_id")
    Exam exam;

    @ManyToOne
    @JsonBackReference
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    User user;

    private String answerSheetUser;
    private double point;
}
