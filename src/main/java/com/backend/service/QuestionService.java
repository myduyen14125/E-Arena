package com.backend.service;

import com.backend.model.Question;

import java.util.List;

public interface QuestionService extends GenerateService<Question> {
    List<Question> getQuestionRandom(int numberQuestion);
}
