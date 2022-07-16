package com.backend.service.impl;

import com.backend.model.Question;
import com.backend.repository.QuestionRepository;
import com.backend.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;
    @Override
    public Iterable<Question> findAll() {
        return questionRepository.findAll();
    }

    @Override
    public List<Question> getQuestionRandomBySystem(int numberQuestion) {
        int number_question_easy = (int) (numberQuestion * 0.5);
        int number_question_medium = (int) (numberQuestion * 0.3);
        int number_question_hard = numberQuestion = number_question_easy - number_question_medium;
        List<Question> questions = questionRepository.getQuestionsRandomByLevel(1, number_question_easy);
        questions.addAll(questionRepository.getQuestionsRandomByLevel(2, number_question_medium));
        questions.addAll(questionRepository.getQuestionsRandomByLevel(3, number_question_hard));
        return questions;
    }

    @Override
    public List<Question> getQuestionRandomByUser(int level, int numberQuestion) {
        List<Question> questions = questionRepository.getQuestionsRandomByLevel(level, numberQuestion);
        return questions == null ? new ArrayList<Question>() : questions;
    }

    @Override
    public Optional<Question> findById(Integer id) {
        return questionRepository.findById(id);
    }

    @Override
    public Question save(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public void deleteById(Integer id) {
        questionRepository.deleteById(id);
    }

}
