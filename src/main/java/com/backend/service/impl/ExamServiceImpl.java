package com.backend.service.impl;

import com.backend.model.Exam;
import com.backend.model.User;
import com.backend.repository.ExamRepository;
import com.backend.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExamServiceImpl implements ExamService {
    @Autowired
    private ExamRepository examRepository;
    @Override
    public Iterable<Exam> findAll() {
        return null;
    }


    @Override
    public Optional<Exam> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public Exam save(Exam exam) {
        return null;
    }

    @Override
    public void deleteById(Integer id) {

    }

}
