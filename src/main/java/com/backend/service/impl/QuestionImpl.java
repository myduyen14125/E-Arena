package com.backend.service.impl;

import com.backend.model.Question;
import com.backend.repository.QuestionRepository;
import com.backend.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public List<Question> getQuestionRandom(int numberQuestion) {
        return questionRepository.getQuestionRandom(numberQuestion);
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
