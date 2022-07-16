package com.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String question;
    private int difficultyLevel;
    private double point;

    @ManyToOne(targetEntity = QuestionType.class)
    @JsonBackReference
    private QuestionType questionType;

    @ManyToOne(targetEntity = Topic.class)
    @JsonBackReference
    private Topic topic;

    @OneToMany(mappedBy = "question")
    @JsonManagedReference
    private List<Choice> choices;
}
