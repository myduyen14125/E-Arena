package com.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
class QuestionExam {

    @EmbeddedId
    QuestionExamKey id;

    @ManyToOne
    @JsonBackReference
    @MapsId("examId")
    @JoinColumn(name = "examId")
    Exam exam;

    @ManyToOne
    @JsonBackReference
    @MapsId("questionId")
    @JoinColumn(name = "question_id")
    Question question;
}
