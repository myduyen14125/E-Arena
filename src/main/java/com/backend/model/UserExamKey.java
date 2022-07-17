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
public class UserExamKey implements Serializable {
    @Column(name = "exam_id")
    Integer examId;

    @Column(name = "user_id")
    Integer userId;
}
