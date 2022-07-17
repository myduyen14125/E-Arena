package com.backend.repository;

import com.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(nativeQuery = true,
            value = "select * from user  join user_exam on user.id = user_exam.user_id order by user_exam.point desc")
    List<User> getRankByRoomId(Integer roomId);
}
