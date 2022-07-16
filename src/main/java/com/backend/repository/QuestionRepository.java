package com.backend.repository;

import com.backend.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {
    @Query(nativeQuery=true, value = "select * from question ORDER BY RAND() LIMIT 2")
    List<Question> getQuestionRandom(int numberQuestion);
}
