package com.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
class QuestionExamKey implements Serializable {

    @Column(name = "exam_id")
    Integer examId;

    @Column(name = "question_id")
    Integer questionId;

}
