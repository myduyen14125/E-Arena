package com.backend.repository;

import com.backend.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {

    @Query(nativeQuery=true,
            value = "select * from question where difficulty_level = :level ORDER BY RAND() LIMIT :numberQuestion ")
    List<Question> getQuestionsRandomByLevel(int level, int numberQuestion);


    @Query(nativeQuery=true,
            value = "select * from question join question_exam on question.id = question_exam.question_id where exam_id = :examId")
    List<Question> getQuestionsByExam(Integer examId);
}
