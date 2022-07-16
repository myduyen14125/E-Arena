package com.backend.service.impl;

import com.backend.model.Topic;
import com.backend.repository.TopicRepository;
import com.backend.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TopicServiceImpl implements TopicService {
    @Autowired
    private TopicRepository topicRepository;

    @Override
    public Iterable<Topic> findAll() {
        return topicRepository.findAll();
    }

    @Override
    public Optional<Topic> findById(Integer id) {
        return topicRepository.findById(id);
    }

    @Override
    public Topic save(Topic topic) {
        return topicRepository.save(topic);
    }

    @Override
    public void deleteById(Integer id) {
        topicRepository.deleteById(id);
    }
}
