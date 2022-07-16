package com.backend.service;

import java.util.Optional;

public interface GenerateService<T> {
    Iterable<T> findAll();

    Optional<T> findById(Integer id);

    T save(T t);

    void deleteById(Integer id);
}
