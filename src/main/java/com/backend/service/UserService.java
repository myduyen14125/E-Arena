package com.backend.service;

import com.backend.model.User;

import java.util.List;

public interface UserService {
    List<User> getRankByRoomId(Integer roomId);
}
