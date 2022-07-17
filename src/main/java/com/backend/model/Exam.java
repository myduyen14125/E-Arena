package com.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.List;


// Dữ liệu mang tính chất demo bảng xếp hạng do chưa hoàn thiện
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Exam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer roomId;
    private Date dateExam;
    private String answerSheetCorrect;

    @OneToMany(mappedBy = "exam")
    @JsonManagedReference
    private List<QuestionExam> questionExams;

    @OneToMany(mappedBy = "exam")
    @JsonManagedReference
    private List<UserExam> userExams;
}
